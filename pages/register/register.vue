<template>
  <view>
    <view class="">
    	<basics v-if="info==1" :info.sync='info'></basics>
			<nicknames v-if="info==2" :info.sync='info'></nicknames>
    </view>
  </view>

</template>

<script>
	import basics from './mode/basics.vue'
	import nicknames from './mode/nickname.vue'
  export default {
    components: {basics,nicknames},
    props: {},
    data() {
      return {
				info:1
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
