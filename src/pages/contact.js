import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from 'react-router-dom';
import "./contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_ya2b2yd",
                "template_5l6y7ds",
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    user_message: formData.message,
                },
                "sR8gyvI0br_wcor-x"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccessMessage("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });

                    emailjs.send(
                        "service_ya2b2yd",
                        "template_uprtocc",
                        {
                            user_name: formData.name,
                            user_email: formData.email,
                            user_message: formData.message,
                        },
                        "sR8gyvI0br_wcor-x"
                    );
                },
                (error) => {
                    console.log(error.text);
                    setSuccessMessage("Failed to send message. Please try again.");
                }
            );
    };

    
    return (
        <section id="contact" style={{padding: "2rem", textAlign: "center"}} className="contact-container">
            <h2>Contact Me</h2>
            <p>Feel free to reach out through the form below or directly via email.</p>
            <div className="contact-form">
                <form onSubmit={handleSubmit} className="contact-form">
                    <input 
                        type="text"
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>
            <div className="contact-information">
                <p>Email: denisljubojevic@gmail.com</p>
                <p>Phone Number: (+385) 99 648 2573</p>
                <p>Location: Križevci/Zagreb</p>
                <p>GitHub: <Link to='https://github.com/DenisLjubojevic' className="contact-link">link</Link></p>
                <p>LinkedIn: <Link to='https://www.linkedin.com/in/denis-ljubojevi%C4%87-b016a5302/' className="contact-link">link</Link></p>
                <div className="cv-button">
                    <a href="/My_CV.pdf" download="Denis_Ljubojević_CV.pdf" className="download-button">
                    Download My CV
                    </a>
                </div>
            </div>
            
        </section>
    );
};

export default Contact;