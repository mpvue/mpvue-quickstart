<script>
export default {
  created{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    logs.unshift(Date.now()){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    wx.setStorageSync('logs', logs){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    console.log('app created and cache logs by setStorageSync'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
