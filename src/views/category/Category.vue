<template>
	<div class="date">
		<el-collapse v-model="activeName" accordion>
			<el-collapse-item v-if="cate.is_active" v-for="(cate, index) in cateList" :key="index" :name="index" :title="cate.name">
				<el-tag v-for="(sub, index2) in cate.sub_category" :key="index2">{{sub.name}}</el-tag>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
import { getCategory } from '../../api/articles'
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

<style scoped>

</style>
