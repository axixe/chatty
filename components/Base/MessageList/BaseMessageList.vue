<template>
  <div class="message-list">
    <span class="message-list__date">{{ date }}</span>

    <div class="message-list__message-wrapper">
      <BaseMessage
        v-for="(message, index) in messageList"
        :key="index"
        :message-data="message"
        class="message-list__message"
        :class="{ 'message-list__message--own': message.is_read !== null }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Message } from '~/global/types/Message/Message'

interface Props {
  date: string
  messageList: Message[]
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.message-list {
  display: flex;
  flex-direction: column;
  gap: $indent-xl;

  &__date {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: $indent-m;
    color: $color-grey;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 100px;
      height: 1px;
      background: $color-base-medium;
    }
  }

  &__message-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__message--own {
    margin-left: auto;
  }
}
</style>
