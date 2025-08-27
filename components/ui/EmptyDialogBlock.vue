<template>
  <div class="empty-dialog-block h2">
    <span>Your dialog</span>
    <span class="empty-dialog-block__with-background">will be here</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.empty-dialog-block {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: $indent-s;
  width: 100%;
  height: 100vh;
  pointer-events: none;

  &__with-background {
    padding: $indent-xs;
    border-radius: 6px;
    background: $color-base-medium;
  }
}
</style>
