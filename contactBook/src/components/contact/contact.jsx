import React, { useState } from 'react';
import './contact.css';


function Contact({ data }) {
  //Set the state of showInfos to true or false, depending if the button was clicked
  const [showInfos, setShowInfos] = useState(false);

  //Call this function to call the callback function to change the state of showInfos
  const toggleInfos = () => {
    setShowInfos(!showInfos);
  };

  //initially we dont want to see the hidden Infos so we set this variable to false 
  let hiddenInfos = false;
  //When the state of showInfos changes to true We assign following elements to hiddenInfos
  if (showInfos) {
    hiddenInfos = (
      <div className='hiddenInfos'>
        <p>{ `adress: ${data.address}` }</p>
        <p>{`phone number: ${data.phone}`}</p>
        <div className='contactButtons'>
          <button className='contactDeleteButton'>DELETE</button>
          <button className='contactEditButton'>EDIT</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="contactCard">
        <div className='mainInfos'>
          <img src={data.avatar} alt="" className='profilePicture' />
          <h1>{`${data.firstName} ${data.lastName}`}</h1>
          <button onClick={toggleInfos}>Infos</button>
        </div>
        {hiddenInfos}
      </div>
    </>
  );
}

export default Contact;