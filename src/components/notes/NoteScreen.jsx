import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main--content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input 
          type="text"
          placeholder='New Note'
          autoComplete='off'
          className='notes__title--input'
        />

        <textarea 
          placeholder='what happened today?'
          className='notes__textarea'
        ></textarea>
      </div>

      <div className='notes__image'>
        <img 
          src="https://mymodernmet.com/wp/wp-content/uploads/2020/02/international-landscape-photographer-of-the-year-thumbnail.jpg" 
          alt="imagen" 
        />
      </div>
    </div>
  )
}
