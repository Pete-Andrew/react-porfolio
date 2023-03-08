import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactDetailsForm from "../contactDetailsForm/contactDetailsForm";
import "./contact.css";

function Contact() {
  return (
    <div
      id="contactContainer"
      className="container-fluid justify-content-center"
    >
      <h1>Contact!</h1>
      <p>
        if you would like to contact me, please fill out the form below or email
        me with the link below
      </p>

      {ContactDetailsForm()}
    </div>
  );
}

export default Contact;
