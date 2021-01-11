<template>
  <article>
    <!-- ======================== -->
    <!-- Just Copy The Code Below -->
    <section class="main-card">
      <div class="card-content"
      >
        <transition name="flip">
          <div :key="flipped"
               v-on:click="toggleCard()"
               class="relative z-10">
            <div v-if="!flipped" class="content-left">
              <g-image class="mini-img lookAnimateImg"
                       :alt="looks[lookNr].node.image_caption"
                       :src="looks[lookNr].node.image"
              ></g-image>
              <svg class="absolute top-0 ml-2 mt-2 shadow-lg" aria-hidden="true" focusable="false" width=".8em"
                   :class="isHovering? 'animate-pulse': ''"
                   height="1.1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1056">
                <path
                    d="M1023 959l-84-504q-5-49-44-84t-88-35h-71v-85q0-48-16.5-91.5t-46-75.5t-71-50.5T513 15q-64 0-115.5 32T317 133t-29 118v85h-77q-16 0-32 4.5t-30 12t-26 18.5t-21 24t-15 28t-8 30L2 958q-5 40 15 62q19 21 54 21h873q23 0 38-7t24-17q20-23 17-58zM352 251q0-72 45.5-122T513 79q35 0 65 13.5t50.5 37t32 55T672 251v85H352v-85zm595 725l-872 1q-12 0-10-11l77-504q2-12 8-23.5t15.5-20T187 405t24-5h77v73q-7 5-13 10.5T265 496t-6.5 15.5T256 528q0 27 18.5 45.5T320 592t45.5-18.5T384 528q0-36-32-55v-73h320v73q-32 19-32 55q0 27 18.5 45.5T704 592t45.5-18.5T768 528q0-36-32-55v-73h71q6 0 12 1.5t12 4t11.5 6t10 7.5t8.5 9t7 11t5 12t3 13l83 503q1 4-2 6.5t-10 2.5z"
                    fill="gray"/>
              </svg>
            </div>
            <vue-glide
                v-model="active"
                v-if="flipped"
                class="content-left-revers grid grid-cols-1 grid-rows-1 grid-flow-col gap-1"
                :per-view="1"
            >
              <vue-glide-slide class="col-span-2 relative">
                <figure>
                  <g-image
                      :src="looks[lookNr].node.cloth[0].items.original['src']"
                      class=""
                  ></g-image>
                  <span
                      @click.stop="toggleItemInfo"
                      class="absolute top-0 font-bold w-12 h-12 rounded-full
                                flex justify-center items-center z-20 shadow-lg"
                  >i</span>
                  <transition name="flip">
                    <figcaption
                        v-if="itemInfo"
                        class="itemInfo shadow-lg absolute w-full bg-white top-0"
                    >
                      <ul class="flex justify-between h-32 flex-col">
                        <li class="text-center text-3xl font-bold">{{
                            looks[lookNr].node.cloth[0].items.original['mark']
                          }}
                        </li>
                        <li class="flex justify-between text-left mx-3 mb-2">
                          <span>{{ looks[lookNr].node.cloth[0].items.original['price'] }}</span>
                          <span>{{ looks[lookNr].node.cloth[0].items.original['ref'] }}</span>
                        </li>
                      </ul>
                    </figcaption>
                  </transition>
                </figure>
              </vue-glide-slide>
              <vue-glide-slide class="col-span-2 relative">
                <figure>
                  <g-image
                      :src="looks[lookNr].node.cloth[0].items.options[0]['src']"
                      class="col-span-2 z-10"
                  ></g-image>
                  <span
                      @click.stop="toggleItemInfo"
                      class="absolute top-0 font-bold w-12 h-12 rounded-full
                                flex justify-center items-center z-20 shadow-lg"
                  >i</span>
                  <transition name="flip">
                    <figcaption
                        v-if="itemInfo"
                        class="itemInfo shadow-lg absolute w-full bg-white top-0"
                    >
                      <ul class="flex justify-between h-32 flex-col">
                        <li class="text-center text-3xl font-bold">{{
                            looks[lookNr].node.cloth[0].items.options[0]['mark']
                          }}
                        </li>
                        <li class="flex justify-between text-left mx-3 mb-2">
                          <span>{{ looks[lookNr].node.cloth[0].items.options[0]['price'] }}</span>
                          <span>{{ looks[lookNr].node.cloth[0].items.options[0]['ref'] }}</span>
                        </li>
                      </ul>
                    </figcaption>
                  </transition>
                </figure>
              </vue-glide-slide>
              <vue-glide-slide class="col-span-2 relative">
                <figure>
                  <g-image
                      :src="looks[lookNr].node.cloth[0].items.options[0]['src']"
                      class="col-span-2"
                  ></g-image>
                  <span
                      @click.stop="toggleItemInfo"
                      class="absolute top-0 font-bold w-12 h-12 rounded-full
                                flex justify-center items-center z-20 shadow-lg"
                  >i</span>
                  <transition name="flip">
                    <figcaption
                        v-if="itemInfo"
                        class="itemInfo shadow-lg absolute w-full bg-white top-0"
                    >
                      <ul class="flex justify-between h-32 flex-col">
                        <li class="text-center text-3xl font-bold">{{
                            looks[lookNr].node.cloth[0].items.options[1]['mark']
                          }}
                        </li>
                        <li class="flex justify-between text-left mx-3 mb-2">
                          <span>{{ looks[lookNr].node.cloth[0].items.options[1]['price'] }}</span>
                          <span>{{ looks[lookNr].node.cloth[0].items.options[1]['ref'] }}</span>
                        </li>
                      </ul>
                    </figcaption>
                  </transition>
                </figure>
              </vue-glide-slide>
            </vue-glide>
          </div>
        </transition>
        <div class="content-right">
          <h2 class="lookAnimateText">{{ looks[lookNr].node.title }}</h2>
          <p class="lookAnimateText">{{ looks[lookNr].node.excerpt }}</p>
          <div class="mini-imgs">
            <picture v-for="(look, index) in looks" :key="index" @click="setLook(index)">
              <g-image v-if="look.node.image"
                       :alt="look.node.image_caption"
                       :src="look.node.image"
                       class="mini-img"
                       :class="lookNr === index? 'bg-gray-100 shadow-2xl transform -translate-y-4' : ''"
              ></g-image>
            </picture>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import gsap from "gsap";

