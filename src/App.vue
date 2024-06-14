<template>
  <div id="app">
    <!-- 대시보드 컴포넌트를 포함 -->
    <DashboardComponent />
  </div>
</template>

<script>
// 대시보드 컴포넌트 불러오기
import DashboardComponent from './components/DashboardComponent.vue';

export default {
  name: 'App',
  components: {
    DashboardComponent
  }
};
</script>

<style>
/* 전체 화면 설정 */
body, html, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: 'Arial', sans-serif; /* 글꼴 설정 */
}
</style>
