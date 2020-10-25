<template>
  <article class="z-10 ">
    <div class="z-10">
      <section
          v-for="item in items" :key="item.name"
          v-show="showItems === item.name"
          class="z-20 pantone absolute left-0 max-w-sm items bg-white
                  grid gap-2 grid-cols-2
                  px-1 transition duration-500">
        <!--<section class="hidden z-20 rounded-lg col-span-2 flex">
          <a href="#" class="w-1/2 z-0 flex justify-center items-center">
            <g-image alt="Placeholder" class="block w-32 rounded my-4"
                     :src="item.items.original['src']"></g-image>
          </a>
          <div class="w-1/2 px-6 mt-4 flex flex-col justify-center">
            <h4 class="flex justify-between flex-wrap w-full font-bold text-lg mb-2">{{ item.items.original['mark'] }}
              <span
                  class="text-sm">{{ item.items.original['price'] }}</span></h4>
            <p class="text-xs text-gray-700 mb-2">{{ item.items.original['caption'] }}</p>
            <span class="mb-4">ref: {{ item.items.original['ref'] }}</span>
            <a
                class="btnN"
                :href="item.items.original['href']">
              Comprar
            </a>
          </div>
        </section>-->
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
        <!--<section
            v-for="(option , index) in item.items.options"
            :key="index"
            class="setNeo rounded hidden"
        >
          <a :href="option.href" class="z-0 flex justify-center items-center w-32 m-auto">
            <g-image alt="Placeholder" class="block w-auto mt-2 h-32 rounded-lg"
                     :src="option.src"></g-image>
          </a>
          <div class=" px-2 flex flex-col justify-around h-12">
            <h4 class="flex flex-wrap justify-between text-sm mb-1">{{ option.mark }} <span>{{ option.price }}</span>
            </h4>
            <span class="text-xs">{{ option.ref }}</span>
          </div>
        </section>-->
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
      <ul class="z-30 setSize flex h-full bg-black w-full md:max-w-sm justify-around items-center setRadius">
        <li
            v-for="(item, index) in items.slice(clothStart, clothEnd)"
            :key="index"
            class="clothBtn"
        >
          <span
              class="h-full px-2 pb-2 transition rounded duration-500 ease-in"
              :class="item.name === showItems? 'text-black bg-white' : 'bg-black text-white'"
              @click="getItemName(item.name)"
          >
            {{ item.name }}
          </span>
        </li>
        <span @click="clothMove" class="text-white clothBtn">>></span>
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
