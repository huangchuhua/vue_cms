/**定义全局的时间过滤器 */
//引入vue
import Vue from "vue";
//引入moment插件
import moment from "moment";
Vue.filter("dateFormat", function (val, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(val).format(pattern);
})