import { useEffect, useRef } from "react";

export default function GetAFastQuote() {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.async = true;
    script.setAttribute("clienthub_id", "6d2eac73-6a03-4a44-9c1a-599d69bfa3b1-1994232");
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/6d2eac73-6a03-4a44-9c1a-599d69bfa3b1/public/work_request/embedded_work_request_form?form_id=1994232");

    if (formRef.current) {
      formRef.current.innerHTML = ""; // clear just in case
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: `url(/images/residentialabout.webp)` }}
    >
      <div
        ref={formRef}
        id="6d2eac73-6a03-4a44-9c1a-599d69bfa3b1-1994232"
        className="bg-white w-full max-w-xl h-[90%] overflow-y-scroll rounded-xl shadow-2xl p-6"
      />
    </div>
  );
}
