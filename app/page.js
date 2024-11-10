"use client"; // Marks this file as a client component
import Image from 'next/image';



export default function HomePage() {
  return (
    <div>
      {/* Banner Section */}
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
          <h1 className="text-3xl md:text-5xl font-bold text-white">Welcome to Our Website</h1>
        </div>
      </div>

      {/* Main Content */}
    
         {/* Get Quote Section */}
         <section className="flex flex-col px-4 md:px-28 py-8 bg-gradient-to-r from-[#E4F5FF] to-[#E4F5FF] gap-y-5">
        <p className="font-bold text-2xl md:text-3xl text-center text-[#1A306B]">
          Over 12 years of experience & knowledge for providing clean & green environment
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white hidden md:block px-6 py-2.5 font-semibold text-center"
        >
          Get A Quote
        </button>
      </section>

      {/* Our Speciality Section */}
      <section className="flex flex-col px-4 md:px-28 2xl:px-36 mt-16">
      <p className="font-bold text-2xl text-center md:text-left md:text-3xl 2xl:text-4xl text-[#111111]">
  OUR SPECIALITY
</p>
        <div className="py-5 mt-8 flex flex-col gap-5 2xl:gap-0">
          {/* Sewage Treatment Plant */}
          <div className="flex flex-col md:flex-row">
            <div className="py-5 pr-5 flex-1" data-aos="fade-right" data-aos-duration="2000">
              <Image
                src="/about-1.png"
                width={600}
                height={400}
                alt="Sewage Treatment Plant"
                className="w-[464px] h-[250px] 2xl:w-[600px] 2xl:h-[400px] border-[20px] border-[#ECF8FF]"
              />
            </div>
            <article
              className="flex flex-col justify-around 2xl:py-10 text-wrap flex-1"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <p className="font-bold text-[20px] 2xl:text-3xl">Sewage Treatment Plant</p>
              <p
  className="font-normal text-[20px] 2xl:text-[22px] leading-8 capitalize"
  style={{ textAlign: 'justify' }}
>
  We specialize in designing, fabricating, supplying, and commissioning Sewage Treatment Plants for industries, large
  colonies, hotels, hospitals, IT parks, and commercial buildings. STPs are now a statutory requirement mandated by State
  Pollution Control Boards. We focus on providing economical, easy-to-install, and operate compact STPs, as the high cost of
  land makes large treatment units less feasible for many.
</p>
            </article>
          </div>

          {/* Effluent Treatment Plant */}
          <div className="flex flex-col-reverse md:flex-row">
            <article
              className="flex flex-col justify-around 2xl:py-10 text-wrap flex-1"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p className="font-bold text-[20px] 2xl:text-3xl">Effluent Treatment Plant</p>
              <p className="font-normal text-[20px] 2xl:text-[22px] leading-8 capitalize">
                Our Effluent Treatment Plants (ETP) are designed to treat different types of wastewater by using advanced processes to remove
                organic and inorganic contaminants, oils, grease, heavy metals, and suspended solids. We create customized solutions based on
                the specific characteristics of the wastewater to meet government regulations and ensure the treated water meets permissible limits.
              </p>
            </article>
            <div className="py-5 md:pl-5 flex-1" data-aos="fade-left" data-aos-duration="2000">
              <Image
                src="/about-2.png"
                width={600}
                height={400}
                alt="Effluent Treatment Plant"
                className="w-[464px] h-[250px] 2xl:w-[600px] 2xl:h-[400px] border-[20px] border-[#ECF8FF] ml-auto"
              />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}