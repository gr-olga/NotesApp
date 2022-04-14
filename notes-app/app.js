import yargs from "yargs"
import {hideBin} from 'yargs/helpers'

const ya = yargs(hideBin(process.argv)).command({
    command: 'add',
    describe: 'Adding command',
    handler: function () {
        console.log('Adding notes')
    }
})


// ya.parse()
// console.log(ya.argv)

// console.log(yargs.argv)


