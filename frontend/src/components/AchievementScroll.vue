<template>
    <v-app dark flat class="px-8">
        <section class="main-container">
            <div class="item-nav-bar">
                <div class="item-nav">
                    <i @click="btnLeftClick" class="uil uil-angle-left left-btn"></i>
                    <i @click="btnRightClick" class="uil uil-angle-right right-btn"></i>
                    <ul @mousemove="mouseMove" @mousedown="mouseDown" @mouseup="mouseUp" class="item-menu">
                        <li @click="tabBtnClick" class="item active">CCC Result</li>
                        <li @click="tabBtnClick" class="item">Test1</li>
                        <li @click="tabBtnClick" class="item">Test2</li>
                        <li @click="tabBtnClick" class="item">Test3</li>
                        <li @click="tabBtnClick" class="item">Test4</li>
                        <li @click="tabBtnClick" class="item">Test5</li>
                        <li @click="tabBtnClick" class="item">Test6</li>
                        <li @click="tabBtnClick" class="item">Test7</li>
                        <li @click="tabBtnClick" class="item">Test8</li>
                        <li @click="tabBtnClick" class="item">Test9</li>
                    </ul>
                </div>
            </div>
        </section>
    </v-app>
</template>

<script>
export default{
    data () {
        return {
            itemMenu: [],
            btnLeft: [],
            btnRight: [],
            activeDrag: false,
            items: []
        }
    },
    methods: {
        checkVisibility(){
            let scrollLeftValue = Math.ceil(this.itemMenu.scrollLeft);
            let scrollableWidth = this.itemMenu.scrollWidth - this.itemMenu.clientWidth;
            this.btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
            this.btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
        },
        btnRightClick () {
            this.itemMenu.scrollLeft += 150;
            setTimeout(() => this.checkVisibility(), 50);
        },
        btnLeftClick () {
            this.itemMenu.scrollLeft -= 150;
            setTimeout(() => this.checkVisibility(), 50);
        },
        mouseMove(event) {
            if(!this.activeDrag) return;
            this.itemMenu.scrollLeft -= event.movementX;
            this.checkVisibility();
            this.itemMenu.classList.add("dragging");
        },
        mouseDown() {
            this.activeDrag = true;
        },
        mouseUp() {
            this.activeDrag = false;
            this.itemMenu.classList.remove("dragging");
        },
        tabBtnClick(event) {
            console.log(event);
        }
    },
    mounted() {
        this.itemMenu = document.querySelector(".item-menu");
        this.btnLeft = document.querySelector(".left-btn");
        this.btnRight = document.querySelector(".right-btn");

        this.items = document.querySelectorAll(".item");

        this.btnRight.style.display = (this.itemMenu.scrollWidth > this.itemMenu.clientWidth || this.itemMenu.scrollWidth >= this.window.innerWidth) ? "block" : "none";
        this.btnLeft.style.display = (this.itemMenu.scrollWidth >= window.innerWidth) ? "" : "none";
    },
    emits: ['selectButton']
}
</script>


<style>
  @import '@/css/achievementView.css';
  @import 'https://unicons.iconscout.com/release/v4.0.0/css/line.css';
</style>