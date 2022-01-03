<template>
	<view class="content">
		<card></card>
	</view>
</template>

<script>

	import card from '@/components/card/index.vue'
	export default {
		components:{card},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>
