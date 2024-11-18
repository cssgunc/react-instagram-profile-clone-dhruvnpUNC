import { useState } from 'react';

import Sidebar from './components/Sidebar';
import Post from './components/Post';
import Modal from './components/Modal';
import church from './components/church.jpg';
import church2 from './components/church2.jpg';
import family from './components/family.jpg';
import ring from './components/ring.jpg';
import profile from './components/profile_picture.jpg'
import './App.css'

function App() {
  const postInfo = [
    {"likes": 14, "comments": 0, "picture" : ring},
    {"likes": 27, "comments": 0, "picture" : church2},
    {"likes": 28, "comments": 3, "picture" : church},
    {"likes": 2, "comments": 1, "picture": family}];
  
  let numPost = 4
  const [numFollowers, setNumFollowers] = useState(83);
  let numFollowing = 92
  
  const [hasUserFollowed, setHasUserFollowed] = useState(false);
  const [hasUserLiked, setHasUserLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function renderModal() {
    if (isModalOpen) {
      return (
        <><Modal /></>
      );
    }
  }

  function addRemoveFollower() {
    if (hasUserFollowed) {
      setNumFollowers(numFollowers - 1);
    } else {
      setNumFollowers(numFollowers + 1);
    }
  }

  function renderPost(postInfo) {
      return(
        <>
          <Post 
            picture={postInfo.picture} 
            isModalOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen}
          />
        </>
      );
  }

  
  return( 
    <>
    <div className="header">
      <img src={profile} className="profile-pic"></img>
        <div className="name_options_stats">
          <div className="name_options">
              <p className="UserName">bonkzicle</p>
              <div className="options">
                <button className="buttons" onClick={() => {
                  setHasUserFollowed(!hasUserFollowed); addRemoveFollower()} } style={{background: hasUserFollowed ? "darkgray" : "lightblue"}}>{hasUserFollowed ? "Following" : "Follow"}</button>
                <button className="buttons" type="button">Message</button>
              </div>
          </div>
            <div className="stats">
              <p>{numPost} posts</p>
              <p>{numFollowers} followers</p>
              <p>{numFollowing} following</p>
            </div>
              <p style={{margin: 0}}>Dhruv Patel</p>
              <p style={{margin: 0}}>Sometimes I post stuff on here.</p>
              <p style={{margin: 0}}>UNC 28'</p>
        </div>
      </div>
      <div className="line-two"></div>
      <Sidebar />
      {renderModal()}

      <div className="profile">
        {postInfo.map(renderPost)}
      </div>
      <div className="footer">
        <p>Meta About Blog Jobs Help API Privacy Consumer Health Privacy Terms Locations Instagram Lite Threads Contact Uploading & Non-Users Meta Verified</p>
        <p>English© 2024 Instagram from Meta</p>
      </div>
    </>
  );
}

export default App
