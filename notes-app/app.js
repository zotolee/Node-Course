 const chalk = require('chalk')
 const yargs = require('yargs')
// //const validator = require('validator')
 const notes = require('./notes.js')

// const msg = getNotes()

// console.log(msg)

// const greenMsg = chalk.blue.inverse.bold('SUCCESS!')
// console.log(greenMsg)
// // console.log(validator.isURL('example.com'))


// // const add = require('./utils.js')

// // const sum = add(4, -2)

// // console.log(sum)

//  const command = process.argv[2]

//  console.log(process.argv)

//  if (command === 'add') {
//     console.log('Adding note!')
//  } else if (command === 'remove'){
//     console.log('Removing note!')
//  }

//Create add command
yargs.command({
   command: 'add',
   describe: 'A a new note',
   builder: {
      title: {
         describe: 'Note title',
         demandOption: false,
         type: 'string'
      },
      body: {
         describe: 'This is the note added',
         demandOption: true,
         type: 'string'
      }
   },
   handler: function (argv) {
      notes.addNote(argv.title, argv.body)
   }
})
// remove a note
yargs.command({
   command: 'remove',
   describe: 'Removing note',
   builder: {
      title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      },
   },   
   handler: function (argv) {
      notes.removeNote(argv.title)
   }
})
//read a note
yargs.command({
   command: 'read',
   describe: 'Reading a new note',
   builder: {
      title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      },
   }, 
   handler: function () {
      console.log('Reading a new note!')
   }
})
//list a note
yargs.command({
   command: 'list',
   describe: 'List a new note',
   handler: function () {
      notes.listNotes()
   }
})
yargs.parse()
