import React from 'react'
import { useSelector } from 'react-redux'
import './notelist-view-card.styles.scss'

const NotelistViewCard = ({ notes, handleSelecteNote }) => {
  const selectedNote = useSelector(state => state.note.selectedNote)

  notes = notes.map(note => {
    return {
      ...note,
      title:
        note.title.length > 0 ? note.title.substring(0, 12) + '...' : '無內容',
      content: note.content.substring(0, 70) + '...'
    }
  })

  return (
    <div className='notelist-view-card'>
      {notes.map((note, idx) => (
        <div
          className={
            `notelist-view-card__note-list-item ` +
            (selectedNote.id === note.id
              ? 'notelist-view-card__note-list-item--active'
              : '')
          }
          key={`card-${idx}`}
          onClick={e => handleSelecteNote(e, note)}
        >
          <h4 className='notelist-view-card__note-title'>{note.title}</h4>
          <div className='notelist-view-card__note-content'>{note.content}</div>
          <div className='notelist-view-card__note-info'>
            <div className='notelist-view-card__note-tags'>
              {note.tags.map(tag => (
                <div className='notelist-view-card__note-tag' key={tag}>
                  {tag}
                </div>
              ))}
            </div>
            <div className='notelist-view-card__note-date'>{note.date}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NotelistViewCard
