import React, { Component } from 'react';
import { Player } from 'video-react';
import styled from 'styled-components';
import bg from './assets/bg.png';
import video from './assets/santtu_d.mp4';
import './App.scss';
import "video-react/dist/video-react.css"; 

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper style={{backgroundImage: `url(${bg})`}}>
          <Player
            fluid={false}
            playsInline            
            src={video}
          />
        </Wrapper>
      </div>
    );
  }
}

export default App;
