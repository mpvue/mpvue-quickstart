<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>
      
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    {{#if vuex}}
    <a href="/pages/counter/counter" class="counter">去往Vuex示例页面</a>
    {{/if}}
  </div>
</template>

<script>
import card from '@/components/card'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      motto: 'Hello World',
      userInfo: {}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },

  components: {
    card{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },

  methods: {
    bindViewTap{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      const url = '../logs/logs'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      wx.navigateTo({ url }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    getUserInfo{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
          }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    clickHandle{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(msg, ev) {
      console.log('clickHandle:', msg, ev){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },

  created{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

{{#if vuex}}
.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
{{/if}}
</style>
