const LOOM_ID_PATTERN = /^[a-f0-9]{32}$/i;

export function getLoomVideoId(value) {
  if (!value) return null;

  const candidate = value.trim();
  if (LOOM_ID_PATTERN.test(candidate)) return candidate;

  try {
    const url = new URL(candidate);
    if (!url.hostname.endsWith("loom.com")) return null;

    const segments = url.pathname.split("/").filter(Boolean);
    const markerIndex = segments.findIndex((segment) =>
      ["share", "embed"].includes(segment.toLowerCase()),
    );
    const videoId = markerIndex >= 0 ? segments[markerIndex + 1] : null;
    return videoId && LOOM_ID_PATTERN.test(videoId) ? videoId : null;
  } catch {
    return null;
  }
}

export function getLoomEmbedUrl(value) {
  const videoId = getLoomVideoId(value);
  if (!videoId) return null;

  const url = new URL(`https://www.loom.com/embed/${videoId}`);
  url.search = new URLSearchParams({
    hideEmbedTopBar: "true",
    hide_share: "true",
    hide_title: "true",
    hide_owner: "true",
  }).toString();
  return url.toString();
}

export function normalizeVideo(value) {
  const loomUrl = getLoomEmbedUrl(value);
  if (loomUrl) return { provider: "loom", embedUrl: loomUrl };

  return { provider: "link", href: value };
}
