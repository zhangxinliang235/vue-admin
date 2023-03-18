<template>
  <div id="login">
    <ul class="menu-tab">
      <li :class="{ 'current': item.current }" v-for="( item, index ) in menuTab" :key="index" @click="toggleMenu(item)">
        {{ item.txt }}
      </li>
    </ul>
    <el-form class="login-form demo-ruleForm" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" size="medium">
      <el-form-item prop="username" class="login-item">
        <label>账号</label>
        <el-input type="password" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <label>密码</label>
        <el-input show-password type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="repassword" v-show="model === 'register'">
        <label>确认密码</label>
        <el-input show-password type="password" v-model="ruleForm.repassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <label>验证码</label>
        <el-row :gutter="10">
          <el-col :span="15">
            <el-input v-model.number="ruleForm.code"></el-input>
          </el-col>
          <el-col :span="9">
            <el-button type="success" class="block">获取验证码</el-button>
          </el-col>
        </el-row>

      </el-form-item>
      <el-form-item>
        <el-button type="danger" class="login-btn block" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { ref, reactive, onMounted } from '@vue/composition-api'
import { usernameRule } from '@/utils/vaildate'
export default {
  name: 'Login',
  setup(props, context) {
    // 验证账号
    var validateUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      } else if (usernameRule(value)) {
        callback(new Error('请输入4-10位用户名'));
      } else {
        callback();
      }
    };
    // 验证密码
    var validatePwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    // 验证重复密码
    var validateRePwd = (rule, value, callback) => {
      if (model.value === 'login') { callback(); }
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    // 验证验证码
    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else {
        callback();
      }
    };
    const model = ref('login')
    const menuTab = reactive([
      { txt: '登录', current: true, type: 'login' },
      { txt: '注册', current: false, type: 'register' }
    ])
    const ruleForm = reactive({
      username: '',
      password: '',
      repassword: '',
      code: ''
    })
    const rules = reactive({
      username: [
        { validator: validateUsername, trigger: 'blur' }
      ],
      password: [
        { validator: validatePwd, trigger: 'blur' }
      ],
      repassword: [
        { validator: validateRePwd, trigger: 'blur' }
      ],
      code: [
        { validator: validateCode, trigger: 'blur' }
      ]
    })

    onMounted(() => {

    })

    /** 
     * 声明函数
     */
    const toggleMenu = ((data) => {
      console.log(data);
      menuTab.forEach(ele => {
        ele.current = false;
      })
      data.current = true
      model.value = data.type
      console.log(model.value);
    })
    // 提交
    const submitForm = ((formName) => {
      context.refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    })

    return {
      model,
      menuTab,
      ruleForm,
      rules,
      toggleMenu,
      submitForm
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background: #344a5f;
}

.login-wrap {
  width: 330px;
  margin: auto;
}

.menu-tab {
  text-align: center;

  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
  }

  .current {
    background-color: rgba(0, 0, 0, 0.6);
  }
}

.login-form {
  margin: 0 auto;
  width: 500px;
  margin-top: 29px;

  label {
    display: block;
    font-size: 14px;
    color: white;
  }

  .login-item {
    margin-bottom: 13px;
  }

  .login-btn {
    margin-top: 19px;
  }

  .block {
    width: 100%;
    display: block;
  }
}
</style>
