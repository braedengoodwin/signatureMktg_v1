import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  const dialog = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setIsAnimating(true);
      dialog.current.showModal();
    } else {
      setIsAnimating(false);
      setTimeout(() => {
        dialog.current.close();
      }, 300); // Match this duration with your animation duration
    }
  }, [open]);

  return createPortal(
    <dialog
      className={`modal p-0 z-20 bg-[#000000] rounded-md shadow-lg ${
        open ? "animate-fadeIn" : isAnimating ? "animate-fadeOut" : ""
      }`}
      ref={dialog}
      onClose={onClose}
    >
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
