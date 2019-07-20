const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Doug.')

fs.appendFileSync('notes.txt', '\nHere are some appended woooords')
fs.appendFileSync('notes.txt', '\nHere are some MORE appended woooords')