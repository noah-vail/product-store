<template>
  <q-page class="logout pageBackground-phone">
    <q-card class="logout__container">
      <q-card-section>
        <div class="merriweather-regular heading-primary--sub logout__heading">
          Logout
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-center logout__imgcontainer">
          <img
            class="logout__img"
            src="../assets/img/galaxy2.png"
            alt="galaxy"
          />
        </div>
      </q-card-section>
      <q-card-section>
        <div class="merriweather-regular logout__msg text-title2">Goodbye!</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    return {};
  },
};
</script>
