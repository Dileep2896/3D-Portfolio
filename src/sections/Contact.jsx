import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import ContactExperience from "../components/Models/contact/ContactExperience";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Let's chat over a coffee" sub="Have an offer?" />

        <div className="mt-16 grid-12-cols">
          <div className="xl:col-span-5 ">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    className="w-full p-3 rounded-md bg-grey-100 text-white placeholder-grey-50 
             focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    className="w-full p-3 rounded-md bg-grey-100 text-white placeholder-grey-50 
             focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    className="w-full p-3 rounded-md bg-grey-100 text-white placeholder-grey-50 
             focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group w-full">
                    <div className="bg-circle" />
                    <span className="icon-prefix">
                      <FaEnvelope className="icon-one" />
                      <FaPaperPlane className="icon-two" />
                    </span>
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#000000ba] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </section>
  );
};

export default Contact;
