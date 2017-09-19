//1.1引入vue
import Vue from "vue";

//1.2引入根组件
import App from "../components/app.vue";

//2.1引入mint-ui库
import Mint from "mint-ui";
//引入mint-ui的样式
import "mint-ui/lib/style.css";
//注册mint--ui
Vue.use(Mint);

//3.1导入mui文件样式
import "../lib/mui/css/mui.css";
//导入扩展图标样式
import "../lib/mui/css/icons-extra.css";


//4.0引入组件
import HomeContainer from "../components/tabbar/HomeContainer.vue";
import memberContainer from "../components/tabbar/memberContainer.vue";
import searchContainer from "../components/tabbar/searchContainer.vue";
import shopcarContainer from "../components/tabbar/shopcarContainer.vue";
//4.1导入路由模块
import VueRouter from "vue-router";
Vue.use(VueRouter);
//创建路由对象
const router = new VueRouter({
    routes: [{
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
        }
    ]
})

//1.3创建vue实例
const vm = new Vue({
    el: "#app",
    //渲染根组
    render: creatElement => creatElement(App),
    //挂载路由
    router
})