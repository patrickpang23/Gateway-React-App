import React from "react";
import "../Styles.css";

const Contact = () => {
  return (
    <>
      <div className="contactTitle">Contact Us</div>

      <div className="contactContainer">
        <form className="contactForm">
          <label>First Name</label>
          <input className="contactTextInputs" placeholder="Your first name" />

          <label>Last Name</label>
          <input className="contactTextInputs" placeholder="Your last name" />

          <label>Email</label>
          <input className="contactTextInputs" placeholder="Your email" />

          <label>Message</label>
          <textarea
            className="contactTextInputs"
            placeholder="Leave a message"
            style={{ height: "200px" }}
          />

          <input className="contactSubmit" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Contact;
