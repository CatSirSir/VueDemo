<template>

    <ul :class="$style.contentClass">
        <li v-for="ct in contents" :key="ct.id">
            <hr/>
            {{ct.content}} &nbsp;&nbsp;
            <el-tag type="danger">{{ct.like}}</el-tag> &nbsp;&nbsp;
            <el-tag type="success"> {{ct.username}}</el-tag>

        </li>
    </ul>

</template>

<script>
    export default {
        name: "contentList",
        props: ['curSelect', 'contentList'],
        computed: {
            contents: function () {
                if (this.contentList.length > 0) {
                    let ct = this.contentList.filter(item => item.id == this.curSelect)[0].content
                    ct.map((v, i) => v.id = i)
                    return ct
                } else {
                    return []
                }
            }
        },
    }
</script>

<style module>
    .contentClass {
        width: 74%;
        float: left;
        padding-left: 2%;
        padding-right: 2%;
    }

    .contentClass li {
        list-style: none;
        text-align: left;
        margin: 4px;
    }
</style>