
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

        
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_utbvs5n', 'template_t34so7h', form.current, 'nCDn8JummtFg4cNoF')
      .then((result) => {
          console.log(result.text);
          toast.success('Your message has been sussessfully sent, i will contact you soon', {
            position: "bottom-right",
            theme: "colored"});

      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    
      
  };

    return (
        <section id="contact" className="pb-16">
            <div className="container">
                <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">Get in touch</h2>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.8438825390135!2d112.75585371432895!3d-8.015030282204766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62560e5318959%3A0xdbfe172ba0a50094!2sAkar%20Home!5e0!3m2!1sen!2sid!4v1681112887756!5m2!1sen!2sid" 
                        className="border-0 w-full h-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                        <form ref={form} onSubmit={sendEmail} className="w-full">
                            <div className="mb-5">
                                <input type="text" name='FullName' placeholder="Enter Your Name" 
                                className="w-full p-3 focus:outline-none rounded-[5px]" required/>
                            </div>
                            <div className="mb-5">
                                <input type="email" name='email' placeholder="Enter Your Email" 
                                className="w-full p-3 focus:outline-none rounded-[5px]" required/>
                            </div>
                            <div className="mb-5">
                                <input type="tel" name='phone' placeholder="Phone Number" 
                                className="w-full p-3 focus:outline-none rounded-[5px]" required/>
                            </div>
                            <div className="mb-5">
                                <textarea type="text" name='message' rows={3} placeholder="Write your message" 
                                className="w-full p-3 focus:outline-none rounded-[5px]" required/>
                            </div>
                            <button type="submit" value="Send" className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section> 
    )
    
}

export default Contact