const fs = require('fs');

function readFromJSONFile(JSON_filename)
{
    const content = fs.readFileSync(JSON_filename, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });

    return JSON.parse(content);
}

function writeToJSONFile(JSON_filename, jokes)
{
    const usersJSON = JSON.stringify(jokes);
    fs.writeFileSync(JSON_filename, usersJSON, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
}

function giveAJoke()
{
    let jokes = readFromJSONFile('jokes_cp.json');
    jokes.splice(0, 1);
    writeToJSONFile('jokes_cp.json', jokes);
    return jokes[0];
}

module.exports = {
    readFromJSONFile,
    writeToJSONFile,
    giveAJoke
}
