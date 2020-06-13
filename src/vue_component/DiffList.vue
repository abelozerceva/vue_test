<template lang="pug">
    .content
        .symbol-type Symbol = {{ currentSymbol }}
        .wrapper
            select.select(v-model="currentSymbol")
                option.select__option(v-for="(item, index) in options"
                :key="index") {{ item }}

</template>

<script>
export default {
	name: "DiffList",
	data: () => ({
		options: ["BTCUSDT", "BNBBTC", "ETHBTC"],
		currentSymbol: "BTCUSDT"
	}),
	watch: {
		currentSymbol(symbol) {
			this.$bus.$emit('symbol', symbol);
		}
	}
};
</script>

<style scoped lang="scss">
$backcolor: rgba(0, 89, 255, 0.438);

.select {
	width: 150px;
	height: 50px;
	background-color: $backcolor;
	margin: 20px;
	padding: 10px;
	border-radius: 7px;
}

</style>