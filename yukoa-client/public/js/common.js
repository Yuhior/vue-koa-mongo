exports  = function historyBack(){
    if (window.history.length<=1) {
        this.$router.push({path:'/'})
        return false
    }else{
        this.$router.go(-1);
    }
    // 上边都没有执行就说明卡在当前页 也不是最后一条，history记录数量大于1 又没有回退记录只能返回首页
    setTimeout(()=>{
        this.$router.push({path:'/'})
    },1000)
} 