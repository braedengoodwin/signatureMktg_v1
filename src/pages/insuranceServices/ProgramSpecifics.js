import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion";
import insuranceMtkServ from "../../images/insuranceMtkServ.jpg";
import { NavLink } from "react-router-dom";

function ProgramSpecifics() {
  return (
    <div className="bg-gradient-to-br from-cyan-500 to-blue-500 min-h-screen flex justify-center">
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
                    Program Specifics
                  </p>
                </div>

                <p className="mt-1">
                  Signature Marketing, Inc. assists commercial insurance
                  agents/brokers across the U.S. with commercial insurance lead
                  generation and appointment setting. We target the classes of
                  businesses our clients specialize in writing, businesses size,
                  within their geographical areas. Our initial calling to these
                  businesses is to develop a “lead”. What we consider a lead is
                  when we speak with the person/dept. that is in charge of the
                  insurance and find out things like….
                </p>

                <ol className="list-decimal list-inside mt-1">
                  <li className="mt-1">
                    X-Date – date(s) that the insurance policies renew during
                    the year.
                  </li>
                  <li className="mt-1">
                    Who is insuring them – insurance carrier and broker info.
                  </li>
                  <li className="mt-1"># of employees</li>
                  <li className="mt-1"># of locations</li>
                  <li className="mt-1"># of autos.</li>
                  <li className="mt-1">E-Mail Address</li>
                  <li className="mt-1">
                    We also do our best to simply engage in conversations with
                    these prospects to uncover anything else that might help out
                    on the next call, such as….when they start looking at other
                    options, do they have a relationship with their current
                    agency/broker, what would get them to change their insurance
                    come renewal time, how much they’re paying for their
                    insurance (ie…premium), etc.
                  </li>
                  <li className="mt-1 mb-6">
                    If they make the final decision when buying insurance for
                    the company.
                  </li>
                </ol>

                <p className="mb-6">
                  We normally start calling back on these “leads” 4 months prior
                  to the “x-date” of the lead, or when the insurance policy
                  renews for the business. This enables us enough time to be
                  able to set-up an appointment for our client to meet with the
                  business to review their insurance for them. This is the final
                  phase of our program where we deliver “appointments” to our
                  clients.
                </p>
                <p className="mb-6">
                  Signature Marketing calls exclusively for business insurance
                  for our clients. All information gathered on behalf of our
                  clients is proprietary to them.
                </p>

                <p className="mb-6">
                  Commercial Insurance: Commercial Insurance or P&C Insurance
                  (Property & Casualty Insurance) are the lines of coverage that
                  cover a business.
                </p>

                <p className="mb-6">
                  There are many lines/types of policies, but for the sake of
                  our calls we’re mainly concentrating on the following….
                </p>

                <ol className="list-[upper-alpha] list-inside mt-1 mb-6">
                  <li>Property / General Liability,</li>
                  <li>Workers Compensation, </li>
                  <li>Commercial Auto Insurance. </li>
                </ol>

                <p className="mb-6">
                  These three policies, respectively, would cover things like
                  the building, employees, and vehicles. Each policy can renew
                  at the same time with the same insurance carrier, or they can
                  all renew at different times with different insurance
                  carriers. Therefore, it’s our job to uncover what renews at
                  what point in the year and with whom.
                </p>

                <p className="mb-6">
                  We need to gather information on these leads that pertain to
                  the lines of coverage –
                </p>

                <p className="mb-6">
                  # employees, # of locations, # of autos and e-mail address.
                </p>

                <p className="mb-6">
                  In a nutshell, the Signature Marketing cycle can be broken
                  down into 3 phases:
                </p>

                <ol className="list-decimal list-inside mt-1">
                  <li className="mt-1 mb-6">
                    Compiling a calling list based of the following Criteria:
                  </li>
                  <p>SIC Codes – Employee Size – Geographical Area</p>
                  <li className="mt-1 mb-6">
                    Gathering information during the “X-Date Lead” phase a
                    determining if the insured is open to reviewing their
                    policies with an outside agent and profiling the company
                    (Gathering info)
                  </li>
                  <li className="mt-1 mb-10">
                    Calling back these X-Date Leads to set-up “face to face”
                    exclusive appointments for our clients to go meet with the
                    businesses around the companies’ renewal time (ie…when their
                    x-date is). This is where our clients write new accounts and
                    build their book of business.
                  </li>
                </ol>

                <div className="relative overflow-hidden p-1 bg-white mt-4 mb-16">
                  <div className="absolute inset-0 bg-diagonal-lines bg-repeat bg-10 opacity-25"></div>
                  <p className="relative z-10 text-gray-700 text-3xl ml-1 ">
                  All phases are billed on a <b>“Pay as you go”</b> basis. You only pay for results!!!
                  </p>
                </div>

              </div>
            </div>
            <div className="w-5/12 mt-8 ml-6 mr-2">
              <div>
                {/* so i can add links to different pages just by adding answer={insert link} */}
                <NavLink to="/">
            <Accordion title="Home" answer={[]} />
          </NavLink>

          <Accordion
            title="Insurance Services"
            answer={[
              <NavLink to="/lead-generation">Lead Generation</NavLink>,
              <NavLink to="/appointment-setting">Appointment Setting</NavLink>,
              <NavLink to="/employee-benefits">Employee Benefits</NavLink>,
              <NavLink to="/program-specifics">Program Specifics</NavLink>,
              <NavLink to="/x-date-appt-samples">
                X-Date and Appt Samples
              </NavLink>,
              <NavLink to="/sic-codes">SIC Codes</NavLink>,
            ]}
          />
          <Accordion
            title="Mortgage Services"
            answer={[
              <NavLink to="/mortgage-list">Mortgage List Services</NavLink>,
            ]}
          />

          <Accordion
            title="Direct Mail"
            answer={[
              <NavLink to="/mortgage-mailers">Mortgage Mailers</NavLink>,
              <NavLink to="/insurance-mailers">Insurance Mailers</NavLink>,
            ]}
          />

          <NavLink to="/testimonials">
            <Accordion title="Testimonials" answer={[]} />
          </NavLink>

          <NavLink to="/contact">
            <Accordion title="Contact" answer={[]} />
          </NavLink>

          <NavLink to="/">
            <Accordion title="Signature Select" answer={[]} />
          </NavLink>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default ProgramSpecifics;
