<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: #0d8e9b">
      <q-toolbar>
        <q-item clickable v-close-popup to="/">
          <q-avatar
            class="q-mb-sm"
            style="padding-top: 4px; margin-left: -0.5rem"
            size="xl"
            round
          >
            <img src="../assets/img/Black Hole Front View.png" />
          </q-avatar>
        </q-item>

        <q-toolbar-title class="u-center-text"></q-toolbar-title>

        <q-page-sticky
          position="top-right"
          :offset="[8, -62]"
          style="z-index: 1500"
        >
          <q-fab
            unelevated
            color="#0d8e9b"
            icon="fa-solid fa-bars"
            direction="down"
            vertical-actions-align="right"
          >
            <q-fab-action
              clickable
              v-close-popup
              to="/"
              label-position="right"
              color="accent"
              label="Home"
              icon="home"
              style="padding: 0.5rem"
            />
            <q-fab-action
              clickable
              v-close-popup
              to="/projectdetails"
              label-position="right"
              color="secondary"
              label="Proj. Details"
              icon="fa-solid fa-circle-info"
              style="padding: 0.5rem"
            />
            <q-fab-action
              clickable
              v-close-popup
              to="/brands"
              label-position="right"
              color="primary"
              label="Brands"
              icon="fa-solid fa-layer-group"
              style="padding: 0.5rem"
            />
            <q-fab-action
              clickable
              v-close-popup
              to="/categories"
              label-position="right"
              color="negative"
              label="Categories"
              icon="fa-solid fa-desktop"
              style="padding: 0.5rem"
            />
            <q-fab-action
              clickable
              v-close-popup
              to="/orderhistory"
              label-position="right"
              color="info"
              label="Order History"
              icon="fa-solid fa-chart-simple"
              style="padding: 0.5rem"
            />
            <!-- <q-fab-action
              clickable
              v-close-popup
              to="/dummy"
              external-label
              label-position="left"
              color="info"
              label="Practice Table"
              icon="fa-solid fa-chart-simple"
              style="padding: 0.5rem"
            /> -->
          </q-fab>
        </q-page-sticky>

        <q-page-sticky
          position="top-right"
          :offset="[115, -61]"
          style="z-index: 1500"
        >
          <q-fab
            unelevated
            color="#0d8e9b"
            icon="fa-solid fa-user"
            direction="left"
          >
            <q-fab-action
              clickable
              v-close-popup
              to="/login"
              color="warning"
              label="Login"
              icon="home"
              style="padding: 0.5rem"
            />
            <q-fab-action
              clickable
              v-close-popup
              to="/register"
              color="info"
              label="Register"
              icon="fa-solid fa-circle-info"
              style="padding: 0.5rem"
            />
            <q-fab-action
              clickable
              v-close-popup
              to="/logout"
              color="negative"
              label="Logout"
              icon="fa-solid fa-layer-group"
              style="padding: 0.5rem"
            />
          </q-fab>
        </q-page-sticky>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      elevated
      class="u-center-text bg-grey-8 text-white merriweather-light"
    >
      <q-toolbar style="margin: 5px">
        <q-toolbar-title>
          <div class="text-subtitle2">
            Noah's Nook - Noah Vail &copy; {{ new Date().getFullYear() }}
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style>
@import "primeicons/primeicons.css";
.shopping-icon {
  padding-top: 0.3rem;
  padding-right: 1rem;
  font-size: 1.2rem;
  color: #f7a072;
}

@media screen and (max-width: 412px) {
  .shopping-icon {
    padding-right: 0.3rem;
  }
}
</style>

<script>
import { defineComponent } from "vue";
import { reactive, onMounted, watch } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    let state = reactive({
      status: "",
      isLoggedIn: false,
    });

    onMounted(() => {
      if (sessionStorage.getItem("customer")) {
        state.isLoggedIn = true;
      }
    });

    function login() {
      state.isLoggedIn = true;
    }

    function logout() {
      state.isLoggedIn = false;
      sessionStorage.clear();
    }

    return { state, logout, login };
  },
});
</script>
