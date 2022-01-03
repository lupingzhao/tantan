<template>
	<view class="p-10">
		<view class="m-tb-25 font-w-7" @click="back">
				上一步
		</view>
		<view class="title">
			昵称&密码
		</view>

		<view class="content m-tb-25">
			<view class="mb-10">
				手机号：
			</view>
			<view class="input_item">
				<input type="number" v-model="phone" placeholder="请输入手机号码" class="input" @blur="blur(0)" maxlength="11"/>
			</view>
			<view class="mb-10">
				昵称：
			</view>
			<view class="input_item">
				<input type="text" v-model="nickname" placeholder="请输入昵称(10字以内)" maxlength="10"/>
			</view>
			<view class="mb-10">
				密码：
			</view>
			<view class="input_item">
				<input type="text" v-model="password" placeholder="请输入密码(不小于6位)" @blur="blur(2)"/>
			</view>

		</view>

		<view class="next t-a-c font-w-7" @click="next">
			下一步 >>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {
				phone: '',
				nickname: '',
				password: '',
				rules: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
			}
		},
		methods: {
			back() {
				this.$emit('update:info', 1)
			},
			next() {
				this.$emit('update:info', 3)
				if(this.phone&&this.password&&this.nickname){
					this.$emit('update:info', 3)
				}else uni.showToast({
					title:"请完善信息",
					icon:"none"
				})
			},
			blur(index){
				let text=''
				if(index==0){
					if(!this.rules.test(this.phone)){
						text="请输入正确的手机号"
					}
				}else if(index==2){
					if(this.password.length<6){
						text="密码长度最低为6位"
					}
				}
				if(text){
					uni.showToast({
						title:text,
						icon:"none"
					})
				}
				
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

.next{
	position: fixed;
	bottom: 100rpx;
	left: 0;
	right: 0;

}
	.input_item {
		border-radius: 20rpx;
		padding: 20rpx;
		border: 2rpx solid #000000;
		margin-bottom: 20rpx;
	}
</style>
