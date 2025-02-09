"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experienceData = [
    {
      company: "Squad Technologies Pvt. Ltd.",
      title: "Junior Full Stack Developer",
      duration: "June 2024 - Present",
      description:
        "Developed and maintained scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and Nextjs. Collaborated with cross-functional teams, including product, design, and QA, to deliver high-quality products.  Implemented key features, improved performance, and ensured code maintainability.",
      year: "2024",
    },
    {
      company: "Squad Technologies Pvt. Ltd.",
      title: "Trainee Full Stack Developer",
      duration: "MAR 2024 - May 2024",
      description:
        "Focused on UI/UX design and implementation using React.js and Tailwind CSS.  Built responsive and user-friendly interfaces, optimized performance for seamless user experience, and collaborated with designers to translate mockups into functional code with different database and gain very good learning and experience.",
      year: "2024",
    },
    {
      company: "Cloud Brain Technologies",
      title: "Intern Software Developer",
      duration: "Sep 2023 - Fab 2024",
      description:
        "Gained hands-on experience in web development, assisting in the creation of web applications using Node.js and Express.js.  Contributed to project development, learned best practices, and improved my understanding of software development lifecycle.",
      year: "2023",
    },
  ];
  return (
    <section className="py-20 bg-base-200" id="experience">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 text-primary tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Experience
        </motion.h2>

        <ul className="timeline timeline-vertical">
          {experienceData.map((data, index) => {
            return (<>
              {(index + 1) % 2 == 0 && <li key={index}>
                {(index === experienceData.length - 1 || index > 0) &&
                  <hr className="bg-primary" />
                }
                <div className="timeline-end timeline-box">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {data.title}
                  </h3>
                  <h4 className="text-lg text-gray-700 mb-2">{data.company}</h4>
                  <p className="text-gray-600 mb-4">{data.duration}</p>
                  <p className="text-gray-700">{data.description}</p>
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                {index !== experienceData.length - 1 &&
                  <hr className="bg-primary" />
                }
              </li>}
              {(index + 1) % 2 == 1 && <li key={index}>
                {(index === experienceData.length - 1 || index > 0) &&
                  <hr className="bg-primary" />
                }
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-start timeline-box">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {data.title}
                  </h3>
                  <h4 className="text-lg text-gray-700 mb-2">{data.company}</h4>
                  <p className="text-gray-600 mb-4">{data.duration}</p>
                  <p className="text-gray-700">{data.description}</p>
                </div>
                {index !== experienceData.length - 1 &&
                  <hr className="bg-primary" />
                }
              </li>}
            </>)
          })}

        </ul>
      </div>
    </section>
  );
}