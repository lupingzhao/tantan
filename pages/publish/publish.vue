<template>
	<view class="p-10">
		<textarea v-model="text" placeholder="这一刻的想法..."  class="text" maxlength="200"/>
		<view class="t-a-r m-t-10">
			<button type="primary" @click="push" size="mini" :disabled="!text">发表</button>
		</view>

		<uni-file-picker v-model="imageValue"  fileMediatype="image" mode="grid"  :limit="9" @input="input"  />
		
	</view>

</template>

<script>
	export default {
		components: {},
		data() {
			return {
				text: '',
				imageValue:[]
			}
		},
		methods: {
			input(e){
				this.imageValue=e
			},
			// 发表
			push(){
				uni.navigateBack({
					delta:1
				})
				console.log(this.imageValue);
			}
		},
		mounted() {

		}
	}
</script>

<style scoped lang="scss">
.text{
	margin-top: 20rpx;
	border-bottom: 2rpx solid #F1F1F1;
}

</style>
