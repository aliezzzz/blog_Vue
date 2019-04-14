<template>
	<div class="index">
		<div class="no-content" v-if="!articleList.length">没有搜索到内容</div>
		<article-item 
			class="article"
			v-for="article in articleList"
			:key="article.id"
			:article="article">
		</article-item>
		<div class="footer">
            <el-button @click="_nextPage('prev')" :disabled="prevDisabled" size="mini">上一页</el-button>
            <el-button @click="_nextPage('next')" :disabled="nextDisabled" size="mini">下一页</el-button>
        </div>
	</div>
</template>

<script>
	import articleItem from "./components/ArticleItem"
	import {mapState, mapMutations, mapActions} from 'vuex'
	export default {
		name: "Index",
		data(){
			return{
			}
		},
		computed: {
			...mapState(['articleList', 'prev', 'next']),
			nextDisabled(){
                if(this.next !== null){
                    return false
                }else{
                    return true
                }
            },
            prevDisabled(){
                if(this.prev !== null){
                    return false
                }else{
                    return true
                }
            }
		},
		methods:{
			...mapActions(['nextArticlesPage']),
			_nextPage(type){
                let url = ''
                if(type=== 'next'){
                    url = this.next;
                }else{
                    url = this.prev;
				}
                this.nextArticlesPage(url)
            },
		},
		components:{
			articleItem
		}
	}
</script>

<style lang="stylus" scoped>
	.no-content{
		text-align: center;
		font-size: 18px;
		font-weight: bold;
		color: #666;
		padding: 40px;
	}
	.footer{
		text-align center
	}
</style>
