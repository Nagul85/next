import Image from 'next/image';


export default function AboutSection() {
    return (
      <div>
        {/* Banner Image Section */}
        <div className="w-full relative h-64 md:h-96">
        <Image className='w-full h-full'
        src="/banner.png"
        // Image path
          alt="Banner Image"
          // Fill the container
          objectFit="cover"
          width={300}
          height={300}
           // Cover the entire container
          quality={75} // Set image quality (optional)
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">   About us     </h1>
        </div>
      </div>
  
        {/* About Section Content */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 md:p-16 rounded-lg shadow-lg mt-8">
          {/* Left Side: Description */}
          <div className="md:w-2/3 text-gray-700 mb-6 md:mb-0 md:mr-8">
            <p className="text-lg mb-4">
              Established In 2012 In Pune, Maharashtra, India, We Are A Manufacturer,
              Wholesaler, And Retailer Specializing In Sewage Treatment Plants, Water
              Treatment Plants, Moving Bed Biofilm Reactors, And More. Our Products
              Are Known For Their Quality And Affordability, Making Them Accessible
              To A Wide Range Of Customers.
            </p>
            <p className="text-lg">
              In Addition To Our Core Offerings, We Provide Services Such As Erection
              Commissioning, Maintenance, And Rain Water Harvesting. Our
              Manufacturing Process Employs Highly Skilled Professionals And Modern
              Techniques. We Offer Customization To Meet Diverse Client Needs And Are
              Committed To Ensuring Timely Delivery Of Services And Facilities.
            </p>
          </div>
    
          {/* Right Side: Logo and Tagline */}
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <img
                src="/logo.png" // Replace with your logo's path
                alt="Ideal Systems & Services Logo"
                className="mx-auto mb-4 h-20 w-20"
              />
              <h2 className="text-2xl font-bold text-blue-800 mb-1">IDEAL SYSTEMS & SERVICES</h2>
              <p className="text-lg text-green-600">Green & Clean Solution</p>
            </div>
          </div>
        </div>

        <section className="flex flex-col px-10 md:px-28 2xl:px-36 py-8 bg-gradient-to-r from-[#E4F5FF] to-[#E4F5FF] gap-y-5">
      {/* Vision Section */}
      <article
        data-aos="fade-right"
        data-aos-duration="2000"
        className="flex flex-col shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[2px] justify-center bg-white p-8 lg:p-12 2xl:p-20 gap-y-3"
      >
        <div className="flex flex-row gap-x-5 md:mb-4 2xl:mb-8 items-center">
          {/* <Image src={IconVision} width={80} height={64} alt="Vision Icon" className="h-16 w-20" /> */}
          <span className="font-semibold text-[32px] 2xl:text-4xl text-[#1E1E1E]">OUR VISION</span>
        </div>
        <span className="font-medium text-base md:text-lg 2xl:text-xl text-[#2B2F3E] text-justify capitalize">
          Company&#39;s aim is to make a positive impact on society and the environment by implementing projects that are not
          only sustainable but also integrated, meaning they consider various aspects and stakeholders. This approach ensures
          that your projects not only benefit the environment but also have a positive impact on people&#39;s lives, such as
          creating jobs and improving living conditions. Additionally, your forward-looking vision means that you are proactive
          in anticipating future challenges and opportunities, ensuring that your projects remain relevant and impactful in the long run.
          Finally, your commitment to developing local economies shows that you prioritize empowering communities and fostering economic growth at the grassroots level.
        </span>
      </article>

      {/* Mission Section */}
      <article
        data-aos="fade-left"
        data-aos-duration="2000"
        className="flex flex-col shadow-2xl shadow-[rgba(2, 49, 168, 0.15)] rounded-[2px] justify-center bg-white p-8 lg:p-12 2xl:p-20 gap-y-3"
      >
        <div className="flex flex-row gap-x-5 md:mb-4 2xl:mb-8 items-center justify-end">
          <span className="font-semibold text-[32px] 2xl:text-4xl text-[#1E1E1E]">OUR MISSION</span>
          {/* <Image src={IconMission} width={80} height={64} alt="Mission Icon" className="h-16 w-20" /> */}
        </div>
        <span className="font-medium text-base md:text-lg 2xl:text-xl text-[#2B2F3E] text-justify capitalize">
          Company focuses on creating a multidisciplinary approach, which means that you involve experts from various fields such as engineering,
          environmental science, economics, and social sciences. This approach allows you to consider different perspectives and expertise, ensuring
          that your projects are comprehensive and well-rounded. By striking the right balance between innovation and tradition, you aim to leverage
          cutting-edge technologies and ideas while also respecting and incorporating traditional practices and knowledge. This balance ensures that
          your projects are not only innovative and effective but also culturally and socially relevant, enhancing their overall impact and acceptance
          within the community.
        </span>
      </article>
    </section>

      </div>
    );
  }