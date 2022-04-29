<script lang="ts" setup>
import { useRouter } from "vue-router";
import { Cookie } from "./utils";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => {
  if (Cookie().has("JWT")) {
    router.push("/home");
  } else {
    router.push("/login");
  }
});
</script>

<template>
  <router-view></router-view>
</template>

<style>
* {
  font-family: "Roboto", sans-serif;
}
</style>
