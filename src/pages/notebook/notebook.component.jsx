import React from 'react'
import './notebook.styles.scss'
import Sidebar from '../../components/sidebar/sidebar.component'
import Notelist from '../../components/notelist/notelist.component'
import NoteEditor from '../../components/note-editor/note-editor.component'

const Notebook = () => {
  return (
    <div className='notebook'>
      <Sidebar />
      <Notelist />
      <NoteEditor />
    </div>
  )
}

export default Notebook
