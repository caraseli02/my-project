<template>
  <div id="make-3D-space">
    <div
        id="product-card"
        @mouseover="isHovering = true"
        @mouseleave="isHovering = false"
        :class="{'animate': isHovering}"
    >
      <transition name="flip">
        <article :key="flipped">
          <div
              v-if="!flipped"
              id="product-front"
          >
            <div class="shadow opacity-100 hidden"></div>
            <g-image class="w-64 m-auto"
                     :alt="look.node.image_caption"
                     :src="look.node.image"/>
            <div class="image_overlay"></div>
            <div id="view_details" @click="flipCard">View details</div>
            <div class="stats">
              <div class="stats-container">
                <span class="product_price">${{ look.node.lookPrice }}</span>
                <span class="product_name">{{ look.node.title }}</span>
                <p>{{ look.node.excerpt }}</p>
                <div class="product-options">
                  <strong>SIZES</strong>
                  <span>XS, S, M, L, XL, XXL</span>
                  <strong>COLORS</strong>
                  <div class="colors">
                    <div class="c-blue"><span></span></div>
                    <div class="c-red"><span></span></div>
                    <div class="c-white"><span></span></div>
                    <div class="c-green"><span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
              v-if="flipped"
              class="product-details w-full h-full bg-black block">
            <div id="flip-back" @click="flipCard">
              <div id="cy" class="s1 s2 s3"></div>
              <div id="cx" class="s1 s2 s3"></div>
            </div>
          </div>
        </article>
      </transition>
    </div>
  </div>
</template>

<script>

import gsap from 'gsap'

export default {
  name: "look",
  metaInfo: {
    title: "look",
  },
  data() {
    return {
      isHovering: false,
      flipped: false
    }
  },
  props: {
    look: {
      type: Object,
      required: true
    },
  },
  methods: {
    flipCard() {
      this.flipped = !this.flipped;
    },
  },
}
</script>

<style type="scss" scoped>

/* --- Product Card ---- */
#make-3D-space {
  position: relative;
  perspective: 800px;
  width: 340px;
  height: 500px;
  margin: 0 auto;
  transform-style: preserve-3d;
  transition: transform 5s;
  display: flex;
  min-height: 60vh;
}

#product-front {
  width: 335px;
  height: 500px;
  background: #fff;
  position: absolute;
  left: -5px;
  top: -5px;
  -webkit-transition: all 100ms ease-out;
  -moz-transition: all 100ms ease-out;
  -o-transition: all 100ms ease-out;
  transition: all 100ms ease-out;
  background-color: gray;
  border-radius: 15px 15px 0 0;
}

.product-details {
  border-radius: 15px 15px 0 0;
}

#product-card.animate #product-back, #product-card.animate #product-front {
  top: 0px;
  left: 0px;
  -webkit-transition: all 100ms ease-out;
  -moz-transition: all 100ms ease-out;
  -o-transition: all 100ms ease-out;
  transition: all 100ms ease-out;
}

#product-card {
  width: 325px;
  height: 490px;
  position: absolute;
  top: 10px;
  left: 10px;
  overflow: hidden;
  transform-style: preserve-3d;
  -webkit-transition: 100ms ease-out;
  -moz-transition: 100ms ease-out;
  -o-transition: 100ms ease-out;
  transition: 100ms ease-out;

}

#product-card.animate {
  top: 5px;
  left: 5px;
  width: 335px;
  height: 500px;
  box-shadow: 0px 13px 21px -5px rgba(0, 0, 0, 0.3);
  -webkit-transition: 100ms ease-out;
  -moz-transition: 100ms ease-out;
  -o-transition: 100ms ease-out;
  transition: 100ms ease-out;
}

.stats-container {
  background: #fff;
  position: absolute;
  top: 366px;
  left: 0;
  width: 100%;
  height: 223px;
  padding: 27px 35px 35px;
  border-radius: 15px 15px 0 0;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}

#product-card.animate .stats-container {
  top: 272px;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}

.stats-container .product_name {
  font-size: 22px;
  color: #393c45;
}

.stats-container p {
  font-size: 16px;
  color: #b1b1b3;
  padding: 2px 0 20px 0;
  margin: 0.5rem 0;
}

.stats-container .product_price {
  float: right;
  color: #000000;
  font-size: 22px;
  font-weight: 600;
}

.image_overlay {
  /* position: absolute;
   top: 0;
   left: 0;*/
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0;
}

