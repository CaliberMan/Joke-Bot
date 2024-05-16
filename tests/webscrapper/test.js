const scrapper = require("../../src/webscrapper/scrapper");

test('Website with jokes', async () => {
    const res = await scrapper.scrapeSite();
    expect(res.length).toBe(112);
})
