<script lang="ts" setup>
import { onMounted } from "vue";

const props = defineProps<{
  title: string;
}>();

onMounted(() => {
  document.title = props.title;
});
</script>

<!-- this does not render anything -->
<template></template>
