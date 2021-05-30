import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar'
const ContactList = ({ data }) => {
    const { id, name, phone, email } = data; //destructuring of data
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
                <Link to={`/edit/${id}`}>
                    <span className="btn">edit</span>
                </Link>
                <Link to={`/delete/${id}`}>
                    <span className="btn">del</span>
                </Link>
            </td>
        </tr>

    )
}

export default ContactList
