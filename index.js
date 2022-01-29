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
        head: [chalk.cyan("rank"), chalk.cyan("name"), chalk.cyan("price"), chalk.cyan("24h"), chalk.cyan("7d"), chalk.cyan("marketCap"), chalk.cyan("volume"), chalk.cyan("circulatingSupply")]
    });

    table.push([rank, name, price, allDay, weekLong, marketCap, volume, circulatingSupply])

    console.log(table.toString())
})
