<template>
  <view>
    <view class="">
    	<basics v-show="info==1" :info.sync='info'></basics>
			<nicknames v-show="info==2" :info.sync='info'></nicknames>
			<interest v-show="info==3" :info.sync='info'></interest>
    </view>
  </view>

</template>

<script>
	import basics from './mode/basics.vue'
	import nicknames from './mode/nickname.vue'
	import interest from './mode/interest.vue'
  export default {
    components: {basics,nicknames,interest},
    props: {},
    data() {
      return {
				info:3
			}
    },
    methods: {
		
		},
    mounted() {

    }
  }
</script>

<style scoped lang="scss">

</style>
