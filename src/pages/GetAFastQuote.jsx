import { useEffect } from "react";

export default function GetAFastQuote() {
  useEffect(() => {
    // Inject the stylesheet
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
    style.media = "screen";
    document.head.appendChild(style);

    // Inject the script
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "6d2eac73-6a03-4a44-9c1a-599d69bfa3b1-1994232");
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/6d2eac73-6a03-4a44-9c1a-599d69bfa3b1/public/work_request/embedded_work_request_form?form_id=1994232");
    document.body.appendChild(script);

    return () => {
      // Clean up when navigating away
      document.head.removeChild(style);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: `url(/images/residentialabout.webp)` }}
    >
      <div
        id="6d2eac73-6a03-4a44-9c1a-599d69bfa3b1-1994232"
        className="bg-white w-full max-w-xl h-[90%] overflow-y-scroll rounded-xl shadow-2xl p-6"
      ></div>
    </div>
  );
}
