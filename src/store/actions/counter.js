import {INCREMENT, DECREMENT, ADD, SUBTRACT} from './actionTypes'

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement=() => {
  return {
    type: DECREMENT
  }
}

export const add = (num) => {
  return {
    type:ADD, payload:num
  }
}

export const subtract = (num) => {
  return {
    type:SUBTRACT, payload:num
  }
}
