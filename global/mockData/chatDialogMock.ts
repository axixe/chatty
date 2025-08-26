import type { MessagesByDay } from '~/global/types/Message/MessagesByDay'

export const chatDialogMock = (): MessagesByDay[] => {
  return [
    {
      created_at: 'Yesterday',
      messages: [
        {
          message: 'yo wyd',
          created_at: '15:23',
          is_read: null,
        },
        {
          message: 'nm lol, u?',
          created_at: '15:24',
          is_read: true,
        },
        {
          message: 'bouta hop on valorant 😤',
          created_at: '15:25',
          is_read: null,
        },
        {
          message: 'bet, inv me in 5',
          created_at: '15:26',
          is_read: true,
        },
        {
          message: 'say less 🔥',
          created_at: '15:26',
          is_read: null,
        },
        {
          message: 'btw u saw jen’s story?? 😭',
          created_at: '15:27',
          is_read: null,
        },
        {
          message: 'bruh YES💀 she rlly posted that???',
          created_at: '15:27',
          is_read: true,
        },
        {
          message: 'she wild for that fr 😭😭',
          created_at: '15:28',
          is_read: null,
        },
      ],
    },
    {
      created_at: 'Today',
      messages: [
        {
          message: 'yo u up??',
          created_at: '02:04',
          is_read: null,
        },
        {
          message: 'bro it’s literally 2am 😩',
          created_at: '02:05',
          is_read: true,
        },
        {
          message: 'cant sleep 💀 brain goin brrr',
          created_at: '02:06',
          is_read: null,
        },
        {
          message: 'same tbh... scrolled 4 TikTok 2hrs straight 💀💀',
          created_at: '02:07',
          is_read: true,
        },
        {
          message: '😩 i miss summer break fr',
          created_at: '02:07',
          is_read: null,
        },
        {
          message: 'frfr. school got me like 😵‍💫📚🔫',
          created_at: '02:08',
          is_read: true,
        },
        {
          message: 'we need a nap not a class tmrw 😤',
          created_at: '02:08',
          is_read: null,
        },
        {
          message: 'faxxxxxxx 😭😭',
          created_at: '02:09',
          is_read: true,
        },
        {
          message: 'ight imma try sleepin fr now',
          created_at: '02:10',
          is_read: true,
        },
        {
          message: 'same. gn lil bro 💀🫶',
          created_at: '02:11',
          is_read: null,
        },
        {
          message: 'gn 💀💀',
          created_at: '02:11',
          is_read: false,
        },
      ],
    },
  ]
}
