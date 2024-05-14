<template>
  <q-page class="pageBackground">
    <div>
      <q-page-sticky
        position="top-right"
        :offset="[65, -61]"
        style="z-index: 2500"
      >
        <!-- class="button-sticky" -->
        <q-btn fab color="primary-dark" unelevated
          ><i class="sticky-icon pi pi-shopping-cart"></i
        ></q-btn>
        <div>
          <q-badge color="red" floating>{{ state.loadedCount }}</q-badge>
        </div>
      </q-page-sticky>
    </div>
    <div>
      <q-page-sticky
        position="bottom-right"
        :offset="[50, 20]"
        style="z-index: 1500"
      >
        <q-btn
          fab
          icon="keyboard_arrow_up"
          class="button-sticky"
          color="accent"
          @click="GoToTop()"
        />
      </q-page-sticky>
    </div>
    <header class="header">
      <div class="header__logo-box">
        <img
          src="../assets/img/FirstGalaxyRender.png"
          alt="Logo"
          class="header__logo"
        />
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main merriweather-light-italic"
            >Project Details</span
          >
          <span class="heading-primary--sub merriweather-bold-italic"
            >Webstore Outline</span
          >
        </h1>
      </div>
    </header>
    <q-card class="outline-card">
      <div class="outline-card--project-outline">
        <q-card-section>
          <div class="feature-box">
            <i class="icon fa-solid fa-globe"></i>
            <div
              class="heading-primary--sub u-center-text merriweather-regular-italic"
            >
              Noah's Nook
            </div>
            <div>
              <p
                class="heading-secondary heading-secondary--fromtop merriweather-regular"
              >
                Purpose
              </p>
              <p class="paragraph merriweather-light">
                This is
                <a> <strong class="text-warning">some text</strong></a>
              </p>
              <p
                class="merriweather-regular heading-secondary heading-secondary--frombottom"
              >
                Functionality
              </p>
              <p class="merriweather-light paragraph">
                This is
                <a> <strong class="text-warning">some text</strong></a>
              </p>
            </div>
          </div>
        </q-card-section>
      </div>
    </q-card>

    <q-card class="build-card">
      <div
        class="merriweather-regular-italic heading-proj-details--main u-center-text"
      >
        Build Stack
      </div>
      <div class="build-card__build-stack">
        <div class="row roww">
          <q-card-section class="col">
            <div class="feature-box">
              <i class="icon fa-solid fa-desktop"></i>
              <div
                class="merriweather-regular heading-proj-details--sub u-center-text"
              >
                Client
              </div>
              <div>
                <p
                  class="merriweather-regular heading-secondary heading-secondary--fromtop"
                >
                  Vue.js
                </p>
                <p class="merriweather-light paragraph">
                  Version <a> <strong class="text-warning">1.2.3</strong></a>
                </p>
                <p
                  class="merriweather-regular heading-secondary heading-secondary--fromleft"
                >
                  Quasar Framework
                </p>
                <p class="merriweather-light paragraph">
                  Version <a> <strong class="text-warning">1.2.3</strong></a>
                </p>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="col">
            <div class="feature-box">
              <i class="icon fa-solid fa-server"></i>
              <div
                class="merriweather-regular heading-proj-details--sub u-center-text"
              >
                Server
              </div>
              <div>
                <p
                  class="merriweather-regular heading-secondary heading-secondary--frombottom"
                >
                  Visual Studio
                </p>
                <p class="merriweather-light paragraph">
                  C# .Net <strong class="text-warning">8</strong>
                </p>
                <p
                  class="merriweather-regular heading-secondary heading-secondary--fromright"
                >
                  SQL Server
                </p>
                <p class="merriweather-light paragraph">T-SQL</p>
              </div>
            </div>
          </q-card-section>
        </div>
        <!-- Server Features -->
        <div class="outline-card--project-outline">
          <q-card-section>
            <div class="feature-box">
              <i class="icon fa-solid fa-shield-halved"></i>
              <div
                class="heading-primary--sub u-center-text merriweather-regular-italic"
              >
                Server-Side Features
              </div>
              <div>
                <p
                  class="heading-secondary heading-secondary--fromtop merriweather-regular"
                >
                  Authentication &lrhar; Authorization
                </p>
                <p class="paragraph merriweather-light">
                  Using
                  <a> <strong class="text-warning">Hash</strong></a>
                  and
                  <a> <strong class="text-warning">Salt</strong></a>
                  for user password security.
                </p>
                <p
                  class="heading-secondary heading-secondary--fromtop merriweather-regular"
                >
                  Token Generation
                </p>
                <p class="paragraph merriweather-light">
                  Using
                  <a> <strong class="text-warning">Hash</strong></a>
                  and
                  <a> <strong class="text-warning">Salt</strong></a>
                  for user password security.
                </p>
              </div>
            </div>
          </q-card-section>
        </div>
      </div>
    </q-card>

    <q-card class="socials-card">
      <div
        class="merriweather-regular-italic heading-proj-details--main u-center-text"
      >
        Socials
      </div>
      <div class="socials-card__content">
        <div class="row roww">
          <q-card-section class="col">
            <div class="feature-box">
              <i class="icon pi pi-linkedin"></i>
              <div
                class="merriweather-regular heading-proj-details--sub u-center-text"
              >
                LinkedIn
              </div>
              <div>
                <p class="merriweather-regular heading-secondary">
                  Subheading 1
                </p>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="col">
            <div class="feature-box">
              <i class="icon pi pi-github"></i>
              <div
                class="merriweather-regular heading-proj-details--sub u-center-text"
              >
                GitHub
              </div>
              <div>
                <p class="merriweather-regular heading-secondary">
                  Subheading 3
                </p>
              </div>
            </div>
          </q-card-section>
        </div>
      </div>
    </q-card>

    <q-card class="contact-card">
      <div
        class="merriweather-regular-italic heading-proj-details--main u-center-text"
      >
        Contact Info
      </div>
      <div class="contact-card__content">
        <div class="row roww">
          <q-card-section class="col">
            <div class="feature-box">
              <i class="icon fa-solid fa-envelope"></i>
              <div
                class="merriweather-regular heading-proj-details--sub u-center-text"
              >
                Email
              </div>
              <div>
                <p class="merriweather-regular heading-secondary">
                  Subheading 1
                </p>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="col">
            <div class="feature-box">
              <i class="icon fa-solid fa-file"></i>
              <div
                class="merriweather-regular heading-proj-details--sub u-center-text"
              >
                Resume
              </div>
              <div>
                <p class="merriweather-regular heading-secondary">
                  Subheading 2
                </p>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="col">
            <div class="feature-box">
              <i class="icon fa-solid fa-link"></i>
              <div
                class="merriweather-regular heading-proj-details--sub u-center-text"
              >
                InDeed
              </div>
              <div>
                <p class="merriweather-regular heading-secondary">
                  Subheading 3
                </p>
              </div>
            </div>
          </q-card-section>
        </div>
      </div>
    </q-card>
  </q-page>
</template>
<style>
@import "primeicons/primeicons.css";
</style>

<script>
import { reactive, onMounted } from "vue";
import InsertDriveFileIcon from "@quasar/extras/material-icons";
export default {
  setup() {
    onMounted(() => {
      loadCart();
    });

    let state = reactive({
      status: "",
      qty: 0,
      cart: [],
      sessionStorage,
      itemCount: 0,
      loadedCount: 0,
    });

    const loadCart = async () => {
      try {
        if (sessionStorage.getItem("cart")) {
          state.cart = JSON.parse(sessionStorage.getItem("cart"));

          for (let i = 0; i < state.cart.length; i++) {
            state.loadedCount += state.cart[i].qty;
          }
        }
      } catch (err) {
        console.log(err);
        state.status = `Error has Occured: ${err.message}`;
      }
    };

    function GoToTop() {
      window.scrollTo(0, 0);
    }

    return {
      state,
      loadCart,
      GoToTop,
    };
  },
};
</script>
