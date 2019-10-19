import React from 'react';

function Services(props) {
  return (
    <div  id={props.content}>
        <div id='website-building'>
          <div id='desktop'></div>
          <div id='mobile'></div>
        </div>
        <div id='website-maintenance'>
        </div>
        <div id='server'>
          <div id='cloud'></div>
          <div id='connect-services'></div>
        </div>
        <div id='database'>
          <div id='work-smarter'></div>
          <div id='leverage-info'></div>
        </div>
        <div id='desktop-applications'>
          <div id='security?'></div>
          <div id='integrate-business'></div>
        </div>
        <div id='business-automation'>
          <div id='work-smarter'></div>
          <div id='vba'></div>
        </div>
    </div>
  );
}

export default Services;