<template>
	<view class="p-10">
		<view class="title">
			性别&年龄
		</view>
		<view class="m-t-10 flex jcc">
			<view class=" t-a-c m-lr-10" @click="sex=0">
				<image src="/static/me/man.png" mode="" class="img" :class="!sex?'bor_c':''"> </image>
				<view class="m-tb-25" :style="{color:!sex?'#B3D4FC':''}">我是男生</view>
			</view>
			<view class="t-a-c m-lr-10" @click="sex=1">
				<image src="/static/me/woman.png" mode="" class="img" :class="sex?'bor_n':''"></image>
				<view class="m-tb-25" :style="{color:sex?'#ff0000':''}">我是女生</view>
			</view>
		</view>

		<view class="title">
			生日：
		</view>
		<view class="birth flex jcc a-i-fe">
			<input type="number" v-model="years" placeholder="1990" maxlength="4" />年
			<input type="number" v-model="month" placeholder="10" maxlength="2" />月
			<input type="number" v-model="day" placeholder="30" maxlength="2" />日

		</view>
		<view class="next t-a-c font-w-7" @click="next">
			下一步 >>
		</view>
	</view>

</template>

<script>
	import dayjs from 'dayjs'
	export default {
		components: {},
		props: {},
		data() {
			return {
				sex: 0, //0 男生
				years: '1990',
				month: '1',
				day: '1'
			}
		},
		methods: {
			next() {
				let time = this.years + '-' + this.month + '-' + this.day
				if (this.month > 0 && this.day > 0) {
					if (this.years && this.month && this.day) {
						let a = dayjs().diff(dayjs(time), 'years')
						if (a < 18 && a > 0) {
							uni.showToast({
								title: "未满18岁",
								icon: "none"
							})
						} else {
							this.$emit('update:info', 2)
						}
					} else uni.showToast({
						title: "请完善生日信息",
						icon: "none"
					})
				} else uni.showToast({
					title: "请完善生日信息",
					icon: "none"
				})
			}
		},
		mounted() {

		}

	}
</script>

<style scoped lang="scss">
	.title {
		font-size: 38rpx;
		font-weight: 700;
		margin: 60rpx 0;
	}

	.img {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		background-color: #F5F2F0;
		margin: auto;
	}

	.bor_c {
		border: 4rpx solid #B3D4FC;
	}

	.bor_n {
		border: 4rpx solid #ff0000;
	}

	.birth {
		input {
			height: 60rpx;
			line-height: 60rpx;
			width: 140rpx;
			font-size: 40rpx !important;
			text-align: center;
			border-bottom: 2rpx solid #F5F2F0;
			margin: 0 20rpx;
		}
	}

	.next{
		position: fixed;
		bottom: 100rpx;
		left: 0;
		right: 0;
	}
</style>
