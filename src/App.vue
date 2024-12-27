<template>
  <nav>
    <a href="/">主页</a>|
    <a href="/demo">测试页</a>|
    <router-link to="/">主页</router-link>|
    <router-link to="/demo">测试页</router-link>
  </nav>
    <router-view></router-view>
</template>