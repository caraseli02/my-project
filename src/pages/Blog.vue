<template>
  <Layout>
    <vue-glide v-model="activeSlide" :options="options" class="">
      <vue-glide-slide class="child w-screen h-screen" v-for="entry in $page.allBlog.edges" :key="entry.node.id">
        <div class="article-card bg-white overflow-hidden flex-1 relative">
          <g-link class="featured-image-link block relative overflow-hidden" :to="entry.node.path">
            <ul class="absolute top-0 left-0 flex mt-16 p-2 z-10">
              <li class="mr-2">
                <span class="inline-block bg-pink-500 px-4 py-2 text-white text-xs font-bold rounded">{{
                  entry.node.category.title }}</span>
              </li>
            </ul>
            <figure class="h-screen overflow-y-scroll">
              <g-image class="" :alt="entry.node.image_caption" :src="entry.node.image" />
            </figure>
          </g-link>
          <div
            class="p-2 z-20 absolute w-full mx-auto bottom-0 h-64 flex flex-col justify-between items-center rounded-none text-center">
            <h2 class="text-5xl mt-2">
              <g-link class="block text-white italic hover:text-pink-500" :to="entry.node.path">{{ entry.node.title }}
              </g-link>
            </h2>
            <div class="self-start text-sm text-gray-100 md:flex mb-4">
              <p class="author">{{ entry.node.author.name }}</p>
              <p class="hidden md:block px-2">—</p>
              <time :datetime="entry.node.datetime">{{
                entry.node.humanTime
                }}</time>
            </div>
          </div>
        </div>
      </vue-glide-slide>
    </vue-glide>
  </Layout>
</template>

<script>
  // or all tools are exported from the "all" file (excluding bonus plugins):
  import { gsap, ScrollTrigger } from "gsap/all";
  import { Glide, GlideSlide } from "vue-glide-js";
  //gsap.registerPlugin(ScrollTrigger);
  export default {
    props: {},
    metaInfo: {
      title: "Blog",
    },
    data() {
      return {
        activeSlide: 0,
        options: {
          autoplay: 5000,
          bound: true,
          breakpoints: {
            450: {
              perView: 1,
            },
            1024: {
              perView: 2,
            },
          },
        },
      };
    },
    mounted() {

    },
  };
</script>

<page-query>
  query {

  allBlog {

  edges {
  node {
  title
  path
  image(width:780)
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
  .container {
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory;
  }

  .child {
    scroll-snap-align: start;
  }
</style>