<template>
    <div class="login">
        <div class="title">
            用户登录
        </div>
        <div class="form">
            <form>
                <InputGroup   
                    label="账号"
                    placeholder="请输入邮箱/手机号"
                    v-model="user.email"
                    type="text"
                />  

                <InputGroup   
                    label="密码"
                    placeholder="请填写密码"
                    v-model="user.password"
                    type="password"
                />  
                
            </form>
            <div class="btn-login">
                <YButton :disabled="isDisabled" @click="loginClick">登录</YButton>
            </div>
        </div>
        <div class="footer-reg">
            <button class="reg" @click="$router.push('/register')">新用户注册</button>
        </div>
    </div>
</template>


<script>
import InputGroup from '../components/inputgroup'
import YButton from '../components/btn'
import jwt_decode from 'jwt-decode'
export default {
    name :"login",
    components :{ InputGroup,YButton },
    data(){
        return{
            user:{
                email:'',
                password : ''
            }
        }
    },
    methods: {
        loginClick(){
            let reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-z0-9_-])+/;
            if(!reg.test(this.user.email)){
                alert("请输入合法邮箱");
                return;
            }

            //实现登录
            this.$axios.post('/api/users/login',this.user)
            .then(res =>{
                //存储token
                const { token } = res.data;

                // 读取token
                const decode = jwt_decode(token);
                // console.log(decode);
                // 存储到vuex中
                this.$store.dispatch("setUser",decode);

                localStorage.setItem('wxpyToken',token);
                //跳转首页
                this.$router.push('/index');
            })
            .catch(err =>{
                console.log(err)
            })
        }
    },
    computed: {
        isDisabled(){
            if(this.user.email && this.user.password) return false;
            else return true;
        }
    },
}
</script>

<style>
.login{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: .9rem;
    box-sizing: border-box;
}
.title{
    margin-top: 4rem;
    font-size: 1.1rem;
    text-align: center;
}

.footer-reg{
    position: absolute;
    bottom: .9rem;
    left: 0;
    text-align: center;
    width: 100%;
    color: #888;
}
.reg{
    display: inline-block;
    font-size: .8rem;
    outline: none;
    border: none;
    background-color: transparent;
    color: #7b8ca9;
}
.form{
    width: 100%;
}
.btn-login{
    margin: 1.5rem;
}
</style>
