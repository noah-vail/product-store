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
    <header class="header-accent-primary">
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
            >Desktops</span
          >
        </h1>
      </div>
    </header>
    <q-card class="products">
      <q-card class="products__container">
        <div class="heading-tertiary" style="padding-left: 1.5rem">ALL PCs</div>
        <div class="row roww">
          <q-card-section
            class="col-1-of-3"
            v-for="item in state.desktops"
            :key="item"
          >
            <!--  -->
            <div class="feature-box">
              <img
                :src="require(`assets/img/${item.graphicName}`)"
                style="width: 100%; height: 400px"
              />
              <div class="feature-box__heading merriweather-regular-italic">
                <div class="feature-box__heading-span card__heading-span--3">
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
                <div class="btn-box merriweather-bold">
                  <q-btn
                    push
                    flat
                    :ripple="{ color: 'purple' }"
                    style="
                      border-bottom: 2px solid #c179f4;
                      border-radius: 8px;
                      padding: 0.5rem 0.5rem;
                      font-size: 0.9rem;
                      box-shadow: 0 1rem 2rem rgba(#f7a072, 1);
                      transition: all 0.2s;
                      min-width: 10vw;
                      margin-left: -2rem;
                    "
                    class="button-text-positive button-text-positive--green"
                    label="Add To Cart"
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
      loadDesktops();
    });

    let state = reactive({
      status: "",
      desktops: [],
      selectedProduct: {},
      cart: [],
      itemSelected: false,
      dialogStatus: "",
      qty: 0,
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

    const loadDesktops = async () => {
      try {
        state.desktops = await fetcher(`Category/3`);
        state.status = `Loaded ${state.desktops.length} Items for Laptops`;
      } catch (err) {
        console.log(err);
        state.status = `Error has Occured: ${err.message}`;
      }
    };

    const addToCart = async (productid) => {
      state.selectedProduct = state.desktops.find(
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
      loadDesktops,
      addToCart,
      viewCart,
      checkCount,
      GoToTop,
    };
  },
};
</script>
