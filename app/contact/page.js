import Image from 'next/image';

export default function ContactSection() {
  return (
    <div>
      {/* Banner Image Section */}
      <div className="w-full relative h-48 sm:h-64 md:h-80 lg:h-96">
        <Image
          className="w-full h-full object-cover"
          src="/banner.png" // Image path
          alt="Banner Image"
          layout="fill"
          quality={75}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Info and Form Section */}
      <div className="container mx-auto px-4 py-8 space-y-8 lg:space-y-0 lg:flex lg:justify-between">
        {/* Contact Info Section */}
        <div className="lg:w-1/2 space-y-4">
          <p className="uppercase text-gray-500 text-center tracking-widest text-sm md:text-base font-semibold">
            Get in touch
          </p>
          <h4 className="text-xl md:text-2xl font-semibold">
          &#34; We&#39;d love to hear from you! Reach out to discuss how our AI solutions can fit your needs.&#34;
          </h4>
          <p className="text-gray-700">
            Have questions or need more information? We&#39;re here to help! Get in touch with us today.
          </p>
          <div className="flex flex-wrap gap-4 mt-3">
            <div>
              <h5 className="font-semibold">Call Center</h5>
              <p>
                +1 (321) 456-7890
                <br />
                +1 (987) 654-3210
              </p>
            </div>
            <div>
              <h5 className="font-semibold">Our Location</h5>
              <p>
                123 Innovation Drive,
                <br />
                Tech City, CA 94016
              </p>
            </div>
          </div>
          <p>
            Email:{" "}
            <a href="mailto:cube@aiportal.com" className="text-blue-500 underline">
              cube@aiportal.com
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-3 items-center">
            <span>Social Media:</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4267B2" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.73 0-1.325.595-1.325 1.325v21.351c0 .73.595 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.891-4.785 4.657-4.785 1.324 0 2.464.099 2.794.143v3.238h-1.917c-1.504 0-1.796.715-1.796 1.762v2.313h3.591l-.467 3.622h-3.124v9.294h6.126c.73 0 1.325-.595 1.325-1.324v-21.35c0-.73-.595-1.325-1.325-1.325z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0077B5" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 20h-3v-10h3v10zm-1.5-11.5c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm13.5 11.5h-3v-5.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v5.5h-3v-10h3v1.5c.87-.784 1.944-1.5 3-1.5 2.206 0 4 1.794 4 4v6.5z"/>
            </svg>
            
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
    
          <p>Your journey to mastering Artificial Intelligence starts here! Connect with us!</p>
          <form className="space-y-4 mt-4">
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Subject"
              required
            />
            <textarea
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full lg:w-auto flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-send mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M15.504 1.066a.5.5 0 0 0-.55-.05L1.406 7.032a.5.5 0 0 0 .11.91l4.84 1.15 1.15 4.84a.5.5 0 0 0 .91.11l5.916-13.548a.5.5 0 0 0-.028-.428zM6.23 8.072L12.5 2.5l-4.56 10.5L6.23 8.072z" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}