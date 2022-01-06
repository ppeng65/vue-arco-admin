<template>
  <div class="app-wrapper">
    <Siderbar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <Navbar />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import Siderbar from './components/Sidebar'
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
import variables from '@/styles/variables.scss'

console.log(variables)
</script>

<style scoped lang="scss">
@import '../styles/mixin.scss';
@import '../styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  .main-container {
    .fixed-header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9;
      width: calc(100% - $sideBarWidth);
    }
  }
}
</style>
