<template>
  <div class="image">
    <img
      :src="image?.src"
      :alt="image?.alt || imageOptions?.alt || 'Изображение'"
      :title="image?.title || imageOptions?.title"
      :width="imageOptions?.width"
      :height="imageOptions?.height"
    />
  </div>
</template>

<script lang="ts" setup>
import { type ImgHTMLAttributes } from 'vue'
import { type Image } from '~/global/types/Image/Image'

interface Props {
  image: Image
  imageOptions: ImgHTMLAttributes
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.image {
  overflow: hidden;

  img {
    width: 100%;
  }
}
</style>
