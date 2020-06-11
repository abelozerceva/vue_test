<template lang="pug">
    .header
        nav.navbar
            ul.nav-list
                button(v-for="tab in headerData.tabs"
                :key="tab"
                :class="['nav-list__button', { active: headerData.currentTab === tab }]"
                @click="switchTab(tab)") {{tab}}

</template>

<script>
export default {
    props: ['headerData'],
    name: 'NavBar',
    methods : {
        switchTab (tab) {
            this.$emit('switchTab', tab)
        }
    }
};
</script>

<style scoped lang="scss">
$backcolor: rgba(0, 89, 255, 0.438);

.header {
	display: flex;
	flex-direction: row;
	background-color: $backcolor;
}
.navbar {
    width: 100%;
}
.nav-list {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-self: flex-end;
    align-items: center;
}
.nav-list__button {
	margin: 10px;
	padding: 10px 20px;
	border-radius: 10px;
	border: none;
	min-width: 120px;
}
.active {
	background-color: $backcolor;
	border: none;
}

</style>