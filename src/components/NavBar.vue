<template>
	<div class="nav-bar">
		<div class="nav-left">
			<ul>
				<li class="nav-item use-font" :class="{'active':$route.path === item.index}" v-for="(item,index) in navItem" :key="index" @click="navTo(item.index)">
					<span class="nav-title">{{item.title}}</span>
				</li>
			</ul>
		</div>
		<div class="nav-mid">
			<el-input class="nav-input" size="small" v-model="searchCond" placeholder="请输入关键词搜索">
				<el-button class="nav-btn" slot="append" icon="el-icon-search" size="mini"></el-button>
			</el-input>
		</div>
		<div class="nav-right">
			<el-dropdown>
				<el-button type="primary" size="small" class="nav-btn">
					登录<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>登录</el-dropdown-item>
					<el-dropdown-item>退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	export default {
		name: "NavBar",
		data () {
			return{
				searchCond: '',
				navItem:[{
					title: '首页',
					index: '/index',
				},{
					title: '日期归档',
					index: '/date',
				},{
					title: '标签分类',
					index: '/category',
				},{
					title: '订阅博客',
					index: '',
				}]
			}
		},
		methods:{
			navTo(index){
				this.$router.push(index);
			}
		}
	}
</script>

<style lang="stylus">
	.nav-bar{
		position relative
		width 100%
		margin-left -10px
		background-color #fff
		border-bottom 1px solid #eee
		/*border-radius 5px*/
		.nav-btn{
			color #fff
			background-color #95BFAD
			border-color: #95BFAD
		}
		.nav-left{
			width 600px
			ul{
				margin 0
				padding-left 20px
				display inline-block
				.nav-item{
					display inline-block
					padding 15px 10px
					height 100%
					width 100px
					font-weight: 300
					color #999
					text-align center
					cursor pointer
					&.active{
						font-weight 700
						color #111
						border-bottom 3px solid #5A87A5
					}
				}
			}
		}
		.nav-mid{
			position absolute
			top 13px
			right 100px
			.nav-input{
				.el-input-group__append{
					background-color #95BFAD
					border-color: #95BFAD
				}
				.nav-btn{
					color #fff
				}
			}
		}
		.nav-right{
			position: absolute;
			top: 13px;
			right: 0;
			height: 40px;
			width: 75px;
		}
	}
</style>
