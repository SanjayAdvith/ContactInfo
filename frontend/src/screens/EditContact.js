import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { getContact, updateContact } from '../actions/contactsAction'

//import shortid from 'shortid'
const EditContact = () => {
    let { id } = useParams()

    const dispatch = useDispatch()
    const history = useHistory();
    const contactData = useSelector((state) => state.contactReduser.contact)
    console.log(contactData)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        //console.log(name, email, phone)
        const updateDetails = Object.assign(
            contactData,
            {
                // id: shortid.generate(),
                name: name,
                phone: phone,
                email: email,
            }
        )
        dispatch(updateContact(updateDetails));
        history.push('/')
    }

    useEffect(() => {
        if (contactData != null) {
            setName(contactData.name)
            setPhone(contactData.phone)
            setEmail(contactData.email)
        }
        dispatch(getContact(id))
    }, [contactData])
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Your Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary mt-2">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact
