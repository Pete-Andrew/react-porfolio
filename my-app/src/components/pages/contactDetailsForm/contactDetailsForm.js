import React from "react";
import "./contactDetailsStyle.css"


function ContactDetailsForm () {
  return (
    <div>
      <form>
          <label>Name</label>
          <input type="text" name="user_name" /> <br></br>
          <label>Email</label>
          <input type="email" name="user_email" /> <br></br>
          <input type="submit" value="Submit" />
      </form>
    <div>
      <a className="emailetc" href= "https://github.com/Pete-Andrew"> GitHub Profile</a>
      <a className="emailetc" href= "https://www.linkedin.com/in/peter-a-2143b33a/"> LinkedIn</a>
      <a className="emailetc" href= "mailto: peter.a.andrew@gmail.com"> Email</a>
    </div>
</div>

  );
}

export default ContactDetailsForm;

