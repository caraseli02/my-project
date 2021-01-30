<template>
  <article>
    <!-- ======================== -->
    <!-- Just Copy The Code Below -->
    <section class="main-card">
      <g-link
        v-if="!flipped"
        :to="looks[lookNr].node.path"
        class="absolute z-20 transform rotate-90 -translate-x-32 translate-y-56 lg:rotate-0 lg:right-0 lg:translate-x-0 lg:translate-y-10"
      >
        <h2
          class="lookAnimateText p-2 pl-4 mr-4 border-none rounded-l-none glass-dark text-gray-300 max-w-xl"
        >
          {{ looks[lookNr].node.title }}
        </h2></g-link
      >
      <!-- <p class="lookAnimateText">{{ looks[lookNr].node.excerpt }}</p> -->
      <div class="card-content d-flex md:mt-10">
        <!-- <transition name="flip"> -->
        <div :key="flipped" class="relative z-10">
          <div v-if="!flipped" class="content-left xl:h-screen w-full">
            <!-- <g-image
              class="mini-img lookAnimateImg"
              :alt="looks[lookNr].node.image_caption"
              :src="looks[lookNr].node.image"
              v-on:click.self="toggleCard()"
            ></g-image> -->
            <g-link :to="looks[lookNr].node.path">
              <g-image
                class="mini-img lookAnimateImg"
                :alt="looks[lookNr].node.image_caption"
                :src="looks[lookNr].node.image"
              ></g-image
            ></g-link>
            <g-link
              :to="looks[lookNr].node.path"
              class="absolute bottom-0 right-0 mr-8 mb-32"
              ><svg
                class="text-lg animate-pulse shadow-lg bg-gray-100 p-1 rounded-lg"
                aria-hidden="true"
                focusable="false"
                width="1.5em"
                :class="isHovering ? 'animate-pulse' : ''"
                height="1.5em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1056"
              >
                <path
                  d="M1023 959l-84-504q-5-49-44-84t-88-35h-71v-85q0-48-16.5-91.5t-46-75.5t-71-50.5T513 15q-64 0-115.5 32T317 133t-29 118v85h-77q-16 0-32 4.5t-30 12t-26 18.5t-21 24t-15 28t-8 30L2 958q-5 40 15 62q19 21 54 21h873q23 0 38-7t24-17q20-23 17-58zM352 251q0-72 45.5-122T513 79q35 0 65 13.5t50.5 37t32 55T672 251v85H352v-85zm595 725l-872 1q-12 0-10-11l77-504q2-12 8-23.5t15.5-20T187 405t24-5h77v73q-7 5-13 10.5T265 496t-6.5 15.5T256 528q0 27 18.5 45.5T320 592t45.5-18.5T384 528q0-36-32-55v-73h320v73q-32 19-32 55q0 27 18.5 45.5T704 592t45.5-18.5T768 528q0-36-32-55v-73h71q6 0 12 1.5t12 4t11.5 6t10 7.5t8.5 9t7 11t5 12t3 13l83 503q1 4-2 6.5t-10 2.5z"
                  fill="gray"
                /></svg
            ></g-link>
            <span
              class="absolute bottom-0 right-0 mr-6 mb-40 text-5xl animate-pulse text-gray-300"
              >{{ ` 0${lookNr + 1}` }}</span
            >
          </div>
          <vue-glide
            v-model="active"
            v-if="flipped"
            class="content-left-revers grid grid-cols-1 grid-rows-1 grid-flow-col gap-1 z-10 mt-16"
            :per-view="1"
          >
            <vue-glide-slide class="col-span-2 relative">
              <figure>
                <!-- <g-image
                  :src="looks[lookNr].node.cloth[0].items.original['src']"
                  class="mx-auto"
                  v-on:click.self="toggleCard()"
                ></g-image> -->
                <g-image
                  :src="looks[lookNr].node.cloth[0].items.original['src']"
                  class="mx-auto"
                ></g-image>

                <figcaption class="itemInfo w-full">
                  <ul
                    class="flex justify-between px-4 pt-2 h-24 glass-light flex-col"
                  >
                    <li class="text-left text-3xl font-bold">
                      {{ looks[lookNr].node.cloth[0].items.original["mark"] }}
                    </li>
                    <li class="flex justify-between text-left mb-2">
                      <span>{{
                        looks[lookNr].node.cloth[0].items.original["caption"]
                      }}</span>
                      <span
                        >Ref:
                        {{
                          looks[lookNr].node.cloth[0].items.original["ref"]
                        }}</span
                      >
                    </li>
                  </ul>
                </figcaption>
              </figure>
            </vue-glide-slide>
            <vue-glide-slide class="col-span-2 relative">
              <figure>
                <!-- <g-image
                  v-on:click.self="toggleCard()"
                  :src="looks[lookNr].node.cloth[0].items.options[0]['src']"
                  class="col-span-2 z-10"
                ></g-image> -->
                <g-image
                  :src="looks[lookNr].node.cloth[0].items.options[0]['src']"
                  class="col-span-2 z-10"
                ></g-image>
                <figcaption class="itemInfo w-full">
                  <ul
                    class="flex justify-between px-4 pt-2 h-24 glass-light flex-col"
                  >
                    <li class="text-left text-3xl font-bold">
                      {{ looks[lookNr].node.cloth[0].items.options[0]["mark"] }}
                    </li>
                    <li class="flex justify-between text-left mb-2">
                      <span>{{
                        looks[lookNr].node.cloth[0].items.options[0]["caption"]
                      }}</span>
                      <span
                        >Ref:
                        {{
                          looks[lookNr].node.cloth[0].items.options[0]["ref"]
                        }}</span
                      >
                    </li>
                  </ul>
                </figcaption>
              </figure>
            </vue-glide-slide>
            <vue-glide-slide class="col-span-2 relative">
              <figure>
                <!-- <g-image
                  v-on:click.self="toggleCard()"
                  :src="looks[lookNr].node.cloth[0].items.options[0]['src']"
                  class="col-span-2"
                ></g-image> -->
                <g-image
                  :src="looks[lookNr].node.cloth[0].items.options[0]['src']"
                  class="col-span-2"
                ></g-image>
                <figcaption class="itemInfo w-full">
                  <ul
                    class="flex justify-between px-4 pt-2 h-24 glass-light flex-col"
                  >
                    <li class="text-left text-3xl font-bold">
                      {{ looks[lookNr].node.cloth[0].items.options[1]["mark"] }}
                    </li>
                    <li class="flex justify-between text-left mb-2">
                      <span>{{
                        looks[lookNr].node.cloth[0].items.options[1]["caption"]
                      }}</span>
                      <span
                        >Ref:
                        {{
                          looks[lookNr].node.cloth[0].items.options[1]["ref"]
                        }}</span
                      >
                    </li>
                  </ul>
                </figcaption>
              </figure>
            </vue-glide-slide>
            <template class="control" slot="control">
              <button
                class="setPosition transform translate-x-0 md:translate-y-6"
                :class="active === 0 ? 'animate-pulse' : ''"
                data-glide-dir="=0"
              ></button>
              <button
                class="setPosition transform translate-x-12 md:translate-y-6"
                :class="active === 1 ? 'animate-pulse' : ''"
                data-glide-dir="=1"
              ></button>
              <button
                class="setPosition transform translate-x-24 md:translate-y-6"
                :class="active === 2 ? 'animate-pulse' : ''"
                data-glide-dir="=2"
              ></button>
              <button class="next" data-glide-dir=">">&#10148;</button>
            </template>
          </vue-glide>
        </div>
        <!-- </transition> -->
        <div
          v-if="!flipped"
          class="content-right w-full -mb-10 md:mt-8 lg:w-2/4 lg:absolute lg:mb-64 lg:right-0"
        >
          <vue-glide v-model="activeSlide" :options="options" class="">
            <!-- <template slot="control">
              <button data-glide-dir="<">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
                  ></path>
                </svg>
              </button>
              <button data-glide-dir=">">
                <svg class="svg-icon glass-ds rounded-lg" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                  ></path>
                </svg>
              </button>
            </template> -->
            <vue-glide-slide v-for="(look, index) in looks" :key="index">
              <picture @click="setLook(index)">
                <g-image
                  v-if="look.node.image"
                  :alt="look.node.image_caption"
                  :src="look.node.image"
                  class="opacity-50 w-16 lg:w-40 mx-auto"
                  :class="lookNr === index ? 'opacity-100' : ''"
                ></g-image>
              </picture>
            </vue-glide-slide>
          </vue-glide>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import gsap from "gsap";

