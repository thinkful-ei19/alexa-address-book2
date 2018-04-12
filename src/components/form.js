import React from 'react';

export default function Form(props) {
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()

                let userNameValue = event.target.userName.value
                let userAddressValue = event.target.userAddress.value
                
                props.add({name: userNameValue, address: userAddressValue})

                event.currentTarget.userName.value = ''
                event.currentTarget.userAddress.value = ''

                }}>
                <label>Name</label>
                <input type="text" name="userName"/>
                <label>Address</label>
                <input type="text" name="userAddress"/>
                <button>Submit</button>
            </form>
        </div>
    )
}