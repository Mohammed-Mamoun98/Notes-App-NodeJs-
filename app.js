
// const mul = require('./utils.js')

// const fs = require('fs')

// fs.writeFileSync('notes-app','Hello world!')

// fs.appendFileSync('notes-app','\n We have overridden the notes app !');

// console.log(mul(2,4))
// console.log(typeof mul)


// const fs = require('fs')

// fs.writeFileSync('node.js','const print = (string) => {return string}; module.exports = print; ')


// const print = require('./node.js');


// const validator = require('validator')

// console.log(validator.isEmail('hello@lakndla.com'))




// const chalk = require('chalk')


// console.log(chalk.yellow.inverse.bold('hello'))


/**
 * 
 * 
 * 
 * 
 */

 const notes = require('./node.js')

 const chalk = require('chalk')

const yargs = require('yargs')

yargs.version('1.1.0')



yargs
.command({
    command:'add',
    describe: 'add a new not',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title,argv.body)
    }
})


yargs.command({
    command:'remove',
    describe:'removing notes',
    builder:{
        title:{
            demandOption:true,
            type:'string',
            describe:'note title to remove.'
        }
    }
    ,handler:function(argv){
        notes.anotherRemoveNote(argv.title)
    }
})


yargs.command({
    command:'list',
    describe:'list all notes',
    handler:function(){
        console.log(chalk.bold.inverse('\t\t      notes listing..\n'))
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            demandOption:true,
            type:'string',
            describe:'note title for reading.'
        }
    }
    
    ,handler:function(argv){
        console.log(chalk.bold.inverse.yellow('reading a note..\n'))
        notes.readNotes(argv.title)
    }
})




yargs.parse()
//console.log(yargs.argv.body)














