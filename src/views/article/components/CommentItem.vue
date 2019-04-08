<template>
    <div class="comment-item-wrapper">
        <div class="comment-item">

            <div class="comment-item-wrapper">
                <div class="comment-header">
                    <span class="username">{{commentObj.author_name}}</span>
                </div>
                <div class="comment-content" v-if="commentObj.status">
                    {{commentObj.content}}
                </div>
                <div v-else class="comment-content blocked">此评论被封禁</div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'CommentItem',
    props:{
        commentObj: Object
    },
    data(){
        return{
        }
    },
    computed:{
    },
    methods:{
    },

}
</script>
<style lang="stylus" scoped>
.comment-item-wrapper{
    .comment-item{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .comment-item-wrapper{
            width: 100%;
            min-height: 60px;
            background-color: #F5F7FA;
            .comment-header{
                padding: 7px 12px 4px 12px;
                .username{
                    cursor: pointer;
                    font-weight: bold;
                    color: #009FEB;
                }
            }
            .comment-content{
                margin: 0 12px 10px;
                font-size 14px
            }
            .blocked{
                font-weight bold
            }
        }
    }
}

</style>
