import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import testi from "../images/sati.jpg";
import chris from "../images/christophercpelnik.jpg";
import walt from "../images/waltlabuda.jpg";
import gil from "../images/gilhughes.jpg";
import doug from "../images/dougwigand.jpg";
import kevin from "../images/kevinhudson.jpg";

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-center">
      <div className="w-full max-w-4xl bg-white mt-12 mb-16 mx-4 sm:mx-auto flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="h-48 border-b">
            <Header />
          </div>

          {/* Main Content */}
          <div className="flex">
            <div className="w-7/12 pr-4 relative">
              <div className="border-r border-gray-300 absolute inset-0 top-6 bottom-6 "></div>
              <div className="mt-7 ml-12">
                <div>
                  <div>
                    <img
                      src={testi}
                      alt="Banner saying Insurance Marketing Services"
                    />
                  </div>
                  <div className="relative overflow-hidden p-1 bg-white mt-4">
                    <div className="absolute inset-0 bg-diagonal-lines bg-repeat bg-10 opacity-25"></div>
                    <p className="relative z-10 text-gray-700 ml-1">
                      <span className="inline-block align-top">
                        <FaQuoteLeft className="mr-1 text-[16px] text-gray-400" />
                      </span>
                      Several months ago I researched several telemarketing
                      firms that set Commercial appointments for P&C agents.
                      Ultimately, I selected Signature Marketing and I am happy
                      that I did. I purchased a large campaign and plan on
                      purchasing another campaign from Signature Marketing when
                      our current contract has been completed. It's quite simple
                      - it works and more than pays for itself. I highly
                      recommend your services to any agent. Thanks for the good
                      appointments that you set for us!
                      <span className="inline-block align-baseline">
                        <FaQuoteRight className="ml-1 text-[16px] text-gray-400" />
                      </span>
                    </p>
                  </div>
                  <img
                    src={chris}
                    className="mt-7 mb-7"
                    alt="Chris testimonial"
                  />
                </div>

                <div>
                  <div className="relative overflow-hidden p-1 bg-white mt-4">
                    <div className="absolute inset-0 bg-diagonal-lines bg-repeat bg-10 opacity-25"></div>
                    <p className="relative z-10 text-gray-700 ml-1">
                      <span className="inline-block align-top">
                        <FaQuoteLeft className="mr-1 text-[16px] text-gray-400" />
                      </span>
                      I am Walt Labuda of the Grapeville Agency in upstate NY.
                      Our Agency has used Signature Marketing’s lead service for
                      several years with great success. I would credit Signature
                      Marketing for our record growth in commercial lines
                      premium in 2013.
                      <span className="inline-block align-baseline">
                        <FaQuoteRight className="ml-1 text-[16px] text-gray-400" />
                      </span>
                    </p>
                  </div>
                  <img
                    src={walt}
                    className="mt-7 mb-7"
                    alt="walt testimonial"
                  />
                </div>

                <div>
                  <div className="relative overflow-hidden p-1 bg-white mt-4">
                    <div className="absolute inset-0 bg-diagonal-lines bg-repeat bg-10 opacity-25"></div>
                    <p className="relative z-10 text-gray-700 ml-1">
                      <span className="inline-block align-top">
                        <FaQuoteLeft className="mr-1 text-[16px] text-gray-400" />
                      </span>
                      I have used telemarketers and appointment setters in the
                      past without great success. So when I started with
                      Signature marketing, I went in a little skeptical.
                      However, they have been great to work with. Mike and James
                      are both very responsive. They do what they say. The
                      appointments they set are screened and qualified as they
                      say, and they provide good communication between the
                      prospect and my agency. We have been very successful in
                      converting many of the prospects to clients, and the
                      program has more than paid for itself. In fact I have been
                      so pleased that I started another campaign for one of my
                      producers, and renewed my campaign for this upcoming year.
                      Definitely one of the most successful marketing campaigns
                      I have done.
                      <span className="inline-block align-baseline">
                        <FaQuoteRight className="ml-1 text-[16px] text-gray-400" />
                      </span>
                    </p>
                  </div>
                  <img src={gil} className="mt-7 mb-7" alt="gil testimonial" />
                </div>

                <div>
                  <div className="relative overflow-hidden p-1 bg-white mt-4">
                    <div className="absolute inset-0 bg-diagonal-lines bg-repeat bg-10 opacity-25"></div>
                    <p className="relative z-10 text-gray-700 ml-1">
                      <span className="inline-block align-top">
                        <FaQuoteLeft className="mr-1 text-[16px] text-gray-400" />
                      </span>
                      Our Agency is going into the second year of using
                      Signature Marketing and couldn't be happier with the
                      success our partnership has brought. Signature Marketing’s
                      services has increased our commercial sales substantially
                      and the ease of doing business with the employees at
                      Signature couldn't be smoother. We are looking forward to
                      2014 and the growth our partnership has gained with
                      Signature.
                      <span className="inline-block align-baseline">
                        <FaQuoteRight className="ml-1 text-[16px] text-gray-400" />
                      </span>
                    </p>
                  </div>
                  <img
                    src={doug}
                    className="mt-7 mb-7"
                    alt="doug testimonial"
                  />
                </div>

                <div>
                  <div className="relative overflow-hidden p-1 bg-white mt-4">
                    <div className="absolute inset-0 bg-diagonal-lines bg-repeat bg-10 opacity-25"></div>
                    <p className="relative z-10 text-gray-700 ml-1">
                      <span className="inline-block align-top">
                        <FaQuoteLeft className="mr-1 text-[16px] text-gray-400" />
                      </span>
                      I have been working with signature marketing since my
                      agency opened and it has more than paid for itself. I have
                      tried other firms and no one compares to Signature. Their
                      appointment sheets are always accurate and their staff is
                      extremely professional. I plan to continue my relationship
                      with Signature for many years to come.
                      <span className="inline-block align-baseline">
                        <FaQuoteRight className="ml-1 text-[16px] text-gray-400" />
                      </span>
                    </p>
                  </div>
                  <img
                    src={kevin}
                    className="mt-7 mb-7"
                    alt="kevin testimonial"
                  />
                </div>
              </div>
            </div>
            <div className="w-5/12 mt-8 ml-6 mr-2">
              <div>
                {/* so i can add links to different pages just by adding answer={insert link} */}
                <Accordion title="Home" answer={[]} />
                <Accordion
                  title="Insurance Services"
                  answer={[
                    "Lead Generation",
                    "Appointment Setting",
                    "Employee Benefits",
                    "Program Specifics",
                    "X-Date and Appt Samples",
                    "SIC Codes",
                  ]}
                />
                <Accordion
                  title="Mortgage Services"
                  answer={["Mortgage List Services"]}
                />
                <Accordion
                  title="Direct Mail"
                  answer={["Mortgage Mailers", "Insurance Mailers"]}
                />
                <Accordion title="Testimonials" answer={[]} />
                <Accordion title="Contact" answer={[]} />
                <Accordion title="Signature Select" answer={[]} />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
