import cheerio from 'cheerio'
import axios from 'axios'
import configValues from './config.js'
import chalk from 'chalk'

const getPrices = async (cryptoName) => {
    try {
        const {data} = await axios.get(configValues.url);
        const $ = await cheerio.load(data)
        
        let coinArray = []
        let foundVal = {};
        foundVal.success = false
        let cryptoNameMap = new Map();
        let cryptoNameValue;

        $(configValues.selector).each((parentIdx, parentElm) => {
            let keyIdx = 0;
            let coinObj = {}
            if (parentIdx <= 9) {
                $(parentElm).children().each((childrenIdx, childrenElm) => {
                    let tdVal = $(childrenElm).text();
                    if (childrenIdx === 4 || childrenIdx === 5) {
                        let className = $('span:first-child span' ,$(childrenElm).html()).attr('class');
                        if (className === 'icon-Caret-up') {
                            tdVal = '💹 ' + chalk.green(tdVal)
                        } else {
                            tdVal = '📈 ' +  chalk.red(tdVal)
                        }
                    }
                    if (childrenIdx === 6) {
                        tdVal = $('p:first-child span:nth-child(2)', $(childrenElm).html()).text()
                    }
                    if (keyIdx === 1) {
                        cryptoNameValue = $('p:first-child', $(childrenElm).html()).text()
                        tdVal = $('p:nth-child(2)', $(childrenElm).html()).text().toLowerCase().toString()
                        cryptoNameMap.set(tdVal, cryptoNameValue)
                    }
                    if (keyIdx === 6) {
                        tdVal = $('p:first-child', $(childrenElm).html()).text()
                    }
                    if (tdVal) {
                        if (keyIdx == 1) {
                            coinObj[configValues.keys[keyIdx]] = cryptoNameValue
                        } else {
                            coinObj[configValues.keys[keyIdx]] = tdVal
                        }
                        keyIdx++;
                    }
                })
                coinArray.push(coinObj)
            }
        })
        const currency = cryptoNameMap.get(cryptoName.cryptoName.toString()) 
        coinArray.forEach((coin) => {
            if (coin.name === currency) {
                foundVal = coin;
                foundVal.success = true
            }
        })
        return foundVal;
    } catch(err) {
        console.log(err);
    }
}

export default getPrices