import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT
} from '../constants/contactsConstant'



export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact,
    };
}


// get a contact

export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
})


//update a contact
export const updateContact = (c) => ({
    type: UPDATE_CONTACT,
    payload: c
})

//delete a contact 
export const deleteContact = (id) => ({
    type: UPDATE_CONTACT,
    payload: id
})

