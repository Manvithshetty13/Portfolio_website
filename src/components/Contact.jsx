import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div
      className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto'
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form
          action="https://formspree.io/f/xyzeepoy"
          method="POST"
          className="mt-12 gap-4 flex flex-col"
          onSubmit={() => setLoading(true)}
        >
          <input type="hidden" name="_next" value={window.location.href} />
          <input type="hidden" name="_subject" value="New contact from portfolio website" />
          <span className='text-white font-medium mt-3'>Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium"
            required
          />
          <span className='text-white font-medium mt-3'>Email Address</span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium"
            required
          />
          <span className='text-white font-medium mt-3'>Message</span>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium"
            required
          />
          
          {success && (
            <div className="text-green-500 font-medium mt-2">
              Thank you. I will get back to you as soon as possible.
            </div>
          )}
          
          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary hover:bg-quaternary transition-colors'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");