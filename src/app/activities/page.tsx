export default function ActivitiesPage() {
    return (
      <div>
        <div className="bg-cover bg-center h-64 relative" style={{backgroundImage: "url('/images/activities-bg.jpg')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-white">Activities & Awards</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Fostering All-Round Development</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            At St. Thomas Group of Educational Institutions, we believe that education goes beyond the classroom. Our schools offer a variety of extra-curricular activities that nurture the physical, mental, and emotional growth of our students.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Sports Programs</h3>
              <p>Engage in a wide range of sports like kabaddi, kho-kho, and more. Our sports programs help students develop teamwork, leadership, and physical fitness.</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Cultural Programs</h3>
              <p>Participate in drama, music, and dance competitions to develop creative skills. These programs help students express themselves and build confidence.</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-yellow-800">Community Service</h3>
              <p>Our students actively participate in various outreach programs that support underprivileged communities, fostering empathy and social responsibility.</p>
            </div>
            <div className="bg-red-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-red-800">Academic Clubs</h3>
              <p>Join various academic clubs like the Science Club, Math Club, and Literary Club to explore subjects beyond the curriculum and develop specialized skills.</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Art & Craft</h3>
              <p>Express creativity through various art forms including painting, sculpture, and handicrafts. Annual exhibitions showcase student artwork.</p>
            </div>
            <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-800">Yoga & Meditation</h3>
              <p>Learn ancient Indian practices of yoga and meditation to promote physical health, mental clarity, and emotional balance.</p>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-center">Recent Accolades</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>First place in the State Level Science Exhibition</li>
                <li>Winners of the Inter-School Debate Competition</li>
                <li>National level recognition in the Math Olympiad</li>
                <li>Outstanding performance in CBSE Board Exams</li>
                <li>State Champions in Under-17 Kabaddi Tournament</li>
                <li>Best School Award for Community Service Initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }