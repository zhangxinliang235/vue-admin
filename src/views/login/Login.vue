<template>
    <div id="login">
        <ul class="menu-tab">
        <li :class="{ 'current': item.current }" v-for="( item, index ) in menuTab" :key="index"
          @click="toggleMenu(item)">{{ item.txt }}
        </li>
      </ul>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            menuTab: [
                {txt: '登录', current: true},
                {txt: '注册', current: false}
            ]
        }
    },
    methods: {
    toggleMenu(data) {
      this.menuTab.forEach(ele => {
        ele.current = false;
      })
      data.current = true
    }
  },
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
    }
  
    .current {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
</style>
