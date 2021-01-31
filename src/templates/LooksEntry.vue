<template>
  <Layout>
    <g-link to="/looks" class="mt-16 ml-2 text-2xl text-gray-200 absolute top-0 z-30 rounded-full px-2 md:hidden">
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
        class="img z-10 w-full flex flex-col justify-end items-end mx-auto absolute top-0 md:bottom-0"
        @click="itemNr = null"
      >
        <g-image
          class="z-10 md:max-w-md"
          :alt="$page.looks.image_caption"
          :src="$page.looks.image"
        />
        <figcaption
          class="text-lg text-center pt-3 font-bold absolute top-0 left-0 z-20 mx-auto w-full bg-gradient-to-b from-black to-transparent"
        >
          <h2 class="mx-auto px-2 text-gray-200 font-bold w-2/3">
            {{ $page.looks.title }}
          </h2>
        </figcaption>
      </figure>
      <!--Image Section-->
      <!--Items Section-->
      <div class="flex flex-col lg:flex-row lg:justify-start justify-between w-full rounded-lg md:overflow-y-scroll md:my-16 md:flex-col z-20 ml-2 lg:w-1/2">
        <div v-for="(item, index) in items" :key="index" class="w-32 mb-4 md:w-64 lg:ml-10 flex justify-center items-center flex-wrap">
          <figure class="bg-transparent" v-if="item.items.original">
            <picture
              class="flex justify-center max-w-xs z-10"
            >
              <g-link
                class="z-10"
                type="_black"
                :to="item.items.original['href']"
              >
                <g-image
                  class="w-20 md:w-40 lg:w-64 h-full shadow-lg rounded-t-lg cover"
                  :src="item.items.original['src']"
                ></g-image>
              </g-link>
            </picture>
            <figcaption
              class="text-center flex flex-col justify-center p-2 w-32 md:w-64 text-base uppercase glass-light z-30"
            >
              {{ item.items.original["mark"] }}
              <span class="text-xs md:text-lg">{{
                item.items.original["ref"]
              }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
      <!-- <vue-glide
        class="md:w-1/2 lg:w-full z-20 animate"
        :options="options"
        v-model="active"
      >
        <vue-glide-slide>
          <div class="flex justify-around w-full rounded-lg md:flex-col">
            <div v-for="(item, index) in items" :key="index" class="">
              <figure class="bg-transparent" v-if="item.items.original">
                <picture
                  class="flex justify-center z-10 md:justify-start md:ml-8 md:mb-4 md:relative"
                >
                  <g-link
                    class="z-10"
                    type="_black"
                    :to="item.items.original['href']"
                  >
                    <g-image
                      class="w-20 md:w-32 h-full shadow-lg rounded-b-lg"
                      :src="item.items.original['src']"
                    ></g-image>
                  </g-link>
                </picture>
                <figcaption
                  class="text-center flex flex-col justify-center pt-4 pb-2 w-32 text-base bg-gray-200 transform -translate-y-2 z-0 md:absolute md:translate-x-40 md:-translate-y-48 md:text-xl md:w-40 md:h-40 uppercase"
                >
                  {{ item.items.original["mark"] }}
                  <span class="text-xs md:text-lg">{{
                    item.items.original["ref"]
                  }}</span>
                  // <span class="text-xs md:text-lg">{{
                  //  item.items.original["price"]
                  // }}</span> 
                </figcaption>
              </figure>
            </div>
          </div>
        </vue-glide-slide>
        <vue-glide-slide>
          <div
            class="flex justify-around w-full mb-6 pt-4 rounded-lg md:flex-col"
          >
            <div v-for="(item, index) in items" :key="index" class="">
              <figure class="bg-transparent" v-if="item.items.options[0]">
                <picture
                  class="flex justify-center z-10 md:justify-start md:ml-8 md:mb-4 md:relative"
                >
                  <g-link
                    class="z-10"
                    type="_black"
                    :to="item.items.options[0]['href']"
                  >
                    <g-image
                      class="w-20 md:w-32 h-full shadow-lg rounded-b-lg"
                      :src="item.items.options[0]['src']"
                    ></g-image>
                  </g-link>
                </picture>
                <figcaption
                  class="text-center flex flex-col justify-center pt-4 pb-2 w-32 text-base bg-gray-200 transform -translate-y-2 z-0 md:absolute md:translate-x-40 md:-translate-y-48 md:text-xl md:w-40 md:h-40 uppercase"
                >
                  {{ item.items.options[0]["mark"] }}
                  <span class="text-xs md:text-lg">{{
                    item.items.options[0]["ref"]
                  }}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </vue-glide-slide>
        <vue-glide-slide>
          <div
            class="flex justify-around w-full mb-6 pt-4 rounded-lg md:flex-col"
          >
            <div v-for="(item, index) in items" :key="index" class="">
              <figure class="bg-transparent" v-if="item.items.options[1]">
                <picture
                  class="flex justify-center z-10 md:justify-start md:ml-8 md:mb-4 md:relative"
                >
                  <g-link
                    class="z-10"
                    type="_black"
                    :to="item.items.options[1]['href']"
                  >
                    <g-image
                      class="w-20 md:w-32 h-full shadow-lg rounded-b-lg"
                      :src="item.items.options[1]['src']"
                    ></g-image>
                  </g-link>
                </picture>
                <figcaption
                  class="text-center flex flex-col justify-center pt-4 pb-2 w-32 text-base bg-gray-200 transform -translate-y-2 z-0 md:absolute md:translate-x-40 md:-translate-y-48 md:text-xl md:w-40 md:h-40 uppercase"
                >
                  {{ item.items.options[1]["mark"] }}
                  <span class="text-xs md:text-lg">{{
                    item.items.options[1]["ref"]
                  }}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </vue-glide-slide>
        <template class="control" slot="control">
          <button
            class="setPosition transform translate-x-0 md:translate-y-6"
            :class="active === 0 ? 'animate-pulse' : ''"
            data-glide-dir="=0"
          ></button>
          <button
            class="setPosition transform translate-x-12 md:translate-y-6"
            :class="active === 1 ? 'animate-pulse' : ''"
            data-glide-dir="=1"
          ></button>
          <button
            class="setPosition transform translate-x-24 md:translate-y-6"
            :class="active === 2 ? 'animate-pulse' : ''"
            data-glide-dir="=2"
          ></button>
          <button class="next white text-white" data-glide-dir=">">
            &#10148;
          </button>
        </template>
      </vue-glide> -->
    </article>

    <!-- <div class="content post md:px-16">

       <p v-html="$page.blog.excerpt"></p>

       <div v-html="$page.blog.content"></div>

       <ul class="flex pt-8 border-t border-gray-100">
         <li class="mr-2" v-for="tag in $page.blog.tags" :key="tag.id">
           <g-link
             :to="tag.path"
             class="inline-block border border-pink-300 px-4 py-2 text-pink-500 text-xs font-semibold rounded hover:text-white hover:bg-pink-500 hover:border-pink-500"

           >{{ tag.title}}</g-link>
         </li>
       </ul>
     </div>-->
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
import { Pane, Splitpanes } from "splitpanes";
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
      { opacity: 0, y: 200 },
      { opacity: 1, y: 20, ease: "back", duration: 1.5 }
    );
    gsap.fromTo(
      ".img",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, ease: "back", duration: 1.5 }
    );
  },
};
</script>

<style scoped lang="scss">
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
