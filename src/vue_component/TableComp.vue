<template lang="pug">

.wrapTable
	table.table
		caption.table__caption_bg
			slot
		thead.tablte__thead
			tr.table-row
				th.table-row__th Price
				th.table-row__th Ammount
				th.table-row__th.table-row__th-total_hide Total
	.wrapTable__body
		table.table1
			tbody.table__tbody
				tr.table-row(v-for="(item, index) in items" :key="index")
					td.table-row__td {{ item[0] }}
					td.table-row__td {{ item[1] }}
					td.table-row__td.table-row__td-total_hide {{ item[0] * item[1] }}

</template>

<script>

export default {
  name: "TableComp",
  props: ["items"]
};

</script>

<style scoped lang="scss">
.wrapTable {
    width: 100%;
	margin: 0 10px;

	.wrapTable__body {
		height: 70vh;
		overflow: auto;
		overflow-y: hidden;
		width: 100%;
		padding: 0 17px 0 0;

		&:hover {
  			overflow-y: overlay;
		}
	}
}
table {
	border-collapse: collapse; /*убираем пустые промежутки между ячейками*/
	border: 1px solid grey; /*устанавливаем для таблицы внешнюю границу серого цвета толщиной 1px*/
	width: 100%;
	background-color: rgba(233, 223, 78, 0.6);
	text-align: center;

}
.table-row__th, .table-row__td {
	border: 1px solid grey;
	padding: 10px 15px;
	width: 30%;
}

.table-row__th-total_hide, .table-row__td-total_hide {
	width: 40%;
}

@media screen and (max-device-width: 840px) {
  	.table-row__th-total_hide, .table-row__td-total_hide {
		display: none;
	}
	.table-row__th, .table-row__td {
		width: 50%;
	}
	.wrapTable .wrapTable__body {
		height: 65vh;
	}
}
</style>