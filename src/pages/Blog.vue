<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <div class="">
        <div class="posts flex flex-wrap">
          <div class="w-full md:w-1/3" v-for="entry in $page.allBlog.edges" :key="entry.node.id" :class="entry.node.id">
            <article class="article-card bg-white overflow-hidden flex-1 relative">
              <g-link class="featured-image-link block relative overflow-hidden" :to="entry.node.path">
                <ul class="absolute top-0 left-0 flex mt-16 p-2 z-10">
                  <li class="mr-2">
                    <span class="inline-block bg-pink-500 px-4 py-2 text-white text-xs font-bold rounded">{{
                      entry.node.category.title }}</span>
                  </li>
                </ul>
                <figure>
                  <g-image class="block loaded" :alt="entry.node.image_caption" :src="entry.node.image" />
                </figure>
              </g-link>
              <div
                class="p-2 z-20 absolute w-full mx-auto bottom-0 h-64 flex flex-col justify-between items-center  rounded-none text-center">
                <h2 class="text-5xl mt-2">
                  <g-link class="block text-white italic hover:text-pink-500" :to="entry.node.path">{{ entry.node.title
                    }}</g-link>
                </h2>
                <div class="self-start text-sm text-gray-100 md:flex mb-4">
                  <p class="author">{{ entry.node.author.name }}</p>
                  <p class="hidden md:block px-2">—</p>
                  <time :datetime="entry.node.datetime">{{ entry.node.humanTime }}</time>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
  
  
  export default {
  props: {
  },
    metaInfo: {
      title: "Blog"
    },
    mounted() {
      this.gsap.registerPlugin(scrollTrigger);
      ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause"
      });
      this.gsap.to(entry.node.id , {
        scrollTrigger: ".orange",
        duration: 2,
        rotation: 360
      });

    }
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