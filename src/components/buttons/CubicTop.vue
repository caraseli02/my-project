<template>
    <div class="cajaCube">
        <div class="cube0">
            <div class="absolute cube1"></div>
            <div class="absolute cube2"></div>
            <div class="absolute cube3"></div>
            <div class="absolute cube4">
                <div class="absolute w-full h-full cube5"></div>
            </div>
            <div class="absolute cube6">
                <div class="cube7 absolute w-full h-full"></div>
            </div>
            <div class="absolute cube8"></div>
            <div class="absolute cube9"></div>
            <div class="absolute cube10"></div>
            <div class="absolute cube11"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CubicTop"
    }
</script>

<style scoped>

    .cajaCube {
        z-index: -1;
        top: 0;
        left: 0;
        height: 101px;
        width: 136px;
        transform-origin: 0% 0% 0px;
        transform: scale(0.318333);
    }

    .cube0 {
        transform: translateY(85px) translateX(-25px);
    }

    .cube1 {
        transform: translate(55px, 18px);
        width: 32px;
        height: 32px;
        background: #f0f0f0 none repeat scroll 0% 0%;
        transition: all 1000ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    }

    .cube2 {
        transform: translate(79px, 10px);
        width: 16px;
        height: 16px;
        background: #fcd3e6 none repeat scroll 0% 0%;
        transition: all 1000ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    }

    .cube3 {
        transform: translate(52px, 161px);
        width: 128px;
        height: 128px;
        background: rgba(255, 255, 255, 0.7) none repeat scroll 0% 0%;
        transition: all 1000ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;

    }

    .cube4 {
        transform: translate(87px, 50px);
        width: 128px;
        height: 128px;
        background: rgba(0, 0, 0, 0) linear-gradient(90deg, #fcd3e6 0%, #f3c7da 100%) repeat scroll 0% 0%;
        transition: all 1000ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    }

    .cube5 {
        opacity: 0.5;
        background: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAABGdBTUEAALGOGCHvlwAAAJJJREFUaAXt2zEKgDAQBEC1Unya7/Vpol004DWpJYE414RUx07KJeNxXvvwzLrMWz57m8g3vcFSbwGLPL3nK+K6EiBAgAABAgQIECBAgAABAgQIECBAgACB3wvkLiT6kJoY0b3U3Jl36UJqi9tHgAABAgQIECBAgAABAgQIECBAgAABAgSaCozRg/j30vQdPluebvWAG2hqjIMpAAAAAElFTkSuQmCC&quot;) 50% 50% / 10% repeat;

    }

    .cube6 {
        transform: translate(22px, 128px);
        width: 128px;
        height: 128px;
        background: #e2e8f0 none repeat scroll 0% 0%;
        box-shadow: rgba(245, 243, 243, 0.3) -3px 5px 8px;
        transition: all 1000ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    }

    .cube7 {
        opacity: 0.5;
        background: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAABGdBTUEAALGOGCHvlwAAAJJJREFUaAXt2zEKgDAQBEC1Unya7/Vpol004DWpJYE414RUx07KJeNxXvvwzLrMWz57m8g3vcFSbwGLPL3nK+K6EiBAgAABAgQIECBAgAABAgQIECBAgACB3wvkLiT6kJoY0b3U3Jl36UJqi9tHgAABAgQIECBAgAABAgQIECBAgAABAgSaCozRg/j30vQdPluebvWAG2hqjIMpAAAAAElFTkSuQmCC&quot;) 50% 50% / 10% repeat;
    }

    .cube8 {
        transform: translate(0px, 84px);
        width: 64px;
        height: 64px;
        background: #fcd3e6 none repeat scroll 0% 0%;
        transition: all 1000ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;

    }

    .cube9 {
        transform: translate(140px, 246px);
        width: 64px;
        height: 64px;
        background: rgba(255, 255, 255, 0.4) none repeat scroll 0% 0%;
        box-shadow: rgba(136, 136, 136, 0.3) -3px 5px 8px;
        transition: all 1000ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    }

    .cube10 {
        transform: translate(204px, 309px);
        width: 32px;
        height: 32px;
        background: #e2e8f0 none repeat scroll 0% 0%;
        transition: all 1000ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;

    }

    .cube11 {
        transform: translate(52px, 106px);
        width: 48px;
        height: 48px;
        background: #ffffff none repeat scroll 0% 0%;
        transition: all 1000ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;

    }
</style>
