// src/pages/GetAFastQuote.jsx

import { useEffect } from "react";

export default function GetAFastQuote() {
  useEffect(() => {
    // Load Jobber script once component mounts
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.async = true;
    script.setAttribute("clienthub_id", "6d2eac73-6a03-4a44-9c1a-599d69bfa3b1");
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/6d2eac73-6a03-4a44-9c1a-599d69bfa3b1/public/work_request/embedded_work_request_form?form_id=1994232");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(/images/residentialhero.webp)" }}
    >
      <div
        id="6d2eac73-6a03-4a44-9c1a-599d69bfa3b1-1994232"
        className="bg-white/90 p-6 rounded-xl shadow-2xl max-h-[90vh] w-full max-w-xl overflow-y-auto"
      ></div>
      <link
        rel="stylesheet"
        href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
        media="screen"
      />
    </div>
  );
}
