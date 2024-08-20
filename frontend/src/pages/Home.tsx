import React from "react"
import ArrowLink from "../components/ArrowLink"
import "../assets/css/home.css"

const Home: React.FC = () => {
  return (
    <div className="main-container">
      <div className="flex flex-col justify-center h-[80vh] mx-auto px-4 mt-12">
        <h2 className="text-lg text-blue-200 font-semibold">Hey, I'm</h2>
        <h1 className="text-5xl font-bold text-slate-300 my-4 glitch">Aayush Soni</h1>
        <p className="text-1xl text-gray-200 mb-2">
          A full-stack developer with a passion for crafting exceptional digital experiences. I
          <p className="text-1xl text-gray-200 mb-2">
            thrive on solving complex problems, which I tackle with a combination of creativity and
            <p className="text-1xl text-gray-200 mb-2">
              technical expertise. My skills span from frontend development with React to backend
              <p className="text-1xl text-gray-200 mb-2">
                engineering with Django, and I'm well-versed in cloud technologies like AWS.
              </p>
            </p>
          </p>
        </p>
        <p className="text-1xl text-gray-200 mb-2">
          I'm a problem-solver at heart, with a strong foundation in data structures and algorithms.
          <p className="text-1xl text-gray-200 mb-2">
            I've honed my skills on platforms like LeetCode and transformed my knowledge into
            real-world
            <p className="text-1xl text-gray-200 mb-2">
              applications. I'm a collaboratives team player who enjoys turning ideas into reality.
              <p className="text-1xl text-gray-200 mb-2">Let's build something amazing together!</p>
            </p>
          </p>
        </p>
        <div className="mt-8">
          <ArrowLink text="Go to About Page" to="/about" />
        </div>
      </div>
    </div>
  )
}

export default Home
