import { useRef, useState } from "react";
import SectionContainer from "../shared/SectionContainer";
import emailjs from '@emailjs/browser';
import Button from "../shared/Button";
import SendIcon from "../../assets/Icons/SendIcon";
import ProgressIcon from "../../assets/Icons/ProgressIcon";

function ContactSection() {
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState({
    sending: false,
    error: false,
    success: false,
    errorMessage: "",
    successMessage: "Your message has been sent! I'll get back to you as soon as possible.",
  });

  function sendEmail(e) {
    e.preventDefault();
    setEmailStatus(prev => ({...prev, sending: true, error: false, errorMessage: ""}));

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_EMAILSERVICEID, import.meta.env.VITE_EMAILJS_EMAILTEMPLATEID, e.target, import.meta.env.VITE_EMAILJS_EMAILPUBLICKEY)
      .then(() => {
        setEmailStatus(prev => ({...prev, sending: false, success: true}));
        e.target.reset();
      }, (emailError) => {
        setEmailStatus(prev => ({...prev, sending: false, error: true, errorMessage: emailError.text || "Oops... An error occurred while sending the email. If there error persists, please try again later, or contact me through Linkedin/GitHub."}));
      });
  }

  return (
    <section id="contact" className="py-24 bg-primary text-white">
      <SectionContainer>
        <div className="bg-primary-light rounded-xl p-6 shadow-xl">
          <h2 className="text-center text-3xl mb-2 font-bold uppercase">Contact Me</h2>
          <p className="text-center text-sm mb-8">Let&apos;s Connect!</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 gap-4 text-black md:grid-cols-2">
              <div className="grid grid-cols-1 gap-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-white">Name<span className="text-red-400">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Patrick Dolan"
                  className="border border-primary-light rounded-lg px-4 py-3"
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-y-1">
                <label htmlFor="user_email" className="block text-sm font-medium text-white">Email<span className="text-red-400">*</span></label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="SuperCoolEmail@email.com"
                  className="border border-primary-light rounded-lg px-4 py-3"
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-y-1 md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-white">Message<span className="text-red-400">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Let's work together!"
                  rows="4"
                  className="border border-primary-light rounded-lg px-4 py-3"
                  required
                />
              </div>
              {emailStatus.error && <p className="text-red-400 text-sm md:col-span-2">{emailStatus.errorMessage}</p>}
              {emailStatus.success && <p className="text-green-400 text-sm md:col-span-2">{emailStatus.successMessage}</p>}
              <Button 
                text={emailStatus.sending ? "Sending..." : "Send"} 
                type="submit" 
                icon={emailStatus.sending ? <ProgressIcon /> : <SendIcon />} 
                className="md:col-span-2"
              />
            </div>
          </form>
        </div>
      </SectionContainer>
    </section>
  )
}

export default ContactSection;