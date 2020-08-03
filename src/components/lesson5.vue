<template>
  <div>
    <strong>事件处理</strong>
    <ol>
      <li>
        <span>最基本的事件处理{{counter}}</span>
        <button v-on:click="baseClick">+1</button>
      </li>
      <li>
        <span>事件修饰符.stop（阻止事件传播)</span>
        <div @click="parentClick">
          <button @click="childClick">我不会阻止事件传播</button>
          <button @click.stop="childStopClick">我阻止事件传播</button>
        </div>
      </li>
      <li>
        <span>.prevent(阻止页面重载)</span>
        <form action="/" method="post" @submit="submit">
          <button type="submit">重载提交</button>
        </form>
        <form action="/" method="post" @submit.prevent="submit">
          <button type="submit">提交</button>
        </form>
      </li>
      <li>
        <span>.capture(我先处理再有子节点处理)</span>
        <div @click.capture="parentfirClick">
          <button @click="childlastClick">我是子节点我后处理</button>
        </div>
      </li>
      <li>
        <span>.self(只有我触发的我才处理)</span>
        <div @click.self="parentselfClick">
          <button @click="childothersClick">我触发的不会被其他处理</button>
        </div>
      </li>
      <li>
        <span>.once只执行一次</span>
        <div>
          <button @click.once="oneClick">只触发一次</button>
        </div>
      </li>
      <li>.passive告诉浏览器没有组织默认行为，使滑动更流畅。主要用在@scroll,@touchmove上，和prevent冲突</li>
      <li>---------------------按键修饰符（键盘事件 keydown,keyup,keypress）---------------------------</li>
      <li>
        <span>输入内容，按下回车键触发</span>
        <input v-on:keypress.enter="createNew" placeholder="请输入..." />
        <span>
          enter.tab.delete (捕获“删除”和“退格”键).esc.space.up.down.left.right
        </span>
      </li>
      <li>
          系统修饰键.ctrl.alt.shift.meta 仅在按下该键是才会触发的，搭配键盘事件和鼠标
          <br>
          .exact 假如有多个修饰键，仅在其中标示的被按下才会触发
      </li>
      <li>
          鼠标修饰键 .left.right.middle
          <br>
          <button @click.left="leftClick">左键触发</button>
          <button @click.right="rightClick">右键触发</button>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    leftClick(){
        console.log('左键点击')
    },
    rightClick(){
        console.log('右键点击')
    },
    createNew() {
      console.log("新建一个");
    },
    submit() {
      console.log("222");
    },
    baseClick() {
      this.counter++;
    },
    parentClick() {
      console.log("如果子组件阻止我就不会被触发");
    },
    childStopClick() {
      console.log("我是子组件会阻止父节点事件触发");
    },
    childClick() {
      console.log("我是子组件不会阻止父节点事件触发");
    },
    parentfirClick() {
      console.log("我先处理再有内部的事件处理");
    },
    childlastClick() {
      console.log("我是子节点我后处理");
    },
    parentselfClick() {
      console.log("我只处理我触发的");
    },
    childothersClick() {
      console.log("我是子节点触发的");
    },
    oneClick() {
      console.log("我只执行一次");
    },
  },
};
</script>