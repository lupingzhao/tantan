<template>
	<view class="p-10">
		<!-- top -->
		<view class="flex width-100">
			<view class="flex width-100">
				<image src="../../static/img/5.jpg" class="author "></image>
				<view class="m-lr-10 width-70 top-right">
					<view class="flex jcsb width-100">
						<view class="flex jcsb width-100">
							<view class="">
								姓名
								<text class="iconfont icon-huiyuan m-lr-10" style="color: #ed8e07;"></text>
							</view>
							<view class="iconfont icon-shezhi" style="font-size: 50rpx;"> </view>
						</view>
					</view>
					<view class="" @click="go('/pages/edit/edit')">
						查看/编辑个人资料 >
					</view>
				</view>
			</view>
		</view>

		<view class="flex jcsb m-tb-25 head">
			<view class="width-49 flex">
				<image src="/static/me/qingshu.png" mode="" class="head-author"></image>
				<view class="">
					<view class="head-text ">
						邀请好友
					</view>
					<view class="">解锁VIP</view>
				</view>
			</view>
			<view class="width-49 flex">
				<image src="/static/me/xhlist.png" mode="" class="head-author"></image>
				<view class="">
					<view class="head-text ">
						喜欢我的
					</view>
					<view class="">遇见心动</view>
				</view>
			</view>
		</view>
		<view class="title">
			动态
		</view>
		<!-- 动态 -->
		<dynamic></dynamic>
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
			go(url) {
				uni.navigateTo({
					url: url
				})
			}
		},
		mounted() {

		},
		onLoad() {

		},
		onShow() {
			if (!uni.getStorageSync('login')) {
				uni.navigateTo({
					url: '/pages/login/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.author {
		width: 200rpx;
		height: 200rpx;
	}

	.head-author {
		width: 120rpx;
		height: 120rpx;
		margin-right: 20rpx;
	}

	.top-right {
		display: flex;
		flex-direction: column;
		height: 160rpx;
		justify-content: space-between;
	}

	.head {
		.head-text {
			font-size: 32rpx;
			font-weight: 700;
			margin-bottom: 10rpx;
		}
	}

	.title {
		font-size: 36rpx;
		margin-bottom: 20rpx;

	}
</style>
