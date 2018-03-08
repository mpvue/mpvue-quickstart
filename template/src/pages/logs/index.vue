<template>
  <div>
    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import card from '@/components/card'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  components: {
    card{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },

  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      logs: []{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },

  created{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    const logs = (wx.getStorageSync('logs') || []){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    this.logs = logs.map(log => formatTime(new Date(log))){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
