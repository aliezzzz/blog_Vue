<template>
	<div class="index">
		<article-item class="article"
		              v-for="article in articleList"
		              :key="article.id"
		              :article="article">
		</article-item>
	</div>
</template>

<script>
	import articleItem from "./ArticleItem"
	import * as api from "../../api/articles"
	import {mapState, mapMutations} from 'vuex'
	export default {
		name: "Index",
		data(){
			return{
			}
		},
		computed: {
			...mapState(['articleList', 'prev', 'next'])
		},
		methods:{
			...mapMutations(['setArticle']),
			getArticleList(){
				api.getArticlesList('')
					.then(res =>{
						console.log(res);
						this.setArticle(res);
					})
			}
		},
		created(){
			this.getArticleList();
		},
		components:{
			articleItem
		}
	}
</script>

<style lang="stylus">
	.article{
		margin-top 5px
	}
</style>
