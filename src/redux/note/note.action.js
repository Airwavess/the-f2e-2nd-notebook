import NoteTypes from './note.types'

export const changeViewMode = payload => ({
  type: NoteTypes.CHANGE_VIEW_MODE,
  payload: payload
})

export const selectNode = payload => ({
  type: NoteTypes.SELECT_NOTE,
  payload: payload
})

export const updateNote = payload => ({
  type: NoteTypes.UPDATE_NOTE,
  payload: payload
})

export const createNote = () => ({
  type: NoteTypes.CREATE_NOTE
})
