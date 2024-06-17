import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion";
import directMail from "../../images/dms.jpg";

export default function MortgageMailers() {
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
              src={directMail}
              alt="Banner saying Insurance Marketing Services"
            />
          </div>

          {/* Main Content */}
          <div className="flex">
            <div className="w-7/12 pr-4 relative">
              <div className="border-r border-gray-300 absolute inset-0 top-6 bottom-6 "></div>
              <div className="mt-7 ml-12">
                <div className="relative overflow-hidden p-1 bg-white mt-4">
                  <div className="absolute inset-0 bg-diagonal-lines bg-repeat bg-10 opacity-25"></div>
                  <p className="relative z-10 text-gray-700 text-3xl ml-1">
                    Mortgage Mailers
                  </p>
                </div>
                <div className="mt-8">
                  <h2 className="mb-4 text-xl">Our Mailers put Cash in Your Hand!</h2>
                  <p className="mb-20">
                    Homeowners open it! The response rate is among the highest
                    in the industry! Your cost is among the lowest in the
                    industry!Our direct mail piece combined with quality data is
                    by far the most effective and cost efficient way to generate
                    new loan leads! We have mailing pieces and lists to produce:
                    Arm resets, FHA (Streamlines & Refinancing), A-paper, Equity
                    Loans, or any type of borrowers you require! Signature
                    Marketing provides Mortgage companies and Brokers with a
                    quick and easy Mortgage Marketing System, through Direct
                    Mail. This system is proven to increase a companies business
                    allowing them to be more competitive in the industry. Not
                    only is our Marketing department supremely reliable,
                    Signature Marketing sales team has the Mortgage experience
                    and knowledge that general direct mail houses do not posses.
                    We have forms, offered in English and Spanish, which we sell
                    to clients to reach any of their desired homeowners. We then
                    go beyond just being a mailing house and offer data lists to
                    all of our clients. With many reputable relationships with
                    national companies, Signature Marketing has become instant
                    experts in setting up the right list for each individual
                    client needs.
                  </p>
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
