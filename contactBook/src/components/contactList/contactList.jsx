import React, { useState } from 'react';
import Contact from '../contact/contact';
import JohnAvatar from '../../assets/JohnAvatar.jpg'
import JaneAvatar from '../../assets/JaneAvatar.jpg'


const initialContacts = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        address: 'Bahnhofstrasse 2, Zurich',
        phone: '0791112233',
        avatar: JohnAvatar,
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        address: 'Dorfplatz 5, Basel',
        phone: '0791112244',
        avatar: JaneAvatar,
    },
]

function ContactList() {
    const [contacts, setContacts] = useState(initialContacts)

    return contacts.map((contact) => {
        return <Contact key={contact.id} data={contact} />
    })
}

export default ContactList;