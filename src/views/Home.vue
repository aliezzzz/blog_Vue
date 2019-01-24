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
                <router-view></router-view>
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
    height 100%
    .left-wrapper
        flex 0 0 300px
        z-index 100
        height 100%
        box-shadow 0 0 13px 0.5px #444c55
        background url("../assets/sidebar-bg.jpg")
        background-size cover
        background-repeat no-repeat
        background-position-x center
    .right-wrapper
        width 100%
        .content-wrapper
            height 100%
</style>
