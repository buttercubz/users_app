<script lang="ts" setup>
import ErrorMsg from "../components/ErrorMessage.vue";
import Icon from "../components/Icon.vue";
import Head from "../components/Head.vue";

import { useRouter } from "vue-router";
import { EndPoints } from "../utils";
import { ref } from "vue";

const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");

async function Login() {
  const response = await fetch(EndPoints.login(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value?.trim(),
      password: password.value?.trim(),
    }),
  });

  const data = await response.json();

  if (response.status > 299) {
    error.value = data.error;

    setTimeout(() => {
      error.value = "";
    }, 2000);
  } else {
    document.cookie = `JWT=${data?.token};`;
    email.value = "";
    password.value = "";

    router.push("/home");
  }
}
</script>

<template>
  <Head title="Login" />

  <div class="mx-auto flex flex-col items-center justify-center mt-24">
    <ErrorMsg :error="error" />

    <h1 class="text-2xl mb-6">Login</h1>

    <div class="w-1/4 my-auto">
      <div class="flex border rounded text-gray-500 mb-4">
        <Icon name="fa-solid fa-user" />

        <input
          class="outline-none px-2 h-full py-2 text-lg w-full"
          placeholder="Email"
          v-model="email"
          type="email"
        />
      </div>

      <div class="flex border rounded text-gray-500 mb-4">
        <Icon name="fa-solid fa-key" />

        <input
          class="outline-none px-2 h-full py-2 text-lg w-full"
          placeholder="Password"
          v-model="password"
          type="password"
        />
      </div>

      <div class="my-3 text-blue-600">
        <router-link to="/signup">
          <span> Create a account </span>
        </router-link>
      </div>

      <div
        class="border rounded mb-4 bg-blue-600 text-white cursor-pointer"
        @click="Login"
      >
        <div class="wrapper flex w-max mx-auto">
          <button
            class="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
