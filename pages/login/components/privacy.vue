<template>
	<view class="Privacy div-center">
		<view class="content p-10">
			<view class="title t-a-c">
				隐私保护指引
			</view>
			<view class="font-s-12 text">
				隐私保护指引隐私保护指引隐私保护指引隐私保护指引隐私保护指引隐私保护指引隐私保护指引
			</view>
			<view class="t-a-c">
				<view class="yes-btn p-10 " @click="agree(1)">
					同意
				</view>
				<view class="p-10" @click="agree">
					不同意
				</view>
			</view>
		</view>

	</view>

</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {}
		},
		methods: {
			agree(index){
				if(index){
					uni.setStorageSync('Privacy_agreee',true)
					this.$emit('update:privacy',true)
				}else{
					uni.showModal({
						title:"提示",
						content:"您需要同意隐私政策才能继续使用我们的产品以及服务",
						confirmText:"不同意",
						success(e) {
							if(e.confirm){
								// #ifdef MP-WEIXIN
								wx.exitMiniProgram()
								// #endif					
							}
						}
					})
				}		
			}
		},
		mounted() {

		},
		onLoad() {

		},
		onShow() {

		}
	}
</script>

<style scoped lang="scss">
	.Privacy {
		background-color: rgba(0, 0, 0, 0.7);

		.content {
			background-color: #ffffff;
			border-radius: 30rpx;
			width: 80vw;
			height: 60vh;
		}

		.title {
			font-size: 36rpx;
			font-weight: 700;
			padding: 20rpx;
		}

		.text {
			overflow-y: scroll;
			height: 65%;
		}
		.yes-btn{
			background-color: #000000;
			color: #fff;
			border-radius: 30rpx;
			margin-bottom: 10rpx;
		}
	}
</style>
