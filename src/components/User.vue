<script lang="ts" setup>
defineProps<{ user: { [key: string]: string } }>();

const formatDate = (d: string) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date(d));
</script>

<template>
  <div class="border-b border-gray-500 h-auto p-2 flex flex-col">
    <div>
      <span class="font-bold">Name:</span> {{ user?.firstname }}
      {{ user?.lastname }}
    </div>

    <div>
      <span class="font-bold"> UUID: </span>

      <span>
        {{ user?.id }}
      </span>
    </div>

    <div>
      <span class="font-bold"> Email: </span>

      <span>
        {{ user?.email }}
      </span>
    </div>

    <div>
      <span class="font-bold"> Company: </span>

      <span>
        {{ user?.default_company }}
      </span>
    </div>

    <div>
      <span class="font-bold"> Created at: </span>

      <span>
        {{ formatDate(user?.created_at) }}
      </span>
    </div>
  </div>
</template>
