import {
  ACTIONS_GET
} from '../actions/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  data: []
}

export default handleActions({
  [ACTIONS_GET]: (state, { payload }) => ({
    ...state,
    data: payload
  })
}, initialState)