export default {
  metaInfo: {
    title: "blogLooks",
  },
  data() {
    return {
      options: {
        // autoplay: 5000,
        bound: true,
        breakpoints: {
          450: {
            perView: 4,
          },
          1024: {
            perView: 4,
          },
        },
      },
      itemInfo: false,
      flipped: false,
      lookNr: 0,
      isHovering: false,
      active: 0,
      activeSlide: 0,
    };
  },
  methods: {
    setLook(value) {
      if (this.flipped) {
        this.flipped = !this.flipped;
      }
      if (this.itemInfo) {
        this.itemInfo = !this.itemInfo;
      }
      this.lookNr = value;
      gsap.fromTo(
        ".lookAnimateImg",
        { opacity: 0, x: 200 },
        { opacity: 1, x: 0, duration: 1.5 }
      );
      gsap.fromTo(
        ".lookAnimateText",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1.5 }
      );
    },
    toggleCard: function () {
      this.flipped = !this.flipped;
      if (this.itemInfo) {
        this.itemInfo = !this.itemInfo;
      }
    },
    toggleItemInfo: function () {
      this.itemInfo = !this.itemInfo;
    },
  },
  computed: {
    looks() {
      return this.$page.allLooks.edges;
    },
    looksCount() {
      return this.$page.allLooks.edges.length;
    },
  },
  watch: {
    active: {
      handler() {
        this.itemInfo = false;
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
};
</script>

<page-query>
query {

  allLooks {
    edges {
      node {
        title
        path
        excerpt
        image(width:1080)
        humanTime : created(format:"Do MMMM YYYY")
        datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
        author {
          name
        }
        category {
          title
        }
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
      }
    }
  }
}
</page-query>

<style scoped lang="scss">
.next {
  position: absolute;
  right: 10px;
  top: 0px;
  width: 3rem;
  height: 3rem;
  outline: none;
}

.setPosition {
  position: absolute;
  left: calc(12.5vw - 3rem);
  top: 0;
  width: 3rem;
  height: 3rem;
  outline: none;

  &:before {
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 65%;
    height: 10%;
    background-color: #2f517b;
    border-radius: 20px;
  }

  /* Display this style when screen-width is lower than 992px */
  @media only screen and (min-width: 492px) {
    bottom: 20px;
  }
}

.iconPosition {
  position: absolute;
  top: 10px;
  left: 48%;
}

/*TRANSITION CSS*/

/* ------------- */
/* Basic Setting */
/* ------------- */

article {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 640px;
  background: linear-gradient(180deg, #e1c4ae 0%, #fcd896 46%, #fad9c0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

h2 {
  font-size: clamp(1rem, 8vw, 3rem);
  font-weight: 700;
  line-height: 1;
  margin-bottom: 10px;
}

p {
  margin-top: 20px;
  font-size: 1em;
  color: #7b8591;
}

::selection {
  color: #fff;
  background-color: #c0f3fa;
}

/* ======================== */
/* Just Copy The Code Below */

/* ------------- */
/* Content Style */
/* ------------- */

.main-card {
  position: relative;
  border-radius: 10px;
  font-weight: 300;
  font-style: normal;
  font-size: 1em;
  line-height: 1.5;
}

.main-card .card-content {
  display: flex;
  justify-content: space-between;
}

.main-card .content-left {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(240, 235, 235, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px 0px 0px 10px;
  width: 100%;
  height: 100vh;
}

.main-card .content-left-revers {
  position: relative;
  width: auto;
  height: 85vh;
  background: rgba(240, 235, 235, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px 0px 0px 10px;
  overflow: hidden;
}

// .main-card .content-left img {
//   width: inherit;
//   height: inherit;
//   object-fit: contain;
//   object-position: center;
// }

// .main-card .content-left-revers img {
//   width: inherit;
//   height: inherit;
//   object-fit: contain;
//   object-position: center;
// }

.main-card .content-right {
  position: absolute;
  bottom: 0;
  z-index: 20;
  background: rgba(240, 235, 235, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 0px 10px 10px 0px;
  margin-right: 30px;
  padding: 10px;
  order: -1;
}

.main-card .tag {
  position: relative;
  left: 100%;
  transform: translateX(-100%);
  width: fit-content;
  padding: 8px 25px;
  border-radius: 10px;
  background-color: #82adf3;
}

.main-card .tag h6 {
  color: #fff;
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 2px;
}

.main-card .mini-imgs {
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
}

.main-card .mini-imgs img {
  border-radius: 10px;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
  transition: 300ms;
}

.main-card .mini-imgs img:hover {
  opacity: 0.75;
}

.main-card .mini-imgs img:nth-child(2) {
  margin: 0 10px;
}

/* Display this style when screen-width is lower than 992px */
@media only screen and (max-width: 992px) {
  article {
    display: flex;
    justify-content: center;
    align-items: start;
    height: auto;
    min-height: 100vh;
  }

  .main-card {
    position: relative;
    width: 100%;
    height: auto;
  }

  .main-card .card-content {
    flex-direction: column;
  }

  .main-card .content-left {
    width: 100%;
    height: 95vh;
  }
  .main-card .content-left-revers {
    width: 100%;
    height: 90vh;
  }

  .main-card .content-right {
    order: 2;
  }

  .main-card .tag {
    left: 0;
    transform: translateX(0);
  }

  .main-card .mini-imgs {
    position: absolute;
    display: flex;
    top: 0;
    margin-top: 35px;
    height: 105px;
  }
}

/* Display this style when screen-width is lower than 500px */
@media only screen and (max-width: 500px) {
  .main-card {
  }

  .main-card .card-content {
  }

  .main-card .content-right {
  }

  .main-card .mini-imgs {
  }

  .main-card .mini-imgs img {
  }
}

/* Just Copy The Code Above */
/* ======================== */
</style>
