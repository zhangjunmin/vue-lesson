<template>
    <div>
        <strong>列表渲染</strong>
        <dl>
            <dt>遍历数组</dt>
            <dd>
                <ol>
                    <li v-for="(book,index) in books" :key="index">{{book}}</li>
                </ol>
            </dd>
            <dt>遍历对象</dt>
            <dd>
                <ol>
                    <li v-for="(value, key) in person" :key="key">{{key}}:{{value}} </li>
                </ol>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    data() {
        return {
            books:[
                'vuejs',
                'reactjs',
                'angularjs'
            ],
            person:{
                name:'张三',
                gender: '男',
                age: 18
            }
        }
    },
}
</script>