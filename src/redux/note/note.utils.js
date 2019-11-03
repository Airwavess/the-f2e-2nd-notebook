export const updateNote = (notes, updatedNote) => {
  const newNotes = [...notes]
  let targetNote = newNotes.find(note => note.id === updatedNote.id)
  targetNote.title = updatedNote.title
  targetNote.content = updatedNote.content
  targetNote.tags = updatedNote.tags
  targetNote.files = updatedNote.files

  const Today = new Date()
  targetNote.date = `${Today.getFullYear()}/${Today.getMonth() +
    1}/${Today.getDate()}`

  return newNotes
}

export const createNote = notes => {
  const newNotes = [...notes]
  const Today = new Date()

  newNotes.unshift({
    id: new Date().valueOf(),
    title: '',
    content: '',
    date: `${Today.getFullYear()}/${Today.getMonth() + 1}/${Today.getDate()}`,
    tags: [],
    files: []
  })

  return newNotes
}
