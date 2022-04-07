<template>
    <div class="task-main-container" @mouseenter="setButtonVisibilityTrue" @mouseleave="setButtonVisibilityFalse">
        <div class="task-container" v-if="!editMode">
            <div class="task-text-container">
                {{ task }}
            </div>
            <div class="buttons-container">
                <HoverImgButton v-if="buttonsVisible && !editMode"  @click="changeMode" type="line" path="Icon_edit.svg" size="3px" borderRadius="5px" BgColorHover="#f0f0f0"/>
                <HoverImgButton v-if="buttonsVisible && !editMode"  @click="changeMode" type="line" path="Icon_menu_point_h.svg" size="3px" borderRadius="5px" BgColorHover="#f0f0f0"/>
            </div>
        </div>
        <div class="input-container" v-if="editMode"> 
            <textarea v-model="task" placeholder="Описание"></textarea>
            <button class="save-button-container" @click="changeMode"> Сохранить </button>
        </div>
        <hr>
    </div>
</template>

<script>

import HoverImgButton from './HoverImgButton.vue'

export default {
    name: 'TaskWindow',
    props: {
        status: Boolean,
    },
    components: {
        HoverImgButton
    },
    data() {
        return {
            editMode: false,
            task: '',
            buttonsVisible: false
        }
    },
    methods: {
        changeMode() {
            this.editMode = !this.editMode;
        },
        setButtonVisibilityTrue() {
            this.buttonsVisible = true;
        },
        setButtonVisibilityFalse() {
            this.buttonsVisible = false;
        }
    }
}

</script>

<style scoped>
    .task-main-container {
        width: 60%;
    }
    .task-main-container .task-container .task-text-container {
        position: relative;
        top: 0;
        left: 0;
    }
    .task-main-container .task-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
        font-weight: bold;
        height: 1.5rem;
    }
    .task-main-container .input-container textarea {
        font-size: 15px;
        width: 100%;
        height: 5rem;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 1px solid #a1a1a1;
        border-radius: 15px;
        resize: vertical;
    }
    .task-container .buttons-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0px;
        width: 80px;
        height: 150%;
    }
    hr {
        width: 99%;
        border: 1px solid;
        position: relative;
        border-color: #dfdfdf;
        margin-top: 20px;
    }
</style>