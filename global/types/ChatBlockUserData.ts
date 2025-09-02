import type { Image } from '~/global/types/Image/Image'

export interface ChatBlockUserData {
  avatar: Image
  name: string
  message: string
  is_read: boolean | null
  timestamp: string
}
