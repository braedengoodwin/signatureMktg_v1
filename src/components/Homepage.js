import InformationSection from "./InformationSection";
import Carousel from "./Carousel";
import Footer from "./Footer";
import GraySection from "./GraySection";
import Header from "./Header";
import appointment from "../images/appointment.jpg";
import mailbox from "../images/mailbox.jpg";
import womensFace from "../images/womensFace.jpg";

const slides = [appointment, mailbox, womensFace];

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-center">
      <div className="w-full max-w-4xl bg-white mt-12 mb-16 mx-4 sm:mx-auto">
        {/* Header */}
        <div className="h-48 border-b">
          <Header />
        </div>

        {/* Carousel */}
        <div>
          <Carousel autoSlide={true}>
            {slides.map((s, index) => (
              <img
                key={index}
                src={s}
                className="w-full"
                alt="A carousel component with multiple images"
              />
            ))}
          </Carousel>
        </div>
        <GraySection />
        <InformationSection />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
