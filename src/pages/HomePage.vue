<template>
  <q-page class="pageBackground">
    <div>
      <q-page-sticky
        position="top-right"
        :offset="[60, -61]"
        style="z-index: 2500"
      >
        <q-btn fab color="primary-dark" unelevated @click="viewCart()"
          ><i class="sticky-icon pi pi-shopping-cart"></i
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
            >Noah's Nook</span
          >
          <span class="heading-primary--sub merriweather-bold-italic"
            >Everything Awaits</span
          >
        </h1>
      </div>
    </header>
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
    <q-card class="home" style="margin-top: 3rem">
      <!-- ALL PRODUCTS CARD -->
      <q-card class="home__products-box">
        <!-- PRODUCT CAROUSEL -->
        <div>
          <q-carousel
            class="rounded-borders"
            v-model="slideProduct"
            transition-prev="jump-right"
            transition-next="jump-left"
            swipeable
            animated
            prev-icon="arrow_left"
            next-icon="arrow_right"
            arrows
            control-color="warning"
            style="
              margin: 0 auto;
              text-align: center;
              height: 75vh;
              border-radius: 15px;
            "
          >
            <!-- PRODUCT SLIDES -->
            <q-carousel-slide
              v-for="item in state.allProducts"
              :key="item.id"
              :name="item.productName"
              class="home__products-box--carousel column no-wrap shadow-3"
            >
              <div
                class="heading-tertiary2 merriweather-bold text-left"
                style="
                  margin-left: -2.5rem;
                  padding-top: 0.2rem;
                  padding-bottom: 1.5rem;
                "
              >
                ALL PRODUCTS
              </div>
              <div class="card2__side card__side--front">
                <img
                  class="card2__picture"
                  :src="require(`../assets/img/${item.graphicName}`)"
                />
                <h4 class="card2__heading merriweather-light">
                  <div class="card2__heading-span card__heading-span--5">
                    {{ item.productName }}
                  </div>
                </h4>
                <div class="card2__details merriweather-regular">
                  <ul>
                    <li>{{ item.memory }}</li>
                    <li>{{ item.processor }}</li>
                    <li>{{ item.graphics }}</li>
                    <li>{{ item.storage }}</li>
                    <li class="text-warning">${{ item.msrp }}</li>
                  </ul>
                </div>
                <div class="home__products-box--button heading-tertiary-small">
                  <q-btn
                    style="border-radius: 15px; padding: 0.4rem 1rem"
                    @click="addToCart(item.id)"
                    label="Add to Cart"
                    color="primary"
                    class="merriweather-bold-italic button-text button-text--white"
                  />
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <!-- CAROUSEL -->
      </q-card>
    </q-card>

    <q-card class="home" style="border-radius: 15px">
      <!-- GRAPHICS CARD CARD -->
      <q-card class="home__graphics-box">
        <div class="heading-tertiary merriweather-bold">GRAPHICS CARDS</div>
        <div class="row roww">
          <q-card-section class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--12">&nbsp;</div>
                <h4 class="card__heading merriweather-light">
                  <div class="card__heading-span card__heading-span--2">
                    TUF GeForce RTX 4090 OC
                  </div>
                </h4>
                <div class="card__details merriweather-regular">
                  <ul>
                    <li>ASUS</li>
                    <li>24 GB</li>
                    <li class="text-warning">$1709.99</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-2">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p
                      class="merriweather-bold-italic"
                      style="font-size: 1.1rem; font-weight: 900"
                    >
                      Memory
                    </p>
                    <p class="merriweather-regular card__item-description">
                      16GB GDDR6X
                    </p>
                    <p
                      class="merriweather-bold-italic"
                      style="font-size: 1.1rem; font-weight: 900"
                    >
                      Processor
                    </p>
                    <p class="merriweather-regular card__item-description">
                      Processor: NVIDIA Ada Lovelace
                    </p>
                    <p
                      class="merriweather-bold-italic"
                      style="font-size: 1.1rem; font-weight: 900"
                    >
                      Graphics
                    </p>
                    <p class="merriweather-regular card__item-description">
                      NVIDIA® GeForce RTX™ 4080
                    </p>
                    <p
                      class="merriweather-bold-italic"
                      style="font-size: 1.1rem; font-weight: 900"
                    >
                      Boost
                    </p>
                    <p class="merriweather-regular card__item-description">
                      2625 MHz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--13">&nbsp;</div>
                <h4 class="card__heading merriweather-light">
                  <div class="card__heading-span card__heading-span--2">
                    GeForce RTX 4070 Ti
                  </div>
                </h4>
                <div class="card__details merriweather-regular">
                  <ul>
                    <li>ZOTAC</li>
                    <li>12 GB</li>
                    <li class="text-warning">$819.99</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-2">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p
                      class="merriweather-bold-italic"
                      style="font-size: 1.1rem; font-weight: 900"
                    >
                      Memory
                    </p>
                    <p class="merriweather-regular card__item-description">
                      12GB GDDR6X
                    </p>
                    <p
                      class="merriweather-bold-italic"
                      style="font-size: 1.1rem; font-weight: 900"
                    >
                      Processor
                    </p>
                    <p class="merriweather-regular card__item-description">
                      Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace
                      arch, and full ray tracing.
                    </p>
                    <p
                      class="merriweather-bold-italic"
                      style="font-size: 1.1rem; font-weight: 900"
                    >
                      Graphics
                    </p>
                    <p class="merriweather-regular card__item-description">
                      3 x DisplayPort 1.4a, 1 x HDMI 2.1a, DirectX 12 Ultimate,
                      Vulkan RT API, Vulkan 1.3, OpenGL 4.6
                    </p>
                    <p
                      class="merriweather-bold-italic"
                      style="font-size: 1.1rem; font-weight: 900"
                    >
                      Boost
                    </p>
                    <p class="merriweather-regular card__item-description">
                      Boost Clock 2625 MHz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--14">&nbsp;</div>
                <h4 class="card__heading merriweather-light">
                  <div class="card__heading-span card__heading-span--2">
                    MSI GeForce RTX 4070 Ti
                  </div>
                </h4>
                <div class="card__details merriweather-regular">
                  <ul>
                    <li>MSI</li>
                    <li>12 GB</li>
                    <li class="text-warning">$699.99</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-2">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__back-title merriweather-bold-italic">
                      Memory
                    </p>
                    <p class="merriweather-regular card__item-description">
                      12GB GDDR6X DLSS 3
                    </p>

                    <p class="card__back-title merriweather-bold-italic">
                      Processor
                    </p>
                    <p class="merriweather-regular card__item-description">
                      NVIDIA® GeForce RTX™ 4070
                    </p>

                    <p class="card__back-title merriweather-bold-italic">
                      Graphics
                    </p>
                    <p class="merriweather-regular card__item-description">
                      Maximum Resolution: 7680 x 4320
                    </p>

                    <p class="card__back-title merriweather-bold-italic">
                      Display
                    </p>
                    <p class="merriweather-regular card__item-description">
                      Output: DisplayPort x 3 (v1.4a) / HDMI 2.1 x 1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </div>
        <div class="home__graphics-box--button heading-tertiary-small">
          <a
            href="#allgraphics"
            class="button-text button-text--white merriweather-bold-italic"
            >VIEW ALL &rarr;</a
          >
        </div>
      </q-card>
    </q-card>

    <q-card class="home" style="border-radius: 15px">
      <!-- LAPTOPS CARD -->
      <q-card class="home__laptops-box">
        <div class="heading-tertiary merriweather-bold">LAPTOPS</div>
        <div class="row roww">
          <q-card-section class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--10">&nbsp;</div>
                <h4 class="card__heading">
                  <div
                    class="card__heading-span card__heading-span--5 merriweather-light"
                  >
                    Acer Nitro 17 Gaming
                  </div>
                </h4>
                <div class="card__details merriweather-regular">
                  <ul>
                    <li>Acer</li>
                    <li>17.3-inch QHD Display</li>
                    <li class="text-warning">$1999.99</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__back-title merriweather-bold-italic">
                      Memory
                    </p>
                    <p class="merriweather-regular card__item-description">
                      16GB DDR5 Memory, 512GB PCIe Gen 4 SSD --(1 - PCIe M.2
                      Slot Available) & microSD Card Reader
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Processor
                    </p>
                    <p class="merriweather-regular card__item-description">
                      AMD Ryzen 5 7535HS Hexa-Core Processor
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Graphics
                    </p>
                    <p class="merriweather-regular card__item-description">
                      Overclockable NVIDIA GeForce RTX 4050 Laptop GPU with 6GB
                      of dedicated GDDR6 VRAM
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Storage
                    </p>
                    <p class="merriweather-regular card__item-description">
                      512 GB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--15">&nbsp;</div>
                <h4 class="card__heading">
                  <div
                    class="card__heading-span card__heading-span--5 merriweather-light"
                  >
                    X16 R1 Gaming
                  </div>
                </h4>
                <div class="card__details merriweather-regular">
                  <ul>
                    <li>Alienware</li>
                    <li>16-inch QHD+ 240Hz</li>
                    <li class="text-warning">$3299.99</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__back-title merriweather-bold-italic">
                      Memory
                    </p>
                    <p class="merriweather-regular card__item-description">
                      16 GB: LPDDR5, 6000 MT/s (onboard)
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Processor
                    </p>
                    <p class="merriweather-regular card__item-description">
                      13th Gen Intel® Core™ i9-13900HK (24 MB cache, 14 cores,
                      20 threads, up to 5.40 GHz Turbo)
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Graphics
                    </p>
                    <p class="merriweather-regular card__item-description">
                      NVIDIA® GeForce RTX™ 4080, 12 GB GDDR6
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Storage
                    </p>
                    <p class="merriweather-regular card__item-description">
                      1 TB RAID 0 (2 x 512 GB), M.2, PCIe NVMe, SSD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--9">&nbsp;</div>
                <h4 class="card__heading merriweather-light">
                  <div class="card__heading-span card__heading-span--5">
                    ROG Strix G16
                  </div>
                </h4>
                <div class="card__details merriweather-regular">
                  <ul>
                    <li>ASUS</li>
                    <li>16 GB</li>
                    <li class="text-warning">$1999.99</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__back-title merriweather-bold-italic">
                      Memory
                    </p>
                    <p class="merriweather-regular card__item-description">
                      Max Capacity: 32GB
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Processor
                    </p>
                    <p class="merriweather-regular card__item-description">
                      13th Gen Intel® Core™ i9-13980HX Processor 2.2 GHz (36M
                      Cache, up to 5.6 GHz, 24 cores: 8 P-cores and 16 E-cores)
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Graphics
                    </p>
                    <p class="merriweather-regular card__item-description">
                      NVIDIA® GeForce RTX™ 4070 Laptop GPU
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Storage
                    </p>
                    <p class="merriweather-regular card__item-description">
                      1TB PCIe® 4.0 NVMe™ M.2 SSD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </div>
        <div class="home__laptops-box--button heading-tertiary-small">
          <a
            href="#alllaptop"
            class="button-text button-text--white merriweather-bold-italic"
            >VIEW ALL &rarr;</a
          >
        </div>
      </q-card>
    </q-card>

    <q-card class="home" style="border-radius: 15px">
      <!-- DESKTOPS CARD -->
      <q-card class="home__desktops-box">
        <div class="heading-tertiary merriweather-bold">DESKTOPS</div>
        <div class="row roww">
          <q-card-section class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--1">&nbsp;</div>
                <h4 class="card__heading merriweather-light">
                  <div class="card__heading-span card__heading-span--3">
                    CyberpowerPC Xtreme VR
                  </div>
                </h4>
                <div class="card__details merriweather-regular">
                  <ul>
                    <li>CyberpowerPC</li>
                    <li>24 Cores</li>
                    <li class="text-warning">$2299.99</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-3">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__back-title merriweather-bold-italic">
                      Memory
                    </p>
                    <p class="merriweather-regular card__item-description">
                      8GB DDR4 memory
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Processor
                    </p>
                    <p class="merriweather-regular card__item-description">
                      Intel i5-6402P 2.80 GHz CPU
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Graphics
                    </p>
                    <p class="merriweather-regular card__item-description">
                      AMD Radeon RX 480 4GB GPU
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Storage
                    </p>
                    <p class="merriweather-regular card__item-description">
                      1TB 7200 RPM hard drive
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--3">&nbsp;</div>
                <h4 class="card__heading merriweather-regular-italic">
                  <div class="card__heading-span card__heading-span--3">
                    Skytech Chronos
                  </div>
                </h4>
                <div class="card__details merriweather-regular">
                  <ul>
                    <li>Skytech</li>
                    <li>AMD Ryzen 5 5600X</li>
                    <li class="text-warning">$1799.99</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-3">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__back-title merriweather-bold-italic">
                      Memory
                    </p>
                    <p class="merriweather-regular card__item-description">
                      32GB DDR5 5200MHZ RGB
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Processor
                    </p>
                    <p class="merriweather-regular card__item-description">
                      Intel i7 13700F
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Graphics
                    </p>
                    <p class="merriweather-regular card__item-description">
                      Nvidia RTX 4060 Ti 8GB
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Storage
                    </p>
                    <p class="merriweather-regular card__item-description">
                      1TB NVME
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--2">&nbsp;</div>
                <h4 class="card__heading merriweather-regular-italic">
                  <div class="card__heading-span card__heading-span--3">
                    OMEN 45L
                  </div>
                </h4>
                <div class="card__details merriweather-regular">
                  <ul>
                    <li>HP</li>
                    <li>DTS: X ULTRA TECH</li>
                    <li class="text-warning">$2199.99</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-3">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__back-title merriweather-bold-italic">
                      Memory
                    </p>
                    <p class="merriweather-regular card__item-description">
                      HyperX 64 GB DDR4-3467 MHz XMP RGB Heatsink RAM (4 x 16
                      GB)
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Processor
                    </p>
                    <p class="merriweather-regular card__item-description">
                      Intel® Core™ i9-14900K (up to 6.0 GHz with Intel® Turbo
                      Boost Technology, 36 MB L3 cache, 24 cores, 32 threads)
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Graphics
                    </p>
                    <p class="merriweather-regular card__item-description">
                      NVIDIA® GeForce RTX™ 4090 (24 GB GDDR6X dedicated)
                    </p>
                    <p class="card__back-title merriweather-bold-italic">
                      Storage
                    </p>
                    <p class="merriweather-regular card__item-description">
                      2TB WD Black PCIe® Gen4 TLC M.2 SSD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </div>
        <div class="home__desktops-box--button heading-tertiary-small">
          <a
            href="#allpc"
            class="button-text button-text--white merriweather-bold-italic"
            >VIEW ALL &rarr;</a
          >
        </div>
      </q-card>
    </q-card>
  </q-page>
