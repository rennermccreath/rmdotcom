import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="p-10">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full border p-2 rounded"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}
