
let initialState = {
    contactList : [],
    searchName : ''
}

function reducer (state=initialState, action) {

    const { type, payload } = action

    switch(type){
        case "ADDCONTACT" :
            return {
                ...state,
                contactList : [...state.contactList , {name : payload.name , phoneNumber : payload.phoneNumber}]
            }

        case "SEARCHNAME" :
            return {
                ...state,
                searchName : payload.searchName
            }

        default :
            return {...state}
    }
}

export default reducer