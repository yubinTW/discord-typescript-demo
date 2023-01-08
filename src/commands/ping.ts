import { SlashCommandBuilder, CommandInteraction } from 'discord.js'
import { SlashCommand } from '../interfaces/command'

export const PingSlashCommand: SlashCommand = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
  async execute(interaction: CommandInteraction) {
    await interaction.reply('Pong!')
  }
}
