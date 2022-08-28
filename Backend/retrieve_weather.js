const pupeteer = require('puppeteer')

async function scrapeProduct(url) {
    const browser = await pupeteer.launch({headless: true});
    const page = await browser.newPage();

    try {
        
        // if (!reusePageInstance){
        //     await page.goto(url);
        // }
        await page.goto(url); //will throw error here if url is invalid
        // getting temperature
        const temperature = await page.$eval('.h2', el => el.innerText);

        //getting windchill
        [info] = await page.$x('//*[@id="qlook"]/p[2]/text()[1]');
        src = await info.getProperty('textContent');
        windchill = await src.jsonValue();

        //getting weather status
        [info] = await page.$x('//*[@id="qlook"]/p[1]');
        src = await info.getProperty('textContent');
        weather = await src.jsonValue();
        let weather = weather.slice(-1);

        // console.log({temperature});
        // console.log({windchill});
        // console.log({weather});
        // browser.close();

        return new Map([["temperature", temperature], ["windchill", windchill], ["weather", weather]]);
    }
    catch(err){
        // await page.close();
        // browser.close();
        console.log("ERROR WITH URL!");
        return;
    }
    finally{
        browser.close();
    }
}

async function convertURL(city, country){
    const url = 'https://www.timeanddate.com/weather/' + country + '/' + city;
    // console.log(url);
    return url;
}

// scrapeProduct('https://www.timeanddate.com/weather/canada/toronto');
scrapeProduct(convertURL('Toronto', 'China'));