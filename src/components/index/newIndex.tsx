import React, {useState} from "react";
import './index.css'
import './newIndex.css'
import Laboratory from "./laboratory";



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

function NewIndexComp(){
	const { x, y, handleMouseMove } = useMove();
	let picStyle = {
			inset: "3rem",
			transform: 'translate3d( '+((x - window.innerWidth /2) / 30)+'px , '+((y - window.innerHeight) /30)+'px, 0 )',
	}
	return(
		<>
			<div className="main">
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
				
				<Laboratory></Laboratory>
					
			</div>
		</>
	)
}

export default NewIndexComp;
