<template lang="pug">
.content
	.symbol-type Symbol = {{symbol}}
	.wrapper
		tableComp(:items="glass.bids") Bids
		tableComp(:items="glass.asks") Asks
            
</template>

<script>
import tableComp from "./TableComp.vue";
export default {
	name: "GlassState",
	components: { tableComp },
	data: () => ({
		glass: {
		bids: null,
		asks: null
		},
		symbol: "BTCUSDT",
		ws: null
	}),
	async created() {
		await this.snapshot();
		this.wsSubscribe();
		this.$bus.$on("symbol",  symbol => {
		this.symbol = symbol;
		this.ws.close();
		this.wsSubscribe();
		});
	},
	methods : {
		async snapshot () {
			// делаем снепшот
			let glass = await this.$sdk.get(this.symbol);
			// переворачиваем, чтобы сверху таблицы были новые данные
			glass.bids = glass.bids.reverse();
			glass.asks = glass.asks.reverse();
			// отрисовываем снепшот
			this.glass = glass;
		},
		wsSubscribe () {
			this.ws = this.$sdk.subscribe(this.symbol);
			// запускаем callBack при получении сообщений
			this.ws.onmessage = async event => {
			// парсим данные в Json
			let data = JSON.parse(event.data);
			// создаём массивы новых данных
			let [asksAdd, bidsAdd] = [
				// отфильтровываем 0-ые сделки
				data.a.filter(item => item[1] != 0),
				data.b.filter(item => item[1] != 0)
			];
			// переворачиваем, чтобы сверху таблицы были новые данные
			asksAdd.reverse();
			bidsAdd.reverse();
			// удаляем из буффера столько данных сколько пришло
			this.glass.asks.splice(this.glass.asks.length - asksAdd.length, asksAdd.length);
			this.glass.bids.splice(this.glass.bids.length - bidsAdd.length, bidsAdd.length);
			// дописываем полученные данные в буфер asks
			this.glass.asks = [...asksAdd, ...this.glass.asks, ];
			this.glass.bids = [...bidsAdd, ...this.glass.bids, ];
			};
		}
	}
};
</script>

<style scoped lang="scss">
.wrapper {
	display: flex;
	padding: 10px;
	overflow-x: auto;
}
</style>