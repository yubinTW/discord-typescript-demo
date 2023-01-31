import { SlashCommandBuilder, CommandInteraction } from 'discord.js'

export interface SlashCommand {
  data: SlashCommandBuilder
  execute: (interaction: CommandInteraction) => Promise<void>
}
