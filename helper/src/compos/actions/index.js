import axios from 'axios';

export const LOG_DATA = 'LOG_DATA';

export const getLogin =(info)=>(dispatch)=> {
  dispatch({type:LOG_DATA});
  axios.post('https://devdeskqueue.herokuapp.com/api/auth/login',info).then(res => {
    localStorage.setItem("token", res.data.payload);
  });
};

export const REG_DATA = 'REG_DATA';
export const REG_DATA_SUCC = 'REG_DATA_SUCC';
export const REG_DATA_FAIL = 'REG_DATA_FAIL';

export const getReg =()=> (dispatch)=> {
  dispatch({type:REG_DATA});
  axios
  .post('https://devdeskqueue.herokuapp.com/api/',{
    headers: { Authorization: localStorage.getItem("token") }
  })
  .then(res => {
    console.log(res);
    dispatch({
      type: REG_DATA_SUCC,
      payload: res.data
    });
  })
  .catch(err => {
    console.log(err.response);
  });
};



export default getLogin;