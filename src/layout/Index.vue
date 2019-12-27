<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline">
        <a-sub-menu key="1">
            <span slot="title">
                <a-icon type="cluster" />
                <span>公司管理</span>
            </span>
            <a-menu-item key="21">option1</a-menu-item>
            <a-menu-item key="22">option2</a-menu-item>
            <a-menu-item key="23">option3</a-menu-item>
            <a-menu-item key="24">option4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="2">
            <span slot="title">
                <a-icon type="appstore" />
                <span>基础数据</span>
            </span>
            <a-menu-item key="221">option1</a-menu-item>
            <a-menu-item key="222">option2</a-menu-item>
            <a-menu-item key="223">option3</a-menu-item>
            <a-menu-item key="224">option4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="3">
            <span slot="title">
                <a-icon type="branches" />
                <span>产品管理</span>
            </span>
            <a-menu-item key="321">option1</a-menu-item>
            <a-menu-item key="322">option2</a-menu-item>
            <a-menu-item key="323">option3</a-menu-item>
            <a-menu-item key="324">option4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="4">
            <span slot="title">
                <a-icon type="shopping" />
                <span>商品管理</span>
            </span>
            <a-menu-item key="421">option1</a-menu-item>
            <a-menu-item key="422">option2</a-menu-item>
            <a-menu-item key="423">option3</a-menu-item>
            <a-menu-item key="424">option4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="5">
            <span slot="title">
                <a-icon type="setting" />
                <span>系统</span>
            </span>
            <a-menu-item key="521">option1</a-menu-item>
            <a-menu-item key="522">option2</a-menu-item>
            <a-menu-item key="523">option3</a-menu-item>
            <a-menu-item key="524">option4</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>
<style>
  #components-layout-demo-custom-trigger {
      min-height: 100vh;
  }
  
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
