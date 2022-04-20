import * as fs from "fs";
import chalk from "chalk";

export  function getNotes (){
    return 'your notes...'
}

export  function addNote(title, body){
const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>{
       return  note.title === title
    })
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new not added');
    }else {
        console.log('note title taken')
    }
}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function (){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e){
        return []
    }
}

export function removeNote(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>{
      return   note.title !== title
    })
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse(`Removed ${title}`))
        saveNotes(notesToKeep)
    }
    else console.log(chalk.red.inverse('no note found'))
}
  // module.exports = getNotes