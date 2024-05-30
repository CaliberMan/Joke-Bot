const scrapper = require("./webscrapper/scrapper");
const fileUtils = require("./utils/utils");

async function main()
{
    const jokes = await scrapper.scrapeSite();
    fileUtils.writeToJSONFile("jokes.json", jokes);
}

main();
