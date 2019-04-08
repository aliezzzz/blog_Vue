<template>
    <div class="home">
        <div class="left-wrapper">
            <side-bar></side-bar>
        </div>
        <div class="right-wrapper">
            <div class="nav-wrapper">
                <nav-bar></nav-bar>
            </div>
            <div class="content-wrapper">
                <el-card class="box-card">
                    <router-view></router-view>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import sideBar from '../components/SideBar'
import navBar from '../components/NavBar'
export default {
    name: 'home',
    components:{
        sideBar,
        navBar
    }
}
</script>

<style lang="stylus">
.home
    display flex
    align-items flex-start
    height 100%
    .left-wrapper
        flex 0 0 300px
        z-index 100
        height 100%
    .right-wrapper
        flex 1 1 auto
        .content-wrapper
            margin-top 10px
            margin-left 10px
</style>
