import { combineReducers } from 'redux'

import NoteReducer from './note/note.reducer'

const rootReducer = combineReducers({ note: NoteReducer })

export default rootReducer
