import { useState } from "react"

export default function Home() {
 const[selected,setSelected]=useState(false)
  function handelClick(){
   setSelected(true)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
       <div className="bg-rose-200 w-96 rounded-lg " >
        <div className="flex flex-row justify-between p-3" onClick={handelClick}>
        <h6 className="" >Qustion 1</h6>
        <span className="cursor-pointer">+</span>
        </div>
        {selected&&<p className="text-sm p-3 bg-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, qui officiis. Tempora at hic earum inventore consequuntur totam assumenda magni autem animi. Quis illo ea laboriosam quas at excepturi sapiente.</p>}
        
      </div>
    </main>
  )
}
