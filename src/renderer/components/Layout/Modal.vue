<template>
	<div>
		<div class="modal fade" id="modal-unit" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="myModalLabel">Thêm đơn vị hàng</h4>
					</div>
					<div class="modal-body">
						<h5>Tên đơn vị</h5>
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-font"></i>
							</span>
							<input type="text" class="form-control" placeholder="Tên đơn vị">
						</div>
						<h5>Mã đơn vị</h5>
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-hashtag"></i>
							</span>
							<input type="text" class="form-control" placeholder="Mã đơn vị">
						</div>
						<h5>Số lượng</h5>
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-bars"></i>
							</span>
							<input type="number" min="0" step="1" required value="1" class="form-control">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">
							<i class="fa fa-times">&nbsp</i>Hủy bỏ
						</button>
						<button type="button" class="btn btn-primary">
							<i class="fa fa-plus">&nbsp</i>Thêm mới
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style>

</style>
