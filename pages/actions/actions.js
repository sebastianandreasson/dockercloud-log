import { createAction } from 'redux-actions'
import { getActions } from '../adapters/dockercloud'

export const ACTIONS_UPDATE = 'ACTIONS_UPDATE'

/* ACTIONS
------------------------------------------------- */
export const getActions = createAction(ACTIONS_GET)
s
