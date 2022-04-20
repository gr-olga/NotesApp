import yargs from "yargs"
import {hideBin} from 'yargs/helpers'
import {addNote, removeNote} from "./notes.js";

const ya = yargs(hideBin(process.argv)).command({
    command: 'add',
    describe:'Add a new note',
    builder: {
        title:{
            disable: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            disable: 'bode note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv)  {
      addNote(argv.title, argv.body)
    }
}).command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
           disable: 'Note title',
            demandOption: true,
            type: "string"
}
    },
    handler: function (argv) {
        removeNote(argv.title)
    }
}).command({
    command: 'list',
    describe: 'Add a new list',
    handler: function () {
        console.log('Adding list')
    }
}).command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading notes')
    }
})
// const remove = yargs(hideBin(process.argv)).command({
//     command: 'remove',
//     describe: 'Remove a note',
//     handler: function () {
//         console.log('R notes')
//     }
// })
// const list = yargs(hideBin(process.argv)).command({
//     command: 'list',
//     describe: 'Add a new list',
//     handler: function () {
//         console.log('Adding list')
//     }
// })
// const read = yargs(hideBin(process.argv)).command({
//     command: 'read',
//     describe: 'Read a note',
//     handler: function () {
//         console.log('Reading notes')
//     }
// })

 //ya.parse()
console.log(ya.argv)

// console.log(yargs.argv)


