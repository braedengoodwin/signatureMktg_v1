import Accordion from "../../components/Accordion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import mortgageMtk from "../../images/mms.jpg";
import { NavLink } from "react-router-dom";

export default function MortgageServices() {
  return (
    <div className=" bg-gradient-to-br from-cyan-500 to-blue-500 min-h-screen flex justify-center">
      <div className="w-full max-w-4xl bg-white mt-12 mb-16 mx-4 sm:mx-auto flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="h-48 border-b">
            <Header />
          </div>

          <div>
            <img
              src={mortgageMtk}
              alt="Banner saying Insurance Marketing Services"
            />
          </div>

          {/* Main Content */}
          <div className="flex">
            <div className="w-7/12 pr-4 relative">
              <div className="border-r border-gray-300 absolute inset-0 top-6 bottom-6 "></div>
              <div className="mt-7 ml-12">
                <p className="mb-6">
                  Signature Marketing, Inc. assists mortgage agents/brokers
                  across the U.S. with mortgage marketing services.
                </p>

                <p>
                  Contact us now for additional information and see how our
                  services can help you!
                </p>
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
                    <NavLink to="/appointment-setting">
                      Appointment Setting
                    </NavLink>,
                    <NavLink to="/employee-benefits">
                      Employee Benefits
                    </NavLink>,
                    <NavLink to="/program-specifics">
                      Program Specifics
                    </NavLink>,
                    <NavLink to="/x-date-appt-samples">
                      X-Date and Appt Samples
                    </NavLink>,
                    <NavLink to="/sic-codes">SIC Codes</NavLink>,
                  ]}
                />
                <Accordion
                  title="Mortgage Services"
                  answer={[
                    <NavLink to="/mortgage-list">
                      Mortgage List Services
                    </NavLink>,
                  ]}
                />

                <Accordion
                  title="Direct Mail"
                  answer={[
                    <NavLink to="/mortgage-mailers">Mortgage Mailers</NavLink>,
                    <NavLink to="/insurance-mailers">
                      Insurance Mailers
                    </NavLink>,
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
