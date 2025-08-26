<template>
  <div class="dialog">
    <DialogHeader
      :avatar="{ src: 'https://placehold.co/50x50' }"
      :username="'Alexander Chernakov'"
      :status="'online'"
    />

    <DialogBody />

    <ChatTextarea />
  </div>
</template>

<script setup lang="ts">
import DialogBody from '~/components/Dialog/DialogBody.vue'
import ChatTextarea from '~/components/ui/ChatTextarea.vue'
</script>

<style scoped lang="scss">
.dialog {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
</style>
