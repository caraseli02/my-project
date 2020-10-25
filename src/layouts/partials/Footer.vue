<template>
  <div class="footer-wrapper">
    <footer id="footer" class="footer bg-ds" role="contentinfo">
      <div class="footer-inner container m-auto lg:flex justify-between items-center px-6 py-10">
        <p class="text-purple-900 pb-8 md:pb-0">
          © 2020 Built with
          <a
            href="https://www.gridsome.org"
          >Gridsome.</a> - Powered by
          <a href="https://github.com/josephdyer" target="_blank">VladWeb</a>
        </p>

        <!-- <ul class="flex justify-center item-center">
          <li class="mr-4 flex justify-center item-center" v-for="element in $static.metadata.social" :key="element.link">
            <a
              :href="element.link"
              class="flex justify-center item-center"
              :aria-label="element.icon"
              target="_blank"
            >
              <svg
                class="flex justify-center item-center"
                fill="currentColor"
                role="img"
                aria-hidden="true"
                width="36"
                height="36"
              >
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  :xlink:href="socialIcon(element)"
                />
              </svg>
            </a>
          </li>
        </ul> -->

        <div class="mb-4 p-3 text-left md:text-right md:mb-0">
          <a class="mr-6 p-3" href="https://www.instagram.com/daiilystylee/">Instagram</a>
          <a class="p-2" href="mailto:daniela.mindru@gmail.com">Gmail</a>
        </div>
        <div>
          <g-link class="mr-6 p-3" to="/privacy/">Privacy Policy</g-link>
          <g-link class="p-3" to="/terms/">Terms of Use</g-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    socialIcon(element) {
      return `/icons.svg#icon-${element.icon}`
    }
  }
}
</script>

<static-query>
query {
  metadata {
    social {
      icon
      link
    }
  }
}
</static-query>
