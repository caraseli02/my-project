<template>
  <Layout>
    <section class="pinteresGrid">
    <FlipCard
        class=""
        v-for="entry in $page.allBlog.edges"
        :key="entry.node.id"
        :look="entry"
    />
    </section>
    <!--<Look v-for="entry in $page.allBlog.edges"
          :key="entry.node.id"
          :look="entry"
    />-->
    <!--<div  v-for="entry in $page.allBlog.edges"
          :key="entry.node.id"
          id="make-3D-space">
      <div
          id="product-card"
          @mouseover="isHovering = true"
          @mouseleave="isHovering = false"
          :class="{'foo-hover': isHovering}"
      >
        <div id="product-front">
          <div class="shadow"></div>
          <g-image class="w-64 m-auto"
                   :alt="entry.node.image_caption"
                   :src="entry.node.image"/>
          <div class="image_overlay"></div>
          <div id="view_details">View details</div>
          <div class="stats">
            <div class="stats-container w-full h-64 px-4">
              <span class="product_price">${{entry.node.lookPrice}}</span>
              <span class="product_name">{{entry.node.title}}</span>
              <p>{{entry.node.excerpt}}</p>
              <div class="product-options">
                <strong>SIZES</strong>
                <span>XS, S, M, L, XL, XXL</span>
                <strong>COLORS</strong>
                <div class="colors">
                  <div class="c-blue"><span></span></div>
                  <div class="c-red"><span></span></div>
                  <div class="c-white"><span></span></div>
                  <div class="c-green"><span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="product-back">
          <div class="shadow"></div>
          <div id="carousel">
            <ul>
              <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png" alt=""/></li>
              <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png" alt=""/></li>
              <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png" alt=""/></li>
            </ul>
            <div class="arrows-perspective">
              <div class="carouselPrev">
                <div class="y"></div>
                <div class="x"></div>
              </div>
              <div class="carouselNext">
                <div class="y"></div>
                <div class="x"></div>
              </div>
            </div>
          </div>
          <div id="flip-back">
            <div id="cy"></div>
            <div id="cx"></div>
          </div>
        </div>
      </div>
    </div>-->
    <!--<section id="container-centre" class="column centre flex-1">
      <h1 class="page-title text-3xl md:text-center md:text-5xl mb-16 lg:mb-24 lg:text-6xl">Blog</h1>
      <div class="px-2">
        <div class="posts flex flex-wrap -mx-2">
          <div
            class="w-full md:w-1/3 mb-8 px-2"
            v-for="entry in $page.allBlog.edges"
            :key="entry.node.id"
          >
            <article class="article-card bg-white overflow-hidden rounded-lg shadow-lg flex-1">
              <g-link
                class="featured-image-link block relative overflow-hidden"
                :to="entry.node.path"
              >
                <ul class="absolute bottom-0 left-0 flex p-8 z-10">
                  <li class="mr-2">
                    <span
                      class="inline-block bg-pink-500 px-4 py-2 text-white text-xs font-bold rounded"
                    >{{ entry.node.category.title }}</span>
                  </li>
                </ul>
                <figure>
                  <g-image
                    class="block loaded"
                    :alt="entry.node.image_caption"
                    :src="entry.node.image"
                  />
                </figure>
              </g-link>
              <div class="p-8">
                <h2 class="text-2xl mb-6">
                  <g-link
                    class="block text-purple-900 hover:text-pink-500"
                    :to="entry.node.path"
                  >{{ entry.node.title }}</g-link>
                </h2>
                <div class="text-sm text-gray-600 md:flex mb-4">
                  &lt;!&ndash;<p class="author">{{ entry.node.author.name }}</p>&ndash;&gt;
                  <p class="hidden md:block px-2">—</p>
                  <time :datetime="entry.node.datetime">{{ entry.node.humanTime }}</time>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>-->
  </Layout>
</template>

<script>
import Look from "../components/looks/Look";
import FlipCard from "../components/looks/FlipCard";

export default {
  components: {FlipCard, Look},
  metaInfo: {
    title: "Blog",
  },
  data() {
    return {
      isHovering: false
    }
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
.pinteresGrid{
  /* fit in up to 5 columns of 180px wide tiles, 20px gutters: 5*180 + 4*20: */
  max-width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  /* fit as many columns as possible, 180px wide each: */
  grid-template-columns: repeat(auto-fill, 350px);
  /* each row is 20px high -- we always span 2+ */
  grid-auto-rows: minmax(20px, auto);
  justify-content: center;
}
</style>

