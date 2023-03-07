import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactDetailsForm from "../contactDetailsForm/contactDetailsForm";
import "./contact.css"; 

function Contact() {
  return (
    <div>
      <p>Contact!</p>
      {ContactDetailsForm()};
    </div>
  );
}

export default Contact;