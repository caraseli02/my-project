<template>
  <article class="z-10 ">
    <div class="z-10">
      <section
          v-for="item in items" :key="item.name"
          v-show="showItems === item.name"
          class="z-20 pantone absolute left-0 max-w-sm items bg-white
                  grid gap-2 grid-cols-2
                  px-1 transition duration-500">
        <!-- Column -->
        <div class=" h-full col-span-2 flex justify-center">
          <div class="my-1 px-1">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg bg-white">
              <a
                  class="no-underline hover:underline text-black"
                  :href="item.items.original['href']"
                  target="_blank"
              >
                <div class="bg-auto bg-no-repeat bg-center h-32
                            flex-none bg-cover
                            rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                     :style="`background-image: url(${item.items.original['src']})`" title="DS">
                  <span class="text-xl font-bold text-left">{{ item.items.original['mark'] }}</span>
                </div>
              </a>
              <header class="flex items-center  justify-between leading-tight p-2">
                <h4 class="text-sm">
                  <a class="no-underline hover:underline text-gray-900 font-light" :href="item.items.original['href']">
                    {{ item.items.original['caption'] }}
                  </a>
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

        <!-- Column -->
        <div
            v-for="option in item.items.options"
            :key="option.id"
            class="my-1 px-1">

          <!-- Article -->
          <article class="overflow-hidden rounded-lg shadow-lg">

            <a :href="option.href" target="_blank">
              <div class="bg-auto bg-no-repeat bg-center h-32 w-32 mx-auto
                          flex-none bg-cover
                          rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                   :style="`background-image: url(${option.src})`" title="DS">
                <span class="text-md mt-1 text-left">{{ option.mark }}</span>
              </div>
            </a>

            <header class="flex items-center justify-between leading-tight p-2">
              <!--<h1 class="text-lg">
                <a class="no-underline hover:underline text-black" :href="option.href">
                  {{ option.mark }}
                </a>
              </h1>-->
              <p class="text-grey-darker text-sm">
                {{ option.price }}
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
      </section>
      <ul class="z-30 setSize flex h-full bg-gray-100 w-full md:max-w-sm justify-around items-center setRadius">
        <li
            v-for="(item, index) in items.slice(clothStart, clothEnd)"
            :key="index"
            class="clothBtn"
        >
          <span
              class="h-full p-4 transition rounded duration-500 ease-in absolute top-0 mt-64"
              @click="getItemName(item.name)"
          >
             <span class="relative inline-flex rounded-full h-4 w-4 bg-white shadow-inner"></span>
          </span>
        </li>
        <!--<span @click="clothMove" class="text-black clothBtn">>></span>-->
      </ul>
    </div>
  </article>
</template>

<script>
import gsap from "gsap";

export default {
  name: "LooksItems",
  data() {
    return {
      name: null,
      clothStart: 1,
      clothEnd: 3,
    }
  },
  props: {
    items: {
      type: Array
    },
    showItems: {
      type: String,
      default: null
    }
  },
  methods: {
    getItemName(value) {
      this.$emit('update:showItems', value)
      gsap.fromTo('.pantone', {opacity: 0, y: 200}, {opacity: 1, y: 0, duration: 2});
    },
    clothMove() {
      if (this.clothNumber < this.clothEnd + 1) {
        this.clothStart = 0
        this.clothEnd = 2
        gsap.fromTo('.clothBtn', {opacity: 0, x: -20}, {opacity: 1, x: 0, duration: 1});
      } else {
        this.clothStart++
        this.clothEnd++
        gsap.fromTo('.clothBtn', {opacity: 0, x: 20}, {opacity: 1, x: 0, duration: 1});
      }
    }
  },
  computed: {
    clothNumber() {
      return this.items.length;
    }
  },
}
</script>

<style scoped lang="scss">
.pantone {
  background: linear-gradient(180deg, rgba(225, 196, 174, 1) 0%, rgba(251, 251, 251, 1) 100%);

  @media screen and (min-width: 435px) {

  }
}

.setSize {
  height: 8.1vh;
}

.items {
  width: 100vw;
  border-radius: 25px 25px 0 0;
  padding: 10px;
  bottom: 8vh;
  z-index: 10;

  @media screen and (min-width: 435px) {
    max-height: 75vh;
    max-width: 50vw;
  }

  @media screen and (min-width: 935px) {
    max-height: 80%;
    max-width: 100%;
  }

}

.setBg {
  background-color: #fefefe;
}

.setRadius {
  border-radius: 25px 25px 0 0;
}

</style>
