<template>
	<div class="index">
		<article-item 
			@click="toArticlePage"
			class="article"
			v-for="article in articleList"
			:key="article.id"
			:article="article">
		</article-item>
	</div>
</template>

<script>
	import articleItem from "./components/ArticleItem"
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
			},
			toArticlePage(){
				console.log('123');
				// api.getArticlesItem(id)
				// 	.then(res => {
				// 		console.log(res);
				// 	})
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

<style lang="stylus" scoped>
	.article{
		margin-top 5px
	}
</style>
