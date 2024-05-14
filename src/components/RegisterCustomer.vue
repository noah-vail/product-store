<template>
  <q-page class="register pageBackground2">
    <q-card class="register__container">
      <div class="register__iconContainer">
        <q-avatar class="register__avatar" rounded>
          <img src="../assets/img/galaxy2.png" />
        </q-avatar>
      </div>
      <div
        class="merriweather-regular register__heading heading-secondary-large"
      >
        Register
      </div>
      <div>{{ state.status }}</div>
      <q-form
        ref="myForm"
        class="q-gutter-md form"
        greedy
        @submit="register"
        @reset="resetFields"
      >
        <div class="form__group u-center-text merriweather-regular">
          <q-input
            class="form__input"
            outlined
            placeholder="Enter first name"
            id="firstname"
            v-model="state.firstname"
            :rules="[isRequired]"
          />
          <q-input
            class="form__input"
            outlined
            placeholder="Enter last name"
            id="lastname"
            v-model="state.lastname"
            :rules="[isRequired]"
          />
          <q-input
            class="form__input"
            outlined
            placeholder="Enter email"
            id="email"
            v-model="state.email"
            :rules="[isRequired, isValidEmail]"
          />
          <q-input
            class="form__input"
            outlined
            plcaeholder="Enter password"
            id="password"
            type="password"
            v-model="state.password"
            :rules="[isRequired]"
            autocomplete="on"
          />
          <div class="merriweather-regular-italic register__btn-group">
            <q-btn
              class="btnsmall btnsmall--positive"
              label="Register"
              type="submit"
            />
            <q-btn
              class="btnsmall btnsmall--negative"
              label="Cancel"
              type="reset"
            />
          </div>
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { reactive } from "vue";
import { poster } from "../util/apiutil";

export default {
  setup() {
    let state = reactive({
      status: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    });

    const isValidEmail = (val) => {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid Email";
    };

    const isRequired = (val) => {
      return !!val || "field is required";
    };

    const register = async () => {
      state.status = "registering with server";

      let customerHelper = {
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        password: state.password,
      };

      try {
        let payload = await poster("register", customerHelper);
        state.status = payload.token;
        resetFields();
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
      register,
      isValidEmail,
      isRequired,
      resetFields,
    };
  },
};
</script>
