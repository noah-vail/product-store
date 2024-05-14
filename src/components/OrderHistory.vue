<template>
  <q-page class="pageBackground2">
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
          <q-badge color="red" floating>{{ state.loadedCount }}</q-badge>
        </div>
      </q-page-sticky>
    </div>
    <q-card class="order__card">
      <div class="order">
        <div
          class="merriweather-bold heading-secondary-large heading-secondary--fromtop order__header"
        >
          Your Orders!
        </div>
        <div class="order__status merriweather-regular-italic">
          {{ state.status }}
        </div>
      </div>
      <q-card class="order__list">
        <q-list highlight>
          <div class="order__listContainer">
            <q-item class="order__headings merriweather-regular-italic">
              <q-item-section>
                <q-item-label
                  class="order__headings--num heading-tertiary-small"
                  >Order #</q-item-label
                >
              </q-item-section>
              <q-item-section class="heading-tertiary-small"
                >Date</q-item-section
              >
            </q-item>
            <q-item
              class="order__listItems"
              clickable
              v-for="order in state.orders"
              :key="order.id"
              @click="selectOrder(order.id)"
            >
              <q-item-section
                class="order__listItems--idpos merriweather-regular"
              >
                {{ order.id }}
              </q-item-section>
              <q-item-section class="merriweather-regular">
                {{ formatDate(order.dateCreated) }}
              </q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-card>
      <q-dialog
        v-model="state.selectedAnOrder"
        style="backdrop-filter: blur(8px) hue-rotate(50deg)"
        :position="pos"
        transition-show="slide-right"
        transition-hide="slide-up"
        class="merriweather-regular"
      >
        <q-card style="width: 480px; max-width: 80vw; border-radius: 15px">
          <q-bar style="height: 5vh" class="bg-positive">
            <img
              src="../assets/img/FirstGalaxyRender.png"
              style="width: 3rem; height: 3rem; border-radius: 50px"
            />
            <q-space />
            <div class="order__dc">{{ state.orderDetails[0].dateCreated }}</div>
            <q-space />
            <q-btn class="text-warning" dense flat icon="close" v-close-popup>
              <q-tooltip>Close</q-tooltip>
            </q-btn>
          </q-bar>

          <div class="order__oidcontainer">
            <div>Order: #{{ state.orderDetails[0].orderId }}</div>
          </div>

          <q-list separator class="order__items" style="">
            <div v-if="state.orderDetails.length > 0">
              <q-card-section>
                <!-- TABLE HEADINGS SECTION -->
                <q-item>
                  <q-item-section class="col-3 order__totals--leftBold"
                    >Name</q-item-section
                  >
                  <q-item-section
                    class="col-4 order__qheading order__totals--centerBold"
                    >Quantities
                  </q-item-section>
                  <q-item-section
                    class="col-3 order__extheading order__totals--rightBold"
                    >Extended</q-item-section
                  >
                </q-item>
                <!-- TABLE SUB HEADINGS SECTION -->
                <q-item>
                  <q-item-section
                    class="col-4 text-right"
                    style="margin-left: 15px; margin-right: 2px"
                    >S</q-item-section
                  >
                  <q-item-section class="col-2 text-center">O</q-item-section>
                  <q-item-section class="col-2 text-left"> B </q-item-section>
                </q-item>

                <!-- TABLE DATA SECTION -->
                <q-item v-for="detail in state.orderDetails" :key="detail.Id">
                  <q-item-section class="col-1 text-left">
                    {{ detail.productName }}
                  </q-item-section>
                  <q-item-section
                    class="col-3 text-right"
                    style="margin-left: 15px; margin-right: 2px"
                  >
                    {{ detail.qtyS }}
                  </q-item-section>
                  <q-item-section class="col-2 text-center">
                    {{ detail.qtyO }}
                  </q-item-section>
                  <q-item-section class="col-2 text-left">
                    {{ detail.qtyB }}
                  </q-item-section>
                  <q-item-section class="col-1">
                    {{ formatCurrency(detail.productCost) }}
                  </q-item-section>
                </q-item>
                <br />
                <!-- TABLE TOTALS SECTION -->
                <!-- SUBTOTAL -->
                <q-item>
                  <q-item-section class="col-7 order__totals--rightBoldSub">
                    Sub:
                  </q-item-section>
                  <q-item-section class="order__totals--rightSub">
                    {{ formatCurrency(state.orderSelected.orderAmount) }}
                  </q-item-section>
                </q-item>
                <!-- TAX -->
                <q-item>
                  <q-item-section class="col-7 order__totals--rightBold">
                    Tax:
                  </q-item-section>
                  <q-item-section class="order__totals--rightTax">
                    {{ formatCurrency(state.orderSelected.orderAmount * 0.13) }}
                  </q-item-section>
                </q-item>
                <!-- TOTAL -->
                <q-item>
                  <q-item-section class="col-7 order__totals--rightBold">
                    Total:
                  </q-item-section>
                  <q-item-section class="order__totals--rightTot text-warning">
                    {{
                      formatCurrency(
                        state.orderSelected.orderAmount +
                          state.orderSelected.orderAmount * 0.13
                      )
                    }}
                  </q-item-section>
                  <br />
                </q-item>
              </q-card-section>
            </div>
          </q-list>
        </q-card>
      </q-dialog>
    </q-card>
  </q-page>
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import { fetcher, formatDate } from "../util/apiutil";
import { formatCurrency } from "src/util/formatutils";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    let state = reactive({
      status: "",
      orders: [],
      dialogStatus: "",
      selectedAnOrder: false,
      orderDetails: [],
      orderSelected: {
        id: 0,
        qtyS: 0,
        qtyO: 0,
        qtyB: 0,
        productName: "",
        price: "",
        totalCost: 0.0,
      },
      loadedCount: 0,
    });

    onMounted(() => {
      loadCart();
      loadOrders();
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

    const loadOrders = async () => {
      try {
        let customer = JSON.parse(sessionStorage.getItem("customer"));
        const payload = await fetcher(`order/${customer.email}`);

        if (payload.error === undefined) {
          state.orders = payload;

          state.status = `loaded ${state.orders.length} order(s)`;
        } else {
          state.status = payload.error;
        }
      } catch (err) {
        console.log(err);
        state.status = `Error has occured: ${err.message}`;
      }
    };

    const selectOrder = async (orderId) => {
      try {
        let customer = JSON.parse(sessionStorage.getItem("customer"));
        const payload = await fetcher(`order/${orderId}/${customer.email}`);
        state.orderDetails = payload;

        state.dialogStatus = `product totals for order`;
        state.selectedAnOrder = true;
        state.orderSelected = state.orders.find((order) => order.id == orderId);
      } catch (err) {
        console.log(err);
        state.status = `Error has occurred: ${err.message}`;
      }
    };

    const viewCart = async () => {
      router.push("cart");
    };

    return {
      state,
      formatDate,
      formatCurrency,
      loadOrders,
      selectOrder,
      viewCart,
      pos: ref("top"),
    };
  },
};
</script>
