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


//4导入自己的路由模块
import router from "./router.js";

//5引入vue-resource进行数据请求
import VueResource from "vue-resource";
//注册vue-resource
Vue.use(VueResource);
//引入请求路径文档
import config from "./globalConfig.js";
//设置请求根目录
Vue.http.options.root = config.baseUrl;

//引入时间过滤模块
import "./globalFilters.js";

//1.3创建vue实例
const vm = new Vue({
    el: "#app",
    //渲染根组
    render: creatElement => creatElement(App),
    //挂载路由
    router
})