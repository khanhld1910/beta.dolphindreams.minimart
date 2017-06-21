<template>
	<div class="content">
		<div class="box">
			<div class="box-header with-border">
				<div class="box-title">123123</div>
			</div>
			<div class="box-body no-padding">
				<table class="table table-bordered">
					<tbody>
						<tr>
							<th>ID</th>
							<th>Ten</th>
							<th></th>
						</tr>
						<tr v-for="item in allProducts">
							<td>ID</td>
							<td v-text="item.name"></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ref: null,
			allProducts: [],
		}
	},
	created() {
		// do database cua google no su dung socket nen moi thu deu la realtime ca
		// ví dụ t với m cùng mở 1 phần mềm trên 2 máy tính khác nhau. m thêm sản phẩm thì bên t cũng lập tức
		// có luôn.uh
		this.$data.ref = this.$firebase.database().ref('/products')
		// hàm on để lắng nghe mọi dữ liệu từ products
		// nếu k muốn nó lắng nghe mà chỉ lấy một lần duy nhất thì dùng once
		// vậy là nó k lắng nghe nữa.
		// bữa nay mắt t mờ vl. cắt 1 cặp kính bao nhiêu nhỉ
		// kinh 200 gong 3-400 re tien
		// cuoi tuan co gi di vs t oh
		// dinh lam gi quen me r
		// ma app nay co nhung table nao
		// san pham hoa don 
		// tao cung ko biet phai tham khao them
		// lam demo vai chuc nang xem ng ta vua y ko da roi moi lam hoan toan
		// chac lam san pham voi kho hang truoc thoi
		// thoi cu de tao mo di
		// cai phan mem 
		this.$data.ref.on('value', (snapshot) => {
			this.$data.allProducts = snapshot.val()
		})
	},
	methods: {
		test() {
			var data = {
				name: 'testtttt'
			}
			this.$data.ref.push(data)
		}
	}
}
</script>

<style>

</style>
