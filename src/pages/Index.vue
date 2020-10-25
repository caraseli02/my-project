<template>
  <Layout class="bgTablet">
    <!--Landing Page-->
    <Landing />
    <!--Visual Separatos-->
    <CubicTop class="block sm:hidden" />
    <!--Slider-->
    <h2 class="text-center text-lg transform -translate-y-12 block sm:hidden">
      Looks Gallery
    </h2>
    <article
      id="looks"
      class="bg-ds2 sm:bg-transparent sm:max-w-sm lg:max-w-3xl xl:px-20 setRadius relative sm:absolute flex justify-center items-start"
    >
      <vue-glide
        v-model="active"
        class="setHeight relative"
        :per-view="window.width < 1200 ? 1 : 2"
        :bound="true"
        :to-slide-by-click="true"
      >
        <vue-glide-slide
          class="relative glideSize flex flex-col justify-between sm:max-w-sm"
          :class="
            active === index ? 'opacity-100' : 'opacity-50 scale-50 sm:max-w-xs'
          "
          v-for="(entry, index) in $page.allIndex.edges"
          :key="index"
        >
          <figure
            @click="showItems = null"
            class="figureSize z-10"
            :class="active === index ? 'figureSize' : 'w-48'"
          >
            <g-image
              :alt="entry.node.image_caption"
              :src="entry.node.image"
              fit="cover"
              quality="90"
              class="inst redondo cover instSize"
            />
            <span
              :class="active === index ? 'absolute' : 'hidden'"
              class="z-30 text-xs left-0 top-0 mb-2 ml-4"
            >
              {{ active + 1 + "/" + SlideLength }}
            </span>
          </figure>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
          </div>
          <LooksItems
            :class="active === index ? 'opacity-100' : 'hidden'"
            :showItems.sync="showItems"
            :items="entry.node.cloth"
          ></LooksItems>
        </vue-glide-slide>

        <template slot="control">
          <button
            :class="active + 1 === SlideLength ? 'controlForm' : 'hidden'"
            data-glide-dir="<"
          >
            ←
          </button>
          <button class="hidden" data-glide-dir=">">→</button>
        </template>
      </vue-glide>
    </article>
    <!--End Slider-->
  </Layout>
</template>

<script>
import LooksItems from "../components/navigation/LooksItems";
import gsap from "gsap";
import Landing from "../components/Landing";
import CubicTop from "../components/buttons/CubicTop";

export default {
  components: { CubicTop, Landing, LooksItems },
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      showItems: "",
      active: 0,
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
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
  computed: {
    SlideLength() {
      return this.$page.allIndex.edges.length;
    },
  },
};
</script>

<page-query>
query {
  allIndex {
    edges {
      node {
        title
        path
        image(width:780)
        cloth{
          name
          items{
            original{
              src
              caption
              href
              alt
              mark
              ref
              price
            }
            options{
              src
              href
              alt
              ref
              mark
              price
            }
          }
        }
        humanTime : created(format:"Do MMMM YYYY")
        datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
        author {
          name
        }
        category {
          title
        }
      }
    }
  }
}
</page-query>

<style scoped lang="scss">
.controlForm {
  display: none;
  @media screen and (min-width: 935px) {
    display: block;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    color: #e1c4ae;
    position: absolute;
    bottom: 15%;
    right: 20%;
  }
}

.bgTablet {
  @media screen and (min-width: 435px) {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      172deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  }
}

.glideSize {
  min-height: calc(90vh - 62px);

  @media screen and (min-width: 435px) {
    min-height: 65vh;
  }
  @media screen and (min-width: 935px) {
    min-height: 75vh;
  }
}

.figureSize {
  max-height: 85vh;
  padding: 2.5vw 5vw;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 435px) {
    max-height: 35vh;
    max-width: 30vw;
    padding: 0;
  }
  @media screen and (min-width: 935px) {
    max-height: 35vh;
    max-width: 20vw;
    padding: 0;
  }
}

.setRadius {
  border-radius: 100px 0 0 0;

  @media screen and (min-width: 435px) {
    border-radius: 0;
    top: 30%;
    right: 0;
    z-index: 49;
  }

  @media screen and (min-width: 935px) {
    border-radius: 0;
    top: 22%;
    left: 35%;
    z-index: 49;
  }
}
</style>
