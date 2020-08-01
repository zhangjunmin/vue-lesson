<template>
    <div>
        <strong>插值</strong>
        <ol><!-- 插值{{文本}}-->
            <li>{{code1}}：<strong> {{text}}</strong>
            <!-- 插值表达式有{{方法或表达式}}}-->
            <li>{{code2}}：<strong> {{new Date().getFullYear()}}是{{new Date().getFullYear()%2===0?'偶数年':'奇数年'}}</strong>
            <!-- 插值html{{方法或表达式}}}-->
            <li>{{code3}}：<span v-html="html"></span>
            </li>
            <!-- 插值属性{{方法或表达式}}}-->
            <li>插值属性：<strong v-bind:id="id">给该元素设置id</strong></li>
            <li>如果插入的是computed里的方法，则传入方法名：{{getHi}}</li>
        </ol>
        <p style="color:red;">
            插值模板共有3种:<br>
            1 {{code1}} <br>
            2 用带v-html='变量' 属性的标签标示 <br>
            3 v-bind: attr='变量' <br>
            警示：如果插入的表达式是computed里的方法，这用方法名
                          
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            code1:'{{插值文本}}',
            code2:'{{插值表达式}}}',
            code3:'v-html指令插入html',
            text: "vuejs",
            html:'<em>斜体文本</em>',
            id:'node'
        }
    },
    computed: {
        getHi: ()=> 'hi there'
    }

}
</script>