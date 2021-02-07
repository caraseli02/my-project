<template>
  <Layout>
    <g-link
      to="/looks"
      class="mt-16 ml-2 text-2xl text-gray-900 absolute top-0 z-30 rounded-full px-2 glass-light round-full"
    >
      &#8592;
    </g-link>
    <article
      id=""
      class="relative setSize bg-gray-300 overflow-scroll flex flex-col justify-end items-center h-full md:items-start md:justify-center"
    >
      <!--Background Animation-->
      <section class="w-full absolute bottom-0 h-full overflow-hidden">
        <floating-bg />
      </section>
      <!--Background Animation-->
      <!--Image Section-->
      <figure
        class="img z-10 w-full flex flex-col justify-end items-end mx-auto absolute top-0 md:bottom-0 xl:justify-base xl:items-end"
        @click="itemNr = null"
      >
        <g-image
          class="z-10 h-full md:w-auto"
          :alt="$page.looks.image_caption"
          :src="$page.looks.image"
        />
        <figcaption
          class="text-lg text-center pt-3 font-bold absolute top-0 left-0 z-20 mx-auto w-full bg-gradient-to-b from-black to-transparent"
        >
          <h2 class="title mx-auto px-2 text-gray-200 font-bold w-2/3">
            {{ $page.looks.title }}
          </h2>
        </figcaption>
      </figure>
      <!--Image Section-->
      <!--Items Section-->
      <div
        id="grid"
        class="grid grid-cols-2 grid-rows-3 gap-0 h-full w-full rounded-lg overflow-y-scroll z-20
        md:w-2/5 md:my-10
        lg:w-1/2 lg:mt-16 lg:mb-0
        xl:w-2/3
        "
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="items w-32 lg:w-full lg:ml-10 flex justify-start items-center flex-wrap"
          :class="`item${index}`"
        >
          <figure class="bg-transparent lg:flex" v-if="item.items.original">
            <picture class="flex justify-center max-w-xs lg:max-w-lg z-10">
              <g-link
                class="z-10"
                type="_black"
                :to="item.items.original['href']"
              >
                <g-image
                  class="w-20 xl:w-40 h-full shadow-lg rounded-t-lg cover"
                  :src="item.items.original['src']"
                ></g-image>
              </g-link>
            </picture>
            <figcaption
              class="text-center flex flex-col justify-center p-2 w-32 text-base uppercase glass-light z-30"
            >
              {{ item.items.original["mark"] }}
              <span class="text-xs md:text-lg">{{
                item.items.original["ref"]
              }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
  </Layout>
</template>


<page-query>
  query($id: ID!) {
  looks(id: $id) {
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
  title
  path
  image(width:1050)
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
import FloatingBg from "../components/utils/floatingBg";
import PanelSplit from "../components/utils/panelSplit";
import gsap from "gsap";

export default {
  components: { PanelSplit, FloatingBg },
  metaInfo() {
    return {
      title: this.$page.looks.title,
    };
  },
  data() {
    return {
      active: 0,
      itemNr: null,
      options: {
        perView: 1,
      },
    };
  },
  computed: {
    items() {
      return this.$page.looks.cloth;
    },
    originalItem() {
      return this.$page.looks.cloth[this.itemNr].items.original;
    },
    optionsItems() {
      return this.$page.looks.cloth[this.itemNr].items.options;
    },
  },
  methods: {
    showItem(value) {
      if (this.itemNr === value) {
        this.itemNr = null;
        return;
      }
      this.itemNr = value;

      gsap.fromTo(
        ".animate",
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, duration: 1.5 }
      );
    },
  },
  mounted() {
    gsap.fromTo(
      ".title",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 20, ease: "back", duration: 1.5 }
    );
    gsap.fromTo(
      ".img",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, ease: "back", duration: 1.5 }
    );
    gsap.fromTo(
      ".items",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, ease: "back", duration: 2.5, delay: 1 }
    );
  },
};
</script>

<style scoped lang="scss">
.item0 {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  align-self: end;
  margin-bottom: 10px;
}
.item1 {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  align-self: end;
}
.item3 {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-self: end;
  margin-bottom: 5px;
}

.item2 {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  justify-self: end;
  align-self: end;
  margin-bottom: 10px;

  
}
.item4 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: end;
  align-self: end;
}

.setSize {
  width: 100%;
  height: 100vh;
}

.next {
  position: absolute;
  right: 10px;
  bottom: 0px;
  width: 3rem;
  height: 3rem;
  outline: none;
}

.setPosition {
  position: absolute;
  left: calc(12.5vw - 3rem);
  bottom: 0;
  width: 3rem;
  height: 3rem;
  outline: none;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  &:before {
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 55%;
    height: 20%;
    background-color: #e7eaed;
    border-radius: 20px;
  }

  /* Display this style when screen-width is lower than 992px */
  @media only screen and (min-width: 492px) {
    bottom: 20px;
  }
}

/*Grid Section*/
</style>