<template>
    <div>
        <div v-if="message == 1">
           <goodsList :goodId="1"></goodsList>
        </div>
        <div v-if="message == 2">
            <goodsList :goodId="2"></goodsList>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Msg from './meg.js'
    import goodsList from './GoodsList.vue'
    export default {
        data() {
            return {
                message:""
            }
        },
        mounted: function(){
            var _this = this
            Msg.$on('selectItem',function(value){
                _this.message = value;
            })
        },
        components:{
            goodsList
        }
    }
</script>