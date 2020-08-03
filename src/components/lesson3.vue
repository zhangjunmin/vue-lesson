<template>
    <div>
        <strong>条件渲染</strong>
        <ol>
            <li>
                <p v-if="random>=0.6">随机数大于0.6显示</p>
                <p v-else-if="random<0.6 && random>0.3">0.3和0.6之间显示</p>
                <p v-else>小于0.3</p>
            </li>
            <li> v-if和v-show渲染的区别,v-if为真时，才渲染，v-show不论真假都渲染，只是dom的状态为隐藏或者显示，如果频繁状态切换用v-show
                <p v-if="isTrue">
                    我存在吗
                </p>
                <p v-show="isTrue">我存在吗</p>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    data(){
        return {
            random: Math.random(),
            isTrue:false
        }
    }
}
</script>