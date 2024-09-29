"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "/images/gallery/kids1.jpg",
    alt: "Students in classroom",
    category: "Campus Life",
  },
  {
    src: "/images/gallery/kids1.jpg",
    alt: "School grounds",
    category: "Campus Life",
  },
  {
    src: "/images/event-1.jpg",
    alt: "Annual sports day",
    category: "Events & Competitions",
  },
  {
    src: "/images/event-2.jpg",
    alt: "Science fair",
    category: "Events & Competitions",
  },
  {
    src: "/images/achievement-1.jpg",
    alt: "Students with academic awards",
    category: "Achievements",
  },
  {
    src: "/images/achievement-2.jpg",
    alt: "Sports team with trophy",
    category: "Achievements",
  },
  {
    src: "/images/community-1.jpg",
    alt: "Students in community service",
    category: "Community Service",
  },
  {
    src: "/images/community-2.jpg",
    alt: "Tree planting drive",
    category: "Community Service",
  },
  {
    src: "/images/cultural-1.jpg",
    alt: "Traditional dance performance",
    category: "Cultural Events",
  },
  {
    src: "/images/cultural-2.jpg",
    alt: "Art exhibition",
    category: "Cultural Events",
  },
  { src: "/images/sports-1.jpg", alt: "Cricket match", category: "Sports" },
  { src: "/images/sports-2.jpg", alt: "Yoga session", category: "Sports" },
];

const categories = [...new Set(images.map((img) => img.category))];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [modalImage, setModalImage] = useState(null);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  const openModal = (image) => {
    console.log(image);
    setModalImage(image);
    console.log(modalImage);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="bg-cover bg-center h-96 relative"
        style={{ backgroundImage: "url('/images/gallery-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              Our Vibrant School Life
            </span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Experience St. Thomas Through Our Lens
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600">
          Take a visual tour of life at St. Thomas Group of Educational
          Institutions. Our photo gallery showcases the vibrancy and diversity
          of student experiences.
        </p>

        <div className="mb-16">
          <Slider {...carouselSettings}>
            {images.map((image, index) => (
              <div key={index} className="outline-none">
                <div
                  className="relative h-[70vh] rounded-lg overflow-hidden shadow-xl cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 className="text-2xl font-semibold text-white">
                      {image.category}
                    </h3>
                    <p className="text-lg text-gray-200">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Explore by Category
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-yellow-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images
            .filter((image) => image.category === activeCategory)
            .map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  layout="responsive"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {image.category}
                    </h4>
                    <p className="text-sm text-gray-200">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative bg-white rounded-lg overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 transition-colors duration-300 z-10"
                onClick={closeModal}
              >
                <FaTimes size={24} />
              </button>
              <div className="relative w-full h-[60vh] md:h-[70vh]">
                <Image
                  src={modalImage.src}
                  alt={modalImage.alt}
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{modalImage.category}</h3>
                <p className="text-gray-600">{modalImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} before:content-[''] z-10`}
//       style={{
//         ...style,
//         display: "block",
//         background: "rgba(0,0,0,0.5)",
//         borderRadius: "50%",
//         padding: "10px",
//       }}
//       onClick={onClick}
//     >
//       <FaChevronRight className="text-white" />
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} before:content-[''] z-10`}
//       style={{
//         ...style,
//         display: "block",
//         background: "rgba(0,0,0,0.5)",
//         borderRadius: "50%",
//         padding: "10px",
//       }}
//       onClick={onClick}
//     >
//       <FaChevronLeft className="text-white" />
//     </div>
//   );
// }
