<template>
  <section class="max-w-sm">
    <article class="grid">
      <splitpanes class="mt-6" v-for="(item, index) in items" :key="index" horizontal>
        <pane min-size="20" max-size="80">
          <ul class="transform translate-y-10">
            <li class="text-xl text-center">
              {{ item.items.original["mark"] }}
            </li>
            <li class="text-xs text-gray-600">
              {{ item.items.original["caption"] }}
            </li>
            <li class="text-xs">{{ item.items.original["ref"] }}</li>
            <li class="text-xs font-bold">
              {{ item.items.original["price"] }}
            </li>
          </ul>
        </pane>
        <!--<pane size="0" max-size="40" class="">
          <ul>
            <li class="text-md">{{ item.items.original['price'] }}</li>
            <li class="text-xs">{{ item.items.original['ref'] }}</li>
            <li class="text-xs">{{ item.items.original['caption'] }}</li>
          </ul>
        </pane>-->
        <pane size="80">
          <div class="w-32 mx-auto">
            <g-image class="" :src="item.items.original['src']"></g-image>
          </div>
        </pane>
      </splitpanes>
    </article>
  </section>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default {
  name: "panelSplit",
  components: { Splitpanes, Pane },
  computed: {
    items() {
      return this.$page.blog.cloth;
    },
  },
};
</script>

<style lang="scss">
.grid {
  --size: 9rem;
  --gap: 1rem;

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--size);
  grid-gap: calc(var(--gap) / 2);
  gap: calc(var(--gap) / 2);
  padding-left: var(--gap);
  padding-right: var(--gap);
  padding-bottom: var(--gap);

  overflow-x: auto;
  overscroll-behavior-x: contain;
  -ms-scroll-snap-type: x proximity;
  scroll-snap-type: x proximity;
  scroll-padding-inline-start: var(--gap);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
}

.splitpanes {
  &__pane {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 150px;
    width: 150px;
  }

  &__splitter {
    background-color: transparent;
    position: relative;
    box-sizing: border-box;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 100%;
    height: 22px;
    border-radius: 100px;
  }

  &__splitter:before {
    content: "+";
    font-size: 1.5rem;
    position: absolute;
    z-index: 99;
    margin-top: 25px;
    left: 40%;
    right: 0;
    top: 10px;
    bottom: 0;
    transition: 0.4s;
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    background-color: #f1ebeb;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    box-shadow: 5px;
  }

  &--vertical > &__splitter:before {
    left: -25px;
    right: -25px;
  }

  &--horizontal > &__splitter:before {
    top: -25px;
    bottom: -25px;
  }

  &__splitter:hover:before {
    animation: move 6s ease;
  }

  @keyframes move {
    50% {
      transform: translateY(30px);
    }
  }
}
</style>
