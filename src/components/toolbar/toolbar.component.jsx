import React from 'react'
import './toolbar.styles.scss'
import {
  MdKeyboardArrowDown,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatIndentIncrease,
  MdFormatIndentDecrease,
  MdFormatAlignLeft,
  MdFormatLineSpacing,
  MdFormatListBulleted,
  MdInsertLink,
  MdInsertPhoto,
  MdAttachFile
} from 'react-icons/md'

const ToolBar = () => {
  return (
    <ul className='toolbar'>
      <li>
        Arial
        <MdKeyboardArrowDown />
      </li>
      <li>
        14
        <MdKeyboardArrowDown />
      </li>
      <li>
        <MdFormatBold />
      </li>
      <li>
        <MdFormatItalic />
      </li>
      <li>
        <MdFormatUnderlined />
      </li>
      <li>
        <MdFormatIndentIncrease />
      </li>
      <li>
        <MdFormatIndentDecrease />
      </li>
      <li>
        <MdFormatAlignLeft />
        <MdKeyboardArrowDown />
      </li>
      <li>
        <MdFormatLineSpacing />
        <MdKeyboardArrowDown />
      </li>
      <li>
        <MdFormatListBulleted />
      </li>
      <li>
        <MdInsertLink />
      </li>
      <li>
        <MdInsertPhoto />
      </li>
      <li>
        <MdAttachFile />
      </li>
    </ul>
  )
}

export default ToolBar