<template>
    <div>
        <!-- 轮播图 使用mint-ui -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,i) in list" :key="i">
                <a href="#">
                    <img :src="'http://127.0.0.1:8899'+item.img" alt="">
                </a>
            </mt-swipe-item>

        </mt-swipe>

        <!-- 导航区 六空格 基本MUI grid-default.html-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <img src="../../images/menu1.png" alt="">
                        <div class="mui-media-body">新闻资讯</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <img src="../../images/menu2.png" alt="">
                        <div class="mui-media-body">图片分享</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <img src="../../images/menu3.png" alt="">
                        <div class="mui-media-body">商品购买</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <img src="../../images/menu4.png" alt="">
                        <div class="mui-media-body">留言反馈</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <img src="../../images/menu5.png" alt="">
                        <div class="mui-media-body">视频专区</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <img src="../../images/menu6.png" alt="">
                        <div class="mui-media-body">联系我们</div>
                    </a>
                </li>

            </ul>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    //调用请求轮播图方法
    created() {
        this.getLunbo();
    },
    methods: {
        getLunbo() {
            var url = "api/getlunbo";
            this.$http.get(url).then(res => {
                if (res.body.status === 0) {
                    this.list = res.body.message;
                } else {
                    console.log("请求图片失败");
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
    height: 180px;
    .mint-swipe-item {
        img {
            width: 100%;
            height: 100%;
        }
    }
}

// 导航区
.mui-table-view-cell {
    img {
        width: 60px;
    }
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 14px;
}

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: 0;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
}
</style>

