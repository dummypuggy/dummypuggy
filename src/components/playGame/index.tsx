import React from 'react'
import { Container } from 'react-bootstrap';
import './index.css'


function PlayGame(){
  return(
    <>
      <Container>
        <div className="play_game_list">
          <div className="play_game_item">
            <div className="left_box">
              <div className="video_box">
                <video width="100%"  preload="auto" autoPlay loop muted playsInline>
                  <source src={require('../../images/playGame.mp4').default} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="right_box">
              <div className="text_box  text_center ">
                <h1 className="text_title">
                Merge
                </h1>
                <div className="text_des">
                Merge to get a higher level of PooPoos. The higher level PooPoos can bring you more PooPoo Coins (PPCs). 
                </div>
              </div>
            </div>
          </div>
          <div className="play_game_item">
            <div className="left_box">
              <div className="video_box">
                <video width="100%"  preload="auto" autoPlay loop muted playsInline>
                  <source src={require('../../images/Feed.mp4').default} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="right_box">
              <div className="text_box  text_center ">
                <h1 className="text_title">
                Feed
                </h1>
                <div className="text_des">
                You can accelerate puggys pooping speed by feeding him food & water and cleaning his house.
                </div>
              </div>
            </div>
          </div>
          <div className="play_game_item">
            <div className="left_box">
              <div className="video_box">
                <video width="100%"  preload="auto" autoPlay loop muted playsInline>
                  <source src={require('../../images/Teleport.mp4').default} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="right_box">
              <div className="text_box  text_center ">
                <h1 className="text_title">
                Breed
                </h1>
                <div className="text_des">
                Dummy Puggy has superpowers. He can unexpectedly bring back a puggy from the planet. They might be the same species. 
                </div>
              </div>
            </div>
          </div>
          <div className="play_game_item">
            <div className="left_box">
              <div className="video_box">
                <video width="100%"  preload="auto" autoPlay loop muted playsInline>
                  <source src={require('../../images/Shop.mp4').default} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="right_box">
              <div className="text_box  text_center ">
                <h1 className="text_title">
                Wormhole
                </h1>
                <div className="text_des">
                PooPoos above LV 5 can unlock the Wormhole. You can put PooPoos into the Wormhole and win a chance to get all PooPoos back within a fixed time. 
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}


export default PlayGame;