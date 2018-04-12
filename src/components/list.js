import React from 'react';

export default function List(props) {
    const contactList = props.users.map((contact, index) => (
        <li key={index}>
        {contact.name} <br/> {contact.address} <br/><br/>
        </li>
    ))
    return (
        <ul>
            {contactList}
        </ul>
    )
}