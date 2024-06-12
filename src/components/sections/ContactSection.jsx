import { useRef } from "react";
import SectionContainer from "../shared/SectionContainer";
import emailjs from '@emailjs/browser';
import Button from "../shared/Button";

function ContactSection() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_EMAILSERVICEID, import.meta.env.VITE_EMAILJS_EMAILTEMPLATEID, e.target, import.meta.env.VITE_EMAILJS_EMAILPUBLICKEY)
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <section id="contact" className="py-24 bg-primary text-white">
      <SectionContainer>
        <h2 className="text-center text-3xl mb-2 font-bold uppercase">Contact Me</h2>
        <p className="text-center text-sm mb-8">Let&apos;s Connect!</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 gap-y-4 text-black">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              className="border border-primary-light rounded-lg px-4 py-2" 
              required 
            />
            <input 
              type="email" 
              name="user_email" 
              placeholder="Email" 
              className="border border-primary-light rounded-lg px-4 py-2" 
              required 
            />
            <textarea 
              name="message" 
              placeholder="Message" 
              rows="4" 
              className="border border-primary-light rounded-lg px-4 py-2" 
              required 
            />
            <Button text="Send" type="submit" />
          </div>
        </form>
      </SectionContainer>
    </section>
  )
}

export default ContactSection;