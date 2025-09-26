import { useEffect } from "react";

export default function GetAFastQuote() {
  useEffect(() => {
    // Load Jobber CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
    link.media = "screen";
    document.head.appendChild(link);

    // Load Jobber Script
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "6d2eac73-6a03-4a44-9c1a-599d69bfa3b1-1994232");
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/6d2eac73-6a03-4a44-9c1a-599d69bfa3b1/public/work_request/embedded_work_request_form?form_id=1994232");
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div
        id="6d2eac73-6a03-4a44-9c1a-599d69bfa3b1-1994232"
        className="max-w-3xl w-full h-[80vh] overflow-y-scroll shadow-lg rounded-xl border border-gray-200 p-6 bg-white"
      ></div>
    </div>
  );
}
