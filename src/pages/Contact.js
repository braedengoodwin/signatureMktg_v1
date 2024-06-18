import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import contact from "../images/contt.jpg";
import ContactForm from "../components/ContactForm";

export default function Contact() {
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
                  src={contact}
                  alt="Banner saying Insurance Marketing Services"
                />
              </div>
    
              {/* Main Content */}
              <div className="flex">
                <div className="w-7/12 pr-4 relative">
                  <div className="border-r border-gray-300 absolute inset-0 top-6 bottom-6 -z-10"></div>
                  <div className="mt-7 ml-12">
                    <ContactForm/>
                    
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

