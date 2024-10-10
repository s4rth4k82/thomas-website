import Image from "next/image";
import { FaGraduationCap, FaBook, FaUsers, FaLightbulb } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-96 relative"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              About St. Thomas
            </span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Journey of Excellence
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              St. Thomas Higher Secondary School, Rozibeg under the management
              of St. John Chrysostom Diocese of Gurgaon, The management with the
              desire and erge to serve the underprivileged took over an existing
              school, Green Valley International at Rozibeg in the year 2023.
              Run by St. John Chrysostom Diocese of Gurgaon, the school has His
              Excellency Most Rev.Dr. Thomas Mar Anthonios, Bishop of St John
              Chrysostom Diocese of Gurgaon as its patron. The institution also
              receives support from the local patron Most Rev. Alangaram Arokia
              Sebastin Durairaj SVD Archbishop of Bhopal. has been a beacon of
              educational excellence since its inception in 1986. With a strong
              commitment to serving society, our schools foster intellectual
              growth, moral development, and social responsibility.
            </p>
            <p className="text-lg">We operate three schools in Bhopal:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                St. Thomas Convent School, Arera Hills (M.P. Board Middle
                School)
              </li>
              <li>St. Thomas Convent Sr. Sec. School, Ayodhya Nagar (CBSE)</li>
              <li>St. Thomas Hr. Sec. School, Rozibeg (M.P. Board)</li>
            </ul>
            <p className="text-lg">
              Additionally, the Mar Baselios College of Nursing offers BSc and
              MSc programs, reflecting our dedication to higher education.
            </p>
          </div>
          <div className="glassmorphism p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-center text-yellow-600">
              Our Core Values
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <FaGraduationCap className="text-4xl text-yellow-500 mx-auto mb-2" />
                <p className="font-medium">Excellence</p>
              </div>
              <div className="text-center">
                <FaBook className="text-4xl text-blue-500 mx-auto mb-2" />
                <p className="font-medium">Knowledge</p>
              </div>
              <div className="text-center">
                <FaUsers className="text-4xl text-green-500 mx-auto mb-2" />
                <p className="font-medium">Community</p>
              </div>
              <div className="text-center">
                <FaLightbulb className="text-4xl text-red-500 mx-auto mb-2" />
                <p className="font-medium">Innovation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-lg shadow-md hover-grow">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-800">
                Our Mission
              </h3>
              <p className="text-lg">
                Our mission is to produce intellectually trained, morally
                upright, emotionally mature, and socially committed citizens.
                Through holistic education, we foster the integral development
                of every student.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg shadow-md hover-grow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Our Vision
              </h3>
              <p className="text-lg">
                We envision a world where our students are the bearers of light,
                using their education to make the world a more just and
                equitable place.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Leadership
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "His Excellency Most Rev. Dr. Thomas Mar Anthonios",
                role: "Patron",
                image: "/images/Gurgaon.jpg",
              },
              {
                name: "Rev. Dr. Reni Mudampally",
                role: "Director",
                image: "/images/Principal.jpg",
              },
              {
                name: "Rev. Fr. Jinu Arappurackal",
                role: "Bursar",
                image: "/images/Fr.Jinu.jpg",
              },
              {
                name: "Mrs. Betty Jacob",
                role: "Principal",
                image: "/images/betty.png",
              },
            ].map((leader, index) => (
              <div key={index} className="text-center hover-grow">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    width={200}
                    height={50}
                    src={leader.image}
                    alt={leader.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
