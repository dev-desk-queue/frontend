import {
  REG_DATA,
  REG_DATA_SUCC,
  REG_DATA_FAIL,
} from '../actions';

const initialState ={
  login:{},
  grabData:false,
  error:'',
}

const reducer =(state = initialState,action)=> {
  switch(action.type) {
    case REG_DATA:
      return{
        ...state,
        login:action.payload ,
        grabData:true,
        error:'',
      };
    case REG_DATA_SUCC:
      return{
        ...state,
        login:{},
        grabData:false,
        error:'',
      };
    case REG_DATA_FAIL:
      return{
        ...state,
        login:{},
        grabData:false,
        error:'',
      };
    default:
    return state;
  }
}


export default reducer ;