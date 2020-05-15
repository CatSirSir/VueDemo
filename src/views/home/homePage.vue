<template>
    <div>
        <aside-nav :asideNames="contentList" @selectItem="selectItem"></aside-nav>
        <content-list :contentList="contentList" :curSelect="curSelect"></content-list>
        <clear-float></clear-float>
    </div>
</template>

<script>
    import asideNav from "@/components/layout/asideNav";
    import contentList from "@/components/layout/contentList";
    import clearFloat from "@/components/layout/clearFloat";
    export default {
        name: "homePage",
        components: {contentList, asideNav,clearFloat},
        methods: {
            selectItem: function (val) {
                this.curSelect = val;
            }
        },
        created(){
            this.$api.musicContent.ListContents().then(rs => {
                this.contentList = rs.data;
            }).catch(function(e){
                console.log(e)
            });
        },
        mounted() {

        },
        data: function () {
            return {//这块数据应该放到各组件中自己获取 因为还没搭建后台，所以暂时放父组件里
                curSelect: 1,
                contentList: []
            }
        },

    }
</script>

<style module>

</style>