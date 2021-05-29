import React, { useState } from 'react'

const AddContact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name, email, phone)
    }
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
                    <button className="btn btn-primary mt-2">Add To Contact List</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
