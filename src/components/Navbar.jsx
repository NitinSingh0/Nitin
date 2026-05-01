import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState({
    email: "",
    message: "",
  });

  // 🔹 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Handle Resume Click
  const handleResumeClick = () => {
    const now = new Date().toLocaleString();

    const userInfo = `
Device: ${navigator.userAgent}
Platform: ${navigator.platform}
Language: ${navigator.language}
Time: ${now}
`;

    // 🔹 Send "Resume Viewed" Email
    emailjs.send(
      "service_uas98xb",
      "template_scnidyx",
      {
        from_name: "Portfolio Visitor",
        to_name: "Nitin",
        from_email: "anonymous@visitor.com",
        to_email: "31nitinthakur@gmail.com",
        message: `Someone viewed your resume.\n\n${userInfo}`,
      },
      "nfIVWaL3ADetTBmMR",
    );

    // 🔹 Open Resume
    window.open(
      "https://drive.google.com/file/d/1nfNUHtWMd-a3oO0eU3eAI_zq2shoEUzU/view?usp=sharing",
      "_blank",
    );

    // 🔹 Show Feedback after delay
    setTimeout(() => {
      setShowFeedback(true);
    }, 2000);
  };

  // 🔥 Handle Feedback Submit
  const handleFeedbackSubmit = () => {
    const now = new Date().toLocaleString();

    emailjs.send(
      "service_uas98xb",
      "template_scnidyx",
      {
        from_name: feedback.email || "Anonymous Visitor",
        to_name: "Nitin",
        from_email: feedback.email || "anonymous@visitor.com",
        to_email: "31nitinthakur@gmail.com",
        message: `
Resume Feedback:

Message: ${feedback.message || "No feedback provided"}
Email: ${feedback.email || "Not provided"}
Time: ${now}
        `,
      },
      "nfIVWaL3ADetTBmMR",
    );

    alert("Thanks for your feedback 🚀");

    setFeedback({ email: "", message: "" });
    setShowFeedback(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              Nitin Singh &nbsp;
              <span className="sm:block hidden">| Full Stack Developer</span>
            </p>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[16px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            {/* 🔥 RESUME BUTTON */}
            <button
              onClick={handleResumeClick}
              className="bg-[#915EFF] px-4 py-2 rounded-lg text-white text-sm font-medium hover:bg-[#7a4ed9] transition"
            >
              Download Resume
            </button>
          </ul>

          {/* MOBILE MENU */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px]"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl`}
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="text-white text-[16px] cursor-pointer"
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}

                {/* MOBILE RESUME */}
                <li>
                  <button
                    onClick={handleResumeClick}
                    className="bg-[#915EFF] w-full py-2 rounded text-white"
                  >
                    Resume
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* 🔥 FEEDBACK MODAL */}
      {showFeedback && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#1d1836] p-6 rounded-xl w-[90%] max-w-md">
            <h2 className="text-white text-xl font-bold mb-3">
              Quick Feedback
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              What do you think about my resume?
            </p>

            <input
              type="email"
              placeholder="Your email (optional)"
              className="w-full mb-3 p-3 rounded bg-black text-white"
              value={feedback.email}
              onChange={(e) =>
                setFeedback({ ...feedback, email: e.target.value })
              }
            />

            <textarea
              rows={4}
              placeholder="Your feedback..."
              className="w-full mb-3 p-3 rounded bg-black text-white"
              value={feedback.message}
              onChange={(e) =>
                setFeedback({ ...feedback, message: e.target.value })
              }
            />

            <div className="flex justify-between">
              <button
                onClick={() => setShowFeedback(false)}
                className="text-gray-400"
              >
                Skip
              </button>

              <button
                onClick={handleFeedbackSubmit}
                className="bg-[#915EFF] px-4 py-2 rounded text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
