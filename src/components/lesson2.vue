<template>
    <div>
        <strong> class和style绑定</strong>
        <dl>
            <dt>绑定class 使下面class 都为static actived</dt>
            <dd>
                <ol>
                    <li class="static" v-bind:class="{actived:true}">使用对象语法{prop1:v1,prop2:v2}</li>
                    <li v-bind:class="['static', {actived:true}]">使用数组语法[cls1,cls3]</li>
                    <li v-bind:class="['static', actived? 'actived':'']">使用数组语法[cls1,cls3] 数组里也可以是表达式</li>
                    <li> 用在子组件上，会传入子组件的template上</li>
                </ol>
            </dd>
            <dt>绑定style 字体颜色为红色，为20px</dt>
            <dd>
                <ol>
                    <li v-bind:style="{color:redColor,fontSize: s20+'px'}">作为普通值传入</li>
                    <li v-bind:style="styleObj">作为对象整体传入</li>
                    <li v-bind:style="[colorStyle, fontStyle]">数组语法</li>
                    <li v-bind:style="trans1">自动添加前缀：对于属性有浏览器前缀的transfrom等，这个并没有增加，应该是配置文件里需要配置</li>
                </ol>
            </dd>
        </dl>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            actived: true,
            redColor: 'red',
            s20: 20,
            styleObj: {
                color: 'red',
                fontSize: '20px'
            },
            colorStyle:{
                color: 'red'
            },
            fontStyle:{
                fontSize: '20px'
            },
            trans1:{
                transform: 'scale(1.1)'
            },
            trs:'scale(1.1)'
        }
    }
}
</script>