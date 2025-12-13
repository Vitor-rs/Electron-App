import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { User } from '@main/database/schema'

interface UserState {
  users: User[]
  selectedUser: User | null
  isLoading: boolean
  error: string | null
}

interface UserActions {
  setUsers: (users: User[]) => void
  setSelectedUser: (user: User | null) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  fetchUsers: () => Promise<void>
  reset: () => void
}

const initialState: UserState = {
  users: [],
  selectedUser: null,
  isLoading: false,
  error: null,
}

export const useUserStore = create<UserState & UserActions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        setUsers: (users) => {
          set({ users })
        },
        setSelectedUser: (user) => {
          set({ selectedUser: user })
        },
        setLoading: (isLoading) => {
          set({ isLoading })
        },
        setError: (error) => {
          set({ error })
        },

        fetchUsers: async () => {
          set({ isLoading: true, error: null })
          try {
            const users = await window.electronAPI.invoke<User[]>('users:getAll')
            set({ users, isLoading: false })
          } catch (error) {
            set({
              error: error instanceof Error ? error.message : 'Unknown error',
              isLoading: false,
            })
          }
        },

        reset: () => {
          set(initialState)
        },
      }),
      { name: 'user-store' }
    ),
    { name: 'UserStore' }
  )
)
