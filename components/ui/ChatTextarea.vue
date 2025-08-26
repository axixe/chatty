<template>
  <div class="chat-textarea">
    <button>
      <svg class="icon-30">
        <use :href="'/images/svg/icon-clip.svg#icon'" />
      </svg>
    </button>

    <BaseTextarea class="chat-textarea__field" />

    <button>
      <svg class="icon-30">
        <use :href="'/images/svg/icon-plane.svg#icon'" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.chat-textarea {
  display: flex;
  align-items: center;
  gap: $indent-s;
  padding: $indent-s $indent-l;
  background: $color-base-medium;

  &__field {
    display: flex;
    align-items: center;
    width: 100%;
  }

  svg {
    fill: $color-grey;
  }
}
</style>
