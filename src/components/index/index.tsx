/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Faq from "../Faq";
import { Container, Col, Row} from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import './index.css'

// import Swiper core and required modules
import SwiperCore, {
  Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay]);


function IndexComp(){
	return(
		<div className="main">
			<div className="banner" id="banner">
				<video width="100%" height="100%" preload="auto" autoPlay loop muted playsInline>
					<source src={require('../../images/banner.mp4').default} type="video/mp4" />
				</video>
			</div>
			<div className="welcome">
				<Container>
					<h1 className="title m_d3">WELCOME TO THE DUMMY PUGGY</h1>
					<Row className="align-items-center">
						<Col md={6}>
							<p className="text_model">
								Dummy Puggy is a collection of 9999 thoughtfully designed and impeccably shaped unique puggies generated from over XXX traits. They are born with a love of gold and glitter, every puggy is loyal and love to share their treasure with their owner. Get ready to adopt one of them and earn money with your puggy together! 
							</p>
							<div className="button_group m_t2">
								<a className='bottom_model' href="#">
									<img src={require('../../images/join_us.png').default} alt="" />
								</a>
							</div>
						</Col>
						<Col md={6}>
							<Swiper className="swiper" loop={true} effect="fade" slidesPerView={3} centeredSlides={true} autoplay={{"delay": 2500,"disableOnInteraction": true}}>
								{['dog1.png','dog2.png','dog3.png','dog4.png','dog5.png','dog6.png','dog7.png','dog8.png','dog9.png'].map((el, i) => {
									return <SwiperSlide key={i}>
											<img
												className="d-block w-100"
												src={require(`../../images/${el}`).default}
												alt={el}
											/>
										</SwiperSlide>;
								})}
							</Swiper>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="game">
				<Container>
					<h1 className="title m_d5">MERGE TO EARN</h1>
					<ul className="gameStp">
						<li className="stpItem">
							<div className="list_content">
								<div className="img_box">
									<img src={require('../../images/game1.png').default} alt="" />
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
									<img src={require('../../images/game_default.png').default} alt="" />
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
									<img src={require('../../images/game_default.png').default} alt="" />
								</div>
								<div className="text_box  text_center ">
									<h1 className="text_title">
										STEP 3
									</h1>
									<div className="text_des">
										Turn your bounties into ETH. Get ready to fill real money in your pocket!
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
									<p>Official website design and launch</p>
									<p>Dummy Puggy NFT design and artwork creation</p>
									<p>Connect with advisors and prepare for official plans</p>
									<p>Start community & social media operation</p>
									<p>Verify ideals, start designing the Dummy Puggy games</p>
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
					<h3 className="sub m_t3">The Dummy Puggy team consists of 5 puggies. They live in a big kennel together in LA. Each contributes to their areas and hypes about the Dummy Puggy project.</h3>
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
					<ul className="core teamUl"></ul>
				</Container>
			</div>
			<div className="wait">
				<div id="newsletter" className="news-section wf-section">
					<div className="w-container">
						<div className="white-div">
							<div className="div-news-text">
								<p>Want to learn how we plan to introduce the first billion people to the blockchain?<br/></p>
							</div>
							<div className="news-form w-form">
								<form id="wf-form-News-Form" name="wf-form-News-Form" data-name="News Form" className="form">
									<input type="email" className="text-field no-bottom-margin w-input" maxLength={256} name="email" data-name="Email" placeholder="Your email address" id="email"/>
									<input type="submit" value="Heck yeah!" data-wait="Please wait..." className="button full w-button"/>
								</form>
								<div className="success-message w-form-done">
									<div>Thanks for signing up. We'll keep you in the loop.</div>
								</div>
								<div className="error-message w-form-fail">
									<div>Oops! Something went wrong while submitting the form.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Faq/>
			<div className="join">

			</div>
		</div>
	)
}

export default IndexComp;