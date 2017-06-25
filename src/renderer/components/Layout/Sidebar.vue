<template>
	<aside class="main-sidebar">
		<section class="sidebar">
			<!--<div class="user-panel">
				<div class="pull-left image">
					<img src="~@/assets/user-img/admin.png" class="img-circle" alt="User Image">
				</div>
				<div class="pull-left info">
					<p>Administrator</p>
					<a href="#">
						<i class="fa fa-circle text-success"></i> Online</a>
				</div>
			</div>-->
			<ul class="sidebar-menu">
				<li class="header">MODULES QUẢN LÝ</li>
				<router-link to="/" tag="li" active-class="active" exact>
					<a>
						<i class="fa fa-dashboard"></i>
						<span>Bảng điều khiển </span>
					</a>
				</router-link>
				<router-link to="/product" tag="li" active-class="active" exact>
					<a>
						<i class="fa fa-shopping-bag"></i>
						<span>Hàng hóa</span>
					</a>
				</router-link>
				<router-link to="/warehouse" tag="li" active-class="active" exact>
					<a>
						<i class="fa fa-database"></i>
						<span>Quầy/Kho</span>
					</a>
				</router-link>
				<router-link to="/bill" tag="li" active-class="active" exact>
					<a>
						<i class="fa fa-calculator"></i>
						<span>Hóa đơn</span>
					</a>
				</router-link>
				<router-link to="/customer" tag="li" active-class="active" exact>
					<a>
						<i class="fa fa-address-book"></i>
						<span>Khách hàng</span>
					</a>
				</router-link>
				<router-link to="/statistic" tag="li" active-class="active" exact>
					<a>
						<i class="fa fa-line-chart"></i>
						<span>Thống kê</span>
					</a>
				</router-link>
				<router-link to="/user" tag="li" active-class="active" exact>
					<a>
						<i class="fa fa-users"></i>
						<span>Người dùng</span>
					</a>
				</router-link>
				<router-link to="/log" tag="li" active-class="active" exact>
					<a>
						<i class="fa fa-archive"></i>
						<span>Nhật ký</span>
					</a>
				</router-link>
				<li class="header">SETTING</li>
				<router-link to="/exit" tag="li" active-class="active" exact>
					<a>
						<i class="fa fa-sign-out"></i>
						<span>Thoát</span>
					</a>
				</router-link>
			</ul>
		</section>
	</aside>
</template>

<script>
export default {
}
</script>

<style>
</style>
