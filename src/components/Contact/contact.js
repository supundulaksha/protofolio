import "./contact.css";
import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/x-twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import instagramIcon from "../../assets/instagram.png";
import linkdeinIcon from "../../assets/linkdein.png";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_2g5jjlp",
        "template_fqyuk19",
        form.current,
        "l86_jMVwgyPG8tB4k"
      )

      .then(() => {
        setIsSending(false);
        e.target.reset();
        Swal.fire({
          icon: "success",
          title: "Email Sent!",
          text: "Thanks for reaching out. I will get back to you soon.",
          confirmButtonColor: "#3085d6",
        });
      })
      .catch((error) => {
        setIsSending(false);
        console.error(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later!",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          {/* Hidden email field to set the recipient */}
          <input
            type="hidden"
            name="to_email"
            value="supundulaksha16@gmail.com"
          />

          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
            required
          />

          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="msg"
            required></textarea>

          <button type="submit" className="submitBtn" disabled={isSending}>
            {isSending ? "Sending..." : "Submit"}
          </button>

          <div className="links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link">
              <img src={facebookIcon} alt="Facebook" className="link" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link">
              <img src={twitterIcon} alt="Twitter" className="link" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link">
              <img src={youtubeIcon} alt="YouTube" className="link" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link">
              <img src={instagramIcon} alt="Instagram" className="link" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link">
              <img src={linkdeinIcon} alt="Instagram" className="link" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
