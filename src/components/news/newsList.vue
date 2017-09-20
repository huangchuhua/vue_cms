<template>
    <div>
        <!-- 使用MUI的medialist.html展示新闻列表 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time|dateFormat}}</span>
                            <span>点击{{item.click}}次数</span>
                        </p>
                    </div>
                </a>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
            var url = "api/getnewslist";
            //发送请求
            this.$http.get(url).then(res => {
                if (res.body.status === 0) {
                    this.list = res.body.message;
                } else {
                    console.log("数据请求失败");
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-media-body {
    h1 {
        font-size: 14px;
        font-weight: normal;
    }
    .mui-ellipsis {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #26A2FF;
    }
}
</style>

