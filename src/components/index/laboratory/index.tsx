/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useCallback, useEffect } from "react";
import './index.css'

function Laboratory(){
  const isshow = useRef<any>(false)
  const House = useRef<any>()
  const roomBgOpacity = useRef<any>(0)
  let timer: NodeJS.Timeout;


  useEffect(()=>{
    window.addEventListener('scroll', setStyle)
  },[])


  const transitionFun = (type:any)=>{
    if(type === 'add'){
      
        console.log(123123131)
        roomBgOpacity.current+=0.01
        if(roomBgOpacity.current>=1){
          clearInterval(timer)
          roomBgOpacity.current=1
        }
    } else {
      console.log(2222222)
        roomBgOpacity.current-=0.01
        if(roomBgOpacity.current<=0){
          clearInterval(timer)
          roomBgOpacity.current=0
        }
    }
    
    
  }

  const setStyle = useCallback((e)=>{
    const scrollY = window.scrollY || 0;
    const HouseTop = House.current.getBoundingClientRect().top
    console.log(scrollY, HouseTop, HouseTop<= window.innerHeight)
    if(HouseTop<= window.innerHeight){
      isshow.current = true;
      timer = setInterval(()=>{transitionFun('add')},10)
    } else {
      isshow.current = false;
      timer = setInterval(()=>{transitionFun('cut')},10)
    }


  },[])
  return(
    <>
      <div ref={House} className="laboratory_box">
        <div className="laboratory_content">
          <div  className="laboratory">
            <div className="roomContainer">
              <div className="roomBg" style={{top: '-100vh', opacity: `${roomBgOpacity.current}`, transform:'scale(2,2)'}}>
                <div className="houseBg" style={{backgroundPositionY: '-20%'}}></div>
                <div className="tableRGroup" style={{top: '-100vh', opacity: 0, transform:'scale(2,2) tranaslate(0,-600px)'}}>
                  <div className="style_table">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Laboratory