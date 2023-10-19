import React, { useState } from 'react';
import './contact.css';


function Contact({ data, allContacts, setContacts }) {
  //Set the state of showInfos to true or false, depending if the button was clicked
  const [showInfos, setShowInfos] = useState(false);
  const [editInfos, setEditInfos] = useState(false);

  //Call this function to call the callback function to change the state of showInfos
  const toggleInfos = () => {
    setShowInfos(!showInfos);
  };

  const deleteContact = () => {
    setContacts(allContacts.filter((x) => x.firstName !== data.firstName))
  }

  const editContact = () => {
    setShowInfos(!showInfos);
    setEditInfos(!editInfos);
  }

  const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    };

const [inputValueFirstName, setInputValueFirstName] = useState("First name");

    const changeInputFirstName = function (event) {
        setInputValueFirstName(event.target.value);   
    };

    //Set last name with user input
    const [inputValueLastName, setInputValueLastName] = useState("Last name");

    const changeInputLastName = function (event) {
        setInputValueLastName(event.target.value);   
    };

    //Set address with user input
    const [inputValueAddress, setInputValueAddress] = useState("Address");

    const changeInputAddress = function (event) {
        setInputValueAddress(event.target.value);   
    };

    //Set phone number with user input
    const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState("Phone number");

    const changeInputPhoneNumber = function (event) {
        setInputValuePhoneNumber(event.target.value);   
    };


  let editingInfos = false;
  const [changedImage, setChangedImage] = useState(false);

  const changeImage = function (event) {
    setChangedImage(!changedImage);   
};

  if (editInfos) {
    console.log(data)
    const handleFileChange = (event) => {
      setSelectedFile(URL.createObjectURL(event.target.files[0]));
    };

    const saveOldContact = function () {
      data.firstName = inputValueFirstName;
      data.lastName = inputValueLastName;
      data.address = inputValueAddress;
      data.phone = inputValuePhoneNumber;
      if (changedImage) {
        data.avatar = selectedFile;
      }
      
      setEditInfos(false)
    };

    const keepInfos = function () {
      data.firstName = data.firstName;
      data.lastName = data.lastName;
      data.address = data.address;
      data.phone = data.phone;
      
      setEditInfos(false)
    };

    editingInfos = (
      <div className='hiddenInputs'>
        <input type="text" placeholder={data.firstName} onChange={changeInputFirstName}/>
        <input type="text" placeholder={data.lastName} onChange={changeInputLastName}/>
        <input type="text" placeholder={data.address} onChange={changeInputAddress}/>
        <input type="tel" placeholder={data.phone} onChange={changeInputPhoneNumber}/>
        <input className='fileUploader' type="file" accept=".jpg, .png" onChange={handleFileChange} onClick={changeImage}/>
        <div className='submitAndDelete'>
          <button onClick={saveOldContact}>Submit</button>
          <button onClick={keepInfos}>Cancel</button>
        </div>
      </div>
    )
    
  }
  

  //initially we dont want to see the hidden Infos so we set this variable to false 
  let hiddenInfos = false;
  //When the state of showInfos changes to true We assign following elements to hiddenInfos
  if (showInfos) {
    hiddenInfos = (
      <div className='hiddenInfos'>
        <p>{ `adress: ${data.address}` }</p>
        <p>{`phone number: ${data.phone}`}</p>
        <div className='contactButtons'>
          <button className='contactDeleteButton' onClick={deleteContact}>DELETE</button>
          <button className='contactEditButton' onClick={editContact}>EDIT</button>
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
        {editingInfos}
      </div>
    </>
  );
}

export default Contact;