import { SlashCommandBuilder, CommandInteraction } from 'discord.js'
import { SlashCommand } from '../interfaces/command'

export const AddSlashCommand: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName('add')
    .addNumberOption((first) => first.setName('first').setDescription('first number').setRequired(true))
    .addNumberOption((second) => second.setName('second').setDescription('second number').setRequired(true))
    .setDescription('add two number'),
  async execute(interaction: CommandInteraction) {
    const first = interaction.options.get('first', true).value as string
    const second = interaction.options.get('second', true).value as string

    const firstNumber = Number.parseFloat(first)
    const secondNumber = Number.parseFloat(second)
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
      await interaction.reply({ content: `You should input two number!` })
    }
    await interaction.reply({ content: `Answer is ${firstNumber + secondNumber}` })
  }
}
