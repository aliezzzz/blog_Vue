<template>
	<div class="index">
		<el-card class="box-card">
			<!--<div slot="header" class="clearfix">-->
				<!--<span>卡片名称</span>-->
				<!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
			<!--</div>-->
			<!--<div v-for="o in 4" :key="o" class="text item">-->
				<!--{{'列表内容 ' + o }}-->
			<!--</div>-->
		</el-card>
	</div>
</template>

<script>
	export default {
		name: "Index",
		data(){
			return{
			}
		}
	}
</script>

<style lang="stylus">
	.index{
		padding 10px
		height 93%
	}
	.box-card{
		height 100%
	}
</style>