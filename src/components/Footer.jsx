import { FaLocationDot } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="h-auto bg-gray-100 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 text-white">
      <div className="relative bg-[#383e47] w-full p-8">
        <div className="absolute inset-0 bg-diagonal-lines bg-repeat bg-10 opacity-5"></div>
        <h2 className="mb-2 text-slate-500  z-10">
          <span className="underline underline-offset-8">Co</span>ntact
        </h2>
        <div className="flex z-10">
          <FaLocationDot />
          <p className="pl-1"> Orange, CA</p>
        </div>
        <div className="flex z-10">
          <FaPaperPlane />
          <a href="mailto:sales@signaturemktg.net" className="pl-1">
            sales@signaturemktg.net
          </a>
        </div>

        <div className="flex z-10">
          <FaPhone />
          <p className="pl-1">1-877-466-8445</p>
        </div>
      </div>
    </div>
  );
}
