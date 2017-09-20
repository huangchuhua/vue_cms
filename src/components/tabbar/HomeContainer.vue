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
</style>

