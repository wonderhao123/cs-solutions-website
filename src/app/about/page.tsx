const About = () => {
  return (
    <div className="container mx-auto">
      <div className="grid">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-2">About Us</h1>
        <p className="text-lg text-center text-gray-600 mt-5 mb-10">
          Welcome to CS Solutions, where Commitment meets Success.<br />
          Founded in 2024,
          we are dedicated to providing top-notch software solutions tailored to meet the unique
          needs of our clients.<br />
          Our team of experienced developers, designers, and project managers
          work collaboratively to deliver high-quality products that drive business success.<br />
          We pride ourselves on our commitment to customer satisfaction and our ability to adapt to the ever-changing technological landscape.<br />
          We are a leading software company committed to delivering innovative solutions
          that empower businesses and individuals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-blue-50 to-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
          <p>
            Our mission is to deliver innovative software solutions that empower businesses to achieve their goals.
            We strive to create products that enhance productivity and foster growth in the digital age.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h2>
          <p>
            We envision a future where technology seamlessly integrates with everyday life, enhancing user experiences
            and transforming the way we interact with the world. We aim to be at the forefront of this digital revolution.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Values</h2>
          <p>
            Integrity, innovation, and collaboration are at the core of our values. We believe in building long-term
            relationships with our clients and stakeholders by delivering exceptional value and service.
          </p>
          {/* <ul className="list-disc list-inside mb-4">
            <li><strong className="text-blue-600">Integrity</strong>: We uphold the highest standards of integrity in all our actions.</li>
            <li><strong className="text-blue-600">Innovation</strong>: We foster creativity and embrace change to drive progress.</li>
            <li><strong className="text-blue-600">Collaboration</strong>: We believe in the power of teamwork and open communication.</li>
          </ul> */}
          {/* <p>We believe in building long-term relationships with our clients and stakeholders by delivering exceptional value and service.</p> */}
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Team</h2>
          <p>
            Our team is composed of passionate professionals with diverse expertise in software development, design,
            and project management. Together, we work to create solutions that meet the unique needs of our clients.
          </p>
        </div>
      </div>

      <div className="mt-8 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-4">
          Interested in collaborating with us or have questions?&nbsp;
          <a href="/contact" className="text-blue-600 hover:underline">Contact us</a>
          &nbsp;to discuss your project and see how we can help you achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default About;