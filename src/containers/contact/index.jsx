  
// import React from "react";
// import PageHeaderContent from "../../components/pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { Animate } from "react-simple-animate";
// import "./style.scss";

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <PageHeaderContent
//         headerText="My Contact"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="contact__content">
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(-200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <h3 className="contact__content__header-text">Let's Talk</h3>
//         </Animate>
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <div className="contact__content__form">
//             <div className="contact__content__form__controlswrapper">
//               <div>
//                 <input
//                   required
//                   name="name"
//                   className="inputName"
//                   type={"text"}
//                 />
//                 <label htmlFor="name" className="nameLabel">
//                   Name
//                 </label>
//               </div>
//               <div>
//                 <input
//                   required
//                   name="email"
//                   className="inputEmail"
//                   type={"text"}
//                 />
//                 <label htmlFor="email" className="emailLabel">
//                   Email
//                 </label>
//               </div>
//               <div>
//                 <textarea
//                   required
//                   name="description"
//                   className="inputDescription"
//                   type={"text"}
//                   rows="5"
//                 />
//                 <label htmlFor="description" className="descriptionLabel">
//                   Description
//                 </label>
//               </div>
//             </div>
//             <button>Submit</button>
//           </div>
//         </Animate>
//       </div>
//     </section>
//   );
// };
// export default Contact;




// import React, { useState } from "react";
// import PageHeaderContent from "../../components/pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { Animate } from "react-simple-animate";
// import emailjs from "emailjs-com"; // Import Email.js
// import "./style.scss";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     description: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, description } = formData;

//     // Validate form inputs
//     if (!name || !email || !description) {
//       setError("All fields are required!");
//       return;
//     }

//     // Email.js configuration
//     const serviceID = "service_ayir2b2"; // Replace with your Email.js Service ID
//     const templateID = "template_blwaomr"; // Replace with your Email.js Template ID
//     const userID = "your_user_id"; // Replace with your Email.js User ID

//     emailjs
//       .send(serviceID, templateID, formData, userID)
//       .then((response) => {
//         console.log("Email sent successfully!", response.status, response.text);
//         setIsSubmitted(true);
//         setError("");
//         setFormData({ name: "", email: "", description: "" }); // Clear form
//       })
//       .catch((err) => {
//         console.error("Error sending email:", err);
//         setError("Failed to send your message. Please try again later.");
//       });
//   };

//   return (
//     <section id="contact" className="contact">
//       <PageHeaderContent
//         headerText="My Contact"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="contact__content">
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(-200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <h3 className="contact__content__header-text">Let's Talk</h3>
//         </Animate>
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <div className="contact__content__form">
//             <form onSubmit={handleSubmit}>
//               <div className="contact__content__form__controlswrapper">
//                 <div>
//                   <input
//                     required
//                     name="name"
//                     className="inputName"
//                     type="text"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="name" className="nameLabel">
//                     Name
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     required
//                     name="email"
//                     className="inputEmail"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="email" className="emailLabel">
//                     Email
//                   </label>
//                 </div>
//                 <div>
//                   <textarea
//                     required
//                     name="description"
//                     className="inputDescription"
//                     rows="5"
//                     value={formData.description}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="description" className="descriptionLabel">
//                     Description
//                   </label>
//                 </div>
//               </div>
//               <button type="submit">Submit</button>
//             </form>
//             {isSubmitted && <p className="successMessage">Message sent successfully!</p>}
//             {error && <p className="errorMessage">{error}</p>}
//           </div>
//         </Animate>
//       </div>
//     </section>
//   );
// };

// export default Contact;






import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from "emailjs-com"; // Import Email.js
import "./style.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, description } = formData;

    // Validate form inputs
    if (!name || !email || !description) {
      setError("All fields are required!");
      return;
    }

    // Email.js configuration
    const serviceID = "service_ayir2b2"; // Replace with your Email.js Service ID
    const templateID = "template_blwaomr"; // Replace with your Email.js Template ID
    const userID = "tK-d63eVsSw99OEM3"; // Replace with your Email.js User ID

    const templateParams = {
      from_name: name,
      from_email: email,
      message: description,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setIsSubmitted(true);
        setError("");
        setFormData({ name: "", email: "", description: "" }); // Clear form
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setError("Failed to send your message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <form onSubmit={handleSubmit}>
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="name"
                    className="inputName"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="email"
                    className="inputEmail"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name="description"
                    className="inputDescription"
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Description
                  </label>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
            {isSubmitted && <p className="successMessage">Message sent successfully!</p>}
            {error && <p className="errorMessage">{error}</p>}
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
