import React, { Component } from 'react';
import CozyBedroomStory from './CozyBedroomStory';

export default class CozyLinks extends Component {
  LinkWrapper = ({text, href}) => (
    <div className="linkWrapper">
      <a href={href} target="_blank">{text}</a>
    </div>
  )

  DividerLine = () => (<div className="dividerLine"></div>)

  render() {
    const  {
      LinkWrapper,
      DividerLine,
    } = this;

    return (
      <div className="cozyBedroomStoryComponent">
        <div
          className="headerPicContainer"
          style={{backgroundImage: 'url(https://i.imgur.com/Yung3X7.jpg)'}}
        ></div>

        <h1>#abedroomstory</h1>

        <div style={{textAlign: 'center'}}>
          <img
            className="profilePic"
            src="https://i.imgur.com/J5Hj9RY.jpg"
          />
        </div>

        <div className="subHeader">DIRECTIONS:</div>
        <small>
          Hold your finger on one of the images below and press "Save Image".  Then post the image to your story with <span className="red">#abedroomstory</span> and write something that is meaningful to you; a story, a lesson.  tag <span className="red">@cozyboycries</span> and i'll share it to my story, or DM it to me and i'll post it anonymously to my story.
        </small>

        <small style={{paddingBottom: 10, textDecoration: 'underline'}}>
          Instagram Story
        </small>
        <img
          className="aBedroomStoryImg"
          src="https://i.imgur.com/opLINHO.jpg"
        />

        <br />

        <small style={{paddingBottom: 10, textDecoration: 'underline'}}>
          Instagram Post
        </small>
        <img
          className="aBedroomStoryImg"
          src="https://i.imgur.com/csIZJsn.jpg"
        />
      </div>
    );
  }
}