import React, { useState } from 'react';
import ContactList from '../contactList/contactList';
import './newContact.css';


function NewContact() {
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

    const [showForm, setShowForm] = useState(false)

    const toggleInfos = () => {
        setShowForm(!showForm);
    };


    let invisibleForm = false
    let addedContactsArr = []
    if (showForm) {
        
        const saveNewContact = function () {
        let newContact = {
            firstName: inputValueFirstName,
            lastName: inputValueLastName,
            address: inputValueAddress,
            phoneNumber: inputValuePhoneNumber,
        };
        addedContactsArr.push(newContact);
        console.log(addedContactsArr)
    };
        invisibleForm = (
            <div className='invisibleNewContactCard'>
                <input type="text" placeholder={inputValueFirstName} onChange={changeInputFirstName}/>
                <input type="text" placeholder={inputValueLastName} onChange={changeInputLastName}/>
                <input type="text" placeholder={inputValueAddress} onChange={changeInputAddress}/>
                <input type="tel" placeholder={inputValuePhoneNumber} onChange={changeInputPhoneNumber}/>
                <button onClick={saveNewContact}>Submit</button>
            </div>
        )
    }

    return (
    <>
        <div className="NewcontactCard">
            <div className='visibleNewContactCard'>
                <h1>create new contact</h1>
                <button className='showFormButton' onClick={toggleInfos}>Hi</button>
            </div>
            {invisibleForm}
        </div>
    </>
    );
}

export default NewContact;