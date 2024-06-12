import { useState } from "react";

export default function Accordion({ title, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="w-4/5 border border-black shadow">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center w-full p-2 font-bold text-white bg-[#6593d1] "
      >
        <svg
          className="fill-current shrink-0 mr-2"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
        <span>{title}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out shadow-inner-xl  ${
          accordionOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
        {answer.map((item, index) => (
          <div key={index} className="w-full pl-8 p-2 bg-gray-700 text-white text-sm">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
