<template>
  <button type="button" class="hamburger">
    <span class="hamburger__element"></span>
    <span class="hamburger__element"></span>
    <span class="hamburger__element"></span>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hamburger {
  display: flex;
  flex-direction: column;
  gap: $indent-s;

  &__element {
    display: block;
    width: 30px;
    height: 2px;
    background: $color-grey;
  }
}
</style>
