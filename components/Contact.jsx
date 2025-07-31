import { assets } from '@/assets/assets'
import React, {useState} from 'react'
import Image from 'next/image'

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "71e6f78d-a912-440e-b398-64d7fec70ee9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 md:py-10 scroll-mt-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mx-auto max-w-7xl bg-[url("/footer-bg-color.png")] bg-center bg-no-repeat bg-[length:90%_auto]'>
         <h4 className='text-center mb-2 text-base sm:text-lg md:text-xl font-ovo'>
            CONNECT WITH ME
        </h4>
        <h2 className='text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ovo'>
            Get in touch
        </h2>
        <p className='text-center mb-8 text-base sm:text-lg md:text-xl font-ovo max-w-4xl mx-auto'>
            Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities. 
            Whether you need a full-stack web application, mobile solution, or just want to chat about technology, 
            feel free to reach out. Let's create something amazing together!
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input type="text" placeholder="Your Name" required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
                <input type="email" placeholder="Your Email" required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>
            </div>
            <textarea rows='6' placeholder='Your Message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>

            <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>SUBMIT NOW <Image src={assets.right_arrow_white} alt='Right Arrow' className='w-4'/></button>
            <p className='text-center mt-4'>{result}</p>
        </form>
    </div>
  )
}

export default Contact