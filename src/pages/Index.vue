<template>
  <Layout class="bgTablet bg-ds">
    <!--Landing Page-->
    <Landing />
  </Layout>
</template>

<script>
import LooksItems from "../components/navigation/LooksItems";
import gsap from "gsap";
import Landing from "../components/Landing";
import CubicTop from "../components/buttons/CubicTop";
import FlipCard from "../components/looks/FlipCard";
import IndexLooks from "../components/looks/indexLooks";

export default {
  components: { IndexLooks, CubicTop, Landing, LooksItems, FlipCard },
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      lookNr: 0,
      isHovering: false,
      showItems: "",
      showShop: false,
      active: 0,
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
    if (process.isClient) {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    setLook(value) {
      this.lookNr = value;
      gsap.fromTo(
        ".lookAnimateImg",
        { opacity: 0, x: 200 },
        { opacity: 1, x: 0, duration: 1.5 }
      );
      gsap.fromTo(
        ".lookAnimateText",
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, duration: 1.5 }
      );
    },
  },
  computed: {
    SlideLength() {
      return this.$page.allIndex.edges.length;
    },
    looks() {
      return this.$page.allLooks.edges;
    },
  },
  watch: {
    isHovering: {
      handler(value) {},
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
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
  background-color: #fad9c0;
}

h2 {
  margin-top: 20px;
  font-size: 3em;
  font-weight: 700;
  line-height: 1;
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
  width: 770px;
  height: 470px;
  margin: 20px;
  border-radius: 10px;
  font-family: "neuzeit-grotesk", sans-serif;
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

.main-card .content-left img {
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
  font-size: 0.75em;
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
    margin: 80px 20px;
  }

  .main-card .card-content {
    flex-direction: column;
  }

  .main-card .content-left {
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

.items {
  display: none;
}

.clipCircle {
  clip-path: polygon(10% 1%, 100% 0%, 89% 100%, 0% 100%);
}

.controlForm {
  display: none;
  @media screen and (min-width: 935px) {
    display: block;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    color: #e1c4ae;
    position: absolute;
    bottom: 15%;
    right: 20%;
  }
}

.bgTablet {
  @media screen and (min-width: 435px) {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      172deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  }
}

.glideSize {
  min-height: calc(90vh - 62px);

  @media screen and (min-width: 435px) {
    min-height: 65vh;
  }
  @media screen and (min-width: 935px) {
    min-height: 75vh;
  }
}

.figureSize {
  max-height: 75vh;
  padding: 0;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 435px) {
    max-height: 35vh;
    max-width: 30vw;
    padding: 0;
  }
  @media screen and (min-width: 935px) {
    max-height: 35vh;
    max-width: 20vw;
    padding: 0;
  }
}

.setRadius {
  border-radius: 100px 0 0 0;

  @media screen and (min-width: 435px) {
    border-radius: 0;
    top: 30%;
    right: 0;
    z-index: 49;
  }

  @media screen and (min-width: 935px) {
    border-radius: 0;
    top: 22%;
    left: 35%;
    z-index: 49;
  }
}
</style>
