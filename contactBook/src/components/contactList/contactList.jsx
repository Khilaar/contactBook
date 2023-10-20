import React, { useState, useEffect } from 'react';
import Contact from '../contact/contact';
import NewContact from '../newContact/newContact';
import './contactList.css';




const initialContacts = [
]

function ContactList() {
    const [contacts, setContacts] = useState(initialContacts);

    
    //In this useEffect Hook we make sure to get the state of contacts to the one we saved in the localStorage last time we used the app
    useEffect(() => {
        const data = window.localStorage.getItem('MY_CONTACT_LIST');
        if (data) {
            //With parse we transform back the stringified, to the localStorage saved value so we can display it again
            setContacts(JSON.parse(data));
        }
    }, []);

    //Here we save the state of contacts every time it gets rendered, like this we can use the state in the future when we reuse the app
    useEffect(() => {
        //onbeforeunlad is a built in JS function that handles the saving of a state, in this case the contacts
        window.onbeforeunload = () => {
            //We need to stringify the contacts so they can be saved in the local storage
        window.localStorage.setItem('MY_CONTACT_LIST', JSON.stringify(contacts));
        };
    }, [contacts]);
    
    

    return (
        <div className='everything'>
            <NewContact allContacts={contacts} setContacts={setContacts} />
                <h1 className='allContactsTitle'>All Contacts</h1>
                <div className='contactsListContainer'>
                {contacts.map((contact) => (
                    <Contact key={contact.id} data={contact} allContacts={contacts} setContacts={setContacts}/>
                ))}
                </div>
        </div>
    );
}

export default ContactList;