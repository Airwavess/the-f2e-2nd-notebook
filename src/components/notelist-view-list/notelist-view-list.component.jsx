import React from 'react'
import { useSelector } from 'react-redux'
import './notelist-view-list.styles.scss'

const NotelistViewList = ({ notes, handleSelecteNote }) => {
  const selectedNote = useSelector(state => state.note.selectedNote)

  notes = notes.map(note => {
    return {
      ...note,
      title: note.title.substring(0, 12) + ' ...'
    }
  })

  return (
    <div className='notelist-view-list'>
      {notes.map((note, idx) => (
        <div
          className={
            `notelist-view-list__note-list-item ` +
            (selectedNote.id === note.id
              ? 'notelist-view-list__note-list-item--active'
              : '')
          }
          key={`list-${idx}`}
          onClick={e => handleSelecteNote(e, note)}
        >
          <div className='notelist-view-list__note-info'>
            <div className='notelist-view-list__note-date'>{note.date}</div>
          </div>
          <h4 className='notelist-view-list__note-title'>{note.title}</h4>
        </div>
      ))}
    </div>
  )
}

export default NotelistViewList
