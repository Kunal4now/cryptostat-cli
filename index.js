#!/usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk'
import Table from 'cli-table3'
import getPrices from './getPrices.js'

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
        head: [chalk.yellow.bold("rank"), chalk.yellow.bold("name"), chalk.yellow.bold("price"), chalk.yellow.bold("24h"), chalk.yellow.bold("7d"), chalk.yellow.bold("marketCap"), chalk.yellow.bold("volume"), chalk.yellow.bold("circulatingSupply")]
    });

    table.push([rank, name, price, allDay, weekLong, marketCap, volume, circulatingSupply])

    console.log(table.toString())
})
