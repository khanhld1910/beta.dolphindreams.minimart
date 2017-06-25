<template>
	<div class="box box-success box-solid">
		<div class="box-header with-border">
			<h3 class="box-title">Đơn vị hàng hóa</h3>
			<div class="box-tools pull-right">
				<a class="btn" data-toggle="modal" data-target="#modal-unit">
					<i class="fa fa-plus">&nbsp</i>Thêm mới
				</a>
				<a class="btn" @click="clickDeleteUnitBtn">
					<i class="fa fa-trash">&nbsp</i>Xóa
				</a>
			</div>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>TT</th>
						<th>Tên đơn vị</th>
						<th>Mã đơn vị</th>
						<th>Số lượng</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(unit, key, index) in units" :key="unit.id">
						<td>{{index + 1}} </td>
						<td v-text="unit.name"></td>
						<td v-text="unit.id"></td>
						<td v-text="unit.number"></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	props: ['units'],
	data() {
		return {
			// units: this.units
		}
	},
	created() {
		// console.log(this.$store)
		// this.$store.dispatch('getUnits')
	},
	computed: {
		// units() {
		// 	return this.$store.state.unit.all
		// }
	},
	methods: {
		clickDeleteUnitBtn() {
			this.$emit("clickDeleteUnitBtn", 'id-unit')
		},
		clickEditUnitBtn() {
			// xu ly, nhan thong tin de dua ra modal 
			// co thong tin unit can sua			
			//this.$emit("clickEditUnitBtn", 'id-unit')
		}
	}
}
</script>

<style scoped>

</style>

