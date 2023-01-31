export type EnvVarEmptyError = {
  _tag: 'EnvVarEmptyError'
  msg: string
}

export const envVarEmptyErrorOf: (msg: string) => EnvVarEmptyError = (msg) => ({
  _tag: 'EnvVarEmptyError',
  msg
})

export type BotLoginError = {
  _tag: 'BotLoginError'
  msg: string
}

export const botLoginErrorOf: (msg: string) => BotLoginError = (msg) => ({
  _tag: 'BotLoginError',
  msg
})

export type BotDeployError = {
  _tag: 'BotDeployError'
  msg: string
}

export const botDeployErrorOf: (msg: string) => BotDeployError = (msg) => ({
  _tag: 'BotDeployError',
  msg
})

export type AppError = EnvVarEmptyError | BotLoginError | BotDeployError
