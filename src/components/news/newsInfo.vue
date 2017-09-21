<template>
    <div class="newsInfo-box">
        <h4>{{info.title}}</h4>
        <p class="info">
            <span>发表时间:{{info.add_time|dateFormat}}</span>
            <span>点击{{info.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="info.content"></div>

        <!-- 评论区的组件 -->
        <comment :artId="id"></comment>
    </div>
</template>

<script>
//引入评论区的组件
import comment from "../subcom/comment.vue";
export default {
    data() {
        return {
            //获取通过url传递过来的id
            id: this.$route.params.id,
            info: {}
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo() {
            var url = "api/getnew/" + this.id;
            this.$http.get(url).then(res => {
                if (res.body.status === 0) {
                    this.info = res.body.message[0];
                } else {
                    console.log("请求数据失败");
                }
            })
        }
    },
    //在父组件中定义局部子组件
    components: { comment }
}
</script>

<style lang="scss">
.newsInfo-box {
    padding: 0 3px;
    >h4 {
        font-size: 16px;
        text-align: center;
        color: red;
        margin: 15px 0;
    }
    >.info {
        display: flex;
        justify-content: space-between;
        color: #26A2FF;
    }
    >.content {
        img {
            width: 100%;
        }
    }
}
</style>


