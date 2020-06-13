<template lang="pug">
    div#app
        navBar.navbar(:headerData="headerData"
                v-on:switchTab="tab => (this.headerData.currentTab = tab)")

        keep-alive
            component.content(:is="currentTabComponent")

</template>

<script>
import navBar from "./NavBar.vue";

export default {
    name: 'app',
    data: function() {
        return { 
            headerData: {
                tabs: ['GlassState', 'DiffList'],
                currentTab: 'GlassState',
        }}
    },
    computed: {
        //при изменении currentTab меняем компонент
        currentTabComponent() {
            return this.headerData.currentTab;
        }
    },
    components: {
        navBar,
        GlassState : () => import(/* webpackChunkName:"GlassState" */'./GlassState.vue'),  // функциональный импорт, webpack создаст отдельный бандл с ленивой загрузкой
        DiffList :   () => import(/* webpackChunkName:"DiffList" */'./DiffList.vue'),      // функциональный импорт, webpack создаст отдельный бандл с ленивой загрузкой
    }
};
</script>

<style lang="scss">
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

.symbol-type {
	text-align: center;
	width: 100%;
	background-color: rgba(159, 58, 218, 0.747);
	color: white;
}

</style>