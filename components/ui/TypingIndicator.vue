<template>
  <div class="typing-indicator">
    <span class="typing-indicator__animating-circles">
      <span class="typing-indicator__circle" />
      <span class="typing-indicator__circle" />
      <span class="typing-indicator__circle" />
    </span>

    <span class="caption-p">Typing...</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@keyframes indicator-animation {
  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.typing-indicator {
  display: flex;
  align-items: center;
  gap: $indent-s;

  &__animating-circles {
    display: flex;
    gap: $indent-xs;
  }

  &__circle {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background: $color-grey;
    animation: indicator-animation 0.6s infinite ease-in-out;

    &:nth-child(1) {
      animation-delay: 0s;
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}
</style>
