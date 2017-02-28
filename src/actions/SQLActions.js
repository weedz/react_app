export function fetchUsers() {
    return function(dispatch) {
        fetch('/api/sql-test').then(res => {
            return res.json();
        }).then((json) => {
            dispatch({
                type: "FETCH_USERS_FULFILLED",
                payload: json
            });
        }).catch((err) => {
            dispatch({
                type:"FETCH_USERS_REJECTED",
                payload:err
            });
        })
    }
}
export function addUser(id) {
    return function (dispatch) {
        fetch(`/api/sql-test/${id}`).then(res => (
            res.json()
        )).then(json => {
            dispatch({
                type: "ADD_USER_FULFILLED",
                payload: json
            })
        }).catch(err => {
            dispatch({
                type: "ADD_USER_REJECTED",
                payload: err
            })
        })
    }
}