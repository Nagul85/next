import Image from 'next/image';

export default function ReasonsToChooseUs() {
  const reasons = [
    {
      title: 'Unpredictable Quality Standards',
      description: "We're experts in accelerating performance and achieving high-impact outcomes.",
      icon: '/path-to-icon1.png', // Replace with the path to your icon
    },
    {
      title: 'Configuration and Customization',
      description: "We're at work in practically delivering the solutions to our customers.",
      icon: '/path-to-icon2.png', // Replace with the path to your icon
    },
    {
      title: 'Test, Inspections and Validation',
      description: 'We work to improve people’s lives and the environment through sustainable projects.',
      icon: '/path-to-icon3.png', // Replace with the path to your icon
    },
  ];

  return (
    <div>
      {/* Banner Image Section */}
      <div className="w-full relative h-64 md:h-96">
        <Image
          src="/banner.png" // Replace with your actual banner image path
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          quality={75} // Set image quality (optional)
          className="w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">  Services     </h1>
        </div>
      </div>

      {/* Reasons to Choose Us Section */}


      <section className="service container mx-auto py-8 px-6 h-auto">
  <div>
    <h2 className="text-black font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center">
      Services <span className="text-red-500">.</span>
    </h2>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      <div className="bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
        <div className="icon text-7xl pb-6 text-red-500">
          {/* You can replace with any custom icon or leave it empty */}
          🚀 {/* Example with a rocket emoji */}
        </div>
        <div className="desc">
          <h3 className="font-bold text-2xl leading-8">Artificial Intelligence</h3>
          <p className="font-normal text-lg my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!</p>
        </div>
      </div>
      <div className="bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
        <div className="icon text-7xl pb-6 text-red-500">
          {/* Replace with appropriate icon */}
          🌐 {/* Example with a globe emoji */}
        </div>
        <div className="desc">
          <h3 className="font-bold text-2xl leading-8">Internet of Things</h3>
          <p className="font-normal text-lg my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!</p>
        </div>
      </div>
      <div className="bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
        <div className="icon text-7xl pb-6 text-red-500">
          {/* Replace with appropriate icon */}
          🎨 {/* Example with a paint palette emoji */}
        </div>
        <div className="desc">
          <h3 className="font-bold text-2xl leading-8">Graphic Designer</h3>
          <p className="font-normal text-lg my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!</p>
        </div>
      </div>
      <div className="bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
        <div className="icon text-7xl pb-6 text-red-500">
          {/* Replace with appropriate icon */}
          💻 {/* Example with a laptop emoji */}
        </div>
        <div className="desc">
          <h3 className="font-bold text-2xl leading-8">Web Designer</h3>
          <p className="font-normal text-lg my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!</p>
        </div>
      </div>
      <div className="bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
        <div className="icon text-7xl pb-6 text-red-500">
          {/* Replace with appropriate icon */}
          🤖 {/* Example with a robot emoji */}
        </div>
        <div className="desc">
          <h3 className="font-bold text-2xl leading-8">Machine Learning</h3>
          <p className="font-normal text-lg my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!</p>
        </div>
      </div>
      <div className="bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
        <div className="icon text-7xl pb-6 text-red-500">
          {/* Replace with appropriate icon */}
          🌐 {/* Example with a globe emoji */}
        </div>
        <div className="desc">
          <h3 className="font-bold text-2xl leading-8">Web Development</h3>
          <p className="font-normal text-lg my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}