</template>

<style>
@import "primeicons/primeicons.css";

.image-container1 {
  background-size: cover;
  height: 3rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background-image: linear-gradient(to right bottom, #0fa3b1, #dd5e57);
}
</style>

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
      loadProducts();
      loadCategoryLists();
    });

    let state = reactive({
      status: "",
      dialogStatus: "",
      categories: [],
      allProducts: [],
      categoryGraphicsID: 0,
      categoryLaptopID: "",
      categoryPCID: "",
      allGraphicsCards: [],
      allLaptops: [],
      allDesktops: [],
      pcImages: [],
      laptopImages: [],
      graphicsImages: [],
      selectedItem: {},
      firstPcName: "",
      firstLaptopName: "",
      firstGraphicName: "",
      qty: 0,
      cart: [],
      sessionStorage,
      selectedProduct: {},
      loadedCount: 0,
      itemCount: 0,
    });

    const loadProducts = async () => {
      try {
        state.status = "Loading Products...";
        const payload = await fetcher("Product");

        if (payload.error === undefined) {
          state.allProducts = payload;
          state.status = `Loaded ${state.allProducts.length} Products`;
        } else {
          state.status = payload.error;
        }
      } catch (err) {
        console.log(err);
        state.status = `Error has Occured: ${err.message}`;
      }
    };

    const loadCategoryLists = async () => {
      try {
        const payload = await fetcher("Category");
        state.categories = payload;

        state.categoryGraphicsID = 1;
        state.categoryLaptopID = 2;
        state.categoryPCID = 3;

        state.allGraphicsCards = await fetcher(
          `Category/${state.categoryGraphicsID}`
        );
        state.allLaptops = await fetcher(`Category/${state.categoryLaptopID}`);
        state.allDesktops = await fetcher(`Category/${state.categoryPCID}`);

        state.firstPcName = state.allDesktops[0].productName;
        state.firstGraphicName = state.allGraphicsCards[0].productName;
        state.firstLaptopName = state.allLaptops[0].productName;
        for (let i = 0; i < state.allDesktops.length; i++) {
          state.pcImages.push(state.allDesktops[i].graphicName);
        }

        for (let i = 0; i < state.allLaptops.length; i++) {
          state.laptopImages.push(
            "graphicName",
            state.allLaptops[i].graphicName
          );
        }

        for (let i = 0; i < state.allGraphicsCards.length; i++) {
          state.graphicsImages.push(state.allGraphicsCards[i].graphicName);
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

    function GoToTop() {
      window.scrollTo(0, 0);
    }

    const viewCart = async () => {
      router.push("cart");
    };

    const viewProducts = async () => {
      router.push("allproducts");
    };

    const addToCart = (prodid) => {
      state.selectedItem = state.allProducts.find(
        (product) => product.id === prodid
      );
      state.qty = 1;
      if (sessionStorage.getItem("cart")) {
        state.cart = JSON.parse(sessionStorage.getItem("cart"));
      }

      let index = -1;
      if (state.cart.length > 0) {
        index = state.cart.findIndex(
          // is the item already in the cart
          (item) => item.id === state.selectedItem.id
        );
      }

      if (state.qty > 0) {
        index === -1 // add
          ? state.cart.push({
              id: state.selectedItem.id,
              qty: state.qty,
              item: state.selectedItem,
            })
          : (state.cart[index] = {
              //replace
              id: state.selectedItem.id,
              qty: state.qty,
              item: state.selectedItem,
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

    return {
      state,
      viewProducts,
      loadCart,
      GoToTop,
      viewCart,
      addToCart,
      slideProduct: ref("TUF GeForce RTX 4090 OC"),
      slidePC: ref("CyberpowerPC Xtreme VR"),
      slideLaptop: ref("Acer Nitro 17 Gaming"),
      slideGraphics: ref("TUF GeForce RTX 4090 OC"),
      panel: ref("Acer Nitro 17 Gaming"),
    };
  },
};
</script>
