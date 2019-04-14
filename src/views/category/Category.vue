<template>
	<div class="date">
		<el-collapse v-model="activeName" accordion>
			<el-collapse-item v-for="(cate, index) in cateList" :key="index" :name="index" :title="cate.name">
				<span class="tag" v-for="(sub, index2) in cate.sub_category" :key="index2" @click="navToArticles(sub.id)">{{sub.name}} </span>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
import { getCategory } from '../../api/articles';
import {mapActions} from 'vuex'
export default {
	name: "Category",
	data()
	{
		return {
			activeName: 0,
			cateList: []
		}
	},
	methods:{
		...mapActions(['getArticleByCate']),
		navToArticles(cate){
			console.log('123');
			this.getArticleByCate(cate);
			this.$router.push('/index');
		},
	},
	created() {
		getCategory()
			.then( res => {
				this.cateList = res;
			})
	},
	components:{

	}
}
</script>

<style scoped lang="stylus">
.tag{
	line-height: 40px;
    cursor: pointer;
    margin-right: 20px;
    padding: 8px;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid #5a87a563;
    color: #409eff;
    background-color: #409eff21;
}
</style>
