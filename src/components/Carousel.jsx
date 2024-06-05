import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [currentPic, setCurrentPic] = useState(0);

  //check if currently on first pic if it is go to last slight otherwise curr -1
  const prevSlide = () => {
    setCurrentPic((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  //check if we are on the last slide if so go to the first slide, otherwise add 1 to the current slide index
  const nextSlide = () => {
    setCurrentPic((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if(!autoSlide) return

    const slideInterval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentPic * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
          onClick={prevSlide}
        >
          <FaAngleLeft size={25} />
        </button>
        <button
          className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
          onClick={nextSlide}
        >
          <FaAngleRight size={25} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
                    transition-all w-3 h-3 bg-white rounded-full
                    ${currentPic === i ? "p-2" : "bg-opacity-50"}
                `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
