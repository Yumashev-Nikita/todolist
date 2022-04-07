<template>

    <div class="container">
        <table>
            <tr>
                <td><div class="bold-text-container">Сегодня</div><div class="bleak-text-container">{{ message }}</div></td>
                <td><HoverImgButton type="line" @click="AddToDo"    path="Icon_plus.svg" BgColor="#cefdae" BgColorHover="#67ff00"/></td>
                <td><HoverImgButton type="line" @click="changeToDo" path="Icon_edit.svg" BgColor="#ffd470" BgColorHover="#ffb200"/></td>
                <td><HoverImgButton type="line" @click="ChangeCrossBtnsVisiblity" path="Icon_close.svg" BgColor="#f7b1b1" BgColorHover="#ff2e2e"/></td>
            </tr>
            <tr>
                <td>
                    <ul>
                        <div class="text-container">
                            <li v-for="(todo, index) in todos" :key="index" @click="changePickedIndex(index)"> <div  v-if="index != pickedIndex">{{ todo }}</div>
                                <HoverImgButton class="to-right" v-if="CrossVisibility && index != pickedIndex" @click="DeleteToDo(index)" type="line" path="Icon_close.svg" BgColor="#FEFBF3" BgColorHover="#f7b1b1"/>
                                <div class="input-container" v-if="index === pickedIndex"><input placeholder="Type your task:"></div>
                            </li>
                        </div>
                    </ul>
                </td>
            </tr>
        </table>
    </div>

</template>

<script>

import HoverImgButton from './HoverImgButton.vue'

function  getDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var weekday = date.getDay();
    if (weekday === 0) {
        weekday = 'Вс';
    } else if (weekday === 1) {
        weekday = 'Пн';
    } else if (weekday === 2) {
        weekday = 'Вт';
    } else if (weekday === 3) {
        weekday = 'Ср';
    } else if (weekday === 4) {
        weekday = 'Чт';
    } else if (weekday === 5) {
        weekday = 'Пт';
    } else if (weekday === 6) {
        weekday = 'Сб';
    }
    return weekday + " " + day + "." + month + "." + year;
}

export default {
    name: 'ToDoList',
    components: {
        HoverImgButton,
    },
    data() {
        return {
            todos: ['yes', 'no', 'yes', 'no'],
            message: getDate(),
            CrossVisibility: true,
            pickedIndex: -1
        }
    },
    methods: {
		DeleteToDo(index) {
			this.todos.splice(index, 1);
		},
		AddToDo() {
			this.todos.push('');
		},
        ChangeCrossBtnsVisiblity() {
            this.CrossVisibility = !this.CrossVisibility;
        },
        changePickedIndex(index) {
            this.pickedIndex = index;
        },
        changePickedIndexBack() {
            this.pickedIndex = -1;
        }
    }
}

// сделать открываютщиеся окна, как на todoist

</script>

<style scoped>

.to-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.bold-text-container {
    display: inline;
    font-weight: bold;
    font-size: 25px;
}

.bleak-text-container {
    margin-left: 15px;
    display: inline;
    font-size: 13px;
    color: rgb(127, 127, 127);
}

.container {
    position: relative;
    margin-top: 100px;
    margin-left: 10%;
}

.text-container {
    width: 105%;
    position: relative;
}

ul {
    display: flex;
    gap: 30px 30px;
    width: 1000px;
    padding: 10px;
}

li {
    display: flex;
    gap: 30px;
    color: #2c3e50;
    border-radius: 15px;
    margin: 10px;
    list-style-type: circle;
    font-size: 25px;
    height: 20px;
}

</style>
