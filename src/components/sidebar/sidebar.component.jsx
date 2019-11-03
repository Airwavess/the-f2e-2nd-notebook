import React from 'react'
import { useDispatch } from 'react-redux'
import './sidebar.styles.scss'
import dog from '../../assets/Dog-01.png'
import night from '../../assets/nights_stay.svg'
import sunny from '../../assets/wb_sunny.svg'
import {
  FaPlusCircle,
  FaFileAlt,
  FaStar,
  FaTag,
  FaCalendar,
  FaUserFriends,
  FaTrash
} from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { createNote } from '../../redux/note/note.action'

const SideBar = () => {
  const dispatch = useDispatch()

  const handleCreateNewNote = () => {
    dispatch(createNote())
  }

  return (
    <div className='sidebar'>
      <div className='sidebar__content'>
        <h3 className='sidebar__title'>FreeNote.</h3>
        <button className='sidebar__btn' onClick={handleCreateNewNote}>
          <FaPlusCircle className='sidebar__icon' />
          <span className='sidebar__span'>新增筆記</span>
        </button>
        <ul className='sidebar__list'>
          <li className='sidebar__list-item'>
            <FaFileAlt />
            所有筆記
          </li>
          <li className='sidebar__list-item'>
            <FaStar />
            捷徑
          </li>
          <li className='sidebar__list-item'>
            <FaTag />
            標籤
          </li>
          <li className='sidebar__list-item'>
            <FaCalendar />
            月曆
          </li>
          <li className='sidebar__list-item'>
            <FaUserFriends />
            與我共用
          </li>
          <li className='sidebar__list-item'>
            <FaTrash />
            垃圾桶
          </li>
        </ul>
      </div>
      <div className='sidebar__footer'>
        <div className='sidebar__style-selector'>
          <span>模式</span>
          <div className='sidebar__style-selector-group'>
            <span className='sidebar__style-selector-icon sidebar__style-selector-icon--active'>
              <img src={sunny} alt='' />
            </span>
            <span className='sidebar__style-selector-icon'>
              <img src={night} alt='' />
            </span>
          </div>
        </div>
        <div className='sidebar__dog'>
          <img src={dog} alt='dog' />
          <span>Im an dog</span>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  )
}

export default SideBar
