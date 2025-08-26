<template>
  <div
    class="message"
    :class="{ 'message--dark': messageData.is_read === null }"
  >
    <p>
      {{ messageData.message }}
    </p>

    <div class="message__details-wrapper">
      <span class="message__send-time caption-p">{{
        messageData.created_at
      }}</span>

      <svg
        v-if="messageData.is_read !== null"
        class="message__read-status icon-20"
        :class="{ 'message__read-status_read': messageData.is_read }"
      >
        <use :href="`/images/svg/icon-${readIcon}.svg#icon`"></use>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Message } from '~/global/types/Message/Message'

interface Props {
  messageData: Message
}

const props = defineProps<Props>()

const readIcon = computed(() => {
  return props.messageData.is_read ? 'read' : 'noread'
})
</script>

<style scoped lang="scss">
.message {
  display: inline-flex;
  flex-direction: column;
  gap: $indent-xs;
  width: max-content;
  max-width: 700px;
  padding: 12px $indent-l;
  border-radius: $border-radius-m;
  background: $color-base-medium;

  &--dark {
    background: $color-base;
  }

  &__details-wrapper {
    display: flex;
    align-items: center;
    gap: $indent-s;
    margin-left: auto;
  }

  &__send-time {
    color: $color-grey;
  }

  &__read-status {
    fill: $color-grey;

    &_read {
      fill: $color-accent;
    }
  }
}
</style>
