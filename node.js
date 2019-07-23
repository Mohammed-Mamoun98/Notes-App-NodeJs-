const fs = require('fs')
const chalk = require('chalk')

const print = (string) => {return ("Hello "+string)};

const addNotes = (title,body) =>{

const notes = loadNotes()

try {


    duplicatedElemts = notes.filter(function(note){
        return title === note['Title']
    })

   // console.log(duplicatedElemts[0])


     

    if((duplicatedElemts.length > 0)&&(title === duplicatedElemts[0].Title)){
        console.log('duplicated title')
        return;
    }
    
    else{
        notes.push({
            Title:title,
            Body:body
        })
        console.log('note added succefully')
        saveData(notes)
    }
       
    

   



} catch (error) {
    console.log(error)
}

}

//list Notes ----------------------------


const listNotes = () =>{
    const notes = loadNotes()

    console.log(chalk.yellow.bold.inverse('\t\t\t title \t\t\t\n'))
    debugger
    for(let x in notes){


    console.log('\t\t\t'+notes[x].Title + '\n')

    
                  
}

}

//read Notes -----------------


const readNotes = (title) =>{


   // const notes = loadNotes()

    // try {
        
    //     for(i in notes){
        
    //         if(notes[i].Title === title){

    //             console.log(chalk.green.bold.inverse(notes[i].Body))
    //             return;

    //         }
    //     }

    //     console.log('no specified title!')



    // } catch (error) {
    //     console.log('no specified title!')
        
    // }



    const notes = loadNotes()

    specNote = notes.find((note) =>
         note.Title === title
    )

    if(specNote){
        console.log(chalk.green.bold.inverse(specNote.Body))
    }

else{
    console.log(chalk.red.bold.inverse('Not found!'))
}

    // if(notes){
    //    console.log((notes.filter((note) =>{
    //        return note.Title === title
    //    }))[0].Body)
    // }

}














//load Notes -----------------

const loadNotes = () => {

    try {

const dataBuffer = fs.readFileSync('notes.json')
const dataJSON = dataBuffer.toString()
const pureData = JSON.parse(dataJSON)

return pureData
        
    } catch (error) {

return []

    }


}

//save Data ------------------------------------------
const saveData = (notes) =>{
    const dataToSend = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataToSend)
}

//remove Data ------------------------------------------


const removeNote = (title) => {
    try {
        
        const notes = loadNotes()
        const notesToRemove = loadNotes().filter(function(note){


            return note.Title === title
                     
                
            
        })

        const specifiedTitle = (notesToRemove[0].Title)
        console.log(specifiedTitle + " is the spec")
         for(let i = 0;i<notes.length;i++){
        
                if(notes[i].Title === specifiedTitle){

                    console.log('item deleted succefully!' + notes[i].Title)
                    notes.splice(i,1)
                    
                    saveData(notes)

                }
               
            
        
        
        
    } 
    
}


catch (error) {
        console.log('invalid title')
    }
}

const anotherRemoveNote = (title) =>{

    const notes = loadNotes()
    const notesTokeep = notes.filter(function(note){
        return note.Title !== title
    })

    saveData(notesTokeep)
    //console.log(notes.length + "/////" + notesTokeep.length)

    if(notes.length === notesTokeep.length){
        console.log('no such note with spec title.')
    }
    else{
        console.log('note with title ' + title + " has removed succefully!" )

    }

}


module.exports = {
addNotes:addNotes,
removeNote:removeNote,
listNotes:listNotes,
readNotes:readNotes,
anotherRemoveNote:anotherRemoveNote

}