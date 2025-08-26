<template>
  <div ref="header" class="dialog-header">
    <BaseImage
      :image="avatar"
      :image-options="{ width: 50, height: 50, alt: 'Аватар' }"
      class="dialog-header__avatar"
    />

    <div class="dialog-header__user-details">
      <span class="h1">{{ username }}</span>

      <TypingIndicator v-if="isTyping" />

      <span
        v-else
        class="dialog-header__status caption-p"
        :class="`dialog-header__status--${status}`"
        >{{ status }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import TypingIndicator from '~/components/ui/TypingIndicator.vue'
import type { Image } from '~/global/types/Image/Image'

interface Props {
  avatar: Image
  username: string
  status: string
  isTyping?: boolean
}

withDefaults(defineProps<Props>(), {
  isTyping: true,
})
</script>

<style scoped lang="scss">
.dialog-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: $indent-xl;
  width: 100%;
  padding: 19px $indent-l;
  border-bottom: 1px solid $color-base-medium;
  background: $color-base;

  &__avatar {
    flex-shrink: 0;
    border-radius: 100%;
  }

  &__user-details {
    display: flex;
    flex-direction: column;
  }

  &__status {
    display: flex;
    align-items: center;
    gap: $indent-s;

    &::before {
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 100%;
    }

    &--online::before {
      background: $color-accent;
    }

    &--offline::before {
      background: $color-grey;
    }
  }
}
</style>
