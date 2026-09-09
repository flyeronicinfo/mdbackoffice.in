"use client";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919425066170"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      {/* Tooltip */}
      <span className="hidden md:block mr-3 whitespace-nowrap bg-[var(--color-ink)] text-white text-xs font-semibold px-3 py-2 rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-lg">
        Chat with us on WhatsApp
      </span>

      {/* Button */}
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_26px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-200 animate-[whatsapp-pulse_2.5s_ease-in-out_infinite]">
        <svg
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.352.615 4.646 1.784 6.665l-1.895 6.928 7.09-1.858a13.27 13.27 0 0 0 6.354 1.618h.006c7.362 0 13.332-5.97 13.332-13.333 0-3.56-1.386-6.907-3.903-9.425a13.24 13.24 0 0 0-9.435-3.928Zm0 24.4h-.005a11.06 11.06 0 0 1-5.635-1.542l-.404-.24-4.208 1.103 1.123-4.103-.263-.421a11.04 11.04 0 0 1-1.694-5.864c0-6.11 4.973-11.083 11.09-11.083 2.962 0 5.746 1.155 7.84 3.251a11.02 11.02 0 0 1 3.246 7.839c0 6.111-4.973 11.06-11.09 11.06Zm6.078-8.293c-.333-.167-1.97-.972-2.275-1.083-.305-.111-.527-.167-.75.167-.222.333-.86 1.083-1.055 1.306-.194.222-.388.25-.72.083-.334-.167-1.409-.519-2.684-1.654-.992-.884-1.663-1.977-1.858-2.31-.194-.334-.02-.514.146-.68.15-.15.334-.389.5-.583.167-.195.222-.334.334-.556.11-.223.055-.417-.028-.583-.083-.167-.75-1.806-1.028-2.474-.271-.65-.546-.562-.75-.573-.194-.01-.417-.012-.639-.012-.222 0-.583.083-.888.417-.305.333-1.166 1.14-1.166 2.778 0 1.639 1.194 3.222 1.36 3.445.167.222 2.35 3.588 5.694 5.032.796.343 1.417.548 1.902.702.799.254 1.526.218 2.101.132.641-.096 1.97-.805 2.248-1.583.277-.777.277-1.444.194-1.583-.083-.14-.305-.223-.639-.39Z" />
        </svg>
      </span>
    </a>
  );
}
