<template>
  <div ref="scrollContainer" class="dialog-body">
    <div class="dialog-body__messages-wrapper">
      <BaseMessageList
        v-for="(messageList, index) in chatDialogMock()"
        :key="index"
        :message-list="messageList.messages"
        :date="messageList.created_at"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScrollbarController } from '~/composables/useScrollbarController'
import { chatDialogMock } from '~/global/mockData/chatDialogMock'

const scrollContainer = ref<HTMLDivElement | null>(null)

useScrollbarController(scrollContainer, 500)
</script>

<style scoped lang="scss">
.dialog-body {
  @include scrollbar;
  width: 100%;
  flex: 1;
  overflow: auto;

  &__messages-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 40px;
    min-height: 100%;
    padding: $indent-xl $indent-l;
  }
}
</style>
