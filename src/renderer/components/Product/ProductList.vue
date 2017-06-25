<template>
	<div class="box box-success box-solid">
		<div class="box-header with-border">
			<h3 class="box-title">Danh sách hàng hóa</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered table-responsive">
				<thead>
					<tr>
						<th>TT</th>
						<th>Tên hàng</th>
						<th>Mã hàng</th>
						<th>Kho/Quầy</th>
						<th>Nhóm hàng</th>
						<th>Mã vạch</th>
						<th>Giá nhập</th>
						<th>Giá bán</th>
					</tr>
				</thead>
				<tbody>
					<!--<tr v-for="(item, index) of allProducts">
																<td v-bind:index="index + 1"> </td>
																<td v-text="item.name"></td>
																<td v-text="item.id"></td>
																<td v-text="item.repository"></td>
																<td v-text="item.category"></td>
																<td v-text="item.barcode"></td>
																<td v-text="item.originalPrice"></td>
																<td v-text="item.salePrice"></td>
															</tr>-->
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>

