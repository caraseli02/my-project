<template>
  <article class="content setSize relative z-10">
    <section id="section10" class="demo z-30 sm:hidden">
      <a class="z-30" href="#looks"><span class="z-30"></span></a>
    </section>
    <g-image
      fill="fill"
      class="z-10 absolute mx-auto items-end flex imgSize justify-end"
      src="../../content/index/images/DailyStyleLooks9.png"
    >
    </g-image>
    <div class="z-20 absolute w-full textBg">
      <h1 class="text-center mb-2 pt-2 text-lg md:text-3xl font-bold">
        Bienvenidos a DailyStyle!
      </h1>
      <p class="text-sm md:text-xl px-4 md:ml-2 text-center">
        Un blog de moda para complementar mi Instagrama.
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style scoped lang="scss">
.textBg {
  bottom: 8%;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(251, 251, 251, 0.5256303204875701) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(251, 251, 251, 0.5256303204875701) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(251, 251, 251, 0.5256303204875701) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#fbfbfb",GradientType=1);

  @media screen and (min-width: 435px) {
    top: 10%;
    right: 10%;
    background: none;
    width: 45%;
  }
  @media screen and (min-width: 1025px) {
    top: 0;
    right: 25%;
    background: none;
    width: 45%;
  }
}

.setSize {
  height: calc(100vh - 64px);
}
.imgSize {
  padding: 0 2vw;
  background-color: #e1c4ae;
  clip-path: ellipse(63% 50% at 51% 27%);

  @media screen and (min-width: 435px) {
    clip-path: polygon(0 0, 100% 0, 53% 100%, 0% 100%);
  }

  @media screen and (min-width: 1025px) {
    height: calc(100vh - (64px));
    clip-path: polygon(0 0, 100% 0, 63% 100%, 0% 100%);
  }
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
  border: 2px solid #0a0909;
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
  background-color: #0a0a0a;
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

