// import React from "react";
// import { BsInfoCircleFill } from 'react-icons/bs'
// import PageHeaderContent from "../../components/pageHeaderContent"
// import { Animate } from 'react-simple-animate'
// import './style.scss'
// import { DiApple, DiAndroid } from 'react-icons/di'
// import { FaDev, FaDatabase } from 'react-icons/fa'

// const jobSummary =
//     'seasond and independent front end developer with exprince of 2 years,seasond and independent front end developer with exprince of 2 years,seasond and independent front end developer with exprince of 2 years,seasond and independent front end developer with exprince of 2 years'

// const personalDetails = [
//     {
//         label: "Name",
//         value: "Zelalem Birhan"
//     },
//     {
//         label: "Age",
//         value: 27
//     },
//     {
//         label: "Address",
//         value: "Addis Ababa, Ethiopia"
//     },
//     {
//         label: "Email",
//         value: "dezelalem31@gmail.com"
//     },

//     {
//         label: "Contact Number",
//         value: +251967610070
//     },
//     {
//         label: "Github Account",
//         value: "https://github.com/ziedatuog"
//     },
// ]
// const About = () => {
//     return (
//         <section id="about" className="about">
//             <PageHeaderContent
//                 headerText="About Me"
//                 icon={<BsInfoCircleFill size={40} />}
//             />
//             <div className="about__content">
//                 <div className="about__content__personalWrapper">
//                     <Animate
//                         play
//                         duration={1.5}
//                         delay={1}
//                         start={{
//                             transform: 'translateX(-900px)'
//                         }}
//                         end={{
//                             transform: 'translateX(0px)'
//                         }}
//                     >
//                         <h3>Full-Stack Developer</h3>
//                         <p>{jobSummary}</p>
//                     </Animate>
//                     <Animate
//                         play
//                         duration={1.5}
//                         delay={1}
//                         start={{
//                             transform: 'translateX(500px)'
//                         }}
//                         end={{
//                             transform: 'translateX(0px)'
//                         }}
//                     >
//                         <h3 className="personalInformationHeaderText">
//                             Personal Information</h3>
//                         <ul>
//                             {personalDetails.map((item, i) => (
//                                 <li key={i}>
//                                     <span className="title"> {item.label} </span>
//                                     <span className="value"> {item.value} </span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </Animate>
//                 </div>
//                 <div className="about__content__serviceWrapper">
//                     <Animate
//                         play
//                         duration={1.5}
//                         delay={1}
//                         start={{
//                             transform: 'translateX(600px)'
//                         }}
//                         end={{
//                             transform: 'translateX(0px)'
//                         }}
//                     >
//                         <div className="about__content__serviceWrapper__innerContent">
//                             <div>
//                                 <FaDev size={60} color="var(--yellow-theme-main-color)" />
//                             </div>
//                             <div>
//                                 <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
//                             </div>
//                             <div>
//                                 <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
//                             </div>
//                             <div>
//                                 <DiApple size={60} color="var(--yellow-theme-main-color)" />
//                             </div>
//                         </div>
//                     </Animate>

//                 </div>


//             </div>
//         </section>
//     );

// };

// export default About;








import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiGithubBadge, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";


const personalDetails = [
  {
    label: "Name",
    value: "Zelalem Birhan",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Ethiopia, Addis Ababa",
  },
  {
    label: "Email",
    value: "dezelalem31@gmail.com",
  },
  {
    label: "Contact No",
    value: "+251 967610070 or +251 923791462",
  },
  {
    label: "Github Account",
    value: "https://github.com/ziedatuog",
  },
];

const jobSummary =
  "Dynamic and highly motivated Full-Stack Developer with expertise in the MERN stack (MongoDB, Express, React, Node.js) and Django, backed by hands-on experience in developing scalable, user-focused web applications. Successfully completed internship projects and a thesis project that emphasized bridging theoretical knowledge with practical implementation, showcasing a deep understanding of end-to-end development. Skilled in building responsive, high-performance applications, integrating backend APIs with seamless frontend designs, and leveraging UX/UI principles to deliver exceptional user experiences. Passionate about solving complex challenges, optimizing performance, and adhering to best practices in coding and design. A committed professional eager to contribute innovative solutions to future projects.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full-Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiGithubBadge size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;