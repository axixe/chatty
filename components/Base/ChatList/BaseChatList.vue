<template>
  <div class="chat-list">
    <span class="chat-list__title">Chat list</span>

    <div class="chat-list__list-wrapper">
      <BaseChatBlock
        v-for="(chatBlock, index) in chats"
        :key="index"
        :user-data="chatBlock"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatBlockUserData } from '~/global/types/ChatBlockUserData'

interface Props {
  chats: ChatBlockUserData[]
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.chat-list {
  display: flex;
  flex-direction: column;
  gap: $indent-l;

  &__title {
    color: $color-grey;
  }

  &__list-wrapper {
    display: flex;
    flex-direction: column;
    gap: $indent-xs;
  }
}
</style>
