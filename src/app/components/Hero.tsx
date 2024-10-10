import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{backgroundImage: "url('/images/bg-image.jpeg')"}}>
      <div className="absolute inset-0 bg-[#58A6D6] bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
          {/* <span className="text-stroke"></span><br /> */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">St. Thomas Hr. Sec. School, Rozibeg</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 float">Illuminating Futures Since 1986</p>
        <Link href="/about" className="glassmorphism hover-bright bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
          Discover Our Legacy
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  )
}