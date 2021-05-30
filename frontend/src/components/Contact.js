import React from 'react'
import { useSelector } from 'react-redux'
import ContactList from './ContactList'

const Contact = () => {
    const contt = useSelector((state) => state.contactReduser.contacts)
    console.log('conatact sanjay ' + contt)

    //const contacts = [1, 2, 3, 4, 5]

    return (
        <div>
            <table className="table container shadow">
                <thead>
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contt.map((c) =>
                        <ContactList data={c} key={c.id} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Contact
