const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,  // makes "title" a required field
            type: 'string'      // validates for title as a string
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log("Listing all notes")
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log("Reading a note")
    }
})

yargs.parse()
