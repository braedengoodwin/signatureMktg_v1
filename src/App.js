import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import appointment from "./images/appointment.jpg";
import mailbox from "./images/mailbox.jpg";
import womensFace from "./images/womensFace.jpg";
import sigIcon from "./images/sigicon.png";
import testIcon from "./images/testIcon.png";
import handshakeIconIcon from "./images/handshakeIcon.png";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const slides = [appointment, mailbox, womensFace];

function App() {
  return (
    <>
      {/* These two divs create the blue background and the white box */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-center">
        <div className="w-3/4 max-w-[980px] bg-white mt-12 mb-16">
          {/* Header */}
          <div className="h-60 border-b">
            <Header />
          </div>

          {/* Carousel */}
          <div>
            <Carousel autoSlide={true}>
              {slides.map((s) => (
                <img src={s} />
              ))}
            </Carousel>
          </div>

          <div className="h-60 bg-gray-100 flex flex-row space-x-4">
            <div className="mt-7 ml-10">
              <h2 className="mb-2 text-lg text-gray-700 font-light">
                {" "}
                <span className="underline underline-offset-8">W</span>ho we are
              </h2>
              <div className="flex items-start">
                <img src={sigIcon} className="mr-2" />
                <p className="text-[10px] max-w-[300px] text-[#7b7b7b]">
                  We have been in business since 1995. We do business to
                  business marketing for commercial & benefits insurance.
                  Signature also specializes in direct mail nationwide for
                  insurance firms & mortgage brokerages.
                </p>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="mb-2 text-lg text-gray-700 font-light">
                <span className="underline underline-offset-8">Te</span>
                stimonials
              </h2>
              <div className="flex items-start">
                <img src={testIcon} className="mr-2" />

                <p className="text-[10px] max-w-sm text-[#7b7b7b]">
                  <span className="inline-block align-top">
                    <FaQuoteLeft className="mr-1 text-[16px]" />
                  </span>
                  If you want high quality appointments where the prospect knows
                  why you are there and the policies are renewing, Signature is
                  the best bang for my dollar.
                  <span className="inline-block align-baseline">
                    <FaQuoteRight className="ml-1 text-[16px]" />
                  </span>
                  <div className="flex flex-row">
                    <button className="text-[13px] bg-[#4386fa] rounded-sm p-1 text-white drop-shadow-lg">
                      READ MORE
                    </button>
                  </div>
                </p>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="mb-2 text-lg text-gray-700 font-light">
                <span className="underline underline-offset-8">Se</span>e how we
                can help
              </h2>
              <div className="flex items-start mr-10">
                <img src={handshakeIconIcon} className="mr-2" />
                <p className="text-[10px] max-w-xs text-[#7b7b7b]">
                  Our initial calling to these businesses is to develop a lead.
                  See why we are one of the best in customer satisfaction.
                  <div className="flex flex-row">
                    <button className="text-[13px] bg-[#4386fa] rounded-sm p-1 text-white drop-shadow-lg">
                      CONTACT US
                    </button>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main></main>
    </>
  );
}

export default App;
