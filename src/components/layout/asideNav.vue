<template>

        <ul :class="$style.menuListCls">
            <li v-for="item in asideNames" :key="item.id" :index="item.id" @click="contentChange">
                <el-tooltip enterable class="item" effect="dark" :content="item.name" placement="bottom">
                    <el-tag>{{item.name}}</el-tag>
                </el-tooltip>

            </li>
        </ul>

</template>

<script>
    export default {
        name: "asideNav",
        props:['asideNames'],
        methods: {
            contentChange: function (e) {
                //改变自身UI状态
                //抛出change事件
                this.$emit("selectItem", e.currentTarget.getAttribute('index'))
            }
        }
    }
</script>

<style module>
    .menuListCls {
        width: 23%;
        float: left;
    }
    /*强制修改本组件下element-ui的tag样式*/
    .menuListCls span{
        font-size: 14px;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
    }
    .menuListCls li {
        list-style: none;
        cursor: pointer;
        margin: 4px;
        max-width: 100%;
    }
</style>