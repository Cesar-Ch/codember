import fs from 'node:fs'

const data = fs.readFileSync('./challenge_01/message_01.txt', 'utf8')

const listWords = {}


data.split(' ').map(e => {
    if (listWords.hasOwnProperty(e.toLocaleLowerCase())) {
        listWords[e.toLocaleLowerCase()] +=  1
    } else {
        listWords[e.toLocaleLowerCase()] = 1
    }
})

console.log('submit ' + Object.entries(listWords).join('').replaceAll(',',''))

