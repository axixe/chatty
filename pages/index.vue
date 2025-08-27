<template>
  <div class="home-page">
    <ChatSidebar />

    <TheDialog v-if="isDialogOpened" />

    <EmptyDialogBlock v-else />
  </div>
</template>

<script setup lang="ts">
import TheDialog from '~/components/Dialog/TheDialog.vue'
import EmptyDialogBlock from '~/components/ui/EmptyDialogBlock.vue'

const isDialogOpened = ref(false)
</script>

<style scoped lang="scss">
.home-page {
  display: flex;
}
</style>
