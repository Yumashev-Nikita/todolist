<template>
    <div class="main-container">
        <table>
            <tr>
                <td><HoverImgButton type="outline" path="Icon_exit.svg" padding="10px" borderRadius="15px" BgColor="#1f1f1f" BgColorHover="#3a3a3a"/></td>
                <td><HoverImgButton type="outline" path="Icon_home.svg" padding="10px" borderRadius="15px" BgColor="#1f1f1f" BgColorHover="#3a3a3a"/></td>
            </tr>
        </table>
    </div>
</template>

<script>

import HoverImgButton from './HoverImgButton.vue'

export default {
    name: 'TopNavBar',
    components: {
        HoverImgButton
    }
}

</script>

<style scoped>

.main-container {
    height: 60px;
    width: 100%;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: #1f1f1f;
}

table {
    margin-left: 30px;
    margin-top: 5px;
}

img {
    width: 35px;
    height: 35px;
    padding: 5px;
    margin-left: 5px;
    margin-right: 25px;
    border-radius: 10px;
}

</style>