<template>
  <Layout>
    <blog-looks/>
  </Layout>
</template>

<script>
import Look from "../components/looks/Look";
import FlipCard from "../components/looks/FlipCard";
import BlogLooks from '../components/looks/blogLooks.vue';

export default {
  components: {FlipCard, BlogLooks},
  metaInfo: {
    title: "Looks",
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

  allLooks {

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
.pinteresGrid {
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

