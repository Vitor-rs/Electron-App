import type { User, NewUser } from '@main/database/schema'

export interface IpcEvents {
  'users:getAll': {
    request: []
    response: User[]
  }
  'users:getById': {
    request: [id: string]
    response: User | null
  }
  'users:create': {
    request: [data: NewUser]
    response: User
  }
  'users:update': {
    request: [id: string, data: Partial<NewUser>]
    response: User
  }
  'users:delete': {
    request: [id: string]
    response: boolean
  }
}
