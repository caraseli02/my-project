<template>
  <div>
    <a class="visually-hidden" href="#main">Skip to content</a>

    <div
      id="wrapper"
      class="wrapper md:pb-0 flex flex-col relative min-h-screen"
    >
      <HeaderPartial class="absolute" />

      <main
        v-if="window.width < 450"
        id="main"
        class="main inner flex flex-1 flex-col py-0"
      >
        <slot />
      </main>
      <div v-else class="w-screen h-screen onlyMobile">
        <p class="absolute top-0 left-0 mt-32 text-3xl w-full flex items-center justify-center">
          We apologize for the inconveniences.<br> We currently are working to
          improve ours web.<br> For now its only support mobile devices
        </p>
      </div>

      <FooterPartial />
    </div>

    <ClientOnly>
      <ResponsiveNav />
    </ClientOnly>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from "~/layouts/partials/Header.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";
import ResponsiveNav from "~/layouts/partials/ResponsiveNav.vue";

export default {
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  components: {
    HeaderPartial,
    FooterPartial,
    ResponsiveNav,
  },
  created() {
    if (process.isClient) {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<style>
* {
  font-family: "Playfair Display", serif;
}
.glass-light,
.glass-dark {
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  z-index: 2;
  overflow: hidden;
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
}
.glass-dark {
  border: 2px solid rgba(72, 71, 71, 0.2);
  background: rgba(63, 63, 63, 0.4);
}

.glass-ds {
  background: rgba(225, 196, 174, 0.625);
}

/* //ICONS */
.svg-icon {
  margin-top: 0.5em;
  width: 1.7em;
  height: 1.7em;
  position: absolute;
  right: 5px;
  top: 30%;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #080f18;
}

.svg-icon circle {
  fill: #080f18;
  stroke-width: 1;
}

/*TRANSITION CSS*/
.flip-enter-active {
  transition: all 0.4s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter,
.flip-leave {
  transform: rotateY(180deg);
  opacity: 0;
}
/* //ICONS */
.onlyMobile {
  background-image: url("../assets/icons/logoNegro@2x.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
