<template>
    <div class="login">
        <div class="form-wrapper">
            <el-form :model="loginForm" :rules="loginRules" label-width="100px" ref="loginForm">
                <el-form-item prop="username" label="用户名/邮箱">
                    <el-input class="form-input" v-model="loginForm.username" placeholder="请输入用户名或邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input class="form-input" v-model="loginForm.password" placeholder="请输入密码" type="password" @keydown.enter="login"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="footer">
            <el-button class="register-btn btn" size="small" @click="login">登录</el-button>
        </div>
    </div>
</template>

<script>
import * as api from '@/api/login.js'
import {mapMutations} from 'vuex'
export default {
    name: 'Login',
    data() {
        return{
            loginForm: {
                'username': '',
                'password': ''
            },
            loginRules:{
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
			}
        }
    },
    methods:{
        ...mapMutations(['setLogin']),
        login(){
            this.$refs.loginForm.validate(value => {
                if(value){
                    api.login(this.loginForm)
                        .then(res => {
                            this.$message.success('登录成功');
                            sessionStorage.setItem('token', res.token);
                            this.setLogin(true);
                            this.$router.push('/index')
                        })
                        .catch(res => {
                            this.$message.warning('账号密码错误')
                        })
                }
            })
        }
    }
}
</script>

<style scoped lang="stylus">
.login{
    width 500px
    padding 50px
    margin 0 auto
    .form-wrapper{
        .form-input {
            width 300px
        }
        .form-input-code{
            width 200px
        }
        .code-btn{
            width 90px
            margin-left 10px
        }
    }
    .footer{
        text-align center
        .register-btn{
            width 200px
        }
    }
}
</style>

