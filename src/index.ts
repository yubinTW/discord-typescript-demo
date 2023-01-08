import { Client, Collection, Events, GatewayIntentBits } from 'discord.js'
import { TOKEN } from './config'
import { PingSlashCommand } from './commands/ping'
import { SlashCommand } from './interfaces/command'
import { deploySlashCommands } from './deploy'
import { AddSlashCommand } from './commands/add'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

const commandList = [PingSlashCommand, AddSlashCommand]

console.log(`Started refreshing ${commandList.length} application (/) commands.`)
deploySlashCommands(commandList)
  .then((res) => console.log(`Successfully reloaded application (/) commands. ${JSON.stringify(res)}`))
  .catch((error) => console.log(`Failed to reload application commands. ${error}`))

const commands = new Collection<string, SlashCommand>()

commandList.forEach((command) => commands.set(command.data.name, command))

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
