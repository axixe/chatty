<template>
  <div class="chat-sidebar-header">
    <BaseImage
      :image="{ src: '/images/svg/logo.svg' }"
      :image-options="{ alt: 'logo', width: 122, height: 34 }"
    />

    <BaseImage
      :image="avatar"
      :image-options="{ alt: 'avatar', width: 50, height: 50 }"8
      class="chat-sidebar-header__avatar"
    />
  </div>
</template>

<script setup lang="ts">
import type { Image } from "~/global/types/Image/Image";

interface Props {
  avatar: Image
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.chat-sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $indent-l;
  border-bottom: 1px solid $color-base-light;

  &__avatar {
    border-radius: 100%;
  }
}
</style>