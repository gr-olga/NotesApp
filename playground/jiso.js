import {writeFile, readFile}  from 'fs'
import * as fs from "fs";
// const book = {
//     title: "form",
//     author: 'god'
// }

// const bookJSON = JSON.stringify(book)
// writeFile('cool.json',bookJSON,() => console.log('file is saved'))

const buffer = fs.readFileSync('cool.json')
console.log(buffer);
const dataJSON = buffer.toString()
console.log(dataJSON)
const user = JSON.parse(dataJSON)
user.name = "Moo"
user.age = '99'
console.log(user)

const userJSON = JSON.stringify(user)
writeFile('cool.json', userJSON,() => console.log('file is saved'))