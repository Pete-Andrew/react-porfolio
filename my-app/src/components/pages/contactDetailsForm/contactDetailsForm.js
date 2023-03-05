import React from "react";
import "./contactDetailsStyle.css"

function ContactDetailsForm () {
  return (
    <form>
      <label>Name</label>
      <input type="text" name="user_name" /> <br></br>
      <label>Email</label>
      <input type="email" name="user_email" /> <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactDetailsForm;

