<template>
  <div class="chat-textarea">
    <button type="button">
      <svg class="icon-30">
        <use :href="'/images/svg/icon-clip.svg#icon'" />
      </svg>
    </button>

    <BaseTextarea
      ref="baseTextareaRef"
      v-model="message"
      class="chat-textarea__field"
    />

    <button type="button">
      <svg class="icon-30">
        <use :href="'/images/svg/icon-plane.svg#icon'" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import type { ComponentPublicInstance } from 'vue'

const baseTextareaRef = ref<ComponentPublicInstance | null>(null)
const message = ref('')

const maxRows = 5
const lineHeight = ref<number>(0)

const getTextareaElement = () => {
  const component = baseTextareaRef.value
  if (!component) {
    return null
  }

  return component.$el?.querySelector('textarea') ?? null
}

const ensureLineHeight = (textarea: HTMLTextAreaElement) => {
  if (lineHeight.value) {
    return
  }

  const styles = window.getComputedStyle(textarea)
  const parsedLineHeight = parseFloat(styles.lineHeight)

  if (Number.isFinite(parsedLineHeight)) {
    lineHeight.value = parsedLineHeight
    return
  }

  const fontSize = parseFloat(styles.fontSize)
  lineHeight.value = Number.isFinite(fontSize) ? fontSize * 1.2 : 20
}

const resizeTextarea = () => {
  const textarea = getTextareaElement()

  if (!textarea) {
    return
  }

  ensureLineHeight(textarea)

  textarea.style.height = 'auto'

  const maxHeight = lineHeight.value * maxRows
  const scrollHeight = textarea.scrollHeight
  const nextHeight = Math.min(scrollHeight, maxHeight)

  textarea.style.height = `${nextHeight}px`
  textarea.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden'
  textarea.style.maxHeight = `${maxHeight}px`
}

watch(message, async () => {
  await nextTick()
  resizeTextarea()
})

onMounted(async () => {
  await nextTick()
  const textarea = getTextareaElement()

  if (textarea) {
    ensureLineHeight(textarea)
    textarea.style.minHeight = `${lineHeight.value}px`
  }

  resizeTextarea()
})
</script>

<style scoped lang="scss">
.chat-textarea {
  display: flex;
  align-items: flex-end;
  gap: $indent-s;
  padding: $indent-s $indent-l;
  background: $color-base-medium;

  &__field {
    flex: 1;

    :deep(textarea) {
      width: 100%;
      padding: 0;
      border: 0;
      background: transparent;
    }
  }

  svg {
    fill: $color-grey;
  }
}
</style>
