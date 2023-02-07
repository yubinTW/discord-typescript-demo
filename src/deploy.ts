import { REST, Routes } from 'discord.js'
import { AppConfig } from './types/config'
import { SlashCommand } from './types/command'
import { DeployCommandsResponse } from './types/response'

export function deploySlashCommands(appConfig: AppConfig, commandList: Array<SlashCommand>) {
  const rest = new REST({ version: '10' }).setToken(appConfig.token)
  const putPayload = commandList.map((c) => c.data.toJSON())

  return rest.put(Routes.applicationGuildCommands(appConfig.clientId, appConfig.guildId), {
    body: putPayload
  }) as Promise<DeployCommandsResponse>
}
