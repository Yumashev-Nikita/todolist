<template>
    <img class="enter-active leave-active" @mouseover="BackgroundColorOnHover" @mouseleave="BackgroundColorNoHover" v-bind:src="require('../assets/SVG/Line_version/' + type + '/' + path)"/>
</template>

<script>

export default {
    name: 'HoverImgButton',
    props: {
        type: String,
        path: String,
        BgColor: String,
        BgColorHover: String
    },
    data() {
        return {
            bgcolor: this.BgColor
        }
    },
    methods: {
        BackgroundColorOnHover() {
            this.bgcolor = this.BgColorHover
        },
        BackgroundColorNoHover() {
            this.bgcolor = this.BgColor
        }
    }
}

</script>

<style scoped>

img {
    padding: 10px;
    border-radius: 10px;
    background-color: v-bind(bgcolor);
}

.enter-active.leave-active{
    transition: background-color .3s;
}

</style>