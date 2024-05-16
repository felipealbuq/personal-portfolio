"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    setIsLoading(false);

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] justify-center items-center">
      <section className="text-white container mx-auto px-12 py-20 lg:py-0 grid md:grid-cols-2 my-12 md:my-12 gap-4 relative">
        <div className="relative z-1">
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I am actively seeking new opportunities and welcome inquiries from potential
            collaborators. My inbox is always open, so feel free to reach out with a
            question, expression of interest, or simply to connect. I will endeavor to
            respond promptly.
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/felipealbuq">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/felipe-albuquerque-de-carvalho-8b255122a">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-xl mt-2">
              Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="john@google.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className={
                  !isLoading ? "bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    : "bg-slate-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                }
                disabled={isLoading}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;
