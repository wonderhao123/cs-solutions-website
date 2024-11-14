const allServices = [
  {
    title: "Custom Software Development",
    description:
      "We design and develop tailored software solutions to meet the unique needs of your business. From concept to deployment, we ensure scalable, efficient, and secure software that drives success.",
    image: "/images/custom_software.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "Our mobile app development team creates intuitive and robust apps for iOS and Android platforms. We focus on user experience, performance, and scalability to help your business engage customers on the go.",
    image: "/images/mobile_app.jpg",
  },
  {
    title: "Web Application Development",
    description:
      "We build powerful and scalable web applications using the latest technologies. From e-commerce platforms to SaaS applications, we deliver solutions that provide seamless user experiences and meet business objectives.",
    image: "/images/web_app.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "Our expert UI/UX designers craft engaging, intuitive, and visually appealing designs. We prioritize the user journey, ensuring your products deliver a flawless and enjoyable experience for your customers.",
    image: "/images/ui_ux_design.jpg",
  },
  {
    title: "Cloud Solutions",
    description:
      "Leverage the power of the cloud to scale your business. Our cloud services offer secure, scalable, and cost-effective solutions for infrastructure, storage, and application deployment, tailored to your business needs.",
    image: "/images/cloud_solutions.jpg",
  },
];

const Home = () => {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-20 mb-3 rounded-lg shadow-lg"> */}
      <section className="bg-[url('/images/bg-wave.jpg')] bg-cover bg-center text-white py-20 mb-3 rounded-lg shadow-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Empowering Your Business</h2>
          <p className="text-xl mb-6">
            We provide innovative software solutions to help you stand out in the digital age.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-5 mb-3">
        <div className="container mx-autor">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-gray-200 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">About Us</h3>
              <p className="text-lg mb-4">
                CS Solutions is a team of experienced developers and designers dedicated to providing high-quality, customized software products. Our mission is to help businesses achieve digital transformation through technological innovation, enhancing their competitiveness.
              </p>
              <a href="/about" className="text-blue-600 font-semibold hover:underline">Learn More &rarr;</a>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-gray-200 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Ready to Kickstart Your Project?</h3>
              <p className="text-lg mb-6">
                Contact us for customized software solutions to help you achieve your business goals.
              </p>
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500"
              >
                Contact Us
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-5 mb-3">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={index} className="relative rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-4">{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 ">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-3">Client Testimonials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden p-6 bg-gradient-to-r from-blue-50 to-gray-200 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-blue-600">Mr. Li, ABC Company</h4>
              <p className="text-lg italic">
                "CS Solutions helped us develop a customized management system, greatly enhancing our operational efficiency. The team is professional and responsive, highly recommended!"
              </p>
            </div>

            <div className="overflow-hidden p-6 bg-gradient-to-r from-blue-50 to-gray-200 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-blue-600">Ms. Wang, DEF Enterprises</h4>
              <p className="text-lg italic">
                "Their mobile app development service is outstanding. Our app received great feedback after launch, and downloads surged. Thanks to CS-S team's efforts!"
              </p>
            </div>

            <div className="overflow-hidden p-6 bg-gradient-to-r from-blue-50 to-gray-200 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-blue-600">Mr. Zhang, GHI Institution</h4>
              <p className="text-lg italic">
                "During our cloud migration, CS-S provided comprehensive support and solutions, ensuring a smooth transition. A very professional and reliable partner."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;