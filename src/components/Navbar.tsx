export default function Navbar() {
    const liStyle = "text-white/50 hover:text-white transition-all duration-300 hover:underline underline-offset-4"
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-black z-50 flex justify-between items-center px-10 text-white border-b border-white/20">
      <h1 className="text-3xl font-bold text-[#F2E1C2]" style={{ fontFamily: "VintageFace, cursive" }}>Brent Faiyaz</h1>
      <ul className="flex gap-4">
        <li className={liStyle}>
          <a href="#home">Home</a>
        </li>
        <li className={liStyle}>
          <a href="#about">About</a>
        </li>
        <li className={liStyle}>
          <a href="#music">Music</a>
        </li>
        <li className={liStyle}>
          <a href="#tour">Tour</a>
        </li>
      </ul>
      <button className="bg-[#F2E1C2] text-[#593A27] font-bold px-4 py-2 rounded-full hover:bg-[#593A27] hover:text-[#F2E1C2] transition-all duration-300">
        <a href="#contact">Contact</a>
      </button>
    </div>
  )
}