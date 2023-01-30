import { REST, Routes } from 'discord.js'
import { TOKEN, GUILD_ID, CLIENT_ID } from './config'
import { SlashCommand } from './interfaces/command'
import { DeployCommandsResponse } from './interfaces/response'

export function deploySlashCommands(commandList: Array<SlashCommand>) {
  const rest = new REST({ version: '10' }).setToken(TOKEN)
  const putPayload = commandList.map((c) => c.data.toJSON())

  return rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
    body: putPayload
  }) as Promise<DeployCommandsResponse>
}
