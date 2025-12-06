import React from "react";
import { FaEnvelope, FaGift, FaGithub, FaGitSquare, FaInstagram, FaLinkedin,  FaWhatsapp ,} from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-white text-white flex flex-col justify-center items-center p-10">
      <h2 className="text-4xl font-bold mb-6 text-black">Contact Me</h2>
      <form className="w-full max-w-md space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-white text-black border border-white" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-white text-black border border-white" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded bg-white  text-black border border-white"></textarea>
        <button className="bg-black hover:bg-indigo-800 px-6 py-3 rounded w-full font-bold">Send Message</button>     
      </form> 
       
       <p className="text-black font-bold my-5">Reach Me :-</p>
       <div className="flex gap-3  ">
         <a href="" className="text-green-800"><FaWhatsapp  size={35}/></a> 
         <a href="https://www.linkedin.com/in/ruthveek-gourishetty-435154264/" className="text-blue-600"><FaLinkedin   size={35} />   </a>
         {/* <a href=""   className="text-red-500"> <FaInstagram   size={35} /></a>  */}
         {/* <a href="  "   className="text-black"> <FaEnvelope size={35} />  </a> */}
         <a href=" https://github.com/Grshetty "   className="text-black"> <FaGithub size={35} />  </a>

       </div>
       
    </section> 

  
    

  );
};

export default Contact;
