import Courses from "./Components/courses"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <div className="grid grid-cols-2 text-justify border-b">
        <div>
          <h3 className="font-bold text-3xl ml-7 p-3 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">100xDevs</h3>
        </div>
        <div className="text-end mr-24 p-3">
          <button className="bg-gradient-to-r from-cyan-500  to-blue-500 font-mono text-white mr-5 rounded pl-3 pr-3 pt-1 pb-1">Open source</button>
          <button className="text-white font-mono rounded pl-3 pr-3 pt-1 pb-1 bg-gradient-to-r from-cyan-500  to-blue-500">Youtube</button>
        </div> 
      </div>
      <div className="w-max-screen-xl flex justify-center rounded-md pt-12"><video src="https://appxcontent.kaxa.in/uploadvideo2/2024-06-26/harkirat_db/2024-06-26-0.31178257236835916.mp4" className="rounded max-w-[820px]" controls></video></div>
      <Courses />
      <Footer />
    </>
  )
}

export default App
