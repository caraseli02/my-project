<template>
  <layout>
    <splitpanes class="relatove">
      <pane class="">
        <div class="flex flex-col justify-center items-center">
          <div class="bg-teal-600 w-32 h-32 mb-10"></div>
          <div class="bg-teal-600 w-32 h-32 mb-10"></div>
          <div class="bg-teal-600 w-32 h-32 mb-10"></div>
        </div>
      </pane>
      <pane class="bg-gray-400">
        <div class="h-screen w-screen overflow-hidden relative">
          <figure class="z-20 mb-4 rounded-lg absolute"><img src="" height="875"
                                                    width="401"/>
            <g-image src="../assets/img/looks/DailyStyleLooks4.png" class="" width="450"/>
            <figcaption
                class="text-center text-lg italic text-gray-600 mt-4
                    "
            >Test
            </figcaption>
          </figure>
        </div>
      </pane>
    </splitpanes>
  </layout>
</template>


<script>
import {Splitpanes, Pane} from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
  name: "testing",
  components: {Splitpanes, Pane},
  computed: {
    items() {
      return this.$page.blog.cloth
    }
  },
}
</script>


<style lang="scss">
.splitpanes {
  background-color: #f2f2f2;

  &__pane {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  &__splitter {
    background-color: #ccc;
    position: relative;
  }

  &__splitter:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: 0.4s;
  }

  &--vertical > &__splitter:before {
    left: -30px;
    right: -30px;
  }

  &--horizontal > &__splitter:before {
    top: -30px;
    bottom: -30px;
  }

  &__splitter:hover:before {
    background-color: rgba(255, 0, 0, 0.3);
  }
}

</style>

