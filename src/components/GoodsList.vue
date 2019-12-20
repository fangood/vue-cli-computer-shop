<template>
    <div>
        <ul class="goodList">
            <li v-for="(item,index) in listData"
            :key="index">
                <img v-bind:src="item.img"/>
                <p>{{item.goodName}}</p>
            </li>
        </ul>
    </div>
</template>
<style scoped type="text/css">
    .goodList li{
        list-style: none;
        width: 200px;
        height: 200px;
        float: left;
        font-size: 9px;
        color: red;
        margin-bottom: 30px;
    }
    .goodList img{
        width: 180px;
        height: 180px;
    }
</style>
<script>
    export default {
        props:{
            goodId:Number
        },
        data(){
            var obj = this;
            if(obj.goodId == 1){
                this.url = "json/bjb.json";
            }else if(obj.goodId == 2){
                this.url = "json/shouji.json";
            }
            this.$http.get(this.url).then(function(result){
                window.console.log(result);
                obj.listData = result.data;
            });
        return{
            url: "",
            listData:[]
        }
    }, 
    watch:{
        goodId(){
            var obj = this;
            if(obj.goodId == 1){
                this.url = "json/bjb.json";
            }else if(obj.goodId == 2){
                this.url = "json/shouji.json";
            }
            this.$http.get(this.url).then(function(result){
                window.console.log(result);
                obj.listData = result.data;
            });
            return{
                listData:[]
            }
        }
    }
    }
</script>
