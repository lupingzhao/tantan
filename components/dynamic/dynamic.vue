<template>
	<view class="p-10">
		<!-- top -->
		<view class="flex p-lr-10 a-i-fs ">
			<view class="flex">
				<image src="../../static/logo.png" mode="" class="s_img"></image>
			</view>
			<view class="">
				<view class="flex jcsb top">
					<view class="m-lr-10">
						名字
						<text class="iconfont icon-huiyuan m-lr-10" style="color: #ed8e07;"></text>
					</view>
					<view class="font-s-12">
						几分钟前
					</view>
				</view>
				<!-- c -->
				<view class="content ">
					<view class="font-break ellipsis-3">
						哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈hhhhhhhhhhhhhhhhhhhhh
						hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
					</view>
					<view class="m-t-10 flex  flex-wrap">
						<image :src="item" mode="widthFix" @click="pre(index)" v-for='(item,index) in list'
							:key='index'></image>
					</view>
					<view class="flex jcsb mt-5">
						<view class="flex">
							<view class="flex" @click="collect">
								<view class="iconfont icon-shoucang" style="font-size: 40rpx; "
									:style="{color:show?'#ff0000':''}"></view>
								<view class="font-s-12 m-lr-10">1.6w </view>
							</view>
							<view class="flex" @click="showComment=!showComment">
								<view class=" iconfont icon-chat ml-5"></view>
								<view class="font-s-12 m-lr-10">1.6w </view>
							</view>
						</view>
						<view class="flex" v-if="!isme" @click="go('/pages/chats/index',1)">
							<view class=" iconfont icon-sixin"></view>
							<view class="font-s-12">
								私信
							</view>
						</view>
						<!-- 如果时本人 -->
						<view class="font-s-12" v-if="isme" @click="del">
							删除
						</view>
					</view>
					<view class="m-t-10" v-if="showComment" @click="commet">
						评论评论 评论评论 评论评论 评论评论 评论评论 评论评论 评论评论 评论评论 评论评论 评论评论 评论评论 评论评论 评论评论
						评论评论sqsassfsdfsfdsfsdfsasasasasasasa
						<view class="" @click.stop="go(`/pages/dynamicDetail/dynamicDetail?id=${'j'}`)">
							共15条回复 >
						</view>
					</view>
				</view>
			</view>

		</view>
		<!-- 预览 -->
		<view class=" pre-box" v-if="ispre" @click="ispre=false">
			<swiper :indicator-dots="true" :autoplay="false" class="swiper " indicator-color='#a6a6a6'
				indicator-active-color='#fff' :current="current">
				<swiper-item v-for='(item,index) in list' :key='index' class="flex">
					<image :src="item" mode="aspectFit" class="pre-img"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 发表评论 -->
		<view class="flex a-i-fc m-t-10 inputComment" v-show="inputComment" :style="{bottom:keyHeight}">
			<input type="text" @blur="inputComment=!inputComment" :value="comment" class="input_comment"
				placeholder="评论" confirm-type="send" @confirm="putComment" />
			<view class="comment_btn" @click="putComment">
				发送
			</view>
		</view>
	</view>

</template>

<script>
	import utils from '@/utils/index.js'
	export default {
		components: {},
		props: {},
		data() {
			return {
				show: true,
				list: [
					'../../static/img/1.jpg',
					'../../static/img/2.jpg',
					'../../static/img/3.jpg',
					'../../static/img/3.jpg',
					'../../static/img/3.jpg',
				],
				ispre: false,
				current: 0,
				isme: true,
				// 展开评论
				showComment: false,
				comment: '',
				inputComment: false,
				keyHeight: 0
			}
		},
		methods: {
			collect() {
				this.show = !this.show
			},
			pre(index) {
				this.ispre = true
				this.current = index
			},
			// 页面跳转
			go(url, index) {
				if (index) {
					uni.switchTab({
						url: url
					})
				} else uni.navigateTo({
					url: url
				})
				this.inputComment = false
			},
			// 输入评论
			commet(e) {
				// console.log(e);
				this.inputComment = !this.inputComment
				uni.onKeyboardHeightChange((e) => {
					this.keyHeight = e.height+40
				})
			},
			// 发表评论
			putComment() {

			},
			// 删除评论
			del() {
				uni.showModal({
					title: "提示",
					content: "删除该朋友圈",
					success(e) {
						if (e.confirm) {
							console.log('删除');
						}
					}
				})
			}
		},
		mounted() {
			// console.log(utils.countdown('2021-12-31,20:30:30'));
		},
		onShow() {

		}
	}
</script>

<style scoped lang="scss">
	.s_img {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.pre-img {
		width: 100%;
	}

	.top {
		line-height: 100rpx;
	}

	.content {
		image {
			width: 32%;
			margin-bottom: 10rpx;
			margin-right: 2%;
		}

		image:nth-child(3n) {
			margin-right: 0%;
		}

		.mt-5 {
			margin-top: 10rpx;
		}
	}

	.pre-box {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #000000;
		z-index: 9999999;

		.swiper {
			width: 100vw;
			height: 100%;
		}
	}

	.inputComment {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.input_comment {
		background-color: #F5F2F0;
		padding: 20rpx;
		flex: 4;
	}

	.comment_btn {
		flex: 1;
		background-color: #55A532;
		color: #FFFFFF;
		margin-left: 20rpx;
		padding: 15rpx 0;
		text-align: center;
		border-radius: 20rpx;
	}
</style>
