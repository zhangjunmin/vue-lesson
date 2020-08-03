<template>
    <div>
        <span>表单输入绑定</span>
        <dl>
            <dt>文本输入</dt>
            <dd>
                <ol>
                    <li><p></p>
                        <span>最基本的输入:{{value}}</span><br>
                        <input type="text" v-model="value">
                    </li>
                    <li>
                        <p style="white-space: pre-wrap;">多行输入:{{value2}}</p><br>
                        <textarea type="text" v-model="value2"></textarea>
                    </li>
                    <li>
                        <span>复选框 <span v-for="(f,i) in favorites" :key="i">{{f}}&nbsp;&nbsp;</span></span><br>
                        <input type="checkbox" v-model="favorites" value="足球" >足球 &nbsp;
                        <input type="checkbox" v-model="favorites" value="上网" >上网 &nbsp;
                        <input type="checkbox" v-model="favorites" value="运动" >运动 
                    </li>
                    <li>
                        <span>单选，性别：{{gender}}</span> <br>
                        <input type="radio" value="男" v-model="gender"> 男 &nbsp;
                        <input type="radio" value="女" v-model="gender"> 女 
                    </li>
                    <li>
                        <span>下拉选择，你来自：{{home}}</span> <br>
                        <select v-model="home">
                            <option value="" disabled>请选择</option>
                            <option value="sd 山东">山东</option>
                            <option value="gd 广东">广东</option>
                            <option value="bj 北京">北京</option>
                        </select>
                    </li>
                </ol>
            </dd>
            <dt>值绑定</dt>
            <dd>
                <li>
                    <span> 复选框 :{{isChoose}}</span> <br>
                    <input type="checkbox" v-model="isChoose"> 允许
                </li>

                <li>
                    <span> 复选框2 自定义值 :{{isChoose2}}</span> <br>
                    <input type="checkbox" true-value='是' false-value='否' v-model="isChoose2"> 允许
                </li>
                <li>
                    <span>单选</span> 应该和文本输入一样
                </li>
            </dd>
        </dl>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: '',
            value2: '',
            favorites: [],
            gender: '',
            home:'',
            isChoose: '',
            isChoose2: '否'
        }
    },
}
</script>