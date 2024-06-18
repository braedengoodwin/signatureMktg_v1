import Accordion from "./Accordion";
import { NavLink } from "react-router-dom";

export default function InformationSection() {
  return (
    <div className="flex -z-10">
      <div className="w-7/12 pr-4 relative ">
        <div className="border-r border-gray-300 absolute inset-0 top-6 bottom-6 "></div>
        <div className=" mt-7 ml-12 z-10">
          <p className=" text-gray-600 text-sm z-10">
            At Signature Marketing our objective is simple. Create a well
            rounded prospecting program to get our clients to the bottom line,
            writing new business. Our goal is to build a long term relationship
            with our clients so everybody wins in the end.
          </p>
          <p className="mt-4 text-gray-600 text-sm">
            At Signature, we do business to business calling to generate
            activity for all ranges of commercial, benefits and professional
            liability insurance. We can help tailor a program that will generate
            the results you need. Whether it’s a certain amount of appointments
            per month, return on investment, or based on your budget. We help
            our customers reach their business objectives by using an
            experienced staff of account representatives who are knowledgeable
            in the commercial insurance industry. Our experienced reps can focus
            on any type of company size, industry, and geographic location to
            get you in front of interested qualified prospects. We feel that
            communication and service are the keys to a successful prospecting
            program. You deal directly with the account rep that sets your
            appointments’. That way there will be no confusion when you have
            questions about your program. Dealing directly with our rep, you can
            get quick answers on activity, appointments, and scheduling
            conflicts. No more having to wait for management to get back to you
            and answer these simple questions.
          </p>

          <div className="relative overflow-hidden p-1 bg-white mt-4">
            <div className="absolute inset-0 bg-diagonal-lines bg-repeat bg-10 opacity-25"></div>
            <p className="relative z-10 text-gray-700 text-3xl ml-1">
              Signature also offers easy payment options.
            </p>
          </div>

          <h2 className="mt-4 text-sky-600 font-bold">
            Why sink your whole investment into a program that hasn't provided
            any results yet?
          </h2>
          <p className="mt-4 text-gray-600 text-sm">
            We can base your programs on the budget you have today. We offer our
            appointments on a, “Pay-Per Appointment”, basis. You only pay for
            the appointments you go out on. No more having to pay up front and
            wonder about the outcome. You only pay for results!{" "}
          </p>
          <p className="mt-4 text-gray-600 text-sm z-15">
            Let Signature Marketing to handle all of your new business insurance
            prospecting needs. You can contact us by phone or e-mail.{" "}
            <b>877-466-8445</b> or{" "}
            <a href="mailto:sales@signaturemktg.net" className=" text-blue-500">
              sales@signaturemktg.net
            </a>
          </p>

          <p className="mt-4 text-gray-600 mb-20 text-sm">
            **Privacy Policy: No mobile information will be shared with third
            parties/affiliates for marketing/promotional purposes. All the above
            categories exclude text messaging originator opt-in data and
            consent; this information will not be shared with any third parties.
          </p>
        </div>
      </div>
      <div className="w-5/12 mt-8 ml-6 mr-2">
        <div className="">
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
  );
}
