<template>
  <header
    id="header"
    class="h-16 header flex flex-col md:flex-row md:justify-between items-start p-4 md:p-6 z-20 w-full bg-gradient-to-b from-orange-200 to-transparent"
    role="banner"
  >
    <g-link
      class="company-logo-link block text-white font-bold text-2xl md:text-3xl hover:text-pink-500"
      to="/"
      aria-label="Back to home"
    ><img src="../../assets/icons/logoNegro@2x.png" height="50" width="50"/></g-link>

    <nav id="nav" class="nav hidden md:flex">
      <ul class="menu flex flex-col md:flex-row items-center list-reset text-base">
        <li
          class="level-1 mb-4 md:mr-4 md:mb-0"
          v-for="element in $static.metadata.menu"
          :key="element.name"
        >
          <g-link
            :to="element.link"
            class="link font-bold text-black"
            :class="$route.path === element.link? 'text-gray-500  border-t-2 border-gray-500' : ''"
            active-class="is-active-link"
            exact-active-class="active text-white"
          >{{ element.name }}</g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    socialIcon(element) {
      return `/icons.svg#icon-${element.icon}`;
    }
  }
};
</script>

<style scoped>

</style>

<static-query>
query {
  metadata {
    siteName
    menu {
      name
      link
    }
  }
}
</static-query>
