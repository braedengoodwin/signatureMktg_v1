import sigIcon from "../images/sigicon.png";
import testIcon from "../images/testIcon.png";
import handshakeIconIcon from "../images/handshakeIcon.png";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function GraySection() {
  return (
    <div className="h-auto bg-gray-100 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-4 -z-10">
      <div className="flex-1 sm:ml-10 z-10">
        <h2 className="mb-2 text-lg text-gray-700 font-light">
          <span className="underline underline-offset-8">W</span>ho we are
        </h2>
        <div className="flex items-start">
          <img src={sigIcon} className="mr-2" alt="Signature Marketing Logo" />
          <p className="text-[10px] max-w-[300px] text-[#7b7b7b]">
            We have been in business since 1995. We do business to business marketing for commercial & benefits insurance. Signature also specializes in direct mail nationwide for insurance firms & mortgage brokerages.
          </p>
        </div>
      </div>

      <div className="flex-1 z-10">
        <h2 className="mb-2 text-lg text-gray-700 font-light">
          <span className="underline underline-offset-8">Te</span>stimonials
        </h2>
        <div className="flex items-start z-10">
          <img src={testIcon} className="mr-2" alt="Text Bubbles" />
          <p className="text-[10px] max-w-sm text-[#7b7b7b]">
            <span className="inline-block align-top">
              <FaQuoteLeft className="mr-1 text-[16px]" />
            </span>
            If you want high quality appointments where the prospect knows why you are there and the policies are renewing, Signature is the best bang for my dollar.
            <span className="inline-block align-baseline">
              <FaQuoteRight className="ml-1 text-[16px]" />
            </span>
            <div className="flex flex-row mt-2">
              <button className="text-[13px] bg-[#4386fa] rounded-sm p-1 text-white drop-shadow-lg">
                <NavLink to='/testimonials'>READ MORE</NavLink>
                
              </button>
            </div>
          </p>
        </div>
      </div>

      <div className="flex-1 sm:mr-10">
        <h2 className="mb-2 text-lg text-gray-700 font-light">
          <span className="underline underline-offset-8">Se</span>e how we can help
        </h2>
        <div className="flex items-start">
          <img src={handshakeIconIcon} className="mr-2" alt="Handshaking Icons" />
          <p className="text-[10px] max-w-xs text-[#7b7b7b]">
            Our initial calling to these businesses is to develop a lead. See why we are one of the best in customer satisfaction.
            <div className="flex flex-row mt-7">
              <button className="text-[13px] bg-[#4386fa] rounded-sm p-1 text-white drop-shadow-lg">
              <NavLink to='/contact'>CONTACT US</NavLink>
              </button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
