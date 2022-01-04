<script>
export default {
	onLaunch: function () {
		uni.getLocation({
			type: 'wgs84',
			success(res) {
				console.log(res);
			}
		})
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	}
}
</script>

<style>
/*每个页面公共css */
@import "./styles/common.scss";
@import "./styles/iconfont/index.css";
</style>
