<template>
	<div class="side-bar">
		<div class="wrapper">
			<img class="side-title" src="../assets/sidebar-title.png">
			<img class="side-avatar" src="../assets/avatar.jpg">
			<img class="side-tag" src="../assets/sidebar-tag.png">
			<div class="info">
				<div>GitHub:&nbsp;<a target="_blank" href="https://github.com/aliezzzz">https://github.com/aliezzzz</a></div>
				<div>Email:&nbsp;a504141280@gmail.com</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SideBar"
	}
</script>

<style lang="stylus" scoped>
	.side-bar
		position relative
		height 100%
		width 300px
		.wrapper
			width 300px
			position fixed
			height 100%
			box-shadow 0 0 13px 0.5px #444c55
			background url("../assets/sidebar-bg.jpg")
			background-size cover
			background-repeat no-repeat
			background-position-x center
			.side-title
				position absolute
				height 80px
				top 150px
				left -80px
				margin-left 50%
			.side-avatar
				position absolute
				height 80px
				top 250px
				left -40px
				margin-left 50%
				border-radius 50%
			.side-tag
				position absolute
				width 150px
				top 350px
				left -75px
				margin-left 50%
			.info{
				position absolute
				margin-left 45px
				top 425px
				font-family Verdana
				text-align center
				div{
					color #eee
					font-size 12px
					line-height 20px
					a{
						text-decoration none
						color #eee
					}
					a:visited{
						color #eee
					}
				}
			}
</style>
