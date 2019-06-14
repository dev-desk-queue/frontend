import axios from 'axios';

import {history} from '../../history'

export const LOG_DATA = 'LOG_DATA';
export const LOG_DATA_SUCC = 'LOG_DATA_SUCC'

const getLogin =(info)=>(dispatch)=> {
  dispatch({type:LOG_DATA});
  axios.post('https://devdeskqueue.herokuapp.com/api/auth/login',info)
  .then(res => {
    console.log(res,'login')
  dispatch({type:LOG_DATA_SUCC,payload:res.data.payload})
})
};

// export const REG_DATA = 'REG_DATA';
// export const REG_DATA_SUCC = 'REG_DATA_SUCC';
// export const REG_DATA_FAIL = 'REG_DATA_FAIL';

// export const getReg =(info)=> (dispatch)=> {
//   console.log(info,'r')
//   dispatch({type:REG_DATA});
//   axios
//   .post('https://devdeskqueue.herokuapp.com/api/auth/register',info)
//   .then(res=>{
//     console.log(res, 'reg')
//     console.log('messeage')
//     localStorage.setItem('token', res.data.token)
//     axios.defaults.headers.common['Authorization'] = res.data.token;
//     return dispatch({ type: REG_DATA_SUCC, payload: res.data })
// })
// .catch(err => dispatch({ type: REG_DATA_FAIL, playload: err }))
// }

export default getLogin