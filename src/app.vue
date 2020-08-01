<template>
    <el-container>
        <el-aside width="200px">
            <el-menu
                class="el-menu-vertical-demo"
                default-active="/"
                router>
                <el-menu-item v-for="(l, i) in lessons" :key="i" :index="l.path" >
                <span slot="title">{{l.title}}</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
    
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
    body{
        margin: 0;
        padding: 0;
    }
    .el-aside {
        border-right: 1px solid #ccc;
        height: 100vh;
        overflow: auto;
    }
    .el-main {
        background: #fff;
        height: 100vh;
        overflow: auto;
    }
</style>