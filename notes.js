const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return "Your notes..."
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
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

const removeNote = function(title) {
    const notes = loadNotes()
    const filteredNotes = notes.filter((note) => {
        return note.title !== title
    })

    if (notes.length === filteredNotes.length) {
        console.log(chalk.red.inverse("Note with that title does not exist"))
    } else {
        console.log(chalk.green.inverse("Note deleted"))
        saveNotes(filteredNotes)
    }
}

const saveNotes = function(array) {
    const dataJSON = JSON.stringify(array)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
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
    removeNote
}