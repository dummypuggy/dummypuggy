import React, {useState} from "react";
import { Container, Fade } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import './index.css'
// import Swiper core and required modules
import SwiperCore, {
  Autoplay
} from 'swiper';


SwiperCore.use([Autoplay]);

function IndexComp(){
	const [emailAddress, setEmail] = useState('');
	const [show, setShow] = useState(false);
	const subminEmail = (e:any)=>{
		if(emailAddress === '') return;
		var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
		if(!reg.test(emailAddress)) return;

		fetch('https://api.sweeper.boochat.cn/api/projects/insert_email',{
      method:'POST',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      },
			body:JSON.stringify({//请求的参数
				data: {
					email:emailAddress,
					project:"pOP"
				}
			}) 
    })
     .then(res =>res.json())
     .then((data) => {
				console.log(data)  
				setShow(true)
				setTimeout(()=>{setShow(false)}, 2000);
     })
		 .catch((err)=>{
			 console.log('error', err)
		 })
		e.preventDefault();
	}
	const handlEmail = (e:any)=>{
		setEmail(e.target.value)
	}
	return(
		<>
			<div className="main">
				<div className="banner" id="banner">
					<video width="100%" height="100%" preload="auto" autoPlay loop muted playsInline>
						<source src={require('../../images/banner.mp4').default} type="video/mp4" />
					</video>
				</div>
				<div className="welcome" id="about">
					<Container>
						<h1 className="title m_d5">WELCOME TO THE DUMMY PUGGY</h1>
						<div className="swiper_box">
							<Swiper className="swiper" loop={true} effect="fade" slidesPerView={2} centeredSlides={true}  autoplay={{"delay": 2000,"disableOnInteraction": true}}>
								{
									new Array(20).fill('0').map((el, i) => {
										return <SwiperSlide key={i}>
												<div className="swiper_img">
													<img src={require(`../../images/${i+1}.png`).default} alt={i.toString()} width="100%" height="100%"/>
												</div>
											</SwiperSlide>;
									})
								}
							</Swiper>
						</div>
						<p className="text_model">
							Dummy Puggy is the easiest P2E game for dummies on Blockchain. Players can collect puggies, merge poopoos and earn PPC(Poo Poo Coin) in your pocket. Puggies here are dummy but will make you rich.
						</p>
						<div className="button_group m_t2">
							<a className='bottom_model' href="https://discord.com/invite/2VvACvMZ8F" target="_black">
								<img src={require('../../images/join_us.png').default} alt="" />
							</a>
						</div>
					</Container>
				</div>
				<div className="game" id="gameplay">
					<Container>
						<h1 className="title m_d5">MERGE TO EARN</h1>
						<ul className="gameStp">
							<li className="stpItem">
								<div className="list_content">
									<div className="img_box">
										<img src={require('../../images/game1.jpg').default} alt="" />
									</div>
									<div className="text_box  text_center ">
										<h1 className="text_title">
											STEP 1
										</h1>
										<div className="text_des">
											Merge the puggy poopoo! Collect all the bounties and win the chance to get rare Dummy Puggy NFT with unique power! 
										</div>
									</div>
								</div>
							</li>
							<li className="stpItem">
								<div className="list_content">
									<div className="img_box">
										<img src={require('../../images/game2.jpg').default} alt="" />
									</div>
									<div className="text_box  text_center ">
										<h1 className="text_title">
											STEP 2
										</h1>
										<div className="text_des">
											Choose up to 3 Dummy Puggies from your collection! Form the best combination to boost your bounties!
										</div>
									</div>
								</div>
							</li>
							<li className="stpItem">
								<div className="list_content">
									<div className="img_box">
										<img src={require('../../images/game3.jpg').default} alt="" />
									</div>
									<div className="text_box  text_center ">
										<h1 className="text_title">
											STEP 3
										</h1>
										<div className="text_des">
										Get yourself into leaderboard and win more treasure!
										</div>
									</div>
								</div>
							</li>
						</ul>
					</Container>
				</div>
				<div className="roadmap" >
					<Container>
							<h1 className="title m_d5">ROADMAP</h1>
							<div className="timeline">
								<div className="timeline-item">
									<div className="timeline-content">
										<h2 className="timeline-title_blue">Phase 1 2021 Q3</h2>
										<p className="roadmap_though">Official website design and launch</p>
										<p className="roadmap_though">Dummy Puggy NFT design and artwork creation</p>
										<p className="roadmap_though">Connect with advisors and prepare for official plans</p>
										<p className="roadmap_though">Start community & social media operation</p>
										<p className="roadmap_though">Verify ideals, start designing the Dummy Puggy games</p>
									</div>
								</div> 

								<div className="timeline-item">
									<div className="timeline-content timeline-card">
										<h2 className="timeline-title_green">Phase 2  2021 Q4</h2>
										<p>Grow the Dummy Puggy community</p>
										<p>Marketing Campaigns and Partnerships</p>
										<p>Launch Dummy Puggy whitepaper 1.0</p>
										<p>Dummy Puggy NFT pre-sale</p>
										<p>Release demo video</p>
										<p>Dummy Puggy NFT public sale</p>
									</div>
								</div>   
								<div className="timeline-item">
									<div className="timeline-content">
										<h2 className="timeline-title_green">Phase 3 2022 Q1</h2>
										<p>Complete coding the game</p>
										<p>Launch the beta version</p>
										<p>Officially launch the game</p>
										<p>Keep growing the Puggy community</p>
										<p>Start designing the tokenomics system</p>
									</div>
								</div>   
								<div className="timeline-item">
									<div className="timeline-content">
										<h2 className="timeline-title_purple">Phase 4 2022 Q2</h2>
										<p>Launch token</p>
										<p>Improve the game, UI/UX, animation etc...</p>
										<p>Business expansion</p>
										<p>Operating and exploiting</p>
									</div>
								</div>   
							</div>
					</Container>
				</div>
				<div className="team" id="team">
					<Container>
						<h1 className="title">team</h1>
						<h3 className="sub m_t3 m_d8">The Dummy Puggy team consists of 5 puggies. They live in a big kennel together in LA. Each contributes to their areas and hypes about the Dummy Puggy project.</h3>
						<ul className="lead teamUl">
							<li>
								<div className="img_box">
									<img src={require('../../images/Rich.png').default} alt="" width="100%"/>
								</div>
								<div className="text_box">
									<h1 className="name">
										Rich puggy
									</h1>
									<h6 className="post">Project leader</h6>
									<p className="introduce">Crypto enthusiast. Always flexes about his collection in his wallet.</p>
								</div>
							</li>
							<li>
								<div className="img_box">
									<img src={require('../../images/Hacker.png').default} alt="" width="100%"/>
								</div>
								<div className="text_box">
									<h1 className="name">
										Hacker puggy
									</h1>
									<h6 className="post">Programmer</h6>
									<p className="introduce">Always cleans his paw before coding. Night owls. Bareheaded.</p>
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
									Picasso puggy
									</h1>
									<h6 className="post">Artist</h6>
									<p className="introduce">Genius. Hoodies all the time. Anime girl. She makes her own furnitures.</p>
								</div>
							</li>
							<li>
								<div className="img_box">
									<img src={require('../../images/Chubby.png').default} alt="" width="100%"/>
								</div>
								<div className="text_box">
									<h1 className="name">
									Chubby puggy
									</h1>
									<h6 className="post">Marketing</h6>
									<p className="introduce">Social queen. Hates Hawaiian pizza. Love daddy jokes.</p>
								</div>
							</li>
							<li>
								<div className="img_box">
									<img src={require('../../images/Strong.png').default} alt="" width="100%"/>
								</div>
								<div className="text_box">
									<h1 className="name">
									Strong puggy
									</h1>
									<h6 className="post">Community</h6>
									<p className="introduce">Gym rat. Loves Sushi. Headphone all day. Ladies love this guy (he wishes).</p>
								</div>
							</li>
						</ul>
					</Container>
				</div>
				<div className="wait">
					<Container>
						<div className="wait_con">
							<h1 className="title">Waitlist</h1>
							<h3 className="sub m_t3 m_d3">Get notified for presale, giveaways & updates. Follow our latest announcements！</h3>
							<form className="form" >
								<input type="email"  placeholder="Your email address" onChange={handlEmail} required/>
								<button className="submit_btn" onClick={subminEmail}>
									<img src={require('../../images/submit.png').default} alt="" width="100%" />
								</button>
							</form>
						</div>
					</Container>
				</div>
				<div className="join">
					<Container>
						<div className="join_box">
							<div className="join_img">
								<img src={require('../../images/discord_dog.png').default} alt="" width="100%"/>
							</div>
							<div className="join_text">
									<h1 className="title">
									Join our community
									</h1>
									<p className="sub">Our community is at the heart of everything we do at Dummy Puggy and our Discord growing rapidly! Join now to get updates and follow our latest announcements. Come with us and see for yourself how we puggies vibing all day!</p>
									<a className="submit_btn" href="https://discord.com/invite/2VvACvMZ8F" target="_black">
										<img src={require('../../images/join_now.png').default} alt="" width="100%"/>
									</a>
							</div>
						</div>
					</Container>
				</div>
			</div>
			{
				show
				? 
				<Fade in={show}>
					<div className="Alert_block">
					提交成功
					</div>
				</Fade>
					
				: ''
			}
			<div className="coin_model coin1">
				<img src={require('../../images/coin4.webp').default} alt="" className="shi1"/>
				<img src={require('../../images/coin3.webp').default} alt="" className="shi2"/>
				<img src={require('../../images/coin2.webp').default} alt="" className="shi4"/>
				<img src={require('../../images/coin4.webp').default} alt="" className="shi3"/>
			</div>
			<div className="coin_model coin2">
				<img src={require('../../images/coin3.webp').default} alt="" className="bg_coin1"/>
				<img src={require('../../images/coin3.webp').default} alt="" className="bg_coin2"/>
			</div>
		</>
	)
}

export default IndexComp;
