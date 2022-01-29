# Cryptostat-CLI

Cryptostat is a Node.js based CLI that gets you the real-time stats of your favorite cryptocurrency.

## Installation

Use the npm package manager to install Cryptostat.

```bash
npm install -g cryptostat
```

## Usage
To get the stats for Bitcoin

```bash
PS C:\Users\kunal> cryptostat
? Enter the crypto name btc
┌──────┬─────────┬────────────┬───────┬───────┬──────────────────┬─────────────────┬───────────────────┐
│ rank │ name    │ price      │ 24h   │ 7d    │ marketCap        │ volume          │ circulatingSupply │
├──────┼─────────┼────────────┼───────┼───────┼──────────────────┼─────────────────┼───────────────────┤
│ 1    │ Bitcoin │ $37,811.30 │ 3.93% │ 5.37% │ $716,260,939,437 │ $19,136,686,586 │ 18,943,037 BTC    │
└──────┴─────────┴────────────┴───────┴───────┴──────────────────┴─────────────────┴───────────────────┘
```
To get the stats of Dogecoin

```bash
PS C:\Users\kunal> cryptostat
? Enter the crypto name doge
┌──────┬──────────┬─────────┬───────┬───────┬─────────────────┬──────────────┬──────────────────────┐
│ rank │ name     │ price   │ 24h   │ 7d    │ marketCap       │ volume       │ circulatingSupply    │
├──────┼──────────┼─────────┼───────┼───────┼─────────────────┼──────────────┼──────────────────────┤
│ 10   │ Dogecoin │ $0.1433 │ 2.39% │ 7.14% │ $19,016,577,761 │ $427,013,025 │ 132,670,764,300 DOGE │
└──────┴──────────┴─────────┴───────┴───────┴─────────────────┴──────────────┴──────────────────────┘
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)