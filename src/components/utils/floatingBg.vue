<template>
  <div class="slider-thumb z-10 animate"></div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "floatingBg",
  mounted(){
    gsap.fromTo('.slider-thumb', {opacity: 0}, {opacity: 1, ease: 'back', duration: 1.5});
  }
}
</script>

<style scoped lang="scss">
/*Background Animation*/

.slider-thumb::before {
  position: absolute;
  content: "";
  left: 15%;
  top: 20%;
  width: 450px;
  height: 450px;
  background: rgba(225, 196, 174, 1);
  border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
  will-change: border-radius, transform, opacity;
  animation: sliderShape 7s linear infinite;
  display: block;
  z-index: 10;
  -webkit-animation: sliderShape 7s linear infinite;

  @screen sm {
    left: 45%;
    height: 650px;
  }
}



@keyframes sliderShape {
  0%, 100% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  34% {
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
  }
  50% {
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
  }
}

/*Background Animation*/
</style>
