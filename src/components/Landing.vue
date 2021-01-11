<template>
  <article class="relative content setSize relative z-10">
    <div class="relative bg-white flex justify-start items-center overflow-hidden
                xl:ml-2
                ">
      <vue-glide
          class="transform bg-white z-10 setSize overflow-hidden
                  md:clip xl:max-w-2xl
                "
          :per-view="1"
          :autoplay="3000"
          :animationDuration="10000"
          :rewindDuration="10000"
          :bound="true"
          :gap="10"
      >
        <vue-glide-slide class="relative overflow-hidden flex justify-center items-center">
          <picture class="">
            <!--<source srcset="@/assets/img/thinking.webp 1x, @/assets/img/thinking.webp 2x" type="image/webp">-->
            <source media="(max-width: 499px)" srcset="@/assets/img/Landing/landingXS.jpg 1x,
                            @/assets/img/Landing/landingXS@2x.jpg 2x"
                    type="image/jpg">
            <source media="(mix-width: 499px)" srcset="@/assets/img/Landing/landingMD.jpg 1x,
                            @/assets/img/Landing/landingMD@2x.jpg 2x"
                    type="image/jpg">
            <source media="(mix-width: 999px)" srcset="@/assets/img/Landing/landingXL.jpg 1x,
                            @/assets/img/Landing/landingXL@2x.jpg 2x"
                    type="image/jpg">
            <g-image
                src="@/assets/img/Landing/landingXL.jpg"
                quality="75"
                alt="DailyStyle"
                width="768"
            />
          </picture>
        </vue-glide-slide>
        <vue-glide-slide class="relative overflow-hidden flex justify-center items-center">
          <picture class="">
            <!--<source srcset="@/assets/img/thinking.webp 1x, @/assets/img/thinking.webp 2x" type="image/webp">-->
            <source media="(max-width: 499px)" srcset="@/assets/img/Landing/landingXS2.jpg 1x,
                            @/assets/img/Landing/landingXS2@2x.jpg 2x"
                    type="image/jpg">
            <source media="(mix-width: 499px)" srcset="@/assets/img/Landing/landingMD2.jpg 1x,
                            @/assets/img/Landing/landingMD2@2x.jpg 2x"
                    type="image/jpg">
            <source media="(mix-width: 999px)" srcset="@/assets/img/Landing/landingXL2.jpg 1x,
                            @/assets/img/Landing/landingXL2@2x.jpg 2x"
                    type="image/jpg">
            <g-image
                src="@/assets/img/Landing/landingXL2.jpg"
                :quality="window.width < 1024? '100': '75'"
                alt="DailyStyle"
                width="768"
            />
          </picture>
        </vue-glide-slide>
      </vue-glide>
      <div class="z-10 h-screen company text-white flex justify-center items-start flex-col
                transform rotate-45 translate-y-56 translate-x-40 hidden lg:block">
        <h6
            class="text-5xl bg-ds w-full pl-4 rounded-r-full rounded py-6"
            v-for="(mark , index) in marks"
            :key="index">{{mark}}</h6>
      </div>
    </div>
    <div class="z-20 absolute w-full textBg">
      <div class="glass-dark mx-8">
        <h1 class="text-center text-white font-bold text-6xl font-bold">
          <span class="text-xl">Bienvenidos a</span><br/> DailyStyle!
        </h1>
        
        <h5 class="cd-headline rotate-1">
          <span class="cd-words-wrapper text-white text-center text-3xl">
         <b :class="visible === 3?'is-visible': ''">️Fashion</b>
         <b :class="visible === 2?'is-visible': ''">️Beauty</b>
         <b :class="visible === 1?'is-visible': ''">️Outfits</b>
          </span>
        </h5>
      </div>
      <p class="text-2xl text-white px-4 md:ml-2 text-center glass-dark mx-8 p-4">
        Un blog de moda para complementar mi Instagrama.
        <g-link class="block bg-black hover:bg-gray-100 text-gray-300 py-2 px-4 mt-4 rounded-full shadow-lg text-lg font-bold" to="/looks">looks gallery &#8594;</g-link>
        <g-link class="block bg-black hover:bg-gray-100 text-gray-300 py-2 px-4 mt-4 rounded-full shadow-lg text-lg font-bold" to="/blog">fashon blog &#8594;</g-link>
      </p>
    </div>
  </article>
</template>

<script>
import {Glide, GlideSlide} from 'vue-glide-js'

const animationDelay = 3500;

export default {
  name: "Landing",
  data() {
    return {
      visible: 1,
      window: {
        width: 0,
        height: 0,
      },
      marks: [ "ZARA", "Massimo Dutti", "Stradivarius", "Uterqüe", "Pull&Bear"]
    }
  },
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
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
  },
  watch: {

    visible: {
      handler(value) {

        if (value > 3) {
          this.visible = 1
        } else {
          setTimeout(() => {
            this.visible++;
          }, animationDelay);
        }

      },
      immediate: true // This ensures the watcher is triggered upon creation
    }

  }
};
</script>

<style scoped lang="scss">
.company {
  position: absolute;
  left: 700px;
  top: 0;
  width: 50vw;
  height: 100vh;
  opacity: 0.8;
  overflow: hidden;
}

.clip {
  clip-path: inset(0 50% 0 0);
}

/*World Rotation*/
.cd-headline.rotate-1 .cd-words-wrapper {
  display: block;
  perspective: 200px;
}

.cd-headline.rotate-1 b {
  opacity: 0;
  transform-origin: 50% 100%;
  transform: rotateX(180deg);
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
}

.cd-headline.rotate-1 b.is-visible {
  position: relative;
  opacity: 1;
  transform: rotateX(0deg);
}

.cd-headline.rotate-1 b {
  opacity: 0;
  transform-origin: 50% 100%;
  transform: rotateX(180deg);
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
}

.cd-headline.rotate-1 b.is-visible {
  position: relative;
  opacity: 1;
  transform: rotateX(0deg);
  animation: cd-rotate-1-in 1.2s;
}

.cd-headline.rotate-1 b.is-hidden {
  transform: rotateX(180deg);
  animation: cd-rotate-1-out 1.2s;
}

@keyframes cd-rotate-1-in {
  0% {
    transform: rotateX(180deg);
    opacity: 0;
  }
  35% {
    transform: rotateX(120deg);
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  100% {
    transform: rotateX(360deg);
    opacity: 1;
  }
}

@keyframes cd-rotate-1-out {
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  35% {
    transform: rotateX(-40deg);
    opacity: 1;
  }
  65% {
    opacity: 0;
  }
  100% {
    transform: rotateX(180deg);
    opacity: 0;
  }
}

/*World Rotation*/

.textBg {
  top: 0;
  left: 0;
  margin: 0 auto;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: 435px) {


  }
  @media screen and (min-width: 1025px) {

  }
}

.setSize {
  height: calc(100vh - 64px);
}

#section10 a {
  padding-top: 60px;
}

#section10 a span {
  position: absolute;
  top: 60%;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid #ffffff;
  border-radius: 50px;
  box-sizing: border-box;
}

#section10 a span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: "";
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: #f9f9f9;
  border-radius: 100%;
  -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
  box-sizing: border-box;
}

@-webkit-keyframes sdb10 {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>

