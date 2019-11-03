import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './note-editor.styles.scss'
import ToolBar from '../toolbar/toolbar.component'
import { MdAdd, MdClear, MdAttachFile, MdInsertDriveFile } from 'react-icons/md'
import { updateNote } from '../../redux/note/note.action'

const NoteEditor = () => {
  const dispatch = useDispatch()
  const selectedNote = useSelector(state => state.note.selectedNote)

  const [note, setNote] = useState(selectedNote)

  // 如果選擇了新的note，則更新state
  useEffect(() => {
    setNote(selectedNote)
  }, [selectedNote])

  useEffect(() => {
    dispatch(updateNote(note))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note])

  // 根據 `index` 更新note中的值
  const handleModifyNote = (event, index) => {
    setNote({
      ...note,
      [index]: event.target.value
    })
  }

  const handleRemoveTag = (event, tag) => {
    const index = note.tags.indexOf(tag)
    const immutableNote = { ...note }
    immutableNote.tags.splice(index, 1)
    setNote(immutableNote)
  }

  const handleUploadFile = event => {
    const immutableNote = { ...note }
    immutableNote.files.push(event.target.files[0].name)
    setNote(immutableNote)
  }

  return (
    <div className='note-editor'>
      <div className='note-editor__toolbar'>
        <ToolBar />
      </div>
      <div className='note-editor__note'>
        <div className='note-editor__note-title'>
          <input
            type='text'
            placeholder='無標題'
            value={note.title}
            onChange={e => handleModifyNote(e, 'title')}
          />
        </div>
        <div className='note-editor__note-tags'>
          {note.tags.map((tag, idx) => (
            <div
              className='note-editor__note-tag'
              key={`tag-${tag}-${idx}}`}
              onClick={e => handleRemoveTag(e, tag)}
            >
              {tag} <MdClear />
            </div>
          ))}
          <div className='note-editor__note-add-tag'>
            <input type='text' placeholder='Add' />
            <MdAdd />
          </div>
        </div>
        <div className='note-editor__note-content'>
          <div className='note-editor__note-textarea'>
            <textarea
              placeholder='請寫下內容'
              value={note.content}
              onChange={e => handleModifyNote(e, 'content')}
            ></textarea>
          </div>
          <div className='note-editor__note-files'>
            {note.files.map((name, idx) => (
              <div className='note-editor__note-file' key={`${name} ${idx}`}>
                <div className='note-editor__note-file-icon'>
                  <MdAttachFile />
                  {name}
                </div>
                <div>
                  <MdClear />
                </div>
              </div>
            ))}
            <div className='note-editor__note-file-input'>
              <label htmlFor='note-editor__note-file'>
                <div className='note-editor__note-file-icon'>
                  <MdInsertDriveFile /> 上傳檔案、圖片、音檔
                  <span>點擊上傳檔案</span>
                </div>
                <div>
                  <MdAdd />
                </div>
              </label>
              <input
                id='note-editor__note-file'
                type='file'
                onChange={handleUploadFile}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteEditor
