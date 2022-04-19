import {writeFile, readFile} from 'fs'
const book = {
    title: "form",
    author: 'god'
}

const bookJSON = JSON.stringify(book)
writeFile('cool.js',bookJSON,() => console.log('file is saved'))

readFile('cool.js', (err, data) => {
    if (err) throw  err;
    console.log(JSON.parse(data.toString()).title)
})