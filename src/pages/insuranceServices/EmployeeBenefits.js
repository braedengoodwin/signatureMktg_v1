import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion";
import insuranceMtkServ from "../../images/insuranceMtkServ.jpg";

function EmployeeBenefits() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-center">
      <div className="w-full max-w-4xl bg-white mt-12 mb-16 mx-4 sm:mx-auto flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="h-48 border-b">
            <Header />
          </div>

          <div>
            <img
              src={insuranceMtkServ}
              alt="Banner saying Insurance Marketing Services"
            />
          </div>

          {/* Main Content */}
          <div className="flex">
            <div className="w-7/12 pr-4 relative">
              <div className="border-r border-gray-300 absolute inset-0 top-6 bottom-6"></div>
              <div className="mt-7 ml-12">
                <div className="relative overflow-hidden p-1 bg-white mt-4">
                  <div className="absolute inset-0 bg-diagonal-lines bg-repeat bg-10 opacity-25"></div>
                  <p className="relative z-10 text-gray-700 text-3xl ml-1">
                    Employee Benefits
                  </p>
                </div>
                <p className="mt-1 mb-16 text-sm">
                  Group Benefits/Group Health as it can be referred to as are
                  the benefits that employees have. The main benefit for
                  employees is of course Health Insurance. There are other
                  ancillary products (other benefits offered based on what the
                  business provides) such as dental, vision, life, 401k,
                  long-term disability, short-term disability, etc., etc. For
                  the sake of our calls we lead into these calls with the health
                  insurance and then asking what other benefits are offered. A
                  requirement for health leads is to find out how many total
                  employees at the co. and how many employees are actually
                  covered under the benefits plan. We also like to find out what
                  type of plan they have (PPO, HMO, etc.). And again, who their
                  carrier and/or agency/broker is. The different benefits can
                  have the same renewal date and carrier or all different. In a
                  nutshell, the Signature Marketing cycle can be broken down
                  into two phases gathering information during the lead phase
                  and then following up on these leads to set-up appointments
                  for our clients to go meet with the businesses around the
                  company's renewal time. (when their x-date is)
                </p>
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

export default EmployeeBenefits;
