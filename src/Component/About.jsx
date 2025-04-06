import { motion } from "framer-motion";
import chairmanImage from "../assets/chairman.png"; // Replace with actual image path
const About = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* College Name & Description */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Contai College of Learning & Management Science
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A premier institution dedicated to providing world-class education in
          <span className="font-semibold text-blue-600">
            {" "}
            Business, Technology, and Commerce.
          </span>
          We foster innovation, research, and leadership to shape the
          professionals of tomorrow.
        </motion.p>
      </div>

      {/* College Highlights */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { number: "20+", label: "Years of Excellence" },
          { number: "5000+", label: "Successful Alumni" },
          { number: "50+", label: "Qualified Faculty" },
          { number: "100+", label: "Campus Recruiters" },
          { number: "10+", label: "Professional Courses" },
          { number: "3", label: "Modern Campuses" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-blue-600">{item.number}</h3>
            <p className="text-gray-700 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Chairman's Message */}
      <div className="mt-16 max-w-5xl mx-auto text-center bg-white p-8 shadow-lg rounded-lg">
      <motion.img
        src={chairmanImage}
        alt="Chairman"
        className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto rounded-xl mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        />

        <motion.h3
          className="text-2xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Message from Our Chairman
        </motion.h3>
        <motion.p
          className="text-gray-600 mt-2 text-lg text-justify"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          "It gives me immense pleasure to welcome you to “Contai College of
          Learning & Management Science” (CCLMS). For quite some time we have
          felt the need for an advanced learning centre in this area to meet the
          growth. We can achieve this together with your earnest help and our
          commitment. The world is changing day by day. So, a great change has
          come in the field of education. We, in the technical & Management
          educational world, have our strategies in place to cope with the
          changes which are taking place around us. But in reality, we have
          found that none of us could run with other developed countries. But at
          present India is showing signs of improvement in the field of
          education in IT and management sectors. As a Chairman, I hope that,
          with the cooperation of all faculty members, other staff and the
          parents of the students, we will be able to serve the industry and
          society. I wish you all the best."
        </motion.p>
        <p className="text-gray-800 font-semibold mt-3 text-xl">
          - Mr. Nripen Kanti Rana, Chairman of CCLMS
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To be a globally recognized institution that nurtures talent and
            fosters research, innovation, and entrepreneurship in business,
            technology, and commerce.
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To provide high-quality education that empowers students with
            practical knowledge, ethical values, and industry-ready skills for a
            successful career.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
