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

  

  //We need this state to make sure to use the uploaded file and use it as the state
  const [selectedFile, setSelectedFile] = useState(null);

  //For this we need this function so when we submit the form the picture that was uploaded gets set to the new state
  const handleFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };


    //Set first name with user input
  const [inputValueFirstName, setInputValueFirstName] = useState(data.firstName);

  const changeInputFirstName = function (event) {
    
      setInputValueFirstName(event.target.value);
    
  };

    //Set last name with user input
  const [inputValueLastName, setInputValueLastName] = useState(data.lastName);

  const changeInputLastName = function (event) {
    setInputValueLastName(event.target.value);   
  };

    //Set address with user input
  const [inputValueAddress, setInputValueAddress] = useState(data.address);

  const changeInputAddress = function (event) {
    setInputValueAddress(event.target.value);   
  };

    //Set phone number with user input
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(data.phone);

  const changeInputPhoneNumber = function (event) {
    setInputValuePhoneNumber(event.target.value);   
  };
  //Here we handle the click on the delete button. The element gets filtered out of the contacts
  const deleteContact = () => {
    setContacts(allContacts.filter((x) => x.firstName !== data.firstName))
  }
  
  //Here we make sure, that we are able to see the form of the contact we want to edit, so this gets called when we click on edit
  const editContact = () => {
    setShowInfos(!showInfos);
    setEditInfos(!editInfos);
  }

  //In default we dont want to see the form
  let editingInfos = false;

  //Here we need a state to change the immage when we edit a contact
  const [changedImage, setChangedImage] = useState(false);

  //Here we handle the state of the above useState hook
  const changeImage = function (event) {
    setChangedImage(!changedImage);   
  };

  //We made sure that editInfos is set to true when we clicked on edit
  if (editInfos) {
    //The name "saveOldContact" is not perfect, we save the changes of the already existing contact included the image in the if statement, if the image was changed we set the state of selectedFile by using the handleFileChange function
    const saveOldContact = function () {
    data.firstName = inputValueFirstName;
    data.lastName = inputValueLastName;
    data.address = inputValueAddress;
    data.phone = inputValuePhoneNumber;
    if (changedImage) {
      data.avatar = selectedFile;
    }
    handleFileChange
    
    //Then we set the state that shows or hides the form back to false so the form is hidden again
    setEditInfos(false)
  };

  //We need to handle the case, that one or more inputs in the form will not get used hence the corresponding info gets not changed
  const keepInfos = function () {
    setInputValueFirstName(data.firstName);
    setInputValueLastName(data.lastName);
    setInputValueAddress(data.address);
    setInputValuePhoneNumber(data.phone);
    setEditInfos(false);
  };

  //This is the form that we show when the corresponding state is true, which happens when we click on edit
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
        <div className='hiddenInfosContainer'>
          <p>{ `adress: ${data.address}` }</p>
          <p>{`phone number: ${data.phone}`}</p>
        </div>
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