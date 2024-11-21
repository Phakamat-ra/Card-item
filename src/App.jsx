import { FaAppleWhole } from "react-icons/fa6";
import { GiCutLemon } from "react-icons/gi"; 
import { FaRaspberryPi } from "react-icons/fa6";
import { PiOrange } from "react-icons/pi";
import Card from "./component/card";
import { useRef, useState,useLayoutEffect } from "react";
import {gsap} from 'gsap'


export default function App() {
  const [selected,setSelected] = useState(0);
  const cardsRef = useRef([])
  cardsRef.current = []
  const bg = useRef();

  const cards =[
    {
      title:"APPLE",
      bgCardColor:"bg-[#CC1918]",
      bgColor:"#ff7070",
      textColor:"text-white",
      icon:<FaAppleWhole/>,
      
    },

    {
      title:"LEMON",
      bgCardColor:"bg-[#fdff8f]",
      bgColor:"#f7e35b",
      textColor:"text-[#85822d]",
      icon:<GiCutLemon color="black"/>,
      
    },

    {
      title:"BERRY",
      bgCardColor:"bg-[#FF2557]",
      bgColor:"#FF6286",
      textColor:"text-white",
      icon:<FaRaspberryPi/>,
      
    },

    {
      title:"ORANGE",
      bgCardColor:"bg-[#FFBA36]",
      bgColor:"#f4a308",
      textColor:"text-white",
      icon:<PiOrange/>,
      
    },

  ];
  const handleClick = (key) => {
    setSelected(key);
  };
  
  useLayoutEffect(() => {
    let ctx = gsap.context(()=>{
      gsap.utils.toArray(cardsRef.current).forEach((card,index) => {
        if(`card-${index}` === `card-${selected}`){
          gsap.to(bg.current,{
            backgroundColor: cards[index].bgColor,
            duration : 2,
            ease : "none"
          });
        }
      });
    });
    return () => ctx.revert();
  },[selected])

  const addToRef = (el) =>{
    if ( el && !cardsRef.current.includes(el)){
      cardsRef.current.push(el)
    }
  };
 
  
  return <div ref={bg} className="h-screen flex items-center justify-center">
    {cards.map((card,key)=>{
      return (
        <div 
          ref={addToRef}
          key = {key}
          className={`card-${key} ${key === selected ? "w-[550px]" : "w-20" 
          } h-96 cursor-pointer transition-all ease-in-out duration-[2000ms]`}
          onClick={()=> handleClick(key)}
        >
          <Card card={card} selected={selected} index={key}/>
        </div>
      )
    })

    }
  </div>

}