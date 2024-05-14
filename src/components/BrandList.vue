<template>
  <q-page class="brand pageBackground3">
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
            Brands
          </div>
        </h1>
      </div>
    </header>
    <q-card class="brand__card">
      <q-tabs
        v-model="state.currentTab"
        dense
        class="text-grey merriweather-regular-italic"
        active-color="primary"
        indicator-color="accent"
        align="justify"
        narrow-indicator
        style="padding-top: 1rem; padding-bottom: 1.5rem"
      >
        <q-tab
          name="ASUS"
          label="ASUS"
          @click="loadProducts(state.currentTab)"
        />
        <q-tab
          name="Acer"
          label="Acer"
          @click="loadProducts(state.currentTab)"
        />
        <q-tab
          name="Alienware"
          label="Alienware"
          @click="loadProducts(state.currentTab)"
        />
        <q-tab
          name="ZOTAC"
          label="ZOTAC"
          @click="loadProducts(state.currentTab)"
        />
        <q-tab
          name="CyberpowerPC"
          label="CyberpowerPC"
          @click="loadProducts(state.currentTab)"
        />
        <q-tab
          name="Skytech Gaming"
          label="Skytech Gaming"
          @click="loadProducts(state.currentTab)"
        />
        <q-tab
          name="Gigabit"
          label="Gigabit"
          @click="loadProducts(state.currentTab)"
        />
        <q-tab name="HP" label="HP" @click="loadProducts(state.currentTab)" />
        <q-tab
          name="EVGA"
          label="EVGA"
          @click="loadProducts(state.currentTab)"
        />
        <q-tab
          name="Razer"
          label="Razer"
          @click="loadProducts(state.currentTab)"
        />
        <q-tab
          name="Maingear"
          label="Maingear"
          @click="loadProducts(state.currentTab)"
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels
        class="brand__container merriweather-regular"
        v-model="state.currentTab"
        animated
      >
        <q-tab-panel
          class="brand__select"
          name="ASUS"
          v-for="item in state.products"
          :key="item.id"
        >
          <q-scroll-area class="brand__scroll">
            <q-card class="brand__item-card">
              <q-list separator>
                <q-item
                  class="brand__item"
                  clickable
                  v-for="item in state.products"
                  :key="item.id"
                  @click="selectProduct(item.id)"
                  style="padding: 1rem"
                >
                  <q-item-section avatar>
                    <q-avatar square class="brand__graphic">
                      <img
                        :src="require(`../assets/img/${item.graphicName}`)"
                      />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section class="brand__prodname-list">
                    {{ item.productName }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </q-scroll-area>
        </q-tab-panel>
        <q-tab-panel name="Acer" v-for="item in state.products" :key="item.id">
          <q-card class="brand__item-card">
            <q-list separator>
              <q-item
                class="brand__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProduct(item.id)"
                style="padding: 1rem"
              >
                <q-item-section avatar>
                  <q-avatar square class="brand__graphic">
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="brand__prodname-list">
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-tab-panel>
        <q-tab-panel
          name="Alienware"
          v-for="item in state.products"
          :key="item.id"
        >
          <q-card class="brand__item-card">
            <q-list separator>
              <q-item
                class="brand__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProduct(item.id)"
                style="padding: 1rem"
              >
                <q-item-section avatar>
                  <q-avatar square class="brand__graphic">
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="brand__prodname-list">
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="ZOTAC" v-for="item in state.products" :key="item.id">
          <q-card class="brand__item-card">
            <q-list separator>
              <q-item
                class="brand__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProduct(item.id)"
                style="padding: 1rem"
              >
                <q-item-section avatar>
                  <q-avatar square class="brand__graphic">
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="brand__prodname-list">
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="MSI" v-for="item in state.products" :key="item.id">
          <q-card class="brand__item-card">
            <q-list separator>
              <q-item
                class="brand__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProduct(item.id)"
                style="padding: 1rem"
              >
                <q-item-section avatar>
                  <q-avatar square class="brand__graphic">
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="brand__prodname-list">
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-tab-panel>
        <q-tab-panel
          name="CyberpowerPC"
          v-for="item in state.products"
          :key="item.id"
        >
          <q-card class="brand__item-card">
            <q-list separator>
              <q-item
                class="brand__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProduct(item.id)"
                style="padding: 1rem"
              >
                <q-item-section avatar>
                  <q-avatar square class="brand__graphic">
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="brand__prodname-list">
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-tab-panel>
        <q-tab-panel
          name="Skytech Gaming"
          v-for="item in state.products"
          :key="item.id"
        >
          <q-card class="brand__item-card">
            <q-list separator>
              <q-item
                class="brand__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProduct(item.id)"
                style="padding: 1rem"
              >
                <q-item-section avatar>
                  <q-avatar square class="brand__graphic">
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="brand__prodname-list">
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-tab-panel>
        <q-tab-panel
          name="Gigabit"
          v-for="item in state.products"
          :key="item.id"
        >
          <q-card class="brand__item-card">
            <q-list separator>
              <q-item
                class="brand__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProduct(item.id)"
                style="padding: 1rem"
              >
                <q-item-section avatar>
                  <q-avatar square class="brand__graphic">
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="brand__prodname-list">
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="HP" v-for="item in state.products" :key="item.id">
          <q-card class="brand__item-card">
            <q-list separator>
              <q-item
                class="brand__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProduct(item.id)"
                style="padding: 1rem"
              >
                <q-item-section avatar>
                  <q-avatar square class="brand__graphic">
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="brand__prodname-list">
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="EVGA" v-for="item in state.products" :key="item.id">
          <q-card class="brand__item-card">
            <q-list separator>
              <q-item
                class="brand__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProduct(item.id)"
                style="padding: 1rem"
              >
                <q-item-section avatar>
                  <q-avatar square class="brand__graphic">
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="brand__prodname-list">
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="Razer" v-for="item in state.products" :key="item.id">
          <q-card class="brand__item-card">
            <q-list separator>
              <q-item
                class="brand__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProduct(item.id)"
                style="padding: 1rem"
              >
                <q-item-section avatar>
                  <q-avatar square class="brand__graphic">
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="brand__prodname-list">
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-tab-panel>
        <q-tab-panel
          name="Maingear"
          v-for="item in state.products"
          :key="item.id"
        >
          <q-card class="brand__item-card">
            <q-list separator>
              <q-item
                class="brand__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProduct(item.id)"
                style="padding: 1rem"
              >
                <q-item-section avatar>
                  <q-avatar square class="brand__graphic">
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="brand__prodname-list">
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>

      <q-dialog
        v-model="state.itemSelected"
        style="backdrop-filter: blur(8px) saturate(150%)"
        :position="pos"
        persistent
        seamless
        transition-show="rotate"
        transition-hide="slide-left"
      >
        <q-card
          style="
            width: 600px;
            max-width: 80vw;
            min-width: 380px;
            border-radius: 15px;
          "
        >
          <q-bar class="bg-info" style="height: 5.3vh">
            <img
              src="../assets/img/FirstGalaxyRender.png"
              style="width: 2.5rem; height: 2.5rem; border-radius: 50px"
            />
            <q-space />
            <div class="brand__brandName merriweather-black">
              {{ state.selectedProduct.brandName }}
            </div>
            <q-space />
            <q-btn class="text-warning" dense flat icon="close" v-close-popup>
              <q-tooltip>Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div
              class="text-subtitle2 text-center text-primary merriweather-regular"
              style="font-size: 1.2rem; margin-bottom: 12px"
            >
              {{ state.selectedProduct.productName }}
            </div>
          </q-card-section>
          <q-card-section
            class="q-pa-none u-center-text"
            style="margin-bottom: 10px"
          >
            <img
              :src="
                require(`../assets/img/${state.selectedProduct.graphicName}`)
              "
              style="height: 250px; width: 250px"
            />
          </q-card-section>

          <q-card-section>
            <div
              class="text-subtitle2 text-center text-negative merriweather-regular"
              style="font-size: 1.1rem"
            >
              {{ formatCurrency(state.selectedProduct.msrp) }}
            </div>
          </q-card-section>

          <div
            class="merriweather-regular"
            style="
              font-weight: bold;
              margin-top: 0.5vh;
              margin-bottom: 0.5rem;
              text-align: center;
              font-size: 1rem;
            "
          >
            Item Specs:
          </div>

          <q-card-section class="brand__description merriweather-regular">
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
            class="text-center text-positive merriweather-regular-italic"
            style="font-size: 0.9rem; margin-bottom: 0.5rem"
          >
            {{ state.dialogStatus }}
          </div>

          <q-card-section>
            <div class="row">
              <div class="col-1-of-3" style="margin-left: -0.8rem">
                <q-input
                  class="merriweather-black-italic qty"
                  v-model.number="state.qty"
                  type="number"
                  filled
                  style="max-width: 8vw"
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
                  class="merriweather-bold btntiny btntiny--positive"
                  label="Add Item"
                  :disable="state.qty < 0"
                  @click="addToCart()"
                />
              </div>
              <div class="col-1-of-3">
                <q-btn
                  class="merriweather-bold btntiny btntiny--negative"
                  color="negative"
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

<style></style>

<script>
import { reactive, onMounted, ref } from "vue";
import { fetcher } from "../util/apiutil";
import { formatCurrency } from "../util/formatutils";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    onMounted(() => {
      loadCart();
      loadBrands();
    });

    let state = reactive({
      status: "",
      brands: [],
      products: [],
      selectedBrand: {},
      selectedBrandId: "",
      selectedProduct: {},
      dialogStatus: "",
      itemSelected: false,
      qty: 0,
      cart: [],
      sessionStorage,
      itemCount: 0,
      loadedCount: 0,
      currentTab: ref("ASUS"),
    });

    const loadBrands = async () => {
      try {
        state.status = "Loading Brands ...";
        const payload = await fetcher(`Brand`);
        if (payload.error === undefined) {
          state.brands = payload;

          state.status = `Loaded ${state.brands.length} Brands`;
        } else {
          state.status = payload.error;
        }
      } catch (err) {
        console.log(err);
        state.status = `Error has Occured: ${err.message}`;
      }
    };

    const loadProducts = async () => {
      try {
        state.selectedBrand = state.brands.find(
          (brand) => brand.brandName === state.currentTab
        );
        state.products = await fetcher(`Product/${state.selectedBrand.id}`);
      } catch (err) {
        console.log(err);
        state.status = `Error has Occured: ${err.message}`;
      }
    };

    const selectProduct = async (productid) => {
      try {
        state.selectedProduct = state.products.find(
          (item) => item.id === productid
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
      state,
      loadProducts,
      selectProduct,
      addToCart,
      formatCurrency,
      viewCart,
      pos: ref("top"),
    };
  },
};
</script>

<!-- <div class="brand__container">
        <q-select
          class="brand__select"
          v-if="state.brands.length > 0"
          :option-value="'id'"
          :option-label="'brandName'"
          v-model="state.selectedBrandId"
          :options="state.brands"
          label="Select a Brand"
          emit-value
          map-options
          @update:model-value="loadProducts()"
        />
        <q-scroll-area class="brand__scroll">
          <q-card class="q-ma-md brand__productscontainer">
            <q-list separator>
              <q-item
                class="brand__item"
                clickable
                v-for="item in state.products"
                :key="item.id"
                @click="selectProduct(item.id)"
              >
                <q-item-section avatar>
                  <q-avatar class="brand__avatar" square>
                    <img :src="require(`../assets/img/${item.graphicName}`)" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="text-center brand__prodname">
                  {{ item.productName }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-scroll-area>
      </div> -->
