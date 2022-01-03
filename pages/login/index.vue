<template>
	<view class="p-10">
		<view class="title mb-10">
			登录/注册
		</view>
		<view class="content m-tb-25">
			<view class="mb-10">
				手机号：
			</view>
			<view class="input_item">
				<input type="number" v-model="phone" placeholder="请输入手机号码" class="input" maxlength="11" />
			</view>
			<view class="mb-10">
				密码：
			</view>
			<view class="input_item">
				<input type="text" v-model="password" placeholder="请输入密码" />
			</view>
			<view class="flex jcsb input_item m-t-10" v-if="isregister">
				<input type="text" v-model="code" placeholder="请输入验证码" />
				<view class="" style="color: #16adc4;" @click="getCode">
					{{text}}
				</view>
			</view>
		</view>

		<view class="">
			<button class="mb-10 login_btn" @click="login">登录</button>
			<button class="mb-10" @click="register">注册</button>
		</view>
		<view class=" t-a-c">
			<image src="/static/me/freeBox_15.png" mode="" class="login"></image>
			<view class="m-t-10">微信授权登录</view>
		</view>


		<privacy v-show="!privacy" :privacy.sync='privacy'></privacy>
	</view>

</template>

<script>
	import privacy from './components/privacy.vue'
	export default {
		components: {
			privacy
		},
		props: {},
		data() {
			return {
				privacy: uni.getStorageSync('Privacy_agreee'),
				text: '发送验证码',
				timer: null,
				time: 60,
				isregister: false,
				phone: '',
				password: '',
				code: '',
				rules: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
			}
		},
		methods: {
			login() {
				if (!this.rules.test(this.phone)) {
					return uni, uni.showToast({
						title: '请输入正确的手机号码',
						icon: "none"
					});
				}
			},
			register() {
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},
			getCode() {
				if (!this.timer) {
					this.text = this.time + 's后重新发送'
					this.timer = setInterval(() => {
						this.time = this.time - 1;
						this.text = this.time + 's后重新发送'
						if (this.time < 0) {
							clearInterval(this.timer)
							this.timer = null
							this.text = '发送验证码'
						}
					}, 1000)
				} else {
					uni.showToast({
						title: "请稍后再发送",
						icon: "none"
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
	.login {
		width: 160rpx;
		height: 160rpx;
		margin-top: 20rpx;
	}

	.title {
		font-size: 36rpx;
		font-weight: 700;
		margin-top: 12%;
	}

	.input_item {
		border-radius: 20rpx;
		padding: 20rpx;
		border: 2rpx solid #000000;
		margin-bottom: 20rpx;
	}

	.login_btn {
		background-color: #28C445;
		color: #FFFFFF;

	}
</style>
