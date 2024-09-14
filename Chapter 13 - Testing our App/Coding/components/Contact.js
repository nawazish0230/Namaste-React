import React, { useState } from "react";
// import contactUs from "../../../public/Images/contactUs.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact-container">
      <div className="contact-left">
        {/* commenting as testing giving some error */}
        {/* <img src={contactUs} alt="Contact us" /> */}
      </div>
      <div className="contact-right">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="border" required />
          <input type="email" placeholder="Email" className="border" required />
          <textarea
            placeholder="Type your Message here..."
            className="border"
            required
          ></textarea>
          <button type="submit" className="bg-gray-600">
            Submit
          </button>
          {message && (
            <span>Thanks for contacting FoodFire, We will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
