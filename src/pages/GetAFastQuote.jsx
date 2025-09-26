import { useEffect } from "react";

export default function GetAFastQuote() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.async = true;
    script.setAttribute(
      "clienthub_id",
      "6d2eac73-6a03-4a44-9c1a-599d69bfa3b1-1994232"
    );
    script.setAttribute(
      "form_url",
      "https://clienthub.getjobber.com/client_hubs/6d2eac73-6a03-4a44-9c1a-599d69bfa3b1/public/work_request/embedded_work_request_form?form_id=1994232"
    );

    document.getElementById("jobber-form").appendChild(script);

    return () => {
      // Clean up the script
      const jobberForm = document.getElementById("jobber-form");
      if (jobberForm) jobberForm.innerHTML = "";
    };
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url(/images/residentialabout.webp)" }}
    >
      <div className="w-full max-w-2xl h-[80vh] bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-y-auto p-6">
        {/* Jobber Embed Container */}
        <div id="jobber-form"></div>

        {/* Jobber Form Stylesheet */}
        <link
          rel="stylesheet"
          href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
        />
      </div>
    </div>
  );
}
