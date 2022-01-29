#!/usr/bin/env node
import cheerio from 'cheerio'
import axios from 'axios'
import inquirer from 'inquirer'
import chalk from 'chalk'
import Table from 'cli-table3'
import configValues from './config.js'

const getPrices = async (cryptoName) => {
    try {
        const currency = cryptoName.cryptoName 
        const {data} = await axios.get(configValues.url, {timeout: 500000});
        const $ = await cheerio.load(data)

        let coinArray = []
        let foundVal = {};
        foundVal.success = false

        $(configValues.selector).each((parentIdx, parentElm) => {
            let keyIdx = 0;
            let coinObj = {}
            if (parentIdx <= 9) {
                $(parentElm).children().each((childrenIdx, childrenElm) => {
                    let tdVal = $(childrenElm).text();
                    if (childrenIdx === 6) {
                        tdVal = $('p:first-child span:nth-child(2)', $(childrenElm).html()).text()
                    }
                    if (keyIdx === 1 || keyIdx === 6) {
                        tdVal = $('p:first-child', $(childrenElm).html()).text()
                    }
                    if (tdVal) {
                        coinObj[configValues.keys[keyIdx]] = tdVal
                        keyIdx++;
                    }
                })
                coinArray.push(coinObj)
            }
        })
        coinArray.forEach((coin) => {
            if (coin.name.toLowerCase() === currency) {
                foundVal = coin;
                foundVal.success = true
            }
        })
        return foundVal;
    } catch(err) {
        console.log(err);
    }
}   

inquirer.prompt([
    {
        type: 'input',
        name: 'cryptoName',
        message: chalk.bgCyan(chalk.white('Enter the crypto name')),
    }
]).then(async (answer)  => {
    const val = await getPrices(answer);
    if (!val.success) {
        console.log("Invalid currency");
        return;
    }
    const {rank,name, price , allDay, weekLong, marketCap, volume, circulatingSupply} = val
    var table = new Table({
        head: [chalk.cyan("rank"), chalk.cyan("name"), chalk.cyan("price"), chalk.cyan("24h"), chalk.cyan("7d"), chalk.cyan("marketCap"), chalk.cyan("volume"), chalk.cyan("circulatingSupply")]
    });
    table.push([rank, name, price, allDay, weekLong, marketCap, volume, circulatingSupply])
    console.log(table.toString())
})
