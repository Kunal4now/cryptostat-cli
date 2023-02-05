<h1 align="center">
  <p align="center">Cryptostat-CLI</p>
</h1>

<p align = "center">
  <a href="https://www.npmjs.com/package/cryptostat"><img src="https://img.shields.io/npm/v/cryptostat.svg?style=flat" alt="npm version"></a>
  <a href="#"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
  <a href="#"><img src="https://img.shields.io/npm/dm/cryptostat.svg" alt="npm downloads"></a>
<p/>

Cryptostat is a Node.js based CLI that gets you the real-time stats of your favorite cryptocurrency.

## Installation

Use the npm package manager to install Cryptostat.

```bash
npm install -g cryptostat
```

## Usage
To get the stats for Bitcoin

```bash
PS C:\Users\kunal> cryptostat btc

┌──────┬─────────┬────────────┬───────┬───────┬──────────────────┬─────────────────┬───────────────────┐
│ rank │ name    │ price      │ 24h   │ 7d    │ marketCap        │ volume          │ circulatingSupply │
├──────┼─────────┼────────────┼───────┼───────┼──────────────────┼─────────────────┼───────────────────┤
│ 1    │ Bitcoin │ $37,811.30 │ 3.93% │ 5.37% │ $716,260,939,437 │ $19,136,686,586 │ 18,943,037 BTC    │
└──────┴─────────┴────────────┴───────┴───────┴──────────────────┴─────────────────┴───────────────────┘
```
To get the stats of Dogecoin

```bash
PS C:\Users\kunal> cryptostat doge
┌──────┬──────────┬─────────┬───────┬───────┬─────────────────┬──────────────┬──────────────────────┐
│ rank │ name     │ price   │ 24h   │ 7d    │ marketCap       │ volume       │ circulatingSupply    │
├──────┼──────────┼─────────┼───────┼───────┼─────────────────┼──────────────┼──────────────────────┤
│ 10   │ Dogecoin │ $0.1433 │ 2.39% │ 7.14% │ $19,016,577,761 │ $427,013,025 │ 132,670,764,300 DOGE │
└──────┴──────────┴─────────┴───────┴───────┴─────────────────┴──────────────┴──────────────────────┘
```
## Development Setup
### Installing dependencies 
Before building cryptostat you must install the following dependencies on your machine.

1. [NodeJS](https://nodejs.dev/) 
2. [NPM](https://www.npmjs.com/)

### Forking Cryptostat

To edit the source code you must fork the repository. After that you make changes to the code

### Setting Up Locally

1. Clone your forked repository:
  ``` bash
      git clone https://github.com/<Your-github-username>/cryptostat-cli.git
  ```
2. Go the Cryptostat-cli directory
```bash
   cd cryptostat-cli
```
3. Run the cli
```bash
   node index.js
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
