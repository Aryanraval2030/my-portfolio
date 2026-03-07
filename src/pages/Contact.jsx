import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const [isSet, setSsSet] = useState(false);

  const handle = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ijr7lp5",
        "template_cxr7gvb",
        form.current,
        "JsDrSNprZkt_lnq5J",
      )
      .then(
        () => {
          setSsSet(true);
          form.current.reset();

          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("Failed to send message. Try again!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
      );
  };

  return (
    <section className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6">
      <ToastContainer />

      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-gray-400">
            Feel free to reach out for collaborations 👋
          </p>
        </div>

        <form
          ref={form}
          onSubmit={handle}
          className="bg-[#161b22] p-8 rounded-xl border border-gray-700 space-y-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
