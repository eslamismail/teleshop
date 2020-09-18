<template>
  <div id="body">
    <div class="container">
      <div class="row justify-content-lg-end justify-content-md-center">
        <form
          class="col-md-8 col-12 col-lg-5 card card-body shadow-lg rounded"
          autocomplete="off"
          @submit.prevent="signup"
        >
          <div class="text-center col-md-12 col-12 col-lg-12">
            <div class="row justify-content-center">
              <div class="col-md-5 col-lg-5 col-5">
                <img :src="app_logo" alt class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="first_name" class="col-md-4 col-form-label">First name</label>
            <div class="col-md-8">
              <input type="text" name="first_name" id="first_name" class="form-control" />
              <Error v-for="(item, index) in errors.first_name" :error="item" :key="index" />
            </div>
          </div>
          <div class="form-group row">
            <label for="last_name" class="col-md-4 col-form-label">Last name</label>
            <div class="col-md-8">
              <input type="text" name="last_name" id="last_name" class="form-control" />
              <Error v-for="(item, index) in errors.last_name" :error="item" :key="index" />
            </div>
          </div>
          <div class="form-group row">
            <label for="mobile" class="col-md-4 col-form-label">Mobile</label>
            <div class="col-md-8">
              <input type="text" name="mobile" id="mobile" class="form-control" />
              <Error v-for="(item, index) in errors.mobile" :error="item" :key="index" />
            </div>
          </div>
          <div class="form-group row">
            <label for="type" class="col-md-4 col-form-label">Type</label>
            <div class="col-md-8">
              <div class="custom-control custom-radio">
                <input type="radio" id="user" value="user" name="type" class="custom-control-input" />
                <label class="custom-control-label" for="user">User</label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="vendor"
                  name="type"
                  value="vendor"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="vendor">Vendor</label>
              </div>
              <Error v-for="(item, index) in errors.type" :error="item" :key="index" />
            </div>
          </div>
          <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label">Email</label>
            <div class="col-md-8">
              <input type="email" name="email" id="email" class="form-control" />
              <Error v-for="(item, index) in errors.email" :error="item" :key="index" />
            </div>
          </div>
          <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label">Password</label>
            <div class="col-md-8">
              <input type="password" name="password" id="password" class="form-control" />
              <Error v-for="(item, index) in errors.password" :error="item" :key="index" />
            </div>
          </div>
          <div class="form-group row">
            <label for="password_confirmation" class="col-md-4 col-form-label">Password confirmation</label>
            <div class="col-md-8">
              <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                class="form-control"
              />
              <Error
                v-for="(item, index) in errors.password_confirmation"
                :error="item"
                :key="index"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-12 justify-content-between">
              <div class="mt-2">
                <button class="btn btn-warning text-brand">register</button>
              </div>
              <div class="mt-2">
                <small>
                  <nuxt-link class="brand-link" to="/login">Already has account</nuxt-link>
                </small>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Error from "../components/public/error";

export default {
  components: {
    Error,
  },
  head() {
    return {
      title: "Teleshop register",
    };
  },
  data() {
    return {
      errors: {},
    };
  },
  computed: {
    app_logo() {
      return this.$store.state.public.app_logo;
    },
  },
  methods: {
    signup: async function () {
      let form = new FormData(event.target);
      try {
        let response = await axios.post("/signup", form);
        this.errors = {};
        this.$store.commit("login/login", response.data);
        const { message } = response.data;
        this.$notify({
          group: "foo",
          text: message,
          type: "success",
        });
      } catch (error) {
        if (!error.response) {
          this.errors = {};

          this.$notify({
            group: "foo",
            text: `No internet access`,
            type: "error",
          });
        } else if (error.response.status == 422) {
          this.errors = error.response.data.errors;
          let { message } = error.response.data;
          this.$notify({
            group: "foo",
            text: message,
            type: "error",
          });
        } else if (error.response.status == 401) {
          this.errors = {};
          let { message } = error.response.data;
          this.$notify({
            group: "foo",
            text: message,
            type: "error",
          });
          $nuxt.$store.commit("login/logout", {});
        } else if (error.response.status == 400) {
          this.errors = {};
          let { message } = error.response.data;
          this.$notify({
            group: "foo",
            text: message,
            type: "error",
          });
        } else {
          let { statusText } = error.response.data;
          this.errors = {};
          this.$notify({
            group: "foo",
            text: statusText,
            type: "error",
          });
        }
      }
    },
  },
};
</script>
<style  scoped>
body {
  margin: 0;
  padding: 0;
}
html {
  margin: 0;
  padding: 0;
}
#body {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: auto;
  background: #f5cb04;
  height: 100%;
  display: flex;
  margin: 0;
  padding: 0;
}

.brand-link {
  color: #838071;
}

label {
  color: #838071;
  text-transform: capitalize;
}

.form-control {
  color: #838071;
}

.card {
  border-radius: 20px !important;
}

.text-brand {
  font-weight: bold;
  color: #fefefe;
  text-transform: uppercase;
}
</style>
