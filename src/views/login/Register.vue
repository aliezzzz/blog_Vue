<template>
    <div class="register">
        <div class="form-wrapper">
            <el-form :model="registerForm" :rules="registerFormRules" label-width="100px" ref="registerForm">
                <el-form-item prop="email" label="邮箱地址">
                    <el-input class="form-input"  v-model="registerForm.email" placeholder="请输入邮箱地址"></el-input>
                </el-form-item>
                <el-form-item prop="code" label="验证码">
                    <el-input class="form-input-code" v-model="registerForm.code" placeholder="请输入邮箱验证码"></el-input>
                    <el-button class="code-btn btn" type="primary" :disabled="btnDisabled" @click="getEmailCode">验证码</el-button>
                </el-form-item>
                <el-form-item prop="username" label="用户名">
                    <el-input class="form-input" v-model="registerForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input class="form-input" v-model="registerForm.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="footer">
            <el-button class="register-btn btn" size="small" @click="register">注册</el-button>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
import * as api from '@/api/login.js'
export default {
    name: 'Register',
    data(){
        return {
            btnDisabled: false,
            registerForm: {
                'code': '',
                'email': '',
                'username': '',
                'password': ''
            },
            registerFormRules:{
					code: [
						{ required: true, message: '请输入邮箱验证码', trigger: 'blur' },
					],
					email: [
						{ required: true, message: '请输入邮箱地址', trigger: 'change' }
					],
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
        getEmailCode(){
            api.getCode({
                "email": this.registerForm.email
            }).then( res => {
                console.log(res);
                this.$message.success('验证码发送成功')
                this.btnDisabled = true;
                setTimeout(() => {
                    this.btnDisabled = false
                },60000)
            }).catch(res => {
                this.$message(res.email[0])
            })
        },
        register(){
            this.$refs.registerForm.validate( value => {
                if (value){
                    if(this.registerForm.password.length >= 6){
                        api.register(this.registerForm)
                            .then( res => {
                                console.log(res);
                                this.$message('注册成功')
                                sessionStorage.setItem('token', res.token);
                                this.setLogin(true);
                                this.$router.push('/index');
                            })
                            .catch( res => {
                                console.log(res);
                                let msg = ''
                                if(res.email !== undefined){
                                    msg = res.email[0] + '   '
                                }
                                if(res.code !== undefined){
                                    msg += res.code[0]
                                }
                                
                                this.$message.warning(msg)
                            })
                    }else{
                        this.$message.warning('密码长度不得小于6位')
                    }
                }
            })
        }
    }
}
</script>

<style scoped lang="stylus">
.register{
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
