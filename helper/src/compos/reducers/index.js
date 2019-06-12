import {
  LOG_DATA,
  REG_DATA,
  REG_DATA_SUCC,
  REG_DATA_FAIL,
} from '../actions';

const initialState ={
  login:[],
  grabData:false,
  error:'',
}

const reducers =(state = initialState,action)=> {
  switch(action.type) {
    case REG_DATA:
      return{
        ...state,
        grabData:true,
        error:''
      } ;
    case REG_DATA_SUCC:
      return{
        ...state,
        grabData:false,
        login: action.payload
      };
      default:
      return state;
    };
  };
  export default reducers ;

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

