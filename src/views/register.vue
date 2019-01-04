<template>
    <div class="register">
        <div class="reg-header">
            <button class="reg-back" @click="$router.go(-1)"> 返回 </button>
        </div>
        <div class="reg-mian">
            <div class="mian-title">
                新用户注册
            </div>
            <div class="reg-form">
                <form>
                    <InputGroup   
                        label="昵称"
                        placeholder="输入昵称"
                        v-model="user.name"
                        type="text"
                    />  
                    <InputGroup   
                        label="邮箱"
                        placeholder="请填写邮箱"
                        v-model="user.email"
                        type="email"
                    />  

                    <InputGroup   
                        label="密码"
                        placeholder="请填写密码"
                        v-model="user.password"
                        type="password"
                    />  
                    <InputGroup   
                        label="确认密码"
                        placeholder="请填确认密码"
                        v-model="user.password2"
                        type="password"
                    />  
                    
                </form>
            </div>
            <div class="reg-btn">
                <YButton :disabled="isDisabled" @click="regClick">注册</YButton>
            </div>
          
        </div>
    </div>
</template>


<script>
import InputGroup from '../components/inputgroup.vue'
import YButton from '../components/btn'
export default {
    name :"register",
    components :{
        InputGroup,
        YButton
    },
     data(){
        return{
            user:{
                email:'',
                password : '',
                password2 : '',
                name : ''
            }
        }
    },
     methods: {
        regClick(){
            let reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-z0-9_-])+/;
            if(!reg.test(this.user.email)){
                alert("请输入合法邮箱");
                return;
            }
            if(this.user.password2 !== this.user.password){
                alert("两次密码不一致");
                return;
            }
            this.$axios.post('/api/users/register',this.user)
            .then(res =>{
                // 注册成功
                alert('注册成功');
                this.$router.push('/login');
            })
        }
    },
    computed: {
        isDisabled(){
            if(this.user.name 
                && this.user.email 
                && this.user.password 
                && this.user.password2)return false;
            else return true;
        }
    },
}
</script>

<style scoped>
.register{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
.reg-header{
    width: 100%;
    height: 2.5rem;
    box-sizing: border-box;
    padding:  0 .5rem;
    line-height: 2.5rem;
}
.reg-back{
    border: none;
    outline: none;
    background-color: transparent;
    font-size: .8rem;
    color:#20af0e;
}
.reg-mian{
    width: 100%;
    padding: .9rem;
    box-sizing: border-box;
}
.mian-title{
    margin-top: 1.5rem;
    text-align: center;
    font-size: 1rem;
}
.reg-btn{
    margin-top:1.5rem; 
}
</style>
