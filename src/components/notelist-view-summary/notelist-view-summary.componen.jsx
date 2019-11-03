import React from 'react'
import { useSelector } from 'react-redux'
import './notelist-view-summary.styles.scss'

const NotelistViewSummary = ({ notes, handleSelecteNote }) => {
  const selectedNote = useSelector(state => state.note.selectedNote)

  notes = notes.map(note => {
    return {
      ...note,
      title: note.title.substring(0, 16) + '...',
      content: note.content.substring(0, 36) + '...'
    }
  })

  return (
    <div className='notelist-view-summary'>
      {notes.map((note, idx) => (
        <div
          className={
            `notelist-view-summary__note-list-item ` +
            (selectedNote.id === note.id
              ? 'notelist-view-summary__note-list-item--active'
              : '')
          }
          key={`summary-${idx}`}
          onClick={e => handleSelecteNote(e, note)}
        >
          <h4 className='notelist-view-summary__note-title'>{note.title}</h4>
          <div className='notelist-view-summary__note-content'>
            {note.content}
          </div>
          <div className='notelist-view-summary__note-info'>
            <div className='notelist-view-summary__note-tags'>
              {note.tags.map(tag => (
                <div className='notelist-view-summary__note-tag' key={tag}>{tag}</div>
              ))}
            </div>
            <div className='notelist-view-summary__note-date'>{note.date}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NotelistViewSummary