#product-card.animate .image_overlay {
  opacity: 0.7;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}

.product-options {
  padding: 2px 0 0;
}

.product-options strong {
  font-weight: 700;
  color: #393c45;
  font-size: 14px;
}

.product-options span {
  color: #969699;
  font-size: 14px;
  display: block;
  margin-bottom: 8px;
}

#view_details {
  position: absolute;
  top: 112px;
  left: 50%;
  margin-left: -85px;
  border: 2px solid #fff;
  color: #fff;
  font-size: 19px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px 0;
  width: 172px;
  opacity: 0;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}

#view_details:hover {
  background: #fff;
  color: #000000;
  cursor: pointer;

}

#product-card.animate #view_details {
  opacity: 1;
  width: 152px;
  font-size: 15px;
  margin-left: -75px;
  top: 115px;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}

div.colors div {
  margin-top: 3px;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  float: left;
}

div.colors div span {
  width: 15px;
  height: 15px;
  display: block;
  border-radius: 50%;
}

div.colors div span:hover {
  width: 17px;
  height: 17px;
  margin: -1px 0 0 -1px;
}

div.c-blue span {
  background: #6e8cd5;
}

div.c-red span {
  background: #f56060;
}

div.c-green span {
  background: #44c28d;
}

div.c-white span {
  background: #fff;
  width: 14px;
  height: 14px;
  border: 1px solid #e8e9eb;
}

div.shadow {
  width: 335px;
  height: 520px;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: none;
  background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
  background: -o-linear-gradient(right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
  background: -moz-linear-gradient(right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
}

#flip-back {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

#cx, #cy {
  background: #d2d5dc;
  position: absolute;
  width: 0px;
  top: 15px;
  right: 15px;
  height: 3px;
  -webkit-transition: all 250ms ease-in-out;
  -moz-transition: all 250ms ease-in-out;
  -ms-transition: all 250ms ease-in-out;
  -o-transition: all 250ms ease-in-out;
  transition: all 250ms ease-in-out;
}

#flip-back:hover #cx, #flip-back:hover #cy {
  background: #979ca7;
  -webkit-transition: all 250ms ease-in-out;
  -moz-transition: all 250ms ease-in-out;
  -ms-transition: all 250ms ease-in-out;
  -o-transition: all 250ms ease-in-out;
  transition: all 250ms ease-in-out;
}

#cx.s1, #cy.s1 {
  right: 0;
  width: 30px;
  -webkit-transition: all 100ms ease-out;
  -moz-transition: all 100ms ease-out;
  -ms-transition: all 100ms ease-out;
  -o-transition: all 100ms ease-out;
  transition: all 100ms ease-out;
}

#cy.s2 {
  -ms-transform: rotate(50deg);
  -webkit-transform: rotate(50deg);
  transform: rotate(50deg);
  -webkit-transition: all 100ms ease-out;
  -moz-transition: all 100ms ease-out;
  -ms-transition: all 100ms ease-out;
  -o-transition: all 100ms ease-out;
  transition: all 100ms ease-out;
}

#cy.s3 {
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: all 100ms ease-out;
  -moz-transition: all 100ms ease-out;
  -ms-transition: all 100ms ease-out;
  -o-transition: all 100ms ease-out;
  transition: all 100ms ease-out;
}

#cx.s1 {
  right: 0;
  width: 30px;
  -webkit-transition: all 100ms ease-out;
  -moz-transition: all 100ms ease-out;
  -ms-transition: all 100ms ease-out;
  -o-transition: all 100ms ease-out;
  transition: all 100ms ease-out;
}

#cx.s2 {
  -ms-transform: rotate(140deg);
  -webkit-transform: rotate(140deg);
  transform: rotate(140deg);
  -webkit-transition: all 100ms ease-out;
  -moz-transition: all 100ms ease-out;
  -ms-transition: all 100 ease-out;
  -o-transition: all 100ms ease-out;
  transition: all 100ms ease-out;
}

#cx.s3 {
  -ms-transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  -webkit-transition: all 100 ease-out;
  -moz-transition: all 100ms ease-out;
  -ms-transition: all 100ms ease-out;
  -o-transition: all 100ms ease-out;
  transition: all 100ms ease-out;
}

.flip-enter-active {
  transition: all 0.4s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter, .flip-leave {
  transform: rotateY(180deg);
  opacity: 0;

}

</style>
