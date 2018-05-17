function formatNumber{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(n) {
  const str = n.toString(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  return str[1] ? str : `0${str}`{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

export function formatTime{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(date) {
  const year = date.getFullYear(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const month = date.getMonth() + 1{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const day = date.getDate(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  const hour = date.getHours(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const minute = date.getMinutes(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const second = date.getSeconds(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  const t1 = [year, month, day].map(formatNumber).join('/'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const t2 = [hour, minute, second].map(formatNumber).join(':'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  return `${t1} ${t2}`{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

export default {
  formatNumber,
  formatTime{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
