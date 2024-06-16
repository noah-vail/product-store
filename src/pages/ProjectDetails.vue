<template>
  <q-page class="pageBackground">
    <div>
      <q-page-sticky
        position="top-right"
        :offset="[65, -61]"
        style="z-index: 2500"
      >
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
                This is a mobile & desktop
                <a> <strong class="text-warning">product store</strong></a>
                website that sells graphics cards, desktops & laptops.
              </p>
              <p
                class="merriweather-regular heading-secondary heading-secondary--frombottom"
              >
                Functionality
              </p>
              <p class="merriweather-light paragraph">
                Allows the user to
                <a> <strong class="text-warning">add items</strong></a> to a
                cart,
                <a> <strong class="text-warning">purchase products</strong></a>
                & view their
                <a> <strong class="text-warning">order history</strong></a
                >.
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
                  Version <a> <strong class="text-warning">^ 3.4.18</strong></a>
                </p>
                <p
                  class="merriweather-regular heading-secondary heading-secondary--fromleft"
                >
                  Quasar Framework
                </p>
                <p class="merriweather-light paragraph">
                  Version <a> <strong class="text-warning">^ 2.8.0</strong></a>
                </p>
                <p class="merriweather-light paragraph">
                  Icons used from
                  <strong class="text-warning">Font-Awesome</strong> &
                  <strong class="text-warning">PrimeIcons</strong>
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
                <p class="merriweather-light paragraph">
                  <strong class="text-warning">Swagger</strong> is used for
                  hosting API
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
                  <a> <strong class="text-warning">Tokens</strong></a>
                  to provide stronger password security by eliminating the need
                  for users to repeatedly use login credentials
                </p>
                <p class="paragraph merriweather-light">
                  <a>
                    <strong class="text-warning"
                      >Facilitates secure access</strong
                    ></a
                  >
                  during website traversal, including initial logins and while
                  connecting access protocols between applications.
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
                  n.c.vail21@gmail.com
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
                GitHub
              </div>
              <div>
                <p class="merriweather-regular heading-secondary">noah-vail</p>
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
