export default function(state={
    users: [],
    numChildren: 0,
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch(action.type) {
        case "FETCH_USERS": {
            return {...state,
                fetching: true
            }
        }
        case "FETCH_USERS_FULFILLED": {
            return {...state,
                fetching: false,
                fetched: true,
                users: action.payload,
                numChildren: action.payload.length
            }
        }
        case "FETCH_USERS_REJECTED": {
            return {...state,
                fetching: false,
                error: action.payload
            }
        }
        case "ADD_USER": {
            return {...state,
                fetching: true
            }
        }
        case "ADD_USER_FULFILLED": {
            return {...state,
                fetching: false,
                fetched: true,
                users: [...state.users, action.payload],
                numChildren: state.users.length + 1
            }
        }
    }
    return state;
}