<template>

	<view class="page" :style="{height:`${sysHeight}px`,width:`${sysWidth}px`}">
		
		<movable-area class="move-area"
			:style="{height:`${3*sysHeight}px`,width:`${3*sysWidth}px`,top:`${-sysHeight}px`,left:`${-sysWidth}px` }">
			<movable-view id="move" class="move-view" v-for="(item,index) in dataList" :key="item._id"
				:style="{zIndex:`${99999-index}`}" direction="horizontal" :x="item.moveX" :y="item.moveY" out-of-bounds
				v-if="index<=number" :disabled="index!=0" :animation="item.animation" @tap="tapCard(item)"
				@touchend="touchend" @touchmove="touchMove" @touchstart="touchStart">
				<view class="cardBox" :animation="animationData[index]"
					:style="{transform:index<number?`rotate(${rotate*index}deg) scale(${ 1-(1-scale.x)*index },${ 1-(1-scale.y)*index }) skew(${skew.x*index}deg, ${skew.y*index}deg) translate(${translate.x*index}px, ${translate.y*index}px)`:`rotate(${rotate*(number-1)}deg) scale(${ 1-(1-scale.x)*(number-1) },${ 1-(1-scale.y)*(number-1) }) skew(${skew.x*(number-1)}deg, ${skew.y*(number-1)}deg) translate(${translate.x*(number-1)}px, ${translate.y*(number-1)}px)`,opacity:index<number?`${ 1-(1-opacity)*index }`:`${ 1-(1-opacity)*(number-1) }`}">
					<card-box :src="item.src" :number="item.number" :name="item.name" :sex="item.sex"
						:constellation="item.constellation" :address="item.address" :old="item.old" ref="cardBox">
					</card-box>
					<button @click="ch"> 撤回</button>
				</view>
			</movable-view>
		</movable-area>

	</view>
</template>

<script>
	import clCardDel from "@/components/cl-cardDel/cl-cardDel";
	import cardBox from "./card-box";
	export default {
		mixins: [clCardDel],
		components: {
			cardBox
		},
		data() {
			return {
del:''
			}
		},
		onLoad() {

		},
		async mounted() {

		},
		methods: {
			tapLove() {
				if (this.dataList.length == 0) return
				this.moveX = 10 //设置角度y为0水平
				this.moveY = 1
				this._del()
			},
			tapLoathe() {
				if (this.dataList.length == 0) return
				this.moveX = -10 //设置角度
				this.moveY = 1
				this._del()
			},
			//设置初始参数
			init() {
				this.number = 3 //card 3
				this.translate = {
					x: 0,
					y: 8
				} //y下移10px
				this.scale = {
					x: 0.95,
					y: 1
				} //x 缩小0.9
				this.type = true

				this.moveRotate = { //设置位移图片旋转角度距离  card中心点 - 指向坐标
					x: 0,
					y: uni.getSystemInfoSync().screenHeight,
				}
			},
			//获取数据
			getData() {
				let promise = new Promise((resolve, reject) => {
					let dataGroup = []
					for (var i = 1; i < 6; i++) {
						dataGroup.push({
							src: `/static/img/${i}.jpg`,
							sex: Math.round(Math.random()),
							address: '杭州(100km)',
							name: '可爱的小姐姐',
							constellation: '双鱼座',
							number: 10,
							old: 18
						})
					}
					this.dataList = [...this.dataList, ...dataGroup]
					resolve()
				})
				return promise
			},
			//触摸中判断
			moveJudge(x, y, ratio) {
				let el = this.$refs.cardBox[0]
				if(y<-40){
					el.moveTop(Math.abs(y))
					return
				}
				if (x > 20) {
					el.moveRight(ratio)
				} else if (x < -20) {
					el.moveLeft(ratio)
				} else {
					el.moveCenter()
				}
			},
			//触摸结束判断
			endJudge(x, y) {
				let el = this.$refs.cardBox[0]
				if (Math.abs(x) < 40 && Math.abs(y) < 80) {
					this._back()
					el._back()
				} else {
					this._del()
					el.clearAnimation()
				}
			},
			//删除card时
			delCard(x, y) {
				this.del=this.dataList[0]
				if (x > 0 && y > -200) {
					console.log(this.dataList[0], '喜欢')
				}
				if (y < -200) {
					console.log(this.dataList[0], '非常喜欢')
				}
				if (x < 0 && y > -200) {
					console.log(this.dataList[0], '不喜欢')
				}
			},
			ch(){
				this.dataList.unshift(this.del)
			},
			tapCard(e,item) {
				console.log(item, "点击")
			}
		}

	}
</script>


<style lang="scss" scoped>
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 12px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-xinaixin:before {
		content: "\e601";
	}

	.icon-chacha1:before {
		content: "\e646";
	}

	.page {
		width: 100vw;
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 0;
		top: 0;
	}

	.move-area {
		position: absolute;
	}

	.move-view {
		width: 700rpx;
		position: absolute;
		height: 1000rpx;
		left: 50%;
		top: 50%;
		margin-left: -350rpx;
		margin-top: -600rpx;
	}

	.cardBox {
		position: relative;
		width: 700rpx;
		height: 1100rpx;
	}

	.love {
		position: absolute;
		width: 80rpx;
		height: 80rpx;
		top: 10rpx;
		left: 10rpx;
		border-radius: 50%;
		background-color: #EA2A36;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
		color: #FFFFFF;
	}

	.loathe {
		position: absolute;
		width: 80rpx;
		height: 80rpx;
		top: 10rpx;
		right: 10rpx;
		border-radius: 50%;
		background-color: #A09E9F;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
		color: #FFFFFF;
	}
</style>
