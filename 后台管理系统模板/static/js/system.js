// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {


    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['07-01周六', '07-02周日', '07-03周一', '07-04周二', '07-05周三', '07-06周四', '07-07周五']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [100, 50, 110, 200, 75,50,50],
        type: 'line',
        areaStyle: {}
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);



// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main1'));

// 指定图表的配置项和数据
var option = {


    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['07-01周六', '07-02周日', '07-03周一', '07-04周二', '07-05周三', '07-06周四', '07-07周五']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [100, 50, 110, 200, 75,50,50],
        type: 'line',
        areaStyle: {}
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);