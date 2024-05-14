<template>
  <q-page class="category pageBackground3">
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
    <header class="header-brands-categories">
      <div class="header-brands-categories__logo-box">
        <img
          src="../assets/img/FirstGalaxyRender.png"
          alt="Logo"
          class="header-brands-categories__logo"
        />
      </div>
      <div class="header-brands-categories__text-box">
        <h1 class="heading-primary">
          <div class="heading-primary--brandsCats merriweather-light-italic">
            Categories
          </div>
        </h1>
      </div>
    </header>
    <q-card class="category__card">
      <q-tabs
        v-model="state.currentTab"
        dense
        class="text-grey merriweather-regular-italic"
        active-color="primary"
        indicator-color="accent"
        align="justify"
        narrow-indicator
        style="padding-top: 1rem; padding-bottom: 1rem"
      >
        <q-tab
          name="Laptop"
          label="Laptop"
          @click="loadProductItems(state.currentTab)"
        />
        <q-tab
          name="Desktop"
          label="Desktop"
          @click="loadProductItems(state.currentTab)"
        />
        <q-tab
          name="Graphics Card"
          label="Graphics Card"
          @click="loadProductItems(state.currentTab)"
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="state.currentTab" animated>
        <q-tab-panel
          class="category__select"
          name="Laptop"
          v-for="item in state.products"
          :key="item.id"
        >
          <q-card class="category__item-card">
            <q-list separator>
              <q-item
                class="category__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProductItem(item.id)"
                style="padding: 1rem"
              >
                <q-item-section avatar>
                  <q-avatar square class="category__graphic">
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section
                  class="category__prodname-list merriweather-regular"
                >
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-tab-panel>

        <q-tab-panel
          class="category__select"
          name="Desktop"
          v-for="item in state.products"
          :key="item.id"
        >
          <q-scroll-area class="category__scroll">
            <q-card class="category__item-card">
              <q-list separator>
                <q-item
                  class="category__item"
                  clickable
                  v-for="item in state.products"
                  :key="item.id"
                  @click="selectProductItem(item.id)"
                  style="padding: 1rem"
                >
                  <q-item-section avatar>
                    <q-avatar
                      class="category__graphic"
                      square
                      style="width: 60px; height: 60px"
                    >
                      <img
                        :src="require(`../assets/img/${item.graphicName}`)"
                      />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section
                    class="category__prodname-list merriweather-regular"
                  >
                    {{ item.productName }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </q-scroll-area>
        </q-tab-panel>

        <q-tab-panel
          class="category__select"
          name="Graphics Card"
          v-for="item in state.products"
          :key="item.id"
        >
          <q-scroll-area class="category__scroll">
            <q-card class="category__item-card">
              <q-list separator>
                <q-item
                  class="category__item"
                  clickable
                  v-for="item in state.products"
                  :key="item.id"
                  @click="selectProductItem(item.id)"
                  style="padding: 1rem"
                >
                  <q-item-section avatar>
                    <q-avatar
                      class="category__graphic"
                      square
                      style="width: 60px; height: 60px"
                    >
                      <img
                        :src="require(`../assets/img/${item.graphicName}`)"
                      />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section
                    class="category__prodname-list merriweather-regular"
                  >
                    {{ item.productName }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </q-scroll-area>
        </q-tab-panel>
      </q-tab-panels>

      <q-dialog
        v-model="state.itemSelected"
        style="backdrop-filter: blur(8px) saturate(150%)"
        :position="pos"
        persistent
        seamless
        transition-show="slide-up"
        transition-hide="slide-right"
      >
        <q-card
          style="
            width: 600px;
            max-width: 80vw;
            min-width: 380px;
            border-radius: 15px;
            margin-top: 3rem;
          "
        >
          <q-bar class="bg-primary" style="height: 5.3vh">
            <img
              src="../assets/img/FirstGalaxyRender.png"
              style="width: 2.5rem; height: 2.5rem; border-radius: 50px"
            />

            <q-space />
            <div class="category__brandName merriweather-black">
              {{ state.selectedProduct.brandName }}
            </div>
            <q-space />
            <q-btn class="text-warning" dense flat icon="close" v-close-popup>
              <q-tooltip>Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div
              class="category__prodname text-center text-primary merriweather-regular"
            >
              {{ state.selectedProduct.productName }}
            </div>
          </q-card-section>

          <q-card-section class="q-pa-none text-center">
            <img
              :src="
                require(`../assets/img/${state.selectedProduct.graphicName}`)
              "
              style="height: 200px; width: 250px"
            />
          </q-card-section>

          <q-card-section>
            <div
              class="text-subtitle2 text-center text-negative merriweather-regular"
              style="font-size: large"
            >
              {{ formatCurrency(state.selectedProduct.msrp) }}
            </div>
          </q-card-section>

          <div
            class="merriweather-regular"
            style="
              font-weight: bold;
              font-size: medium;
              margin-top: 0.4vh;
              text-align: center;
            "
          >
            Item Specs:
          </div>

          <q-card-section class="category__description merriweather-regular">
            {{ state.selectedProduct.memory }}
            <br />
            <br />
            {{ state.selectedProduct.processor }}
            <br />
            <br />
            {{ state.selectedProduct.graphics }}
            <br />
            <br />
            {{ state.selectedProduct.storage }}
          </q-card-section>

          <div
            class="text-center text-positive merriweather-regular"
            style="font-size: small; margin-bottom: 0.5rem"
          >
            {{ state.dialogStatus }}
          </div>

          <q-card-section>
            <div class="row">
              <div class="col-1-of-3">
                <q-input
                  class="merriweather-black-italic qty"
                  v-model.number="state.qty"
                  type="number"
                  filled
                  style="width: 10vw"
                  placeholder="qty"
                  dense
                />
                <q-tooltip
                  class="merriweather-black-italic"
                  style="font-size: 0.8rem"
                  >Enter Desired Quantity</q-tooltip
                >
              </div>
              <div class="col-1-of-3">
                <q-btn
                  class="merriweather-regular btntiny btntiny--positive"
                  label="Add Item"
                  :disable="state.qty < 0"
                  @click="addToCart()"
                />
              </div>
              <div class="col-1-of-3">
                <q-btn
                  class="merriweather-regular btntiny btntiny--negative"
                  label="View Cart"
                  :disable="state.cart.length < 1"
                  @click="viewCart()"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-card>
  </q-page>
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import { fetcher } from "../util/apiutil";
import { formatCurrency } from "src/util/formatutils";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    onMounted(() => {
      loadCart();
      loadCategories();
    });

    let state = reactive({
      status: "",
      categories: [],
      products: [],
      selectedCategory: {},
      selectedCategoryId: "",
      selectedProduct: {},
      itemSelected: false,
      qty: 0,
      cart: [],
      sessionStorage,
      itemCount: 0,
      loadedCount: 0,
      currentTab: ref("Laptop"),
      visible: ref(false),
    });

    const loadCategories = async () => {
      try {
        state.status = "Loading Product Types ...";
        const payload = await fetcher(`Category`);
        if (payload.error === undefined) {
          state.categories = payload;
          state.status = `Loaded ${state.categories.length} Product Categories`;
        } else {
          state.status = payload.error;
        }
      } catch (err) {
        console.log(err);
        state.status = `Error has Occured: ${err.message}`;
      }
    };

    const loadProductItems = async () => {
      try {
        state.selectedCategory = state.categories.find(
          (category) => category.categoryName === state.currentTab
        );
        state.products = await fetcher(`Category/${state.selectedCategory.id}`);
      } catch (err) {
        console.log(err);
        state.status = `Error has Occured: ${err.message}`;
      }
    };

    const selectProductItem = async (productid) => {
      try {
        //q-item click sends us the id, so we need to find the object
        state.selectedProduct = state.products.find(
          (product) => product.id === productid
        );

        state.itemSelected = true;
        state.dialogStatus = "";
        if (sessionStorage.getItem("cart")) {
          state.cart = JSON.parse(sessionStorage.getItem("cart"));
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

    const addToCart = () => {
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

    const checkCount = (qty) => {
      if (state.loadedCount != 0) {
        state.loadedCount += qty;
      }
    };

    const viewCart = () => {
      router.push("cart");
    };

    return {
      visible: ref(false),
      state,
      loadProductItems,
      selectProductItem,
      formatCurrency,
      addToCart,
      viewCart,
      loadCart,
      checkCount,
      pos: ref("top"),
    };
  },
};
</script>
