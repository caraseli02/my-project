<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1 w-screen bg-gray-900">
      <div class="post-header md:mb-20 relative img">
        <div
          class="absolute bottom-0   mb-8 w-full rounded-none glass-dark p-1 text-sm md:text-base text-gray-200 flex justify-center items-center">
          <p class="author">{{ $page.blog.author.name }}</p>
          <p class="px-2">—</p>
          <time :datetime="$page.blog.datetime">{{ $page.blog.humanTime }}</time>
          <p class="px-2">—</p>
          <p class="category">
            Posted in
            <g-link class="text-gray-100" :to="$page.blog.category.path">{{ $page.blog.category.title }}</g-link>
          </p>
        </div>
        <figure class="md:mt-20 text-gray-200">
          <g-image :alt="$page.blog.image_caption" :src="$page.blog.image" />
          <figcaption class="text-center text-sm italic text-gray-200 mt-4">{{ $page.blog.image_caption }}</figcaption>
        </figure>
      </div>

      <div class=" text-white md:px-16 text">

        <p class="text-gray-100"> {{$page.blog.excerpt}}</p>

        <div v-html="$page.blog.content"></div>

        <ul class="flex pt-8 border-t border-gray-100">
          <li class="mr-2" v-for="tag in $page.blog.tags" :key="tag.id">
            <g-link :to="tag.path"
              class="inline-block border border-pink-300 px-4 py-2 text-pink-500 text-xs font-semibold rounded hover:text-white hover:bg-pink-500 hover:border-pink-500">
              {{ tag.title}}</g-link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
</template>


<page-query>
  query($id: ID!) {
  blog(id: $id) {
  title
  path
  image(width:1200)
  image_caption
  excerpt
  content
  humanTime : created(format:"Do MMMM YYYY")
  datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
  category {
  title
  path
  }
  author {
  name
  }
  tags {
  id
  title
  path
  }
  }



  }
</page-query>

<script>
  import { gsap, ScrollTrigger } from "gsap/all";
  gsap.registerPlugin(ScrollTrigger);

  export default {
    metaInfo() {
      return {
        title: this.$page.blog.title
      };
    },
    mounted() {

    }
  };
</script>