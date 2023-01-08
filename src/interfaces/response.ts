export type DeployCommandsResponse = Array<{
  id: string
  application_id: string
  version: string
  default_permission: boolean
  default_member_permissions: string
  type: number
  nsfw: boolean
  name: string
  name_localizations: Partial<Record<string, string>>
  description: string
  description_localizations: Partial<Record<string, string>>
  guild_id: string
}>
