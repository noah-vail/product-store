<template>
  <q-page class="pageBackground">
    <div>
      <q-page-sticky
        position="top-right"
        :offset="[65, -61]"
        style="z-index: 2500"
      >
        <q-btn fab color="primary-dark" unelevated @click="viewCart()"
          ><i style="font-size: 1.2rem" class="pi pi-shopping-cart"></i
        ></q-btn>
        <div>
          <q-badge color="red" floating v-if="state.loadedCount != 0">{{
            state.loadedCount
          }}</q-badge>
          <q-badge
            color="red"
            floating
            v-if="state.itemCount >= 0 && state.loadedCount == 0"
            >{{ state.itemCount }}</q-badge
          >
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
    <header class="header-warning-primary">
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
            >Discover</span
          >
          <span class="heading-primary--sub merriweather-bold-italic"
            >What's New</span
          >
        </h1>
      </div>
    </header>
    <q-card class="products">
      <q-card class="products__container">
        <div class="row roww">
          <q-card-section
            class="col-1-of-3"
            v-for="item in state.products"
            :key="item"
          >
            <!--  -->
            <div class="feature-box">
              <img
                :src="require(`assets/img/${item.graphicName}`)"
                style="width: 100%; height: 350px"
              />
              <div class="feature-box__heading merriweather-regular-italic">
                <div class="feature-box__heading-span card__heading-span--4">
                  {{ item.productName }}
                </div>
              </div>
              <div class="feature-box__feature-details merriweather-regular">
                <ul>
                  <li>{{ item.brandName }}</li>
                  <li>{{ item.ram }}</li>
                  <li class="text-warning">${{ item.msrp }}</li>
                </ul>
              </div>

              <div class="row roww">
                <div class="btn-box merriweather bold">
                  <q-btn
                    push
                    flat
                    no-caps
                    :ripple="{ color: 'purple' }"
                    style="
                      border-bottom: 2px solid #0fa3b1;
                      border-radius: 8px;
                      padding: 0.5rem 1rem;
                      font-size: 1rem;
                      box-shadow: 0 1rem 2rem rgba(#f7a072, 1);
                      transition: all 0.2s;
                      min-width: 10vw;
                      margin-left: -2rem;
                    "
                    class="button-text-add button-text-add--white"
                    label="Add To Cart!"
                    @click="addToCart(item.id)"
                  />
                </div>
              </div>
            </div>
          </q-card-section>
        </div>
      </q-card>
    </q-card>
  </q-page>
</template>

<script>
import { reactive, onMounted } from "vue";
import { fetcher } from "../util/apiutil";
import { formatCurrency } from "../util/formatutils";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    onMounted(() => {
      loadCart();
      loadProducts();
    });

    let state = reactive({
      status: "",
      products: [],
      selectedProduct: {},
      cart: [],
      itemSelected: false,
      dialogStatus: "",
      qty: 0,
      itemCount: 0,
      loadedCount: 0,
    });

    const loadProducts = async () => {
      try {
        state.status = "Loading Products...";
        const payload = await fetcher("Product");

        if (payload.error === undefined) {
          state.products = payload;
          state.status = `Loaded ${state.products.length} Products`;
        } else {
          state.status = payload.error;
        }
      } catch (err) {
        console.log(err);
        state.status = `Error has Occured: ${err.message}`;
      }
    };

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

    const addToCart = async (productid) => {
      state.selectedProduct = state.products.find(
        (item) => item.id === productid
      );

      state.itemSelected = true;
      state.dialogStatus = "";
      state.qty = 1;

      if (sessionStorage.getItem("cart")) {
        state.cart = JSON.parse(sessionStorage.getItem("cart"));
      }

      let index = -1;

      if (state.cart.length > 0) {
        index = state.cart.findIndex(
          // is the item already in the cart
          (item) => item.id === state.selectedProduct.id
        );
      }

      if (state.qty > 0) {
        index === -1 // add
          ? state.cart.push({
              id: state.selectedProduct.id,
              qty: state.qty,
              item: state.selectedProduct,
            })
          : (state.cart[index] = {
              //replace
              id: state.selectedProduct.id,
              qty: state.qty,
              item: state.selectedProduct,
            });
        state.itemCount += state.qty;
        checkCount(state.itemCount);
        state.dialogStatus = `${state.qty} item(s) added`;
      } else {
        index === -1 ? null : state.cart.splice(index, 1); // remove
        state.dialogStatus = `item(s) removed`;
      }

      sessionStorage.setItem("cart", JSON.stringify(state.cart));
      state.qty = 0;
    };

    function GoToTop() {
      window.scrollTo(0, 0);
    }

    const checkCount = (qty) => {
      if (state.loadedCount != 0) {
        state.loadedCount += qty;
      }
    };

    const viewCart = () => {
      router.push("cart");
    };

    return {
      state,
      addToCart,
      viewCart,
      loadCart,
      checkCount,
      GoToTop,
    };
  },
};
</script>
