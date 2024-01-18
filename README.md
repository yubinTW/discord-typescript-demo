# Discordjs with TypeScript

use [discord.js](https://github.com/discordjs/discord.js) in TypeScript to create discord bot

## Development

### Clone project

```
git clone https://github.com/yubinTW/discord-typescript-demo.git
cd discord-typescript-demo
```

### Install Dependency

```
npm i
```

### Create your `.env`

```
cp .env.sample .env
```

set your environment variable according to your app

### Build and Start App

```
npm run build
npm run start
```

or use `npm run dev` for developing

## Discord Bot

Discord Developer Portal
https://discord.com/developers/applications

### Copy configs of your discord application

1. Create an application in developer portal
2. Copy `CLIENT_ID` from `OAuth2` tab
3. Copy `Token` from `Bot` tab
4. Copy `GUILD_ID` from your channel

### Invite your application to the channel with some permissions

1. In developer portal `OAuth2` -> `URL Generator`
2. Check `bot` option in scopes section
3. Check the permissions your want to set for your bot
   (`Send Messages`, `Use Slash Commands` for example)
4. Copy the generated URL
5. Visit the link you copied in step4
6. Select the channel you want to add the bot
7. Run the bot application and enjoy it
