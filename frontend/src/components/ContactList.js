import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar'
import { deleteContact } from '../actions/contactsAction'
import { Delete, Edit } from '@material-ui/icons';
const ContactList = ({ data }) => {
    const { id, name, phone, email } = data; //destructuring of data
    //console.log(props)  
    const dispatch = useDispatch()

    const deleteHandler = () => {
        dispatch(deleteContact(id))
        //alert('Deleted')
        window.confirm('Are you sure')
    }

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
                    <Edit />
                </Link>

                <Delete onClick={deleteHandler} color="secondary" />
            </td>
        </tr>
    )
}

export default ContactList
