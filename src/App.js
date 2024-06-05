import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import appointment from './images/appointment.jpg'
import mailbox from './images/mailbox.jpg'
import womensFace from './images/womensFace.jpg'

const slides = [
  appointment,
  mailbox,
  womensFace
]

function App() {
  return (
    <>
      {/* These two divs create the blue background and the white box */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-center">
        <div className="w-3/4 max-w-[980px] bg-white mt-12 mb-16">
          {/* Header */}
          <div className="h-60 border-b">
            <Header />
          </div>
          
          {/* Carousel */}
          <div>
          <Carousel autoSlide={true}>
            {slides.map((s) => (
              <img src={s}/>
            ))}
          </Carousel>
        </div>
        </div>
      </div>

      <main></main>
    </>
  );
}

export default App;
