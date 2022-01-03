<template>
	<view class="p-10 inserted">
		<view class="m-t-10 font-w-7" @click="back">
			上一步
		</view>
		<view class="title">
			兴趣&爱好
		</view>
		<view class="flex flex-wrap jcsa">
			<view v-for="(item,index) in list" :key="index" :class="select.includes(item)?'isSelect':''" class="item"
				@click="selected(item)">
				<view class="">
					{{item}}
				</view>
				<view class="">
					<image src="/static/me/sharpicons.png" mode="widthFix" class="img" v-show="!select.includes(item)">
					</image>
					<image src="/static/me/sharpicons_1.png" class="img" mode="widthFix" v-show="select.includes(item)">
					</image>
				</view>
			</view>
		</view>
		<button class="next t-a-c " @click="next">
			关注{{select.length}}个兴趣爱好进入 >>
		</button>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {
				select: [],
				list: [
					'hhh1',
					'hhh2',
					'hhh3',
					'hhssssh4',
					'hhh5',
					'hhh6',
					'hhh7',
					'hhh8',
					'hhh9',
					'hhh10',
				]
			}
		},
		methods: {
			back() {
				this.$emit('update:info', 2)
			},
			selected(item) {
				if (this.select.indexOf(item) >= 0) {
					this.select.splice(this.select.indexOf(item), 1)
				} else this.select.push(item)
			},
			next() {
				if (this.select.length <= 0) {
					return uni.showToast({
						title: "请至少选择一个兴趣",
						icon: "none"
					})
				}
			},

		},
		mounted() {

		}

	}
</script>

<style scoped lang="scss">
	.title {
		font-size: 38rpx;
		font-weight: 700;
		margin: 30rpx 0;
	}

	.img {
		width: 40rpx;
		margin-top: 10rpx;
	}

	.next {
		position: fixed;
		bottom: 100rpx;
		left: 50%;
		transform: translateX(-50%);
		width: fit-content;
		border-radius: 20rpx;
	}

	.line_in {
		width: 6rpx;
		height: 50rpx;
	}

	.item {
		margin: 20rpx;
		padding: 30rpx;
		border-radius: 50%;
		text-align: center;
	}

	.isSelect {
		background-color: #F5F2F0;
		transform: scaleX(1.2);
	}
</style>
