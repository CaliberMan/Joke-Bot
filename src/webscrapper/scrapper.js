const axios = require('axios');
const cheerio = require('cheerio');

let url = "https://www.goodhousekeeping.com/life/entertainment/a41779929/corny-jokes/";

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

async function scrapeSite()
{
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const htmlElement = $(".css-1nd4gv7.emevuu60");

    const jokes = [];

    htmlElement.each((index, element) => {
        jokes.push($(element).text());
    });

    jokes.splice(0, 4);
    let len = jokes.length;
    const res = [];

    for (let index = 0; index < len - 1; index += 2)
    {
        let joke = { question: jokes[index], answer: jokes[index+1]};
        res.push(joke);
    }

    return res;
}

module.exports = {
    scrapeSite,
}
