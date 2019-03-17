<template>
	<div class="date-wrapper">
		<div class="year" v-for="(value, key, index) in dateList" :key="index" @click="">
			<div class="year-title">{{key}}</div>
			<div class="date-item" v-for="(item, index2) in value" :key="index2">
				<span class="date">{{item.date}}</span>
				<span class="count">文章数量：{{item.count}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { archiveDate } from '../../api/articles'
export default {
	name: "Date",
	data(){
		return {
			dateList : []
		}
	},
	methods:{
		archiveDate(){
			archiveDate()
				.then( res => {
					this.dateList = res;
					console.log(res);
				})
		}
	},
	created() {
		this.archiveDate();
	},
	components:{

	}
}
</script>

<style scoped lang="stylus">
	.date-wrapper{
		.year{
			.year-title{
				margin 5px 0
				padding 5px 10px
				font-size 20px
				font-weight bold
				color: #999
				border-left 4px solid #679c76
			}
			.date-item{
				width 200px
				cursor pointer
				.date{
					margin-right 20px
					font-weight bold
				}
				.count{

				}
			}
		}
	}
</style>
