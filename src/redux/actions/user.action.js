import Axios from './axios-config'
export const USER = 'USER';
export const USER_LOADING = 'USER_LOADING';
export const USER_ERROR = 'USER_ERROR';

export const usersAction = email => async (dispatch) => {

    dispatch({
       type: USER_LOADING 
      });

    // const token = localStorage.getItem('KW_AT');

    return Axios.get('/user/all', {headers: {Authorization: email}})
    .then((res) => {
        dispatch({
            type: USER,
            payload: res.data
        })
    })
    .catch(err=>{
        if(err.message === 'Network Error'){
            dispatch({
                type: USER_ERROR,
                error: err.message
            })
        }
        if(err.response){
            dispatch({
                type: USER_ERROR,
                error: err.response.data.error
            })
        }
    });
}
