import Hero from './components/Hero'
import Link from 'next/link'
import { FaGraduationCap, FaBook, FaUsers } from 'react-icons/fa'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Welcome to St. Thomas Hr. Sec. School, Rozibeg</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-lg shadow-md hover-grow">
              <FaGraduationCap className="text-4xl text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Legacy</h3>
              <p className="mb-4">Established in 1986, we have been nurturing young minds and shaping futures for over three decades.</p>
              <Link href="/about" className="text-yellow-600 hover:text-yellow-700 font-medium">Learn More &rarr;</Link>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg shadow-md hover-grow">
              <FaBook className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Academic Excellence</h3>
              <p className="mb-4">Our curriculum is designed to foster critical thinking, creativity, and a love for learning.</p>
              <Link href="/activities" className="text-blue-600 hover:text-blue-700 font-medium">Explore Programs &rarr;</Link>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg shadow-md hover-grow">
              <FaUsers className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Holistic Development</h3>
              <p className="mb-4">We believe in nurturing not just academic skills, but also character, values, and life skills.</p>
              <Link href="/activities" className="text-green-600 hover:text-green-700 font-medium">See Activities &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose St. Thomas?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "State-of-the-Art Facilities", description: "Our campuses are equipped with modern laboratories, libraries, and sports facilities to support comprehensive learning." },
              { title: "Experienced Faculty", description: "Our teachers are not just educators, but mentors who guide students towards their full potential." },
              { title: "Cultural Diversity", description: "We celebrate India's rich cultural heritage and foster an inclusive environment for all students." },
              { title: "Community Engagement", description: "We encourage our students to be responsible citizens through various community service initiatives." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-grow">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Join Our Community?</h2>
          <p className="mb-8 text-lg">Discover the St. Thomas difference and give your child the best start in life.</p>
          <Link href="/contact" className="glassmorphism bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}