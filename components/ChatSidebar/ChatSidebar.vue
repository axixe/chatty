<template>
  <div class="chat-sidebar">
    <ChatSidebarHeader :avatar="{ src: 'https://placehold.co/50x50' }" />

    <ChatSidebarBody />
  </div>
</template>

<script setup lang="ts">
import ChatSidebarHeader from '~/components/ChatSidebar/ChatSidebarHeader.vue'
</script>

<style scoped lang="scss">
.chat-sidebar {
  max-width: 400px;
  height: 100vh;
  border-right: 1px solid $color-base-light;
}
</style>
