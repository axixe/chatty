<template>
  <div class="chat-sidebar-body">
    <BaseInput :placeholder="'SEARCH'" />

    <BaseChatList :chats="chatBlockMock" />
  </div>
</template>

<script setup lang="ts">
import { chatBlockMock } from '~/global/mockData/chatBlockMock'
</script>

<style scoped lang="scss">
.chat-sidebar-body {
  display: flex;
  flex-direction: column;
  gap: $indent-xl;
  padding: $indent-l;
}
</style>
