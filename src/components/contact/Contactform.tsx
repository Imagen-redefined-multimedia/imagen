"use client"
import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

 const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setResult("Sending....");

  const form = event.target as HTMLFormElement; // Typecast here
  const formData = new FormData(form);

  const accessKey = process.env.APP_ACCESS_KEY;

  if (accessKey) {
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset(); // use the form reference here too
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("An error occurred. Please try again.");
    }
  } else {
    console.error("Access key is missing in the environment variables.");
    setResult("Access key is missing. Please check your environment setup.");
  }
};


  return (
    <div className="flex justify-center px-4 md:px-8 lg:px-16">
      <div className="bg-white/30 backdrop-blur-md border border-white/40 shadow-lg p-6 sm:p-8 w-full max-w-xl rounded-xl">
        <h2 className="text-center text-2xl font-black mb-6">Contact us</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          {/* Full Name & Email Row */}
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="flex-1 p-3 rounded-lg bg-white/40 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="flex-1 p-3 rounded-lg bg-white/40 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message Box */}
          <textarea
            name="message"
            placeholder="Your message or query"
            required
            rows={6}
            className="w-full p-3 rounded-lg bg-white/40 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="self-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            Submit Form
          </button>
        </form>
        <span className="block mt-4 text-center text-gray-700">{result}</span>
      </div>
    </div>
  );
}
