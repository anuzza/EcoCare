import React from "react";
import "./Contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <h2>Get In Touch</h2>
        <div className=" contact__talk">
          <article className="contact__icons">
            <FiPhoneCall />
            <a href="">Call</a>
          </article>

          <article className="contact__icons">
            <MdOutlineMail />
            <a
              href="mailto:anuja3580@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </article>
        </div>

        <h2>Follow Us</h2>
        <div className="contact__follow">
          <article className="contact__icons">
            <IoLogoTwitter />
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </article>
          <article className="contact__icons">
            <FaFacebookF />
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </article>
          <article className="contact__icons">
            <FiInstagram />
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </article>
        </div>

        <h2>Address</h2>
        <p className="contact__follow"> Oxford, MS, USA</p>
      </div>
    </div>
  );
}

export default Contact;
