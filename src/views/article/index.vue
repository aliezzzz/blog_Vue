<template>
	<div class="article-index">
        <div class="header">
			<span class="title use-font">
                <i class="icon-title iconfont icon-doubleleft" @click="backToIndex"></i>
                <span class="content">{{articleDetail.title}}</span>   
            </span>
			<div class="time-wrapper">
				<span class="time-prefix">创建时间：</span>
				<span class="time">{{formatDate(articleDetail.add_time)}}</span>
			</div>
		</div>
		<div v-html="articleDetail.content" class="content">
			{{articleDetail.content}}
		</div>
        <div class="article-footer">
			<span class="tag" v-if="cateName.category">{{cateName.category}}</span>
			<span class="tag" v-if="cateName.sub_category">{{cateName.sub_category}}</span>
			<div class="footer-right">
				<span class="msg">点击量：{{articleDetail.click_count}}</span>
				<span class="msg">评论数：{{articleDetail.comment_count}}</span>
			</div>
		</div>
        <comment @comment="_comment"></comment>
        <div class="comment-wrapper">
            <comment-item v-for="(item,index) in commentList" :key="index" :commentObj="item"></comment-item>
        </div>
        <div class="footer">
            <el-button @click="_nextPage('prev')" :disabled="prevDisabled" size="mini">上一页</el-button>
            <el-button @click="_nextPage('next')" :disabled="nextDisabled" size="mini">下一页</el-button>
        </div>
	</div>
</template>

<script>
	import { getArticlesItem } from "@/api/articles.js"
	import * as api from "@/api/comment.js"
    import {mapState, mapMutations, mapGetters} from 'vuex'
    import comment from './components/Comment'
    import commentItem from './components/CommentItem'
	export default {
        name: "Article-Index",
        props: ['id'],
		data(){
			return{
                articleDetail: {},
                commentList: [],

                nextUrl: '',
                prevUrl: '',
			}
		},
		computed: {
            ...mapGetters(['getIsLogin']),
            articleId() {
                const id = JSON.parse(this.id);
                return id
            },
            cateName() {
                if (this.articleDetail.cate_name){
                    return this.articleDetail.cate_name
                }else{
                    return {
                        category: '',
                        sub_category: ''
                    }
                }
            },
            nextDisabled(){
                if(this.nextUrl !== null){
                    return false
                }else{
                    return true
                }
            },
            prevDisabled(){
                if(this.prevUrl !== null){
                    return false
                }else{
                    return true
                }
            }
		},
		methods:{
            backToIndex(){
                this.$router.go(-1);
            },
            formatDate(date){
                if(date){
                    return date.slice(0,10)
                }
            },
            _comment(text){
                console.log(text + '1');
                if(text){
                    if(!this.getIsLogin){
                        this.$message.warning('游客没有评论权限')
                        return false
                    }
                    api.comment({
                        "post": this.articleId,
                        "content": text
                    }).then(res => {
                        this.$message.success('评论成功')
                        this._getCommentList();
                    })
                }else{
                    this.$message.warning('输入为空')
                }
            },
            _nextPage(type){
                let url = ''
                if(type=== 'next'){
                    url = this.nextUrl;
                }else{
                    url = this.prevUrl;
                }
                api.nextCommentPage(url)
                    .then( res => {
                        this.commentList = res.results;
                        this.nextUrl = res.next;
                        this.prevUrl = res.previous;
                    })
            },
            _getCommentList(){
                api.getCommentList(this.articleId)
                    .then(res => {
                        this.commentList = res.results;
                        this.nextUrl = res.next;
                        this.prevUrl = res.previous;
                    })
            },
            _getArtilceDetail(){
                getArticlesItem(this.articleId)
					.then(res => {
                        this.articleDetail = res;
                        console.log(this.articleDetail);
					})
            }
		},
		created(){
            this._getArtilceDetail();
            this._getCommentList();
		},
		components:{
            comment,
            commentItem
		}
	}
</script>

<style lang="stylus" scoped>
.header{
    height 40px
    display flex
    justify-content space-between
    .title{
        color #444
        font-size 25px
        line-height 40px
        font-weight bold
        .icon-title{
            cursor pointer
            color #3f9dff;
            font-size 25px
            line-height 40px
        }
        .content{
            padding-left 10px
            // border-left 4px solid #679c76
        }
    }
    .time-wrapper{
        margin-top 25px
        color: #777
        font-size 13px
    }
}
.content{
    width 100%
}
.article-footer{
    margin 20px 0
    padding-bottom 20px
    border-bottom 1.5px solid #ccc
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
.comment-wrapper{
    padding-top 10px
    margin 15px;
    min-height 50px
}
.footer{
    text-align center
}
</style>
