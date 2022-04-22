import * as fs from "fs";
import chalk from "chalk";

export function getNotes() {
    return 'your notes...'
}

export function addNote(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title
    )
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new not added');
    } else {
        console.log('note title taken')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

export function removeNote() {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title
    )
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse(`Removed ${title}`))
        saveNotes(notesToKeep)
    } else console.log(chalk.red.inverse('no note found'))
}

export function listNote() {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(chalk.red('you note: '), chalk.green(note.title))
    })
}

export function readNote(title) {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title
    )
    if (duplicateNotes) {
      console.log(chalk.green(duplicateNotes.title), duplicateNotes.body)
        }
        else {
        console.log('note title taken')
    }
}

// module.exports = getNotes