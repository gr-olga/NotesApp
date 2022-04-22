import yargs from "yargs"
import {hideBin} from 'yargs/helpers'
import {addNote, listNote, readNote, removeNote} from "./notes.js";

const ya = yargs(hideBin(process.argv)).command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            disable: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            disable: 'bode note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addNote(argv.title, argv.body)
    }
}).command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            disable: 'Note title',
            demandOption: true,
            type: "string"
        }
    },
    handler (argv) {
        removeNote(argv.title)
    }
}).command({
    command: 'list',
    describe: 'Add a new list',
    handler (argv) {
        listNote(argv)
    }
}).command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            disable: 'Note title',
            demandOption: true,
            type: "string"
        }
    },
    handler (argv) {
        readNote(argv.title)
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


