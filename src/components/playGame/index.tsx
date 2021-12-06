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
                  Merge the puggy poopoo! Collect all the bounties and win the chance to get rare Dummy Puggy NFT with unique power! 
                </div>
              </div>
            </div>
          </div>
          <div className="play_game_item">
            <div className="left_box">
              <div className="video_box">
                <video width="100%"  preload="auto" autoPlay loop muted playsInline>
                  <source src={require('../../images/Kennel.mp4').default} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="right_box">
              <div className="text_box  text_center ">
                <h1 className="text_title">
                Kennel
                </h1>
                <div className="text_des">
                  Merge the puggy poopoo! Collect all the bounties and win the chance to get rare Dummy Puggy NFT with unique power! 
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
                  Merge the puggy poopoo! Collect all the bounties and win the chance to get rare Dummy Puggy NFT with unique power! 
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
                Teleport
                </h1>
                <div className="text_des">
                  Merge the puggy poopoo! Collect all the bounties and win the chance to get rare Dummy Puggy NFT with unique power! 
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
                Shop
                </h1>
                <div className="text_des">
                  Merge the puggy poopoo! Collect all the bounties and win the chance to get rare Dummy Puggy NFT with unique power! 
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