<template>
  <q-page class="login pageBackground2">
    <q-card class="login__container">
      <div class="login__iconContainer">
        <q-avatar class="login__avatar" rounded>
          <img src="../assets/img/FirstGalaxyRender.png" alt="Galaxy" />
        </q-avatar>
      </div>
      <div class="merriweather-regular login__heading heading-secondary-large">
        Login
      </div>
      <q-form
        ref="myForm"
        class="q-gutter-md form"
        greedy
        @submit="login"
        @reset="resetFields"
      >
        <div class="form__group u-center-text merriweather-regular">
          <q-label class="form__label">Enter Email</q-label>
          <q-input
            class="form__input"
            outlined
            placeholder="Enter email"
            id="email"
            v-model="state.email"
            :rules="[isRequired, isValidEmail]"
          />

          <q-label class="form__label">Enter Password</q-label>
          <q-input
            class="form__input"
            outlined
            placeholder="Enter password"
            id="password"
            type="password"
            v-model="state.password"
            :rules="[isRequired]"
            autocomplete="on"
          />
          <div class="merriweather-regular-italic login__btn-group">
            <q-btn
              class="btnsmall btnsmall--positive"
              label="Login"
              type="submit"
            />
            <q-btn
              class="btnsmall btnsmall--negative"
              label="Reset"
              type="reset"
            />
          </div>
        </div>
      </q-form>
    </q-card>
  </q-page>

  <router-view :key="1"></router-view>
</template>

<script>
import { reactive } from "vue";
import { poster } from "../util/apiutil";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    let state = reactive({
      status: "",
      email: "js@here.com",
      password: "helloworld",
    });

    const isValidEmail = (val) => {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid Email";
    };

    const isRequired = (val) => {
      return !!val || "field is required";
    };

    const login = async () => {
      state.status = "logging into server";

      let customerHelper = {
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        password: state.password,
      };

      try {
        await sessionStorage.removeItem("customer");

        let payload = await poster("login", customerHelper); // in util

        if (payload.token.indexOf("failed") !== -1) {
          state.status = payload.token;
        } else {
          state.status = "logged in";
          await sessionStorage.setItem("customer", JSON.stringify(payload));
          route.query.nextUrl
            ? router.push(route.query.nextUrl)
            : router.push({ path: "/" });
        }
      } catch (err) {
        state.status = err.message;
      }
    };

    const resetFields = () => {
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.password = "";
      state.status = "";
    };

    return {
      state,
      login,
      isValidEmail,
      isRequired,
      resetFields,
    };
  },
};
</script>
