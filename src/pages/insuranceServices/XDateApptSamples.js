import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion";
import insuranceMtkServ from "../../images/insuranceMtkServ.jpg";
import dateApptSamp01 from "../../images/x1s.jpg";
import dateApptSamp01big from "../../images/x1Big.jpg";
import xdateSample from "../../images/xdates.jpg";
import xdateSampleBig from "../../images/xdateBig.jpg";
import { useState } from "react";
import Modal from "../../components/Modal";
import { NavLink } from "react-router-dom";

function DateApptSamples() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const handleClick = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleClickToo = () => {
    setSecondModalOpen(!secondModalOpen);
  };

  return (
    <>
      <Modal open={modalIsOpen}>
        <div className="relative">
          <button
            className="absolute top-2 right-2 text-lg p-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
            onClick={handleClick}
          >
            &times;
          </button>
          <img src={dateApptSamp01big} alt="big logo" />
        </div>
      </Modal>

      <Modal open={secondModalOpen}>
        <div className="relative">
          <button
            className="absolute top-2 right-2 text-lg p-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
            onClick={handleClickToo}
          >
            &times;
          </button>
          <img src={xdateSampleBig} alt="big logo" />
        </div>
      </Modal>

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
                <div className="border-r border-gray-300 absolute inset-0 top-6 bottom-6 -z-10"></div>
                <div className="mt-7 ml-12">
                  <div className="relative overflow-hidden p-1 bg-white mt-4">
                    <div className="absolute inset-0 bg-diagonal-lines bg-repeat bg-10 opacity-25"></div>
                    <p className="relative z-10 text-gray-700 text-3xl ml-1">
                      X-Date and Appt Samples
                    </p>
                  </div>
                  <h2 className="mb-4 mt-1">Appointment Sample</h2>
                  <div>
                    <div
                      className="relative cursor-pointer"
                      onClick={handleClick}
                    >
                      <img
                        src={dateApptSamp01}
                        alt="Small logo"
                        className="w-500px h-500px"
                      />
                    </div>
                  </div>

                  <h2 className="mb-4 mt-12">X-Date Sample</h2>
                  <div className="mb-14">
                    <div
                      className="relative cursor-pointer"
                      onClick={handleClickToo}
                    >
                      <img
                        src={xdateSample}
                        alt="Small logo"
                        className="w-500px h-500px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-5/12 mt-8 ml-6 mr-2">
                <div>
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
                      <NavLink to="/mortgage-mailers">
                        Mortgage Mailers
                      </NavLink>,
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
    </>
  );
}

export default DateApptSamples;
