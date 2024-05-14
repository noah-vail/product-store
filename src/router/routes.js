const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // home page
      {
        path: "/",
        name: "home",
        component: () => import("pages/HomePage.vue"),
      },
      // data utility
      {
        path: "/datautil",
        name: "datautil",
        component: () => import("components/DataUtil.vue"),
      },
      // Brands
      {
        path: "/brands",
        name: "brands",
        component: () => import("components/BrandList.vue"),
      },
      // Categories
      {
        path: "/categories",
        name: "categories",
        component: () => import("components/CategoryList.vue"),
      },
      // Cart
      {
        path: "/cart",
        name: "cart",
        component: () => import("src/components/CartDetails.vue"),
      },
      // Register
      {
        path: "/register",
        name: "register",
        component: () => import("components/RegisterCustomer.vue"),
      },
      // Login
      {
        path: "/login",
        name: "login",
        component: () => import("components/LoginCustomer.vue"),
      },
      // Logout
      {
        path: "/logout",
        name: "logout",
        component: () => import("components/LogoutCustomer.vue"),
      },
      // Order History
      {
        path: "/orderhistory",
        name: "orderhistory",
        component: () => import("components/OrderHistory.vue"),
      },
      // project details
      {
        path: "/projectdetails",
        name: "projectdetails",
        component: () => import("pages/ProjectDetails.vue"),
      },
      // all products
      {
        path: "/allproducts",
        name: "allproducts",
        component: () => import("components/AllProducts.vue"),
      },
      // all graphics
      {
        path: "/allgraphics",
        name: "allgraphics",
        component: () => import("components/AllGraphicsCards.vue"),
      },
      // all pc
      {
        path: "/allpc",
        name: "allpc",
        component: () => import("components/AllPC.vue"),
      },
      // all laptops
      {
        path: "/alllaptop",
        name: "alllaptop",
        component: () => import("components/AllLaptops.vue"),
      },
      {
        path: "/dummy",
        name: "dummy",
        component: () => import("pages/DummyPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
