import { useState } from "react"

export default function FQA() {
  const [data, setData] = useState([
    { id: "1", title: "Qustion 1", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut saepe maiores officiis fugiat nam excepturi rem numquam. Nesciunt iusto nemo error nisi, perspiciatis eius et dignissimos eum possimus quidem?" },
    { id: "2", title: "Qustion 2", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut saepe maiores officiis fugiat nam excepturi rem numquam. Nesciunt iusto nemo error nisi, perspiciatis eius et dignissimos eum possimus quidem?" },
    { id: "3", title: "Qustion 3", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut saepe maiores officiis fugiat nam excepturi rem numquam. Nesciunt iusto nemo error nisi, perspiciatis eius et dignissimos eum possimus quidem?" },
  ])
  const [selected, setSelected] = useState(null)


  const handelClick = (index: any) => {
    {
      !(selected == index) ? setSelected(index) : setSelected(null)
    }

  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className=" w-96 " >
        <div className="flex flex-col justify-between" >
          {data.map((items, index) => {
            return (
              <div key={items.id} className="bg-rose-50 mb-2 rounded-lg">
                <div className="flex flex-row justify-between p-3">
                  <h3 className="font-bold">{items.title}</h3>
                  <span className={`cursor-pointer`} onClick={() => handelClick(index)}>{selected == index ? "-" : "+"}</span>
                </div>
               
                <div className={`text-sm p-3 ${selected == index  ? "translate-y-0 " : "translate-y-full"} ease-in-out duration-700 `}>
                  <p>{selected == index && items.answer}</p>
                </div>
            
              </div>
            )
          })

          }

        </div>


      </div>
    </div>
  )
}
