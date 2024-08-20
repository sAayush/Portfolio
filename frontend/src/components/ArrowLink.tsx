import React from "react"

interface ArrowLinkProps {
  text: string
  to: string
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ text, to }) => {
  return (
    <a href={to} className="text-blue-200 font-semibold flex space-x-2 link-bottom hover:underline">
      <span>{text}</span>
      <svg
        className="w-6 h-6 animate-arrow"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  )
}

export default ArrowLink
