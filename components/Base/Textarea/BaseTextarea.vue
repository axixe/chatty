<template>
  <BaseField>
    <textarea
      v-model="model"
      :name="name"
      :readonly="readonly"
      :required="required"
      :placeholder="placeholder"
      class="textarea body-p"
    />
  </BaseField>
</template>

<script setup lang="ts">
interface Props {
  name?: string
  placeholder?: string
  readonly?: boolean
  required?: boolean
  error?: string | string[]
}

withDefaults(defineProps<Props>(), {
  name: '',
  placeholder: '',
  readonly: false,
  required: false,
  error: '',
})

const model = defineModel<string>('modelValue')
</script>

<style lang="scss" scoped>
.textarea {
  @include scrollbar(true);
  display: flex;
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  padding: 0 $indent-l;
  resize: none;
  background: $color-base-medium;
  color: $color-white;
  transition:
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

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
