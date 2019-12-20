<template>
    <div class="main">
        <div class="left">
            <left></left>
        </div>
        <div class="right">
            <div class="top">
                <img src="img/title.jpg"/>
            </div>
            <div class="bottom">
                <right></right>
            </div>
        </div>
    </div>
</template>
<script>
    import left from '../components/Left.vue'
    import right from '../components/Right.vue'
    export default {
        components:{
            left,
            right
        }

    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .main{
        width: 1200px;
        margin: 20px auto;
    }
    .left{
        width: 100px;
        float: left;
        margin-right: 10px;
    }
    .right{
        width: 1000px;
        margin-left: 10px;
        float: left;
    }
    .top img{
        height: 400px;
        width: 1000px;
    }
    .left,.right{
        /* background-color: rgb(244, 244, 244); */
        background-color: #f5f5f5;
    }
</style>