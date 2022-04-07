<template>
    <div class="main-container-text enter-active leave-active" @mouseover="BackgroundColorOnHover" @mouseleave="BackgroundColorNoHover">{{ text }}</div>
</template>

<script>

export default {
    name: 'HoverTextButton',
    props: {
        text: String
    },
    data() {
        return {
            bgColor: '#ededed',
        }
    },
    methods: {
        BackgroundColorOnHover() {
            this.bgColor = '#cfcfcf'
        },
        BackgroundColorNoHover() {
            this.bgColor = '#ededed'
        }
    }
}

</script>

<style scoped>

.main-container-text {
    margin: 10px 0px 10px 0px;
    width: 200px;
    border-radius: 15px;
    background-color: v-bind(bgColor);
    padding: 10px;
    list-style-type: none;
    color: #2c3e50;
    font-size: 20px;
}

.enter-active.leave-active{
    transition: background-color 0.3s;
}

</style>