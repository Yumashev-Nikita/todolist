<template>
	<TopNavBar/>
	<LeftNavBar/>
	<ToDoList/>
</template>

<script>

import TopNavBar from './components/TopNavBar.vue'
import LeftNavBar from './components/LeftNavBar.vue'
import ToDoList from './components/ToDoList.vue'

export default {
    name: 'app',
    components: {
		TopNavBar,
		LeftNavBar,
		ToDoList
    }
}
</script>

<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-left: 300px;
	height: 100%;	
}

body {
	background-color: #FEFBF3;
}

</style>
