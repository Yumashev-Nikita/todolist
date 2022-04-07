<template>
    
    <div class="main-container">
        <div class="group-container">
            <HoverTextButton text="Входящие"/>
            <HoverTextButton text="Сегодня"/>
            <HoverTextButton text="Предстоящие"/>
        </div>
    </div>
</template>

<script>

import HoverTextButton from './HoverTextButton.vue'

export default {
    name: 'LeftNavBar',
    components: {
        HoverTextButton
    },

}

</script>

<style scoped>

.main-container {
    height: 100%;
    width: 300px;
    position: fixed;
    margin-top: 60px;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: #ededed;
}

.group-container {
    margin-top: 40px;
    margin-left: 30px;
}

</style>