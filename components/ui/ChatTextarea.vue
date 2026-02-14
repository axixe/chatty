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
      :placeholder="'Message...'"
    />

    <button type="button">
      <svg class="icon-30">
        <use :href="'/images/svg/icon-plane.svg#icon'" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  maxRows?: number
}

const props = withDefaults(defineProps<Props>(), {
  maxRows: 5,
})

const baseTextareaRef = ref<ComponentPublicInstance | null>(null)
const message = ref('')

const lineHeight = ref<number>(0)

const getTextareaElement = () => {
  const element = baseTextareaRef.value?.$el?.querySelector('textarea')
  return (element as HTMLTextAreaElement | null) ?? null
}

const ensureLineHeight = (textarea: HTMLTextAreaElement) => {
  if (lineHeight.value) return

  const styles = window.getComputedStyle(textarea)
  const parsedLineHeight = parseFloat(styles.lineHeight)

  lineHeight.value =
    Number.isFinite(parsedLineHeight) && parsedLineHeight > 0
      ? parsedLineHeight
      : 20
}

const resizeTextarea = () => {
  const textarea = getTextareaElement()

  if (!textarea) return

  ensureLineHeight(textarea)

  textarea.style.height = 'auto'

  const rowsLimit = Math.max(props.maxRows, 1)
  const maxHeight = lineHeight.value * rowsLimit
  const scrollHeight = textarea.scrollHeight
  const nextHeight = Math.min(scrollHeight, maxHeight)

  textarea.style.height = `${nextHeight}px`
  textarea.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden'
  textarea.style.maxHeight = `${maxHeight}px`
}

watch(message, () => {
  resizeTextarea()
})

watch(
  () => props.maxRows,
  () => {
    resizeTextarea()
  },
)

onMounted(() => {
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
    width: 100%;
  }

  svg {
    fill: $color-grey;
  }
}
</style>
