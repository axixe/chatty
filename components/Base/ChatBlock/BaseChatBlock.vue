<template>
  <div class="chat-block">
    <div class="chat-block__avatar-wrapper">
      <BaseImage
        :image="{ src: userData.avatar.src }"
        :image-options="{ width: 56, height: 56, alt: 'Avatar' }"
        class="chat-block__avatar"
      />

      <span class="chat-block__online-status" />
    </div>

    <div class="chat-block__content">
      <div class="chat-block__info">
        <span class="h2">{{ userData.name }}</span>

        <TypingIndicator v-if="isTyping" />

        <p v-else class="chat-block__message caption-p">
          <span
            v-if="userData.is_read !== null"
            class="chat-block__message-badge"
            >You:</span
          >
          {{ userData.message }}
        </p>
      </div>

      <svg
        v-if="userData.is_read != null && !isTyping"
        class="chat-block__read-status icon-20"
        :class="{ 'chat-block__read-status_read': userData.is_read }"
      >
        <use
          :href="`/images/svg/icon-${userData.is_read ? 'read' : 'noread'}.svg#icon`"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatBlockUserData } from '~/global/types/ChatBlockUserData'
import TypingIndicator from '~/components/ui/TypingIndicator.vue'

interface Props {
  userData: ChatBlockUserData
  isTyping?: boolean
}

withDefaults(defineProps<Props>(), {
  isTyping: false,
})
</script>

<style scoped lang="scss">
.chat-block {
  display: flex;
  align-items: center;
  gap: $indent-l;
  width: 100%;
  padding: 12px;
  border-radius: $border-radius-m;
  background: $color-base;
  transition: background 0.3s ease;
  cursor: pointer;

  @media screen and (hover: hover) {
    &:hover {
      background: $color-base-medium;

      .chat-block__online-status {
        border-color: $color-base-medium;
      }
    }
  }

  &:active {
    background: $color-base-medium;
  }

  &__avatar-wrapper {
    position: relative;
    flex-shrink: 0;
  }

  &__online-status {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: $color-accent;
    border: 2px solid $color-base;
    transition: border-color 0.3s ease;
  }

  &__avatar {
    border-radius: 100%;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: $indent-l;
    width: 100%;
    min-width: 0;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: $indent-s;
    min-width: 0;
  }

  &__message {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__message-badge {
    color: $color-grey;
  }

  &__read-status {
    flex-shrink: 0;
    fill: $color-grey;

    &_read {
      fill: $color-accent;
    }
  }
}
</style>
