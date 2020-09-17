<template>
  <div class="container">
    <div class="row mt-5 pt-5 justify-content-center">
      <form
        class="col-md-6 col-12 col-lg-6 card card-body shadow-lg rounded"
        @submit.prevent="login()"
        autocomplete="off"
      >
        <div class="text-center col-md-12 col-12 col-lg-12">
          <h2>Login</h2>
        </div>
        <div class="form-group row">
          <label for="email" class="col-md-2 col-form-label">Email</label>
          <div class="col-md-10">
            <input type="email" name="email" id="email" class="form-control" />
            <Error v-for="(item, index) in errors.email" :error="item" :key="index" />
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-md-2 col-form-label">Password</label>
          <div class="col-md-10">
            <input type="password" name="password" id="password" class="form-control" />
            <Error v-for="(item, index) in errors.password" :error="item" :key="index" />
          </div>
        </div>
        <div class="form-group row">
          <div class="form-group form-check">
            <div class="col-md-12">
              <input type="checkbox" name="remember_me" class="form-check-input" id="remember_me" />
              <label class="form-check-label" for="remember_me">Remeber me</label>
              <Error v-for="(item, index) in errors.remember_me" :error="item" :key="index" />
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-md-12">
            <button class="btn btn-primary text-capitalize">login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Error from "../components/public/error";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  components: {
    Error,
  },
  head() {
    return {
      title: "Teleshop login",
    };
  },
  data() {
    return {
      errors: {
        email: [],
        password: [],
      },
    };
  },
  methods: {
    login: async function () {
      let form = new FormData(event.target);
      try {
        let response = await axios.post("/login", form);
        Cookie.set("token", response.data.access_token);
        window.location.href = "/";
        console.log(response);
      } catch (error) {
        if (!error.response) {
          alert("no internet");
          console.log(error);
        } else if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        } else if (error.response.status == 401) {
          alert(error.response.data.message);
        }
      }
    },
  },
};
</script>
