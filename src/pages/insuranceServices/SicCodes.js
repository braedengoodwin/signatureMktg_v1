import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion";
import insuranceMtkServ from "../../images/insuranceMtkServ.jpg";
import pdfImg from '../../images/download_pdf.png'
import excelImg from '../../images/excel.png'
import excelFile from '../../pdfs/8_DIGIT_SIC.xls'


function SicCodes() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-center">
      <div className="w-full max-w-4xl bg-white mt-12 mb-16 mx-4 sm:mx-auto flex flex-col justify-between ">
        <div className="">
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
          <div className="flex ">
            <div className="w-7/12 pr-4 relative ">
              <div className="border-r border-gray-300 absolute inset-0 top-6 bottom-6 -z-10"></div>
              <div className="mt-7 ml-12 ">
                <div className="relative overflow-hidden p-1 bg-white mt-4">
                  <div className="absolute inset-0 bg-diagonal-lines bg-repeat bg-10 opacity-25"></div>
                  <p className="relative z-10 text-gray-700 text-3xl ml-1">
                    Sic Codes
                  </p>
                </div>

                
                <div className="mb-6">
                  <p className="mt-1 mb-4">Here is the Signature Marketing lists of SIC Codes. This is what we use to target the classes of business you want to write.</p>
                    
                    <a href={pdfImg} download className="z-10">
                    <img src={pdfImg} className=' w-36 z-10' alt='PDF download'/>
                    </a>
                </div>

                <div>
                  <p className="mt-1 mb-4">Below is an in depth excel file of 8 digit sic codes by industry.</p>
                    
                    <a href={excelFile} download className="z-10 w-24">
                    <img src={excelImg} className='w-24 z-10' alt='Excel download'/>
                    </a>
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

export default SicCodes;
