import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './notelist.styles.scss'
import { FaSearch } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import NotelistViewSwitch from '../notelist-view-switch/notelist-view-switch.component'
import NotelistViewSummary from '../notelist-view-summary/notelist-view-summary.componen'
import NotelistViewCard from '../notelist-view-card/notelist-view-card-component'
import NotelistViewList from '../notelist-view-list/notelist-view-list.component'
import { selectNode } from '../../redux/note/note.action'

const Notelist = () => {
  const dispatch = useDispatch()
  const [filterWord, setFilterWord] = useState('')
  const viewMode = useSelector(state => state.note.viewMode)
  const notes = useSelector(state => state.note.notes).filter(note => {
    return (
      note.title.indexOf(filterWord) !== -1 ||
      note.content.indexOf(filterWord) !== -1
    )
  })

  const handleSetFilterWord = event => {
    setFilterWord(event.target.value)
  }

  const handleSelecteNote = (e, note) => {
    dispatch(selectNode(note))
  }

  let notelistView
  if (viewMode === 'card') {
    notelistView = (
      <NotelistViewCard notes={notes} handleSelecteNote={handleSelecteNote} />
    )
  } else if (viewMode === 'summary') {
    notelistView = (
      <NotelistViewSummary
        notes={notes}
        handleSelecteNote={handleSelecteNote}
      />
    )
  } else {
    notelistView = (
      <NotelistViewList notes={notes} handleSelecteNote={handleSelecteNote} />
    )
  }

  return (
    <div className='notelist'>
      <div className='notelist__search'>
        <FaSearch />
        <input
          type='text'
          placeholder='搜尋您的筆記'
          value={filterWord}
          onChange={handleSetFilterWord}
        />
      </div>
      <div className='notelist__header'>
        <div className='notelist__header-title'>
          <h3>所有筆記</h3>
          <MdKeyboardArrowDown />
        </div>
        <div className='notelist__header-display-mode'>
          <NotelistViewSwitch />
        </div>
      </div>
      <hr />
      <div className='notelist__list'>{notelistView}</div>
    </div>
  )
}

export default Notelist
