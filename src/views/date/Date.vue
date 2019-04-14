<template>
	<div class="date-wrapper">
		<div class="year" v-for="(year, index) in dateList" :key="index" @click="nacToArticles(year)">
			<div class="year-title">{{Object.keys(year)[0]}}</div>
			<div class="date-item" v-for="(item, index2) in year[Object.keys(year)[0]]" :key="index2" @click.stop="nacToArticles(item.date)">
				<span class="date">{{item.date}}</span>
				<span class="count">文章数量：{{item.count}}</span>
			</div>
			<!-- <div v-for="(value, key, index1) in year" :key="index1">
				<div class="date-item" v-for="(item, index2) in value" :key="index2" @click.stop="nacToArticles(item.date)">
					<span class="date">{{item.date}}</span>
					<span class="count">文章数量：{{item.count}}</span>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
import { archiveDate } from '../../api/articles';
import { mapActions } from 'vuex';
export default {
	name: "Date",
	data(){
		return {
			dateList : []
		}
	},
	methods:{
		...mapActions(['getArticleByTime']),
		archiveDate(){
			archiveDate()
				.then( res => {
					console.log(res);
					this.dateList = this.formatDate(res);
					console.log(this.dateList);
				})
		},
		formatDate(list){
			let newList = list.reverse();
			let formatList = []
			newList.forEach( item => {
				const key = Object.keys(item)[0]
				const newItem = item[key].reverse();
				let newObj = {};
				newObj[key] = newItem;
				formatList.push(newObj);
			})
			return formatList
		},
		nacToArticles(time){
			this.getArticleByTime(time);
			this.$router.push('/index');
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
				margin 10px 20px
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
