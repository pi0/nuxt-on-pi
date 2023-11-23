# Nuxt on PI

Nuxt hosted on a Raspberry Pi Zero 2W board. ([tweet](https://twitter.com/_pi0_/status/1727774395207135364))

⚡️ Live URL: https://pizero.pi0.io

## Development

Install [bun](https://bun.sh/)

Start the development server on http://localhost:3000

```bash
bun dev
```

## Production

### First time setup

Install [bun](https://bun.sh/) on your board

Setup cloudflare tunnel on your board and map to http://localhost:3000 ([learn more](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-local-tunnel/))

### Deploy

Build app for production from your PC:

```bash
bun build --preset bun
```

Copy `.output` directory to your board:

```bash
rsync -Lavz .output/ user@ip:app
```

Optionally install and run `tmux` or `screen`

Start bun server:

```bash
bun --watch app/server/index.mjs
````
