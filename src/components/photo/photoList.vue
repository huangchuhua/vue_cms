<template>
    <div>
        <!-- 图片分类栏 滑动效果用mui的tab-top-webview-main.html -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id==0?'mui-active':'']" v-for="item in cateList" :key="item.id">
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
//引入mui.js实现分类栏滑动效果
import mui from "../../lib/mui/js/mui.js";
export default {
    data() {
        return {
            //图片分类的数组
            cateList: [],
            cateId: 0
        }
    },
    created() {
        this.getPhotoCategory();
    },
    methods: {
        //获取图片分类列表
        getPhotoCategory() {
            var url = "api/getimgCategory";
            this.$http.get(url).then(res => {
                if (res.body.status === 0) {
                    //全部这个分类要自己手动添加
                    res.body.message.unshift({ title: "全部", id: 0 });
                    this.cateList = res.body.message;
                } else {
                    console.log("请求数据出错");
                }
            })
        }
    },
    mounted() {
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005
        })
    }
}
</script>

<style lang="scss" scoped>
* {
    touch-action: pan-y;
}
</style>


