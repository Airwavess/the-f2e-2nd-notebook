import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './notelist-view-switch.styles.scss'
import { MdViewList, MdViewModule, MdFormatListBulleted } from 'react-icons/md'
import { changeViewMode } from '../../redux/note/note.action'

const NotelistViewSwitch = () => {
  const dispatch = useDispatch()
  const viewMode = useSelector(state => state.note.viewMode)

  const [display, setDispaly] = useState('none')

  const handleSetDispaly = () => {
    if (display === 'none') {
      setDispaly('block')
    } else {
      setDispaly('none')
    }
  }

  let mode
  if (viewMode === 'card') {
    mode = <MdViewModule />
  } else if (viewMode === 'summary') {
    mode = <MdViewList />
  } else {
    mode = <MdFormatListBulleted />
  }

  const handleChangeMode = changedMode => {
    setDispaly('none')
    dispatch(changeViewMode(changedMode))
  }

  return (
    <>
      <div className='notelist-view-switch__btn' onClick={handleSetDispaly}>
        {mode}
      </div>
      <div className='notelist-view-switch__list' style={{ display: display }}>
        <ul>
          <li onClick={() => handleChangeMode('card')}>
            <MdViewModule />
            卡片檢視
          </li>
          <li onClick={() => handleChangeMode('summary')}>
            <MdViewList />
            摘要檢視
          </li>
          <li onClick={() => handleChangeMode('list')}>
            <MdFormatListBulleted />
            文字列表檢視
          </li>
        </ul>
      </div>
    </>
  )
}

export default NotelistViewSwitch
