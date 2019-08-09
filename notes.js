const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title )

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New note added")
    } else {
        console.log("Cannot add duplicate note title")
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter((note) => note.title !== title )

    if (notes.length === filteredNotes.length) {
        console.log(chalk.red.inverse("Note with that title does not exist"))
    } else {
        console.log(chalk.green.inverse("Note deleted"))
        saveNotes(filteredNotes)
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue("Your Notes:"))
    let noteCounter = 1
    notes.forEach((note) => {
        console.log(noteCounter + ". " + note.title)
        noteCounter++
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)

    if (noteToRead) {
        console.log(chalk.blue(noteToRead.title) + " " + noteToRead.body)
    } else {
        console.log(chalk.red.inverse("Note not found"))
    }
}

const saveNotes = (array) => {
    const dataJSON = JSON.stringify(array)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}