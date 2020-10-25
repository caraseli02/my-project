<template>
  <div>
    <nav
      id="mobile-nav"
      class="bg-ds mobile-nav fixed left-0 top-0 h-screen w-full overflow-y-auto pt-12 z-50 md:hidden"
      :class="toggleNav ? 'menu-visible': ''"
    >
      <ul>
        <li
          class="level-1 mb-4 md:mr-4 md:mb-0"
          v-for="element in $static.metadata.menu"
          :key="element.name"
        >
          <g-link
            :to="element.link"
            class="link block py-2 px-5 text-black text-3xl hover:text-black"
            active-class="is-active-link"
            exact-active-class="active text-black"
          >{{ element.name }}</g-link>
        </li>
      </ul>
    </nav>

    <button
      id="mobile-nav-toggle"
      class="mobile-nav-toggle block fixed h-12 w-24 right-0 top-0 rounded-b-full
            flex items-center justify-center
            font-bold border-none bg-ds text-white z-50 focus:outline-none md:hidden"
      :class="toggleNav ? 'menu-toggle-active': ''"
      aria-expanded="false"
      aria-controls="mobile-nav"
      @click="toggle"
    >

      <span class="mobile-nav-icon text-black" aria-hidden="true">
        {{ toggleNav? 'close' : 'menu' }}
      </span>
    </button>
  </div>
</template>

<static-query>
query {
  metadata {
    menu {
      name
      link
    }
  }
}
</static-query>

<script>
let myBody = {
  classList : {}
};
export default {

  data() {
    return {
      toggleNav: false
    }
  },
  methods: {
    toggle() {
      this.toggleNav = !this.toggleNav
    },
  }
}
</script>
