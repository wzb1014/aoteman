<template>
  <div class="login">
    <div class="box">
        <h1 class="center"> 登录</h1>
        <div class="line">
            <el-input v-model="input" clearable placeholder="请输入账户"></el-input>
      <el-input v-model="input" clearable show-password placeholder="请输入密码"></el-input>
        </div>
        <div class="center line">
          <el-button type="primary" @click="login">登录</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods:{
       login(){
      this.$router.push("/")
    }
  }
};
</script>

<style scoped>
.login{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right,#553443,#303D60);
  position: relative;
}
.box{
  width: 400px;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: #ffffff;
  border-radius: 20px;
}
.center{
  text-align: center;
}
.line{
  margin-top: 20px;
}



</style>
