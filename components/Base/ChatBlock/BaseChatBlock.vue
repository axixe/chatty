<template>
  <div class="chat-block">
    <BaseImage
      :image="{ src: userData.avatar.src }"
      :image-options="{ width: 56, height: 56, alt: 'Avatar' }"
      class="chat-block__avatar"
    />

    <div class="chat-block__content">
      <div class="chat-block__info">
        <span class="h2">{{ userData.name }}</span>
        <p class="chat-block__message caption-p">
          {{ userData.message }}
        </p>
      </div>

      <svg class="icon-20">
        <use
          :href="`/images/svg/icon-${userData.isRead ? 'read' : 'noread'}.svg#icon`"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatBlockUserData } from '~/global/types/ChatBlockUserData'

interface Props {
  userData: ChatBlockUserData
}

defineProps<Props>()
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
    }
  }

  &:active {
    background: $color-base-medium;
  }

  &__avatar {
    flex-shrink: 0;
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

  svg {
    flex-shrink: 0;
    fill: $color-accent;
  }
}
</style>
