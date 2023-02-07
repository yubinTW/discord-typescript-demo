import { Client, GatewayIntentBits } from 'discord.js'
import { PingSlashCommand } from './commands/ping'
import { deploySlashCommands } from './deploy'
import dotenv from 'dotenv'
import { AppConfig } from './types/config'
import { setBotListener } from './bot'
import { SlashCommand } from './types/command'
import { cleanEnv, str } from 'envalid'

// Register commands
const commandList: Array<SlashCommand> = [PingSlashCommand]

// Read .env file (if exist)
dotenv.config()

// Read environment variables
const env = cleanEnv(process.env, {
  TOKEN: str(),
  CLIENT_ID: str(),
  GUILD_ID: str()
})

// Construct the main config of this app
const appConfig: AppConfig = {
  token: env.TOKEN,
  clientId: env.CLIENT_ID,
  guildId: env.GUILD_ID
}

// DiscordJS API Client: https://discord.js.org/#/docs/discord.js/main/class/Client
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// Deploy commands to a Discord chat server
deploySlashCommands(appConfig, commandList)
  .then((response) => console.log(`Deploy ${response.length} commands: ${response.map((c) => c.name)} successfully!`))
  .catch((reason) => console.log(`Failed to deploy commands: ${reason}`))

// Add event listener from discord
setBotListener(client, commandList)

// Logs the client in, establishing a WebSocket connection to Discord.
client
  .login(appConfig.token)
  .then(() => console.log(`Login successfully!`))
  .catch((reason) => console.log(`Failed to login: ${reason}`))
