import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion";
import insuranceMtkServ from "../../images/insuranceMtkServ.jpg";

function LeadGeneration() {
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
                    Lead Generation
                  </p>
                </div>
                <p className="mt-1 text-sm">
                  Our initial calling to these businesses is to develop a lead.
                  What we consider a lead is when we speak with the person/dept.
                  that is in charge of the insurance and find out things like
                </p>
                <div className="mt-5">
                  <li className="mb-5">
                    X-Date – date(s) that the insurance policies renew during
                    the year.
                  </li>
                  <li className="mb-5">
                    Who is insuring them – insurance carrier and broker info.
                  </li>
                  <li className="mb-5"># of employees</li>
                  <li className="mb-5"># of locations</li>
                  <li className="mb-5"># of autos.</li>
                  <li className="mb-5">E-Mail or fax number</li>
                  <li className="mb-5">
                    We also do our best to simply engage in conversations with
                    these prospects to uncover anything else that might help out
                    on the next call, such as….when they start looking at other
                    options, do they have a relationship with their current
                    agency/broker, what would get them to change their insurance
                    come renewal time, how much they’re paying for their
                    insurance (ie…premium), etc.
                  </li>
                  <li className="mb-12">
                    Who makes the decision when buying the insurance for the
                    company.
                  </li>
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

export default LeadGeneration;
