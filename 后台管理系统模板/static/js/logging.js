$('#box').paging({
    initPageNo: 1, // 初始页码
    totalPages: 30, //总页数
    totalCount: '合计300条数据', // 条目总数
    slideSpeed: 600, // 缓动速度。单位毫秒
    callback: function(page) { // 回调函数
        console.log(page);
    }
})


