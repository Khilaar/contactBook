import React, { useState } from 'react';
import ContactList from '../contactList/contactList';
import './newContact.css';


function NewContact({ allContacts, setContacts }) {
    //Set first name with user input
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

    //Set a state so we know if we chould show the input fields 
    const [showForm, setShowForm] = useState(false)

    //When we click the add button the state should change
    const toggleInfos = () => {
        setShowForm(!showForm);
    };

    //Here we set false because we embedded this variable in the return so when infos need to be shown we overwrite it with the elements that need to be shown. We do that in the next if statement
    let invisibleForm = false

    let addedContactsArr = [];

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    };

    if (showForm) {
        const saveNewContact = function () {
            let newContact = {
                id: allContacts.length + 1,
                firstName: inputValueFirstName,
                lastName: inputValueLastName,
                address: inputValueAddress,
                phone: inputValuePhoneNumber,
                avatar: selectedFile,
            };

            
            const updatedContacts = [...allContacts, newContact];
            setContacts(updatedContacts);

            
            setShowForm(!showForm);
        };

        invisibleForm = (
            <div className='test'>
            <div className='invisibleNewContactCard'>
                <input type="text" placeholder={inputValueFirstName} onChange={changeInputFirstName}/>
                <input type="text" placeholder={inputValueLastName} onChange={changeInputLastName}/>
                <input type="text" placeholder={inputValueAddress} onChange={changeInputAddress}/>
                <input type="tel" placeholder={inputValuePhoneNumber} onChange={changeInputPhoneNumber}/>
                <input type="file" accept=".jpg, .png" onChange={handleFileChange}/>
                
            </div>
            <button onClick={saveNewContact}>Submit</button>
            </div>
        )
    }

    return (
    <>
        <div className="NewcontactCard">
            <div className='visibleNewContactCard'>
                <h1>create new contact</h1>
                <button className='showFormButton' onClick={toggleInfos}>Add new</button>
            </div>
            {/*Depending on the state the invisible form is shown or not*/}
            {invisibleForm}
        </div>
    </>
    );
}

export default NewContact;