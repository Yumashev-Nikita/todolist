<template>
<div class="main-container">
    <div class="bold-text-container">Сегодня</div><div class="bleak-text-container">{{ message }}</div>
    <ul>
        <li v-for="item in TaskWindows" :key="item.id">
            <TaskWindow @delete-task="deleteTask" :id="item.id"></TaskWindow>
        </li>
        <li>
            <HoverImgButton style="margin-top: 10px" @click="addTask" type="line" path="Icon_plus.svg" size="3px" borderRadius="5px" BgColorHover="#f0f0f0"/>
        </li>
    </ul>
</div>

</template>

<script>

import HoverImgButton from './HoverImgButton.vue'
import TaskWindow from './TaskWindow.vue'
import uniqueId from '../../node_modules/lodash/uniqueId'

function getWeekDay() {
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
        TaskWindow
    },
    data() {
        return {
            TaskWindows: [
                {id: uniqueId('todo-')},
            ],
            message: getWeekDay()
        }
    },
    methods: {
		deleteTask(id) {
			this.TaskWindows.splice({id}, 1);
		},
		addTask() {
			this.TaskWindows.push({id: uniqueId('todo-')});
		}
    }
}

</script>

<style scoped>
    .main-container {
        margin: 100px 0px 0px 300px;
        width: 80%;
    }
    .bold-text-container {
        display: inline-block;
        font-weight: bold;
        font-size: 25px;
    }
    .bleak-text-container {
        display: inline-block;
        margin-left: 15px;
        font-size: 13px;
        color: rgb(127, 127, 127);
    }
    ul {
        list-style-type: none;
    }
    li {
        margin-left: -40px;
    }
/* .to-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
} */

</style>
