<template>
    <div>
        <h4>发表评论</h4>
        <hr/>
        <textarea rows="3" placeholder="请说出你的梦想是什么（最多120个字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <!-- 评论内容 -->
        <div id="comment-list">
            <div class="comment-box" v-for="(item,i) in commentList" :key="i">
                <div class="comment-title">第{{i+1}}楼&nbsp;用户：{{item.user_name}}&nbsp;发表时间：{{item.add_time|dateFormat}}</div>

                <div class="comment-body">{{item.content}}</div>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="loadmore">加载更多</mt-button>
    </div>
</template>

<script>
//引入Toast
import { Toast } from "mint-ui";
export default {
    data() {
        return {
            pageindex: 1,
            commentList: [],//存放所有的评论数据
            msg: ""//用户填写的内容
        }
    },
    created() {
        this.getCommentList();
    },
    methods: {
        getCommentList() {
            //artId是父组件通过属性绑定传过来的
            var url = "api/getcomments/" + this.artId + "?pageindex=" + this.pageindex;
            this.$http.get(url).then(res => {
                if (res.body.status === 0) {
                    //在原数据基础上添加新的数据
                    this.commentList = this.commentList.concat(res.body.message);
                } else {
                    console.log("获取评论列表失败");
                }
            })
        },
        loadmore() {
            this.pageindex++;
            this.getCommentList();
        },
        postComment() {
            var url = "api/postcomment/" + this.artId;
            this.$http.post(url, { content: this.msg }, { emulateJSON: true }).then(res => {
                if (res.body.status === 0) {
                    Toast("发表评论OK!");
                    //在原数据前面添加评论内容
                    this.commentList.unshift({ user_name: "匿名用户", add_time: new Date(), content: this.msg });
                    this.msg = "";
                } else {
                    console.log("请求失败");
                }
            })
        }
    },
    props: ["artId"]
}
</script>

<style lang="scss" scoped>
textarea {
    margin: 0;
    font-size: 14px;
}

#comment-list {
    margin: 5px 0;
    .comment-box {
        font-size: 13px;
        .comment-title {
            background-color: #ccc;
            line-height: 30px;
        }
        .comment-body {
            font-size: 14px;
            line-height: 35px;
            text-indent: 2em;
        }
    }
}
</style>


