<template>
	<div class="nav-tabs-custom">
		<ul class="nav nav-tabs">
			<li class="active">
				<a href="#product" data-toggle="tab">Danh sách hàng</a>
			</li>
			<li>
				<a href="#unit" data-toggle="tab">Đơn vị hàng</a>
			</li>
			<li>
				<a href="#supplier" data-toggle="tab">Nhà cung cấp</a>
			</li>
		</ul>
		<div class="tab-content">
			<div class="tab-pane active" id="product">
				<ProductList></ProductList>
			</div>
			<div class="tab-pane" id="unit">
				<UnitList
					v-bind='units'
					@clickDeleteUnitBtn="deleteUnit">
				</UnitList>
			</div>
			<div class="tab-pane" id="supplier">
				<SupplierList></SupplierList>
			</div>
		</div>
	</div>
</template>

<script>
import ProductList from './Product/ProductList.vue'
import UnitList from './Product/UnitList.vue'
import SupplierList from './Product/SupplierList.vue'

export default {
	components: {
		ProductList,
		UnitList,
		SupplierList
	},
	created() {
		this.$store.dispatch('getUnits')
	},
	computed: {
		units() {
			return this.$store.state.unit.all
		}
	},
	methods: {
		deleteUnit(data, e) {
			//alert(data)
		}
	}
}
</script>

<style scoped>

</style>

