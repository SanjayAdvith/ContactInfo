import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
    const contt = useSelector((state) => state.contacts)
    console.log(contt)

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
                    </tr>
                </thead>
                <tbody>
                    {contt.map((c) => {
                        return (<tr>
                            <th>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className="custom-control-label"></label>

                                </div>
                            </th>
                            <td>{c.name}</td>
                            <td>{c.phone}</td>
                            <td>{c.email}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Contact
