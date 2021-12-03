import React, { useState,useEffect, useRef } from 'react'
import './index.css'
import './demo.css'
import { gsap } from "gsap";
import { Container } from 'react-bootstrap';


const useMove = () => {
	const [state, setState] = useState({x: 0, y: 0});

	const handleMouseMove = (e: any) => {
		e.persist();
		setState(state => ({...state, x: e.clientX, y: e.clientY}));
	};
	return {
		x: state.x,
		y: state.y,
		handleMouseMove,
	}
}


function NewView(){
  const skyBox = useRef<any>()
  const styleRoomBg = useRef<any>()
  const Door = useRef<any>()
  const HouseBg = useRef<any>()
  const styleTable = useRef<any>()
  const scrollContainer = useRef<any>()
  const TableBottomRef1 = useRef<any>()
  const TableBottomRef2 = useRef<any>()
  const TableTopRef = useRef<any>()
  const skyBoxTop = useRef<any>(0)
  const { x, y, handleMouseMove } = useMove();
  const beforeScrollTop = useRef<any>(document.body.scrollTop)

  const doorLeft = useRef<any>(-10.2)
  const styleRoomScale = useRef<any>(1.8)
  const HouseBgFilter = useRef<any>(0)
  const styleTableScale = useRef<any>(2)
  const TableTop = useRef<any>(-800)
  const TableBottom = useRef<any>(600)

	let picStyle = {
			inset: "3rem",
			transform: 'translate3d( '+((x - window.innerWidth /2) / 30)+'px , '+((y - window.innerHeight) /30)+'px, 0 )',
	}


  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll)
  });
  const handleScroll = (e:any)=>{
    var afterScrollTop = document.body.scrollTop;
    // var delta = afterScrollTop - beforeScrollTop.current;
    if( afterScrollTop+window.innerHeight-100 >= scrollContainer.current.getBoundingClientRect().height) return
    

    countSkyBoxTop(); // 设置skyBg
    if(afterScrollTop-100 > skyBox.current.getBoundingClientRect().height){
      gsap.to([styleRoomBg.current], {
        opacity: 1,
        duration: 1,
      });
      countDoorLeft()
    } else {
      gsap.to([styleRoomBg.current], {
        opacity: 0,
        duration: 1,
      });
    }


    countHouseBgFilter()
    conntStyleTableLocation()
    
    beforeScrollTop.current = afterScrollTop;
    
  }

  const countSkyBoxTop = ()=>{
    var afterScrollTop = document.body.scrollTop;
    var delta = afterScrollTop - beforeScrollTop.current;
    skyBoxTop.current -=delta;
    gsap.to([skyBox.current], {
      transform: `translate3d(0, ${skyBoxTop.current}px,0)`,
    });
  }

  const countDoorLeft = ()=>{
    if(HouseBgFilter.current >0) return
    var afterScrollTop = document.body.scrollTop;
    var delta = afterScrollTop - beforeScrollTop.current;
  
    doorLeft.current +=delta*0.1/7
    styleRoomScale.current -=delta*.001

    if(doorLeft.current>=.8) doorLeft.current = 0.8;
    if(doorLeft.current <= -10.2) doorLeft.current = -10.2;
    if(styleRoomScale.current>=1.8) styleRoomScale.current = 1.8
    if(styleRoomScale.current<=1) styleRoomScale.current = 1
    gsap.to([Door.current], {
      left: `${doorLeft.current}%`,
    });
    gsap.to([styleRoomBg.current], {
      transform: `scale(${styleRoomScale.current}, ${styleRoomScale.current})`
    });
  }

  const countHouseBgFilter=()=>{
    var afterScrollTop = document.body.scrollTop;
    var delta = afterScrollTop - beforeScrollTop.current;

    if(styleRoomScale.current === 1){
      HouseBgFilter.current +=delta*0.1/7

      if(HouseBgFilter.current>=5) HouseBgFilter.current = 5
      if(HouseBgFilter.current<=0) HouseBgFilter.current=0
      gsap.to([HouseBg.current], {
        filter: `blur(${ HouseBgFilter.current}px)`
      });
    } else {
      HouseBgFilter.current=0
    }
  }

  const conntStyleTableLocation = ()=>{
    
    if(styleRoomScale.current !== 1) {
      TableTop.current = -800;
      TableBottom.current = 600;
      return
    }

    var afterScrollTop = document.body.scrollTop;
    var delta = afterScrollTop - beforeScrollTop.current;

    TableBottom.current -=delta
    TableTop.current +=delta*1.3
    styleTableScale.current -=delta*.003
    if(TableBottom.current>=600) TableBottom.current = 600
    if(TableBottom.current<=0) TableBottom.current= 0
    if(TableTop.current>=0) TableTop.current = 0
    if(TableTop.current<=-800) TableTop.current= -800
    if(styleTableScale.current<=1) styleTableScale.current = 1;
    if(styleTableScale.current >=2) styleTableScale.current = 2;
    gsap.to([TableBottomRef1.current], {
      transform: `translate3d(0px,${TableBottom.current}px,0px)`
    });
    gsap.to([TableBottomRef2.current], {
      transform: `translate3d(0px,${TableBottom.current}px,0px)`
    });
    gsap.to([TableTopRef.current], {
      transform: `translate3d(0px,${TableTop.current}px,0px)`
    });
    gsap.to([styleTable.current], {
      transform: `scale(${styleTableScale.current}, ${styleTableScale.current})`
    });
  }


  
  return(
    <div>
      <div ref={scrollContainer} className="index_scrollContainer">
        <div className="index_content">
          <div className="index_sky">
            <div ref={skyBox} className="style_skyBg">
              <div className="banner" id="banner" onMouseMove={handleMouseMove}>
                <div className="banner_text"  style={picStyle}>
                  <div className="banner_text_box">
                    <img src={require('../../images/newBanner_text.webp').default} alt=""/> 
                  </div>
                </div>
                <video width="100%"  preload="auto" autoPlay loop muted playsInline>
                  <source src={require('../../images/newBanner.mp4').default} type="video/mp4" />
                </video>
              </div>
              <div className="talk_video">
                  <div className="talk_video_box">
                    <div className="left_box">
                      <img src={require('../../images/left_text.png').default} alt="" width='100%'/> 
                    </div>
                    <div className="right_box">
                      <div className="video_box">
                        <img src={require('../../images/right_video.png').default} alt="" width='100%'/>
                        <div className="video">
                        <video width="100%"  preload="auto" autoPlay loop muted playsInline>
                          <source src={require('../../images/newBanner.mp4').default} type="video/mp4" />
                        </video>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="index_house">
            <div className="style_roomContainer">
              <div ref={styleRoomBg} className="style_roomBg" style={{transform: `scale(${styleRoomScale.current}, ${styleRoomScale.current})`}}>
                <div className="style_houseBg" ref={HouseBg}>
                  <div className="doorBg"></div>
                  <div ref={Door} className="door" style={{left: `${doorLeft.current}%`}}></div>
                  <div className="wall"></div>
                </div>
                <div ref={styleTable} className="style_tableGroup" style={{transform: `scale(${styleTableScale.current}, ${styleTableScale.current})`}}>
                  
                  <div ref={TableBottomRef2} className="style_table_bottom" style={{transform: `translate3d(0px,${TableBottom.current}px,0px)`}}>
                    <div className="style_table"></div>
                  </div>
                  <div ref={TableTopRef} className="style_table_top" style={{transform: `translate3d(0px,${TableTop.current}px,0px)`}}>
                    <div className="style_monitor">
                      <div className="text">
                        <p>In the year 2048, our digital life worth more than our physical life. AI becomes smarter than human. Everything goes digital. </p>
                        <p>"Dummy Puggy" is the digital species created in the metaverse. They are extremely special. </p>
                        <p>Their poopoos have a spice that is super rare and priceless. Go collect the poopoos that will make you rich!</p>
                        <p>The puggies also have superpowers. They can teleport anywhere in the metaverse. When they come back, they will always bring you surprises!</p>
                      </div>
                    </div>
                  </div>
                  <div ref={TableBottomRef1} className="style_table_bottom" style={{transform: `translate3d(0px,${TableBottom.current}px,0px)`}}>
                    <div className="style_computer"></div>
                    <div className="style_dog"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gamePlay block">
        <div className="newtitle">
          <img src={require('../../images/gameplay_title.png').default} alt="" />
        </div>
        
        <ul className="gamePlay_list">
          <li className="stpItem">
            <div className="list_content">
              <div className="video_box">
                <video width="100%"  preload="auto" autoPlay loop muted playsInline>
                  <source src={require('../../images/playGame.mp4').default} type="video/mp4" />
                </video>
              </div>
              <div className="text_box  text_center ">
                <h1 className="text_title">
                  Merge
                </h1>
              </div>
            </div>
          </li>
          <li className="stpItem">
            <div className="list_content">
              <div className="video_box">
                <video width="100%"  preload="auto" autoPlay loop muted playsInline>
                  <source src={require('../../images/playGame.mp4').default} type="video/mp4" />
                </video>
              </div>
              <div className="text_box  text_center ">
                <h1 className="text_title">
                  Kennel
                </h1>
              </div>
            </div>
          </li>
          <li className="stpItem">
            <div className="list_content">
              <div className="video_box">
                <video width="100%"  preload="auto" autoPlay loop muted playsInline>
                  <source src={require('../../images/playGame.mp4').default} type="video/mp4" />
                </video>
              </div>
              <div className="text_box  text_center ">
                <h1 className="text_title">
                  Feed
                </h1>
              </div>
            </div>
          </li>
          <li className="stpItem">
            <div className="list_content">
              <div className="video_box">
                <video width="100%"  preload="auto" autoPlay loop muted playsInline>
                  <source src={require('../../images/playGame.mp4').default} type="video/mp4" />
                </video>
              </div>
              <div className="text_box  text_center ">
                <h1 className="text_title">
                  Teleport
                </h1>
              </div>
            </div>
          </li>
          <li className="stpItem">
            <div className="list_content">
              <div className="video_box">
                <video width="100%"  preload="auto" autoPlay loop muted playsInline>
                  <source src={require('../../images/playGame.mp4').default} type="video/mp4" />
                </video>
              </div>
              <div className="text_box  text_center ">
                <h1 className="text_title">
                  Shop
                </h1>
              </div>
            </div>
          </li>
        </ul>
        <div className="earn_box">
        <img src={require('../../images/earn.png').default} alt="" width="100%"/>
        </div>
      </div>
      <div className="roadmap" >
					<Container>
              <div className="newtitle m_d5">
                <img src={require('../../images/roadmap_title.png').default} alt="" />
              </div>
							<div className="timeline">
								<div className="timeline-item">
									<div className="timeline-content">
										<h2 className="timeline-title_blue">2021.11</h2>
										<p className="roadmap_though">Official Website Design and Launch</p>
										<p className="roadmap_though">Puggy NFT Design</p>
										<p className="roadmap_though">Game Prototype Complete</p>
									</div>
									<div className="cang phone_hide">
										<img src={require('../../images/c.png').default} alt="" width="100%"/>
									</div>
									<div className="mapdog phone_hide">
										<img src={require('../../images/rg1.png').default} alt="" height="100%"/>
									</div>
								</div> 

								<div className="timeline-item">
									<div className="timeline-content timeline-card">
										<h2 className="timeline-title_green">2021.12</h2>
										<p>Game Alpha Close</p>
										<p>Community & Social Media Operation</p>
										<p>Puggy NFT Sale</p>
										<p>Dummy NFT Design</p>
									</div>
									<div className="cang2 phone_hide">
										<img src={require('../../images/c.png').default} alt="" width="100%"/>
									</div>
								</div>   
								<div className="timeline-item">
									<div className="timeline-content">
										<h2 className="timeline-title_green">2022.Q1</h2>
										<p>Game Beta Launch</p>
										<p>Official Game Launch</p>
										<p>IEO & IDO</p>
										<p>Dummy Planet Development</p>
										<p>Dummy NFT Sale</p>
									</div>
									<div className="cang3 phone_hide">
										<img src={require('../../images/c.png').default} alt="" width="100%"/>
									</div>
								</div>   
								<div className="timeline-item">
									<div className="timeline-content">
										<h2 className="timeline-title_purple">2022.Q2</h2>
										<p>Land NFT Sale</p>
										<p>Dummy Planet Launch</p>
										<p>Creator Editor Development</p>
									</div>
									<div className="mapdog2 phone_hide">
										<img src={require('../../images/rg2.png').default} alt="" width="100%"/>
									</div>
								</div>  
								<div className="deng">
									<img src={require('../../images/dg.png').default} alt="" width="100%" height="100%"/>
								</div> 
							</div>
					</Container>
				</div>
				<div className="team" id="team">
					<Container>
            <div className="newtitle m_d5">
              <img src={require('../../images/team_title.png').default} alt="" />
            </div>
						<h3 className="sub m_t3 m_d8">The Dummy Puggy team consists of 5 puggies. They live in a big kennel together in LA. Each contributes to their areas and hypes about the Dummy Puggy project.</h3>
						<ul className="lead teamUl">
							<li>
								<div className="img_box">
									<img src={require('../../images/Rich.png').default} alt="" width="100%"/>
								</div>
								<div className="text_box">
									<h1 className="name">
                  Boss Puggy
									</h1>
									<h6 className="post">Project leader</h6>
									<p className="introduce">Crypto enthusiast. Always rides his bike on the streets of LA. He also started a band, you may have heard his songs before.</p>
								</div>
							</li>
							<li>
								<div className="img_box">
									<img src={require('../../images/Hacker.png').default} alt="" width="100%"/>
								</div>
								<div className="text_box">
									<h1 className="name">
                  Hacker Puggy
									</h1>
									<h6 className="post">Programmer</h6>
									<p className="introduce">Always cleans his paw before coding. Night owls. Bareheaded. Successfully hacked into dozens of famous websites at age 17.</p>
								</div>
							</li>
						</ul>
						<ul className="core teamUl m_t4">
							<li>
								<div className="img_box">
									<img src={require('../../images/Picasso.png').default} alt="" width="100%"/>
								</div>
								<div className="text_box">
									<h1 className="name">
									Picasso Puggy
									</h1>
									<h6 className="post">Artist</h6>
									<p className="introduce">Genius. Hoodie all the time. Anime girl. She makes her own furniture. Her graffiti works are found in 46 countries around the world.</p>
								</div>
							</li>
							<li>
								<div className="img_box">
									<img src={require('../../images/Chubby.png').default} alt="" width="100%"/>
								</div>
								<div className="text_box">
									<h1 className="name">
									Chubby Puggy
									</h1>
									<h6 className="post">Marketing</h6>
									<p className="introduce">Social queen. Hate Hawaiian pizza. Love daddy jokes. Participated in bodybuilding competitions and won awards.</p>
								</div>
							</li>
							<li>
								<div className="img_box">
									<img src={require('../../images/Strong.png').default} alt="" width="100%"/>
								</div>
								<div className="text_box">
									<h1 className="name">
									Strong Puggy
									</h1>
									<h6 className="post">Community</h6>
									<p className="introduce">Gym rat. Loves Sushi. Headphone all day. Ladies love this guy (he wishes). Runs several communities at the college.</p>
								</div>
							</li>
						</ul>
					</Container>
				</div>
    </div>
  )
}

export default NewView