import Image from 'next/image'

export default function GalleryPage() {
  const images = [
    { src: '/images/campus-life-1.jpg', alt: 'Students in classroom', category: 'Campus Life' },
    { src: '/images/campus-life-2.jpg', alt: 'School grounds', category: 'Campus Life' },
    { src: '/images/event-1.jpg', alt: 'Annual sports day', category: 'Events & Competitions' },
    { src: '/images/event-2.jpg', alt: 'Science fair', category: 'Events & Competitions' },
    { src: '/images/achievement-1.jpg', alt: 'Students with academic awards', category: 'Achievements' },
    { src: '/images/achievement-2.jpg', alt: 'Sports team with trophy', category: 'Achievements' },
    { src: '/images/community-1.jpg', alt: 'Students in community service', category: 'Community Service' },
    { src: '/images/community-2.jpg', alt: 'Tree planting drive', category: 'Community Service' },
    { src: '/images/cultural-1.jpg', alt: 'Traditional dance performance', category: 'Cultural Events' },
    { src: '/images/cultural-2.jpg', alt: 'Art exhibition', category: 'Cultural Events' },
    { src: '/images/sports-1.jpg', alt: 'Cricket match', category: 'Sports' },
    { src: '/images/sports-2.jpg', alt: 'Yoga session', category: 'Sports' },
  ]

  return (
    <div>
      <div className="bg-cover bg-center h-64 relative" style={{backgroundImage: "url('/images/gallery-bg.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white">Photo Gallery</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience St. Thomas Through Our Lens</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Take a visual tour of life at St. Thomas Group of Educational Institutions. Our photo gallery showcases the vibrancy and diversity of student experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={400} 
                height={300} 
                className="rounded-lg shadow-md transition duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-lg font-semibold">{image.category}</p>
                <p className="text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}