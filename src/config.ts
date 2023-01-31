import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/lib/function'
import { EnvVarEmptyError, envVarEmptyErrorOf } from './errors'
import * as t from 'io-ts-types'

export type AppConfig = {
  token: string
  clientId: string
  guildId: string
}

export const readEnvironmentVariable: (key: string) => E.Either<EnvVarEmptyError, string> = (key) =>
  pipe(
    process.env[key],
    t.NonEmptyString.decode,
    E.mapLeft(() => envVarEmptyErrorOf(`Cannot find environment variable: ${key}`))
  )
