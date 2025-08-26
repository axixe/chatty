import type { Message } from './Message'

export interface MessagesByDay {
  created_at: string
  messages: Message[]
}
