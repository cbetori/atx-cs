import React from 'react';
import '../../styles/home.css'

function Home(props) {
  return (
    <div id={props.content}>
      <div id="Home">
        <div id="top-level">
          Custome Problems <br/> <div style={{marginLeft: '50px'}}>Require </div> Custome Solutions
        </div>
      </div>
    </div>
  );
}

export default Home;