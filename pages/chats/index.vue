<template>
	<view>
		<movable-area class="movable-area">
			<movable-view direction="horizontal" out-of-bounds :x='x' :y="y" class="movable-view an" @change="change"
				@touchend="end"  >
				<view class="p-10 view" :class="x>30?'an':''">
					hjkhjk{{index}}
				</view>
			</movable-view>
		</movable-area>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {
				x: 0,
				y: 0,
				old: {
					x: 0,
					y: 0
				}
			}
		},
		methods: {
			change(e) {
				console.log(e);
				this.old.x = e.detail.x
				this.old.y = e.detail.y
				console.log(e.detail.x);
				// if()
			},
			end(e) {
				this.x = this.old.x
				this.y = this.old.y
				console.log("介绍", e);
				this.$nextTick(()=> {
					this.x = 0
					this.y = 0
				})

			}
		},
		mounted() {

		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.movable-area {
		background-color: #034e5a;
		height: 100vh;
		width: 100vw;
		position: relative;

		.movable-view {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 40vw;
			height: 40vh;
		
			margin-left: -20vw;
			margin-top: -20vh;
			.view{
					background-color: #18BC37;
			}
		}
		.an{
			transform: rotateX(90deg);
		}
	}
</style>
