export const useScrollbarController = (
  blockRef: Ref<HTMLElement | null>,
  scrollThreshold: number,
) => {
  const pressScrollbarToBottom = () => {
    if (blockRef.value) {
      blockRef.value.scrollTop = blockRef.value.scrollHeight
    }
  }

  const calculateScrollHeight = () => {
    if (blockRef.value) {
      if (blockRef.value) {
        const { scrollTop, scrollHeight, clientHeight } = blockRef.value
        const isAtBottom =
          scrollTop + clientHeight >= scrollHeight - scrollThreshold

        if (isAtBottom) {
          pressScrollbarToBottom()
        }
      }
    }
  }

  onMounted(() => {
    pressScrollbarToBottom()
    window.addEventListener('resize', calculateScrollHeight)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', calculateScrollHeight)
  })

  return {
    pressScrollbarToBottom,
    calculateScrollHeight,
  }
}
