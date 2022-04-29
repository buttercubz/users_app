<script lang="ts" setup>
import ErrorMsg from "../components/ErrorMessage.vue";
import Head from "../components/Head.vue";
import Icon from "../components/Icon.vue";
import User from "../components/User.vue";

import { Cookie, EndPoints } from "../utils";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
const error = ref("");
const users = ref([]);

function Logout() {
  // remove cookie
  document.cookie = "JWT=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

  router.push("/login");
}

onMounted(async () => {
  const token = Cookie().get("JWT")!;

  const response = await fetch(EndPoints.getUsers(), {
    headers: {
      Authorization: token,
    },
  });

  const data = await response.json();

  if (response.status > 299) {
    error.value = data.error;

    setTimeout(() => {
      error.value = "";
    }, 2000);
  } else {
    users.value = data;
  }
});
</script>

<template>
  <div class="w-full bg-green-500 h-10 flex items-center flex-row-reverse">
    <Head title="Home" />

    <div class="flex text-white mx-4" @click="Logout">
      <Icon name="fa-solid fa-arrow-right-from-bracket" />
      <button>Logout</button>
    </div>
  </div>

  <div class="w-auto max-w-lg mx-auto mt-5">
    <ErrorMsg :error="error" />
  </div>

  <div class="bg-gray-100 mt-4 w-2/3 mx-auto rounded h-auto p-3">
    <User v-for="user in users" :user="user" />
  </div>
</template>
