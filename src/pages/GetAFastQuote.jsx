import { useEffect } from "react";

export default function GetAFastQuote() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.async = true;
    script.setAttribute("clienthub_id", "6d2eac73-6a03-4a44-9c1a-599d69bfa3b1-1994232");
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/6d2eac73-6a03-4a44-9c1a-599d69bfa3b1/public/work_request/embedded_work_request_form?form_id=1994232");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/images/residentialabout.webp)" }}
    >
      <div
        id="6d2eac73-6a03-4a44-9c1a-599d69bfa3b1-1994232"
        className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6"
      ></div>
    </div>
  );
}
