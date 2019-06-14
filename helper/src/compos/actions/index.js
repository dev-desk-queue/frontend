import axios from 'axios';

import {history} from '../../history'

export const LOG_DATA = 'LOG_DATA';
export const LOG_DATA_SUCC = 'LOG_DATA_SUCC'

 const getLogin =(info)=>(dispatch)=> {
  dispatch({type:LOG_DATA});
  axios.post('https://devdeskqueue.herokuapp.com/api/auth/login',info)
  .then(res => {
    console.log(res.data,'login')
  dispatch({type:LOG_DATA_SUCC,payload:res.data.payload})
  
})
};

export const REG_DATA = 'REG_DATA';
export const REG_DATA_SUCC = 'REG_DATA_SUCC';
export const REG_DATA_FAIL = 'REG_DATA_FAIL';

export const getReg =(info)=> (dispatch)=> {
  dispatch({type:REG_DATA});
  axios
  .post('https://devdeskqueue.herokuapp.com/api/auth/register',info)
  .then(res=>{
    console.log(res.data)
    localStorage.setItem('token', res.data.token)
    axios.defaults.headers.common['Authorization'] = res.data.token;
    return dispatch({ type: REG_DATA_SUCC, payload: res.data })
})
.catch(err => dispatch({ type: REG_DATA_FAIL, playload: err }))
}



export default getLogin;


export const DATA = 'DATA';

export const DATA_COMPLETE = 'DATA_COMPLETE';

export const ERR = 'ERR';

export const createQ =(info)=>(dispatch)=>{
  dispatch({type:DATA});
  axios
  .post('',info)
  .then(res=>{ console.log(res.data) 
    dispatch({type:DATA_COMPLETE, data: res.data})})
  .catch(err=> dispatch({type:ERR,message:err}))
}

export const GET_DATA = "GET_DATA"

export const getData =()=>(dispatch)=>{
  dispatch({type:GET_DATA});
  axios
  .post('/')
  .then(res=>{ console.log(res.data) 
    dispatch({type:DATA_COMPLETE, data: res.data})})
  .catch(err=> dispatch({type:ERR,message:err}))
}
