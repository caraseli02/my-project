<template>
  <div class="relative">
    <!--<div class="absolute top-0 left-0 w-64 h-64 bg-ds z-10"></div>
    <div class="absolute bottom-0 right-0 w-64 h-64 bg-ds z-10"></div>-->
    <ul class="mt-6 flex justify-center ">
      <li
          @mouseover="isHovering = true"
          @mouseleave="isHovering = false"
          v-on:click="toggleCard()"
          class="z-20 "
      >
        <transition name="flip">
          <div :key="flipped" class="relative">
            <div v-if="!flipped" class="bg-gray-100 relative max-w-lg my-auto rounded overflow-hidden shadow-lg">
              <svg class="absolute ml-2 mt-2" aria-hidden="true" focusable="false" width=".8em"
                   :class="isHovering? 'animate-pulse': ''"
                   height="1.1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1056">
                <path
                    d="M1023 959l-84-504q-5-49-44-84t-88-35h-71v-85q0-48-16.5-91.5t-46-75.5t-71-50.5T513 15q-64 0-115.5 32T317 133t-29 118v85h-77q-16 0-32 4.5t-30 12t-26 18.5t-21 24t-15 28t-8 30L2 958q-5 40 15 62q19 21 54 21h873q23 0 38-7t24-17q20-23 17-58zM352 251q0-72 45.5-122T513 79q35 0 65 13.5t50.5 37t32 55T672 251v85H352v-85zm595 725l-872 1q-12 0-10-11l77-504q2-12 8-23.5t15.5-20T187 405t24-5h77v73q-7 5-13 10.5T265 496t-6.5 15.5T256 528q0 27 18.5 45.5T320 592t45.5-18.5T384 528q0-36-32-55v-73h320v73q-32 19-32 55q0 27 18.5 45.5T704 592t45.5-18.5T768 528q0-36-32-55v-73h71q6 0 12 1.5t12 4t11.5 6t10 7.5t8.5 9t7 11t5 12t3 13l83 503q1 4-2 6.5t-10 2.5z"
                    fill="gray"/>
              </svg>
              <g-image class="mx-auto"
                       :alt="look.node.image_caption"
                       :src="look.node.image"></g-image>
              <section class="bg-white rounded-t-xl">
                <div class="px-6 py-4 w-screen">
                  <g-link :to="look.node.path" class="font-bold text-xl flex justify-between mb-2">{{ look.node.title }}
                  </g-link>
                </div>
              </section>
            </div>
            <div v-if="flipped" class="w-screen rounded overflow-hidden shadow-lg ">
              <vue-glide v-model="active" class="" :per-view=1>
                <vue-glide-slide class="bg-gray-100 grid gap-2 grid-cols-2 glideSize "
                                 v-for="(item, index) in look.node.cloth" :key="index">
                  <!-- Column Original item-->
                  <div class="w-full h-full relative col-span-2 flex justify-center">
                    <span class="absolute text-xs left-0 top-0 mt-2 mr-2">X</span>
                    <span class="absolute text-xs right-0 top-0 mt-2 mr-2">{{ (active + 1) + '/' + SlideLength }}</span>
                    <div class="my-1 px-1 w-2/3">
                      <!-- Article -->
                      <article class="overflow-hidden bg-transparent">
                        <a
                            class="no-underline hover:underline text-black"
                            :href="item.items.original['href']"
                            target="_blank">
                          <div class="bg-auto bg-no-repeat bg-center h-40
                        flex-none bg-cover
                        rounded-t  text-center overflow-hidden"
                               :style="`background-image: url(${item.items.original['src']})`" title="DS">
                          </div>
                        </a>
                        <header class="flex flex-col items-center justify-between leading-tight p-2">
                          <h4 class="text-sm flex justify-between w-full">
                            <a class="no-underline hover:underline text-gray-900 font-light"
                               :href="item.items.original['href']">
                              {{ item.items.original['caption'] }}
                            </a>
                            <span class="text-xl font-bold text-left">{{ item.items.original['mark'] }}</span>
                          </h4>
                          <p class="text-grey-darker text-sm">
                            {{ item.items.original['price'] }}
                          </p>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2">
                          <p class="text-sm text-gray-700 mb-2">ref: {{ item.items.original['ref'] }}</p>

                          <!--<a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                            <span class="hidden">Like</span>
                            <i class="fa fa-heart"></i>
                          </a>-->
                        </footer>

                      </article>
                      <!-- END Article -->

                    </div>
                  </div>
                  <!-- END Column -->

                  <!-- Column Options item-->
                  <div
                      v-for="(option , index) in item.items.options"
                      :key="index"
                      class="my-1 px-1 w-full">

                    <!-- Article -->
                    <article class="overflow-hidden bg-transparent">

                      <a :href="option.href" target="_blank">
                        <div class="bg-auto bg-no-repeat bg-center h-24
                                    flex-none bg-cover
                                    rounded-t text-center overflow-hidden"
                             :style="`background-image: url(${option.src})`" title="DS">
                        </div>
                      </a>

                      <header class="flex items-center justify-between leading-tight p-2">
                        <!--<h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" :href="option.href">
                            {{ option.mark }}
                          </a>
                        </h1>-->
                        <p class="text-grey-darker text-sm flex justify-between w-full">
                          {{ option.price }}<span class="text-md mt-1 text-left">{{ option.mark }}</span>
                        </p>
                      </header>
                      <footer class="flex items-center justify-between leading-none p-2">
                        <p class="text-xs text-gray-700 mb-2">ref: {{ option.ref }}</p>
                        <!--<a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                        </a>-->
                      </footer>
                    </article>
                    <!-- END Article -->

                  </div>
                  <!-- END Column -->
                </vue-glide-slide>
                <!--<template slot="control">
                  <button data-glide-dir="<">←</button>
                  <button data-glide-dir=">">→</button>
                </template>-->
              </vue-glide>
            </div>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "FlipCard",
  data() {
    return {
      isHovering: false,
      flipped: false,
      active: null
    }
  },
  props: {
    look: {
      type: Object,
      required: true
    },
  },
  methods: {
    toggleCard: function () {
      this.flipped = !this.flipped;
    },
  },
  computed: {
    SlideLength() {
      return this.look.node.cloth.length
    }
  },

}
</script>

<style scoped>

ul {
  padding-left: 0;
  display: flex;
  flex-flow: row wrap;
}

li {
  list-style-type: none;
  padding: 10px 10px;
  transition: all 0.3s ease;
}


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

.bg-ds2:before {
  content: '';
}

.glideSize {
  min-height: calc(50vh - 64px);
}
</style>
