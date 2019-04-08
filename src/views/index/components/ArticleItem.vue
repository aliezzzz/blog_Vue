<template>
	<div class="articleitem-wrapper" :class="{'mouseover': mouseover}" @mouseover="mouseover=true" @mouseleave="mouseover=false" ref="article">
		<div class="header" @click="toArticlePage">
			<span class="title use-font">{{article.title}}</span>
			<div class="time-wrapper">
				<span class="time-prefix">创建时间：</span>
				<span class="time">{{formatDate(article.add_time)}}</span>
			</div>
		</div>
		<div v-html="article.content" class="content">
			{{article.content}}
		</div>
		<div class="footer">
			<span class="tag" v-if="article.cate_name.category">{{article.cate_name.category}}</span>
			<span class="tag" v-if="article.cate_name.sub_category">{{article.cate_name.sub_category}}</span>
			<div class="footer-right">
				<span class="msg">点击量：{{article.click_count}}</span>
				<span class="msg">评论数：{{article.comment_count}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import * as api from '@/api/articles.js'
	export default {
		name: "ArticleItem",
		props:{
			article: Object
		},
		data () {
			return {
				mouseover: false
			}
		},
		methods:{
			formatDate(date){
				return date.slice(0,10)
			},
			toArticlePage(){
				this.$router.push({name: 'artilce-page', params: {id: this.article.id}})
			}
		},
		created(){
		}
	}
</script>

<style lang="stylus" scoped>
	.mouseover{
		box-shadow 0px 10px 30px 1px #e9e9e9
		margin-top 10px
		transition ease .5s
	}
	.articleitem-wrapper{
		width 100%
		height 200px
		padding 10px 30px
		margin-top 5px
		box-sizing border-box
		border-radius 5px
		.header{
			height 40px
			cursor pointer
			display flex
			justify-content space-between
			.title{
				padding-left 10px
				color #444
				font-size 25px
				line-height 40px
				font-weight bold
				border-left 4px solid #679c76
			}
			.time-wrapper{
				margin-top 25px
				color: #777
				font-size 13px
				.time-prefix{
				}
				.time{

				}
			}
		}
		.content{
			height 116px
			width 100%
			line-height 25px
			word-wrap break-word
			word-break break-all
			overflow hidden
			text-overflow ellipsis
		}
		.footer{
			margin-top 5px
			.tag{
				margin-right 5px
				padding 2px 10px
				font-size 14px
				background-color #95bfad
				border-radius 5px
				color #fff
			}
			.footer-right{
				display inline-block
				float right
				.msg{
					color #777
					font-size 14px
					margin-right 10px
				}
			}
		}
	}
</style>
