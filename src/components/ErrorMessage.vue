<script lang="ts" setup>
import Icon from "./Icon.vue";

const props = defineProps<{ error: string }>();
</script>

<template>
  <div
    class="bg-red-500 w-auto p-4 text-center h-8 mb-5 rounded text-white flex items-center"
    v-if="!!props.error"
  >
    <Icon name="fa-solid fa-xmark" />

    <span class="mx-auto">
      {{ props.error }}
    </span>
  </div>
</template>
