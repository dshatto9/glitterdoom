import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="relative h-screen bg-black"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="flex flex-col items-center justify-center absolute top-4 md:top-14 2xl:top-20 left-[10px] md:left-[720px] lg:left-[460px] xl:left-[456px] 2xl:left-[768px]"
      >
        <h1 className="text-white text-2xl md:text-5xl 2xl:text-6xl flex items-center justify-center">
          Contact Us
        </h1>
        <p className="text-white w-[380px] text-xs flex items-center justify-center p-4">
          Simply fill out the form below or reach us on our social pages.
        </p>
      </motion.div>
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="flex flex-col items-center justify-center h-5/6 md:h-3/4 lg:h-[90%] gap-8"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-2/3 md:w-1/3 h-[42px] px-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-2/3 md:w-1/3 h-[42px] px-2"
          required
        />
        <textarea
          placeholder="Message"
          className="w-2/3 md:w-1/3 h-1/5 px-2 py-2"
        />
        <button
          type="submit"
          className="w-[120px] h-[45px] bg-[#EC2989] rounded-xl"
        >
          Submit
        </button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
