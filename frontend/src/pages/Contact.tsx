import React, { useState } from "react"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thanks for reaching out! This is just a demo.")
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h3 className="text-4xl font-bold mb-8">Let's Get in Touch!</h3>
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
        <div>
          <label className="block text-xl font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-xl font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-xl font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 h-32 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
