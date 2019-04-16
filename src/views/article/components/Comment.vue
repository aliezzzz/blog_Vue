<template>
    <div class="comment-input">
        <div class="input-wrapper">
            <div class="input-left" @keydown.enter.ctrl="comment">
                <p 
                    contenteditable="plaintext-only" 
                    ref="inputP" 
                    class="input-p" >
                    {{inputValue}}
                </p>
            </div>
            <div class="input-right">
                <div class="btn-wrapper">
                    <div class="input-btn" @click="comment">评论<i class="icon-btn iconfont icon-comment"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Comment',
    data(){
        return{
            inputValue: '',
        }
    },
    methods:{
        comment(){
            const text = this.$refs.inputP.textContent;
            console.log(text);
            this.$emit('comment', text);
            this.$refs.inputP.textContent = '';
            this.inputValue = '';
        }
    },
    mounted(){
        this.$refs.inputP.textContent = ''
    }

}
</script>
<style lang="stylus" scoped>
.comment-input{
    margin-left: 10px;
    display: flex;
    align-items: center;
    .avatar{
        margin-right: 10px;
        img{
            border-radius: 50%;
            width: 35px;
            height: 35px;
        }
    }
    .input-wrapper{
        flex: 1;
        display: flex;
        min-height: 35px;
        border-radius: 20px;
        border: 1px solid #e6e6e6;
        .input-left{
            flex: 1;
            max-height: 105px;
            overflow-y: scroll;
            .input-p{
                color: #333333;
                font-size: 14px;
                margin: 5px;
                padding: 5px;
                outline:none;
            }
        }
        .input-right{
            width: 100px;
            display: flex;
            align-items: center;
            z-index: 2;
            margin-left: -20px;
            .btn-wrapper{
                height 100%
                width 86px
                background-color #fff
                display:flex;
                align-items:center;
                justify-content center
                text-align center
                .input-btn{
                    cursor: pointer;
                    padding: 3px 18px;
                    border: 1.5px solid #009FEB;
                    font-size: 14px;
                    color: #009FEB;
                    font-weight: bold;
                    border-radius: 20px;
                    .icon-btn{
                        margin-left 3px
                    }
                }
            }
        }
    }
}
</style>
