import {
  LOG_DATA,
  LOG_DATA_SUCC,
  REG_DATA,
  REG_DATA_SUCC,
  REG_DATA_FAIL,

  DATA,
  DATA_COMPLETE,
  GET_DATA,

} from '../actions';

const initialState = {
  login: [],
  grabData: false,
  token: localStorage.getItem('token'),
  error: '',


  data: [],
  change: false,




}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOG_DATA:
      console.log(action.payload)
      return {
        error: '',
        grabData: true,
      };
    case LOG_DATA_SUCC:
      return {
        grabData: false,
        token: action.payload,
      }
    case REG_DATA:
      return {
        ...state,
        grabData: true,
        error: ''
      };
    case REG_DATA_SUCC:
      return {
        ...state,
        grabData: false,
        login: action.payload,
        error: ''
      };

    case DATA:
      return {
        ...state,
        change: true
      }
    case GET_DATA:
      return {
        ...state,
        data: action.payload
      }



    default:
      return state;
  };
};
export default reducers;

    // case REG_DATA:
    //   return{
    //     ...state,
    //     login:action.payload ,
    //     grabData:true,

    //   };
    // case REG_DATA_SUCC:
    //   return{
    //     ...state,
    //     login:{},
    //     grabData:false,
    //     error:'',
    //   };
    // case REG_DATA_FAIL:
    //   return{
    //     ...state,
    //     login:{},
    //     grabData:false,
    //     error:'',
    //   };

