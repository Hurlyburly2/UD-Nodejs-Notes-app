const chalk = require('chalk')

const getNotes = require('./notes.js')

const notes = getNotes();
console.log(notes)

console.log(chalk.green("Success!"))
console.log(chalk.blue.bold("bolded text"))
console.log(chalk.inverse.red("inverted text"))