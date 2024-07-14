import banner from "../assets/banner.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className=" relative h-[200px] w-[600px] right-[105px] md:h-[350px] md:w-[1200px] md:right-0 rounded-xl m-auto flex justify-center items-center top-16"
    >
      <div className="font-bold text-5xl items-center flex justify-center"></div>
      <div className="flex items-center justify-center">
        <img
          src={banner}
          alt=""
          className="object-cover absolute w-1/2 md:w-[90%]"
        />
      </div>
    </motion.header>
  );
};

export default Hero;
