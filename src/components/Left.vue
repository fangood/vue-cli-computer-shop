<template>
    <div>
        <div class="title">热门推荐</div>
        <ul class="menu">
            <li @click="menu1">笔记本电脑</li>
            <li @click="menu2">手机</li>
            <li>服饰</li>
            <li>手表</li>
            <li>书籍</li>
            <li>玩具</li>
            <li>小家电</li>
            <li>学习用品</li>
            <li>办公用品</li>
            <li>旅游必备</li>
            <li>游戏卡通</li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    import Msg from './meg.js'
    export default {
        methods:{
            menu1:function(){
                Msg.$emit("selectItem","1");
            },
            menu2:function(){
                Msg.$emit("selectItem","2");
            }
        }
    }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        text-align: center;
    }
    .title {
        width: 100px;
        color: red;
        height: 50px;
        line-height: 50px;
    }
    .menu li {
        list-style: none;
        width: 100px;
        height: 50px;
        background-color: white;
        line-height: 50px;
        margin-bottom: 2px;
        cursor: pointer;
    }
</style>