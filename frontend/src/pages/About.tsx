import React from "react"

const About: React.FC = () => {
  return (
      <div className="space-y-12">
        <section>
          <h3 className="text-3xl font-bold mb-4">Experience</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-semibold">Frontend Developer at TechCorp</h4>
              <p className="text-gray-400">Jan 2022 - Present</p>
              <p className="mt-2">
                Working on developing responsive and interactive web applications using React and
                Tailwind CSS.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Web Developer Intern at DevSolutions</h4>
              <p className="text-gray-400">Jun 2021 - Dec 2021</p>
              <p className="mt-2">
                Assisted in the development of internal tools and improved the user interface of
                client websites.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-4">Education</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-semibold">Bachelor of Science in Computer Science</h4>
              <p className="text-gray-400">XYZ University, 2018 - 2022</p>
              <p className="mt-2">
                Graduated with honors, specializing in web development and software engineering.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">High School Diploma</h4>
              <p className="text-gray-400">ABC High School, 2016 - 2018</p>
              <p className="mt-2">Focused on advanced mathematics and computer science courses.</p>
            </div>
          </div>
        </section>
      </div>
  )
}

export default About
