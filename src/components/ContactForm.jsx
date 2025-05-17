import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="py-16 px-4 bg-blue-50 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-semibold text-blue-700 dark:text-white mb-6 text-center">
          Contact Us
        </h3>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded shadow"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded"
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded"
          />
          <select
            name="licenseType"
            value={form.licenseType}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded"
          >
            <option value="">Select License Type</option>
            <option value="SaaS">SaaS</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Cloud">Cloud</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
