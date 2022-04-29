<script lang="ts" setup>
const props = defineProps<{ name: string }>();
</script>

<template>
  <div class="flex items-center mx-2" @click="$emit('click')">
    <i :class="props.name"></i>
  </div>
</template>
