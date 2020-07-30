# vue 学习 课程
- 环境搭建
    - 创建git仓库
    - git clone #url 仓库地址
    - 初始本地数据 npm init -y
    - 添加忽略文件.gitignore 添加忽略文件 node_modules/*/
    - 安装应用依赖包
        - 项目依赖（vue、vuex、vue-router）
    - webpack配置
        - 配置入口文件 entry 输出文件 output
        - 配置编译信息 vue(vue-loader vue-template-compiler,style-loader)，js(babel-loader,@babel/core)，css(css-loader,style-loader)
        - 生成html html-webpack-plugin
        - 开启服务 webpack-dev-server,cross-env（配置命令，配置 服务信息   
        备注：区分 生成环境 开发环境