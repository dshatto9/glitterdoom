import banner from "../assets/banner3.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="bg-black h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="md:w-full md:h-96 object-cover flex items-center justify-center"
      >
        <img src={banner} alt="" width={1400} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="relative flex justify-center items-center py-12"
      >
        <h2 className="p-6 text-white md:text-2xl md:w-[40%] flex items-center justify-center">
          Established in 2021, Glitterdoom creates press on nails and
          accessories with as much personality as the individual wearing them.
          From simple to bold, cute to edgy, sweet to spooky, and everything in
          between! We are open to creating custom designs as well, just send us
          an email or a message on Facebook. ❤️
        </h2>
      </motion.div>
    </motion.div>
  );
};

export default About;
