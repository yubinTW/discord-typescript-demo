import { Client, Collection, Events, GatewayIntentBits } from 'discord.js'
import { TOKEN } from './config'
import { PingSlashCommand } from './commands/ping'
import { SlashCommand } from './interfaces/command'
import { deploySlashCommands } from './deploy'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

const commandList = [PingSlashCommand]

console.log(`Started refreshing ${commandList.length} application (/) commands.`)
deploySlashCommands(commandList)
  .then((res) =>
    console.log(`Successfully reloaded ${res.length} application (/) commands: ${res.map((c) => c.name).join(',')}`)
  )
  .catch((error) => console.log(`Failed to reload application commands. ${error}`))

const commands = new Collection<string, SlashCommand>(commandList.map((c) => [c.data.name, c]))

client.once(Events.ClientReady, () => {
  console.log('Ready!')
})

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  const command = commands.get(interaction.commandName)

  if (!command) return

  try {
    await command.execute(interaction)
  } catch (error) {
    console.error(error)
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true
    })
  }
})

client.login(TOKEN)
