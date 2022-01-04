<template>
  <view class="">
		<view class="flex jcsb p-10">
			<view class="title">发现</view>
			<image src="/static/me/fb.png" mode="" class="img" @click="goto"></image>
		</view>
    <dynamic></dynamic>
    <dynamic></dynamic>
    <dynamic></dynamic>
    <dynamic></dynamic>
  </view>

</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
			goto(){
				uni.navigateTo({
					url:'/pages/publish/publish'
				})
			}
		},
    mounted() {

    },
    onLoad() {

    },
		onPullDownRefresh() {
			console.log("下拉刷新");
		},
		onReachBottom(e) {
			console.log("触底",e);
		}
  }
</script>

<style scoped lang="scss">
.title{
	font-size: 32rpx;
}
.img{
	width: 50rpx;
	height: 50rpx;
	border-radius: 50%;
}
</style>
