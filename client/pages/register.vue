<template>
  <div id="body" class="align-items-center">
    <div class="container">
      <div class="row justify-content-lg-end justify-content-md-center">
        <form
          class="col-md-8 col-12 col-lg-5 card card-body shadow-lg rounded p-5"
          autocomplete="off"
        >
          <div class="text-center col-md-12 col-12 col-lg-12">
            <div class="row justify-content-center">
              <div class="col-md-5 col-lg-5 col-5">
                <img :src="app_logo" alt class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="first_name" class="col-md-3 col-form-label">First name</label>
            <div class="col-md-9">
              <input type="text" name="first_name" id="first_name" class="form-control" />
              <Error v-for="(item, index) in errors.first_name" :error="item" :key="index" />
            </div>
          </div>
          <div class="form-group row">
            <label for="last_name" class="col-md-3 col-form-label">Last name</label>
            <div class="col-md-9">
              <input type="text" name="last_name" id="last_name" class="form-control" />
              <Error v-for="(item, index) in errors.last_name" :error="item" :key="index" />
            </div>
          </div>
          <div class="form-group row">
            <label for="mobile" class="col-md-3 col-form-label">Mobile</label>
            <div class="col-md-9">
              <input type="text" name="mobile" id="mobile" class="form-control" />
              <Error v-for="(item, index) in errors.mobile" :error="item" :key="index" />
            </div>
          </div>
          <div class="form-group row">
            <label for="email" class="col-md-3 col-form-label">Email</label>
            <div class="col-md-9">
              <input type="email" name="email" id="email" class="form-control" />
              <Error v-for="(item, index) in errors.email" :error="item" :key="index" />
            </div>
          </div>
          <div class="form-group row">
            <label for="password" class="col-md-3 col-form-label">Password</label>
            <div class="col-md-9">
              <input type="password" name="password" id="password" class="form-control" />
              <Error v-for="(item, index) in errors.password" :error="item" :key="index" />
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
  mounted() {},
  data() {
    return {
      errors: {},
    };
  },
  computed: {
    user() {
      return this.$store.state.login.user;
    },
    app_logo() {
      return this.$store.state.public.app_logo;
    },
  },
  methods: {},
};
</script>
<style  scoped>
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