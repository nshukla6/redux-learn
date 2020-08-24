import {STORE_RESULT, DELETE_RESULT} from './actionTypes'


// export const storeResult = (result) => {
  //   return {
  //     type:STORE_RESULT,counter: result
  //   }
  // }
  export const saveResult = (result) => {
    return {
      type:STORE_RESULT,counter: result
    }
  }
  export const storeResult = (result => {
    return (dispatch, getState) => {
      setTimeout(() => {
        const oldCounter = getState().ctr.counter;
        console.log(oldCounter);
        dispatch(saveResult(result))
      },2000)
    }
  })
  
  export const deleteResult = (result) => {
    return {
      type: DELETE_RESULT, payload:result
    }
  }