require("dotenv").config();
const { join } = require("path");
const { copySync, removeSync } = require("fs-extra");
export default {
  ssr: false,
  /*
   ** Headers of the page
   */

  srcDir: __dirname,

  env: {
    apiUrl: process.env.API_URL || process.env.APP_URL + "/api",
    baseURL: process.env.API_URL || process.env.APP_URL,
    appName: process.env.APP_NAME || "Laravel Nuxt",
    appLocale: process.env.APP_LOCALE || "en",
    githubAuth: !!process.env.GITHUB_CLIENT_ID,
    MIX_PUSHER_APP_KEY: process.env.PUSHER_APP_KEY
  },

  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.5.1.slim.min.js", body: true },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
        body: true
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
        body: true
      },
      {
        src: "https://js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
        async: "async"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~plugins/axios" },
    { src: "~/plugins/echo.js", ssr: false },
    { src: "~plugins/packages" }
  ],
  components: true,

  buildModules: [],
  /*
   ** Nuxt.js dev-modules
   */

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: "empty"
      };
    }
  },

  hooks: {
    generate: {
      done(generator) {
        // Copy dist files to public/_nuxt
        if (
          generator.nuxt.options.dev === false &&
          generator.nuxt.options.mode === "spa"
        ) {
          const publicDir = join(
            generator.nuxt.options.rootDir,
            "public",
            "_nuxt"
          );
          removeSync(publicDir);
          copySync(
            join(generator.nuxt.options.generate.dir, "_nuxt"),
            publicDir
          );
          copySync(
            join(generator.nuxt.options.generate.dir, "200.html"),
            join(publicDir, "index.html")
          );
          removeSync(generator.nuxt.options.generate.dir);
        }
      }
    }
  }
};
