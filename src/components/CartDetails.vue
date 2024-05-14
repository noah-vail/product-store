<template>
  <q-page class="cart-details pageBackground2">
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
    <q-card class="cart-details__card">
      <div class="cart-details__headContainer">
        <div
          class="cart-details__title heading-secondary open-sans-regular-bold"
        >
          Your Cart Contents!
        </div>
        <img
          class="cart-details__img"
          src="../assets/img/cart.png"
          alt="cart"
        />
        <div class="cart-details__status">
          {{ state.status }}
        </div>
      </div>
      <q-list class="cart-details__list" separator>
        <div class="cart-details__list--items" v-if="state.cart.length > 0">
          <q-card class="q-ma-md">
            <q-list separator>
              <q-item class="merriweather-bold">
                <q-item-section
                  class="col-1 cart-details__textrightBold"
                  style="padding-left: 0.1rem"
                  >Name</q-item-section
                >
                <q-item-section
                  style="margin-left: 1rem"
                  class="col-3 cart-details__textrightBold"
                  >Qty</q-item-section
                >
                <q-item-section class="col-4 cart-details__table-heading-msrp"
                  >MSRP</q-item-section
                >
                <q-item-section class="col-3 cart-details__table-heading-ext"
                  >Extended</q-item-section
                >
              </q-item>
              <q-item
                class="merriweather-regular"
                v-for="item in state.cart"
                :key="item.id"
              >
                <q-item-section class="col-2 cart-details__table-product">{{
                  item.item.productName
                }}</q-item-section>
                <q-item-section
                  class="col-2 cart-details__table-qty text-warning"
                >
                  {{ item.qty }}
                </q-item-section>
                <q-item-section
                  class="merriweather-regular col-4 cart-details__table-msrp"
                >
                  {{ formatCurrency(item.item.msrp) }}
                </q-item-section>
                <q-item-section
                  class="col-3 merriweather-regular cart-details__table-ext"
                >
                  {{ formatCurrency(item.item.msrp * item.qty) }}
                </q-item-section>
              </q-item>
              <q-item></q-item>
              <q-item>
                <q-item-section
                  class="col-9 merriweather-bold cart-details__textrightBold--sub"
                  >Sub:</q-item-section
                >
                <q-item-section
                  class="col-3 merriweather-regular cart-details__textcenter--sub"
                >
                  {{ formatCurrency(state.subtotal) }}
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section
                  class="col-9 merriweather-bold cart-details__textrightBold--tax"
                >
                  Tax(13%):</q-item-section
                >
                <q-item-section
                  class="col-3 merriweather-regular cart-details__textcenter--tax"
                >
                  {{ formatCurrency(state.tax) }}
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section
                  class="col-9 merriweather-bold cart-details__textrightBold--total"
                >
                  Total:</q-item-section
                >
                <q-item-section
                  class="col-3 merriweather-black cart-details__textcenterBold--total text-warning"
                >
                  {{ formatCurrency(state.total) }}</q-item-section
                >
              </q-item>
            </q-list>
          </q-card>
          <div class="cart-details__btnContainer">
            <q-btn
              class="merriweather-bold-italic btnsmall btnsmall--accent"
              label="Checkout"
              :disable="state.cart.length < 1"
              @click="saveCart()"
            />
            <q-btn
              class="merriweather-bold-italic btnsmall btnsmall--warning"
              label="CLEAR CART"
              @click="clearCart()"
            />
          </div>
        </div>
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
import { poster } from "src/util/apiutil";
import { reactive, onMounted } from "vue";
import { formatCurrency } from "src/util/formatutils";

export default {
  setup() {
    onMounted(() => {
      if (sessionStorage.getItem("cart")) {
        state.cart = JSON.parse(sessionStorage.getItem("cart"));
        state.cart.forEach((cartItem) => {
          state.extTotal = cartItem.item.msrp * cartItem.qty;
          state.subtotal += state.extTotal;
          state.tax = state.subtotal * 0.13;
          state.total = state.subtotal + state.tax;
          state.loadedCount += cartItem.qty;
        });
      } else {
        state.cart = [];
      }
    });

    let state = reactive({
      status: "",
      extTotal: 0,
      subtotal: 0,
      total: 0,
      tax: 0,
      loadedCount: 0,
      cart: [],
    });

    const clearCart = () => {
      sessionStorage.removeItem("cart");
      state.cart = [];
      state.loadedCount = 0;
      state.status = "Cart Cleared of Products";
    };

    const saveCart = async () => {
      let customer = JSON.parse(sessionStorage.getItem("customer"));
      let cart = JSON.parse(sessionStorage.getItem("cart"));

      try {
        state.status = "sending order info to server";
        let cartHelper = { email: customer.email, selections: cart };
        let payload = await poster("order", cartHelper);

        if (payload.indexOf("not") > 0) {
          state.status = payload;
        } else {
          clearCart();
          state.status = payload;
        }
      } catch (err) {
        console.log(err);
        state.status = `Error add order: ${err}`;
      }
    };

    return {
      state,
      formatCurrency,
      clearCart,
      saveCart,
    };
  },
};
</script>
