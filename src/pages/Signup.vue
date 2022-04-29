<script lang="ts" setup>
import ErrorMsg from "../components/ErrorMessage.vue";
import Head from "../components/Head.vue";
import Icon from "../components/Icon.vue";

import { useRouter } from "vue-router";
import { EndPoints } from "../utils";
import { ref } from "vue";

const router = useRouter();

const error = ref("");
const email = ref("");
const password = ref("");
const firstname = ref("");
const lastname = ref("");
const passwordConfirm = ref("");
const company = ref("");

async function Register() {
  if (password.value?.trim() !== passwordConfirm.value?.trim()) {
    setTimeout(() => {
      error.value = "";
    }, 2000);

    return (error.value = "password must match");
  }

  const response = await fetch(EndPoints.postUser(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value?.trim(),
      password: password.value?.trim(),
      firstname: firstname.value?.trim(),
      lastname: lastname.value?.trim(),
      default_company: company.value?.trim(),
    }),
  });

  const data = await response.json();

  if (response.status > 299) {
    error.value = data.error;

    setTimeout(() => {
      error.value = "";
    }, 2000);
  } else {
    router.push("/login");
  }
}
</script>

<template>
  <Head title="Register" />

  <div class="mx-auto flex flex-col items-center justify-center mt-24">
    <ErrorMsg :error="error" />

    <h2 class="text-2xl mb-6">Register</h2>

    <div class="w-1/4 my-auto">
      <div class="flex border rounded text-gray-500 mb-4">
        <Icon name="fa-solid fa-user" />

        <input
          class="outline-none px-4 h-full py-2 text-lg w-full"
          placeholder="First name"
          v-model="firstname"
          type="text"
        />
      </div>

      <div class="flex border rounded text-gray-500 mb-4">
        <Icon name="fa-solid fa-user" />

        <input
          class="outline-none px-4 h-full py-2 text-lg w-full"
          placeholder="Last name"
          v-model="lastname"
          type="text"
        />
      </div>

      <div class="flex border rounded text-gray-500 mb-4">
        <Icon name="fa-solid fa-at" />

        <input
          class="outline-none px-4 h-full py-2 text-lg w-full"
          placeholder="Email"
          v-model="email"
          type="email"
        />
      </div>

      <div class="flex border rounded text-gray-500 mb-4">
        <Icon name="fa-solid fa-key" />

        <input
          class="outline-none px-4 h-full py-2 text-lg w-full"
          placeholder="Password"
          v-model="password"
          type="password"
        />
      </div>

      <div class="flex border rounded text-gray-500 mb-4">
        <Icon name="fa-solid fa-key" />

        <input
          class="outline-none px-4 h-full py-2 text-lg w-full"
          placeholder="Confirm password"
          v-model="passwordConfirm"
          type="password"
        />
      </div>

      <div class="flex border rounded text-gray-500 mb-4">
        <Icon name="fa-solid fa-building" />

        <input
          class="outline-none px-4 h-full py-2 text-lg w-full"
          placeholder="Company"
          v-model="company"
          type="text"
        />
      </div>

      <div class="my-3 text-blue-600">
        <router-link to="/login">
          <span> Login with your account </span>
        </router-link>
      </div>

      <div
        class="border rounded mb-4 bg-blue-600 text-white cursor-pointer"
        @click="Register"
      >
        <div class="wrapper flex w-max mx-auto">
          <button
            class="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
