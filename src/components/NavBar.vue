<template>
	<div class="nav-bar">
		<div class="nav-left">
			<ul>
				<li class="nav-item use-font" :class="{'active':$route.path === item.index}" v-for="(item,index) in navItem" :key="index" @click="navTo(item.index)">
					<span class="nav-title"><i :class="'iconfont '+item.icon"></i>{{item.title}}</span>
				</li>
			</ul>
		</div>
		<div class="nav-mid">
			<el-input class="nav-input" size="small" v-model="searchCond" placeholder="请输入关键词搜索" clearable @clear="clearSearch">
				<el-button class="nav-btn" slot="append" icon="el-icon-search" size="mini" @click="searchArticles"></el-button>
			</el-input>
		</div>
		<div class="nav-right">
			<el-button v-if="getIsLogin" size="small" class="nav-btn" @click="logout">退出</el-button>
			<el-dropdown v-else>
				<el-button type="primary" size="small" class="nav-btn">
					登录<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item @click.native="goLogin">登录<i class="icon iconfont icon-log-in"></i></el-dropdown-item>
					<el-dropdown-item @click.native="goRegister">注册<i class="icon iconfont icon-zhuce"></i></el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
		name: "NavBar",
		data () {
			return{
				token: sessionStorage.getItem('token'),
				searchCond: '',
				navItem:[{
					title: '首页',
					index: '/index',
					icon: 'icon-container'
				},{
					title: '日期归档',
					index: '/date',
					icon: 'icon-calendar1'
				},{
					title: '标签分类',
					index: '/category',
					icon: 'icon-filter'
				},{
					title: '订阅博客',
					index: '/rss',
					icon: 'icon-rss'
				}]
			}
		},
		computed:{
			...mapGetters(['getIsLogin']),
		},
		created(){
			this.searchArticle('');
		},
		methods:{
			...mapMutations(['setLogin']),
			...mapActions(['searchArticle']),
			logout(){
				sessionStorage.removeItem('token');
				this.setLogin(false);
				this.$message.success('已退出登录')
			},
			navTo(index){
				if (index !== '/rss'){
					if (index === '/index'){
						this.searchArticle('');
					}
					this.$router.push(index);
				}else{
					window.open('http://101.132.171.68' + index)
				}
			},
			goRegister(){
				console.log('test');
				this.$router.push('/register')
			},
			goLogin(){
				this.$router.push('/login')
			},

			searchArticles(){
				this.searchArticle(this.searchCond);
				console.log(this.$route);
				if (this.$route.path !== '/index'){
					this.$router.push('/index')
				}
			},
			clearSearch() {
				this.searchCond = '';
				this.searchArticle(this.searchCond);
				if (this.$route.path !== '/index'){
					this.$router.push('/index')
				}
			}
		}
	}
</script>

<style lang="stylus">
	.icon{
		margin-left: 10px;
		color #6495ed
	}
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
