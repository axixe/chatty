<template>
  <div class="chat-list">
    <BaseChatBlock
      v-for="(chatBlock, index) in chats"
      :key="index"
      :user-data="chatBlock"
    />
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
  @include scrollbar(true);
  display: flex;
  flex-direction: column;
  gap: $indent-xs;
  overflow: auto;
}
</style>
