

<script>
// components/Life.vue - 创建一个文件(vue实例)
export default {
    data(){
        return {
            msg: "hello, Vue"
        }
    },
    // 一. 初始化
    // new Vue()以后, vue内部给实例对象添加了一些属性和方法, data和methods初始化"之前"
    beforeCreate(){
        console.log("beforeCreate -- 执行");
        console.log(this.msg); // undefined
    },
    // data和methods初始化以后
    // 场景: 网络请求, 注册全局事件
    created(){
        console.log("created -- 执行");
        console.log(this.msg); // hello, Vue

        this.timer = setInterval(() => {
        console.log("----")
    },1000)
},
    
// 二. 挂载
    // 真实DOM挂载之前
    // 场景: 预处理data, 不会触发updated钩子函数
    beforeMount () {
        console.log(document.getElementById("myP"));
    },


    // 三. 更新
    // 前提: data数据改变才执行
    // 更新之前
    beforeUpdate(){
        console.log("beforeUpdate -- 执行");
        console.log(document.querySelectorAll("#myUL>li")[4]); // undefined
    },
    // 更新之后
    // 场景: 获取更新后的真实DOM
    updated(){
        console.log("updated -- 执行");
        console.log(document.querySelectorAll("#myUL>li")[4]); // li
    },
    //销毁阶段
    beforeDestroy () {
        console.log('destroyed',this.msg);
        clearInterval(this.timer)
    },
    destroyed() {
        console.log("destroyed",thismsg);
    }
}
</script>
