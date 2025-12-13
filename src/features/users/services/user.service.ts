import type { User, NewUser } from '@main/database/schema'

export const userService = {
  async getAll(): Promise<User[]> {
    return window.electronAPI.invoke<User[]>('users:getAll')
  },

  async getById(id: string): Promise<User | null> {
    return window.electronAPI.invoke<User | null>('users:getById', id)
  },

  async create(data: NewUser): Promise<User> {
    return window.electronAPI.invoke<User>('users:create', data)
  },

  async update(id: string, data: Partial<NewUser>): Promise<User> {
    return window.electronAPI.invoke<User>('users:update', id, data)
  },

  async delete(id: string): Promise<boolean> {
    return window.electronAPI.invoke<boolean>('users:delete', id)
  },
}
