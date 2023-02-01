import { LocalizationMap, Snowflake, Permissions } from 'discord.js'

export type DeployCommandsResponse = Array<{
  id: Snowflake
  application_id: Snowflake
  version: Snowflake
  default_permission?: boolean
  default_member_permissions?: Permissions
  type: number
  nsfw?: boolean
  name: string
  name_localizations?: LocalizationMap
  description: string
  description_localizations?: LocalizationMap
  guild_id: Snowflake
}>

export type DiscordjsClientLoginError = {
  code: string
}
