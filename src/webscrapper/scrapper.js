const axios = require('axios');
const cheerio = require('cheerio');

let url = "https://www.goodhousekeeping.com/life/entertainment/a41779929/corny-jokes/";

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

scrapeSite().then(result => {
    console.log(result)
}).catch(err => console.log(err));
