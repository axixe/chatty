<template>
  <BaseField>
    <input
      v-model="model"
      class="input body-p"
      :placeholder="placeholder"
      :readonly="readonly"
    />
  </BaseField>
</template>

<script setup lang="ts">
interface Props {
  placeholder?: string
  readonly?: boolean
}

withDefaults(defineProps<Props>(), {
  placeholder: '',
  readonly: false,
})

const model = defineModel<string>('modelValue')
</script>

<style scoped lang="scss">
.input {
  display: flex;
  width: 100%;
  padding: 12px $indent-l;
  border-radius: $border-radius-m;
  background: $color-base-medium;
  color: $color-white;

  &:focus {
    &::placeholder {
      color: $color-grey;
    }
  }

  &::placeholder {
    transition: color 0.3s ease;
  }

  &:read-only {
    @include disabled;
  }
}
</style>