export default {
  metaInfo: {
    title: "indexLooks",
  },
  data() {
    return {
      itemInfo: false,
      flipped: false,
      lookNr: 0,
      isHovering: false,
      active: 0,
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
      this.lookNr = value
      gsap.fromTo('.lookAnimateImg', {opacity: 0, x: 200}, {opacity: 1, x: 0, duration: 1.5});
      gsap.fromTo('.lookAnimateText', {opacity: 0, x: -200}, {opacity: 1, x: 0, duration: 1.5});
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
      return this.$page.allLooks.edges
    }
  },
  watch: {

    active: {
      handler() {
        this.itemInfo = false
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }

  }
};
</script>

<page-query>
query {

  allLooks(limit: 3) {

    edges {
      node {
        title
        path
        excerpt
        image(width:780)
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
/*TRANSITION CSS*/
.flip-enter-active {
  transition: all 0.4s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter, .flip-leave {
  transform: rotateY(180deg);
  opacity: 0;

}

/*TRANSITION CSS*/

/* ------------- */
/* Basic Setting */
/* ------------- */

article {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 640px;
  background-color: #FAD9C0;
}

h2 {
  margin-top: 20px;
  font-size: clamp(1rem, 10vw, 2rem);
  font-weight: 700;
  line-height: 1;
}

p {
  margin-top: 20px;
  font-size: 1em;
  color: #7B8591;
}

::selection {
  color: #fff;
  background-color: #C0F3FA;
}

/* ======================== */
/* Just Copy The Code Below */

/* ------------- */
/* Content Style */
/* ------------- */

.main-card {
  position: relative;
  width: 770px;
  height: 470px;
  margin: 20px;
  border-radius: 10px;
  font-family: 'neuzeit-grotesk', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1em;
  line-height: 1.5;
  color: #303336;
  background-color: #fff;
  box-shadow: 0 40px 40px -20px #8fc7d544;
}

.main-card .card-content {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 50px;
}

.main-card .content-left {
  position: relative;
  width: 300px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f6f6f6;
}

.main-card .content-left-revers {
  position: relative;
  width: 300px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
}

.main-card .content-left img {
  width: inherit;
  height: inherit;
  object-fit: contain;
  object-position: center;
}

.main-card .content-left-revers img {
  width: inherit;
  height: inherit;
  object-fit: contain;
  object-position: center;
}

.main-card .content-right {
  position: relative;
  width: calc(100% - 300px);
  height: 100%;
  padding-left: 35px;
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
  font-size: .75em;
  font-weight: 700;
  letter-spacing: 2px;
}

.main-card .mini-imgs {
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  height: 105px;
  width: 100%;
}

.main-card .mini-imgs img {
  width: 105px;
  height: 105px;
  border-radius: 10px;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
  transition: 300ms;
}

.main-card .mini-imgs img:hover {
  opacity: .75;
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
    margin: 80px 20px;
  }

  .main-card .card-content {
    flex-direction: column;
  }

  .main-card .content-left {
    width: 100%;
    height: 50vh;
  }
  .main-card .content-left-revers {
    width: 100%;
    height: 50vh;
  }

  .main-card .content-right {
    width: 100%;
    height: auto;
    padding: 175px 0 0;
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
    margin: 120px 20px;
  }

  .main-card .card-content {
    padding: 25px;
  }

  .main-card .content-right {
    width: 100%;
    height: auto;
    padding: 115px 0 0;
  }

  .main-card .mini-imgs {
    margin-top: 20px;
  }

  .main-card .mini-imgs img {
    width: 60px;
    height: 80px;
  }

}

/* Just Copy The Code Above */
/* ======================== */

</style>
