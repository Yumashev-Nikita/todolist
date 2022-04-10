<template>
    <div class="task-main-container" @mouseenter="setButtonVisibilityTrue" @mouseleave="setButtonVisibilityFalse">
        <div class="task-container" v-if="!editMode">
            <div class="task-text-container">
                {{ task }}
            </div>
            <div class="buttons-container">
                <HoverImgButton v-if="buttonsVisible && !editMode"  @click="changeMode" type="line" path="Icon_edit.svg" size="3px" borderRadius="5px" BgColorHover="#f0f0f0"/>
                <HoverImgButton v-if="buttonsVisible && !editMode"  @click="deleteTask" type="line" path="Icon_delete.svg" size="3px" borderRadius="5px" BgColorHover="#f0f0f0"/>
            </div>
        </div>
        <div class="input-container" v-if="editMode"> 
            <textarea v-model="task" placeholder="Описание"></textarea>
            <!-- <HoverTextButton style="text-align: center; width: 100px" text="Сохранить"/> -->
            <button class="save-btn" @click="changeMode(); setButtonVisibilityFalse()"> Сохранить </button>
        </div>
        <hr>
    </div>
</template>

<script>

import HoverImgButton from './HoverImgButton.vue'
// import HoverTextButton from './HoverTextButton.vue'

export default {
    name: 'TaskWindow',
    props: {
        id: String
    },
    components: { 
        HoverImgButton,
        // HoverTextButton
    },
    data() {
        return {
            editMode: false,
            buttonsVisible: false,
            task: ''
        }
    },
    methods: {
        changeMode() {
            this.editMode = !this.editMode;
        },
        deleteTask() {
            this.$emit('delete-task', this.id);
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
        margin-top: 20px;
        width: 60%;
    }
    .task-main-container .task-container .task-text-container {
        position: relative;
        max-width: 85%;
        word-wrap: break-word;
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
        margin: 10px 0px 20px 0px;
        box-sizing: border-box;
        border: 1px solid #a1a1a1;
        border-radius: 15px;
        resize: none;
    }
    .task-container .buttons-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0px;
        width: 70px;
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