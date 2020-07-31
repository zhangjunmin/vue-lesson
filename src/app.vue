<template>
    <div class="container">
        <section class="left">
            <h4 class="lesson-title">课程列表</h4>
            <ol class="lesson-list">
                <li v-for="(l, i) in lessons" :key="i">
                    <router-link :to="l.path">{{l.title}}</router-link>
                </li>
            </ol>
        </section>
        <section class="main">
            <router-view></router-view>
        </section>
    </div>
    
</template>
<script>
import datas from './mock.js'
import util from './util'
export default {
    data() {
        return {
            message: 'hello vuejs'
        }
    },
    computed:{
        lessons(){
            return datas.map((d, i)=> {
                return {
                    title: d,
                    path: util.getPath(i)
                }
            })
        }
    }
}
</script>
<style>
    html{
        font-size: 14px;
    }
    a,a:link,a:active,a:hover,a:visited{
        text-decoration: none;
        color: #333;
    }
    ul{
        list-style: none;
    }
    html,body,.container {
        height: 100%;
    }
    .left {
        box-sizing: border-box;
        float: left;
        width: 200px;
        min-height: 100%;
        border-right: 2px solid #ccc;
        padding: 10px 5px;
    }
    .main {
        overflow: auto;
        min-height: 100%;
        margin-left: 200px;
    }
    .lesson-title{
        text-align: center;
        font-size: 16px;
    }
    .lesson-list li{
        margin: 5px 0;
    }
    .lesson-list .router-link-exact-active {
        color: chocolate;
    }
</style>