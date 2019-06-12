import axios from 'axios';

export const LOG_DATA = 'LOG_DATA';

export const getLogin =(info)=>(dispatch)=> {
  dispatch({type:LOG_DATA});
  return axios.post('https://devdeskqueue.herokuapp.com/api/',info)
  .then(res => {res.data.payload});
}

export const REG_DATA = 'REG_DATA';
export const REG_DATA_SUCC = 'REG_DATA_SUCC';
export const REG_DATA_FAIL = 'REG_DATA_FAIL';

export const getReg =()=> (dispatch)=> {
  dispatch({type:REG_DATA});
  axios
  .get('https://devdeskqueue.herokuapp.com/api/')
  .then()
  .catch()
}

export default getLogin;