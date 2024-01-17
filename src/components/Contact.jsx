import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name] : value});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);

  //template_g0xljr7
  //service_9v23xov
  //2YdN3_0GsRQB8wXki
    emailjs.send(
      'service_9v23xov', 'template_g0xljr7',
      {
        from_name : form.name,
        to_name : 'Hykim',
        from_email : form.email,
        to_email : 'hiyoung.kimmy@gmail.com',
        message: form.message
      },
      '2YdN3_0GsRQB8wXki'
    ).then(()=>{
      setLoading(false);
      toast.success("Thank you! 💘 I will get back to you soon");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    },
    (error) => {
      setLoading(false);
      console.error(error);

      toast.error("Ahh, something went wrong. Please try again.");
    }
  );
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse font-poppins gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#393E46] p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText} dark:text-gray-500`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} dark:text-green-300`}>Let's Connect</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name? 🩷"
              className='bg-[#5F7161] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email? 🧡"
              className='bg-[#5F7161] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Lets connect together! 💙'
              className='bg-[#5F7161] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <ToastContainer position="bottom-center" limit={1} />

          <button
            type='submit'
            className='bg-[#5F7161] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:text-[#ccffc8] dark:text-[#ccffc8]'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact');