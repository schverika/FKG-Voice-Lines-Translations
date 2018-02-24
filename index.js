'use strict';

const fs = require('fs');
const _ = require('lodash');
const readline = require('readline');

if (process.argv.length < 3) {
    console.log("Missing command line argument:\nWhich flower knight?");
    return;
}
let FKG = process.argv[2];

let inFile, inObj;

try {
    inFile = fs.readFileSync('Flower Knights/'+FKG+'.json');
    inObj = JSON.parse(inFile);
} catch (err) {
    console.log(err);
    return;
}

if (process.argv.length < 4) {
    console.log("Missing command line argument:\nWhich voice line?");
    let allLines = _.get(inObj, 'translations.'+FKG)
    console.log(Object.keys(allLines));
    console.log("Pick a voice line from above");
    return;
}

let voiceLine = process.argv[3];

let voiceTranscript = _.get(inObj, 'translations.'+FKG+'.'+voiceLine);

if (voiceTranscript) {
    console.log(voiceTranscript);
    fs.writeFileSync('JP.txt', voiceTranscript["raw-japanese"], {encoding: 'utf8'});
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question("Enter new fan-translation\n(empty line to abort)\n", (transInput) => {
        
        if (transInput) {
            inObj.translations[FKG][voiceLine]["fan-translation"] = transInput;
            
            fs.writeFileSync(FKG+'.json', JSON.stringify(inObj, null, '\t'), {encoding: 'utf8'});
            console.log('output modified file to '+FKG+'.json\nManually move to the "Flower Knights" folder');
        }
        
        rl.close();
    });
}