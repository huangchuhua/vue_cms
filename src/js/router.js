//导入vue
import Vue from "vue";

//4.0引入组件
import HomeContainer from "../components/tabbar/HomeContainer.vue";
import memberContainer from "../components/tabbar/memberContainer.vue";
import searchContainer from "../components/tabbar/searchContainer.vue";
import shopcarContainer from "../components/tabbar/shopcarContainer.vue";

import newsList from "../components/news/newsList.vue";
import newsInfo from "../components/news/newsInfo.vue";


//4.1导入路由模块
import VueRouter from "vue-router";
Vue.use(VueRouter);
//创建路由对象
const router = new VueRouter({
    routes: [{
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: HomeContainer
        },
        {
            path: "/member",
            component: memberContainer
        },
        {
            path: "/search",
            component: searchContainer
        },
        {
            path: "/shopcar",
            component: shopcarContainer
        },
        {
            path: "/home/newsList",
            component: newsList
        },
        {
            path: "/home/newsInfo/:id",
            component: newsInfo
        }
    ],
    linkActiveClass: "mui-active"
})

export default router;