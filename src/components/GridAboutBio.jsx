import React from "react";

export default function GridAboutBio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto p-4 sm:p-6 text-white">
      {/* Left Column — spans two rows */}
      <div className="md:row-span-2 rounded-2xl p-0 sm:p-8 flex flex-col justify-center items-center text-start shadow-lg">
        <h3 className="text-4xl font-semibold mb-3">Accredited. Experienced. Adaptable.</h3>
        <p className="text-xl opacity-90 mb-6 max-w-lg">
          Renner McCreath is a project manager and business analyst with over ten years of experience across the finance and technology sectors.
        </p>
        <p className="text-xl opacity-90 mb-6 max-w-lg">
          As Senior Business Analyst and Project Manager of CI Global Asset Management's National Accounts team, Renner led sales and marketing projects to approve award-winning investment solutions at Canada's largest Mutual Fund dealers. Managing multiple teams of 2-10 on projects spanning up to six months and relying on his strengths of communication, stakeholder management, and project scaling, Renner assisted in generating over $100 million in annual gross sales since 2019.
        </p>
        <p className="text-xl opacity-90 mb-6 max-w-lg">
          For a more in-depth look at Renner's career, please navigate using the arrows on either side of the page, or swiping on mobile.
        </p>
      </div>

      {/* Right Top Box */}
      <div className="rounded-2xl p-8 flex flex-col justify-center text-start shadow-lg">
        <h3 className="text-4xl font-semibold mb-3">At a Glance</h3>
        <p className="text-2xl opacity-90 mb-4 max-w-md">
          12+ Years of experience across the following sectors:
        </p>
        <p className="text-xl opacity-90 mb-4 max-w-md">
          - Project Management
        </p>
        <p className="text-xl opacity-90 mb-4 max-w-md">
          - Customer Success
        </p>
        <p className="text-xl opacity-90 mb-4 max-w-md">
          - Business Analysis
        </p>
      </div>

      {/* Right Bottom Box */}
      <div className="rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-lg">
        <h3 className="text-2xl font-semibold mb-3">Key Skills</h3>
        <p className="text-md opacity-90 mb-4 max-w-md">
          This can hold an image, call-to-action, or anything else.
        </p>
        <p className="text-md opacity-90 mb-4 max-w-md">
          This can hold an image, call-to-action, or anything else.
        </p>
        <p className="text-md opacity-90 mb-4 max-w-md">
          This can hold an image, call-to-action, or anything else.
        </p>
        <p className="text-md opacity-90 mb-4 max-w-md">
          This can hold an image, call-to-action, or anything else.
        </p>
        <p className="text-md opacity-90 mb-4 max-w-md">
          This can hold an image, call-to-action, or anything else.
        </p>
      </div>
    </div>
  );
}
