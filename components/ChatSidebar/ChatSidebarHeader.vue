<template>
  <div class="chat-sidebar-header">
    <ButtonHamburger />

    <BaseImage
      :image="{ src: '/images/svg/logo.svg' }"
      :image-options="{ alt: 'logo', width: 122, height: 34 }"
    />
  </div>
</template>

<script setup lang="ts">
import type { Image } from '~/global/types/Image/Image'
import ButtonHamburger from '~/components/ui/ButtonHamburger.vue'

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
  padding: 28px $indent-l;
  border-bottom: 1px solid $color-base-medium;

  &__avatar {
    border-radius: 100%;
  }
}
</style>
