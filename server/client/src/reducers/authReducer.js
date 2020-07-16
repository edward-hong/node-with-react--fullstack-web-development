import { FETCH_USER } from '../actions/types'

const authReducer = (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      return payload || false
    default:
      return state
  }
}

export default authReducer
