import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className=" relative h-fit w-fit z-10"
    >
      <a href={href} className="relative text-black text-xs">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left
           rounded-full scale-x-0 bg-indigo-300 transition-transform duration-300 ease-out z-10
        "
        />
      </a>
      <AnimatePresence>
      {showFlyout && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          style={{ translateX: "-50%" }}
          transition={{duration: 0.3, ease: 'easeOut'}}
          className="absolute left-1/2 top-12 bg-black text-white"
        >
            {/* the first div here is transparent, so that when we move down from the title we dont lose focus
                the second one is for the little triangle in the middle of the box
            */}
          <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent z-10" />
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#6593d1] z-10" />
          <FlyoutContent />
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;
