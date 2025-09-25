import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <main>
      <section className="py-16 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Let’s Connect</h1>
          <p className="text-gray-300 mb-8">
            Reach out via email, phone, or connect with me on GitHub and LinkedIn.
          </p>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-4">
            <p>📧 <a href="mailto:teeluckvaish@gmail.com" className="underline">teeluckvaish@gmail.com</a></p>
            <p>📱 <a href="tel:+27635355861" className="underline">+27 63 535 5861</a></p>
            <p>🌍 Durban, South Africa</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 pt-6">
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/vaishnav-teeluck"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
