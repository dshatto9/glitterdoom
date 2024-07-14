import Hero from "../components/Hero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="h-screen bg-black font-body"
    >
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className=""
      >
        <h2 className="text-white text-md px-10 md:text-3xl md:flex items-center justify-center py-8">
          Handmade Press Ons and Accessories with
          <span className="text-[#EC2989] text-2xl md:text-3xl ml-2 flex items-center justify-center">
            {" "}
            Personality!
          </span>
        </h2>
      </motion.div>
      <div className="flex items-center justify-center">
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ ease: "easeInOut", duration: 1.0 }}
          className="h-[45px] w-[120px] text-white bg-[#EC2989] rounded-xl flex items-center justify-center"
        >
          <a href="/shop">Shop Now</a>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Home;
