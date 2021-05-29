import React from 'react'
import Avatar from 'react-avatar'
const ContactList = ({ data }) => {
    const { name, phone, email } = data; //destructuring of data
    //console.log(props)
    return (

        <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>

                </div>
            </th>
            <td><Avatar name={name} size="40" round={true} />{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>
                <span className="btn">edit</span>
                <span className="btn">del</span>
            </td>
        </tr>

    )
}

export default ContactList
