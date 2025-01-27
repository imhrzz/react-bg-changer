import { useState } from "react"

function App() {
  const [color,setColor]= useState("olive")
  return (
    <> 
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex felx-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-xl ">
         <button  onClick={()=>setColor("red")}className="outline-none px-2 py-1 shadow-lg rounded-full  text-cyan-50    "
         style={{backgroundColor:"red"}}>red</button>
         <button   onClick={()=>setColor("green")} className="outline-none px-2 py-1 shadow-lg rounded-full text-cyan-50 "
         style={{backgroundColor:"green"}}>green</button>
         <button  onClick={()=>setColor("blue")}  className="outline-none px-2 py-1 shadow-lg rounded-full text-cyan-50"
         style={{backgroundColor:"blue"}}>blue</button>
         <button   onClick={()=>setColor("indigo")} className="outline-none px-2 py-1 shadow-lg rounded-full text-cyan-50 "
         style={{backgroundColor:"indigo"}}>indigo</button>
         <button  onClick={()=>setColor("purple")} className="outline-none px-2 py-1 shadow-lg rounded-full text-cyan-50 "
         style={{backgroundColor:"purple"}}>purple</button>
         <button onClick={()=>setColor("black")}  className="outline-none px-2 py-1 shadow-lg rounded-full text-cyan-50 "
         style={{backgroundColor:"black"}}>black</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App 
