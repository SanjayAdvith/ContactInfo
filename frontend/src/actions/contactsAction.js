import { CREATE_CONTACT } from '../constants/contactsConstant'
export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact,
    };
}