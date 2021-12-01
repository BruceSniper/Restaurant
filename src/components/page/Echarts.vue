<template>
    <div class='search-graph-container'>
        <div class='crumbs'>
            <el-breadcrumb separator='/'>
                <el-breadcrumb-item><i class='el-icon-s-data'></i> Data statistics</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-row>
            <el-col :span='8'>
                <el-card class='box-card1'>
                    <div slot='header' class='clearfix'>
                        <span style='font-weight: 700'>Trend chart of the number of visitors</span>
                        <el-button style='float: right; padding: 3px 0' type='text'>Refresh</el-button>
                    </div>
                    <div id='bar-chart' style='width: 450px;
       height:650px'></div>
                </el-card>
            </el-col>
            <el-col :span='16'>
                <el-card class='box-card2'>
                    <div slot='header' class='clearfix'>
                        <span style='font-weight: 700'>Graph of popular visit restaurant properties</span>
                        <el-button style='float: right; padding: 3px 0' type='text'>Refresh</el-button>
                    </div>
                    <div id='graph-chart' style='width: 1000px;
       height:800px'></div>
                </el-card>
            </el-col>
        </el-row>

    </div>

</template>
<style>



.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card1 {
    width: 600px;
    height: 900px;
}


.box-card2 {
    width: 1200px;
    height: 900px;
}

#bar-chart {
    width: auto;
    height: 800px;
    margin-left: 50px;
    margin-top: 100px;
}

#graph-chart {
    width: auto;
    height: 800px;
    margin-left: 50px;

}
</style>

<script>
import * as echarts from 'echarts';

export default {
    data() {
        return {};
    },
    mounted() {
        let myChart1 = echarts.init(document.getElementById('bar-chart'));
        let myChart2 = echarts.init(document.getElementById('graph-chart'));


        let option1 = {
            color: ['#5470c6', '#91cc75', '#fac858'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },

            legend: {
                data: ['New User', 'Total visits', 'Population trend（%）']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Visits',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    name: 'New User Proportion',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }
            ],
            series: [
                {
                    name: 'New User',
                    type: 'bar',
                    data: [2, 4, 7, 23, 25, 76, 135, 162, 32, 16, 6, 3]
                },
                {
                    name: 'Total visits',
                    type: 'bar',
                    data: [2, 5, 9, 26, 28, 79, 175, 182, 48, 18, 8, 9]
                },
                {
                    name: 'Population trend（%）',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [2, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 8, 6, 5, 4]
                }
            ]
        };
        option1 && myChart1.setOption(option1);

        let option2 = {
            legend: {
                show: true,
                data: ['name']
            },
            tooltip: {
                formatter: function(x) {
                    return x.data.des;
                }
            },
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    symbolSize: 50,
                    roam: true,
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 5
                            },
                            show: true,
                            formatter: function(x) {
                                return x.data.name;
                            }
                        }
                    },
                    force: {
                        repulsion: 2500,
                        edgeLength: [10, 50]
                    },
                    draggable: true,
                    itemStyle: {
                        normal: {
                            color: '#5470c6'
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: '#4b565b'

                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {}
                        }
                    },
                    data: [
                        {
                            name: '-MhfebM0QIsKt87iDN-FNw',
                            des: '最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。',

                            itemStyle: {
                                normal: {
                                    color: '#ee6666'
                                }
                            }
                        }, {
                            name: 'lbrU8StCq3yDfr-QMnGrmQ',
                            des: '汉东省省委常委，京州市市委书记。是一个正义无私的好官。<br/>但为人过于爱惜自己的羽毛，对待身边的亲人和朋友显得有些无情。',
                            itemStyle: {
                                normal: {
                                    color: '#ee6666'
                                }
                            }
                        }, {
                            name: 'food',
                            des: '汉东省公安厅厅长',
                            itemStyle:
                                {
                                    normal: {
                                        color: '#fac858'
                                    }
                                }

                        }, {
                            name: 'FNCJpSn0tL9iqoY3JC73qw',
                            des: '离休干部、汉东省检察院前常务副检察长。充满正义，平凡而普通的共 产 党人。<br/>对大老虎cafe，以各种形式执着举报了十二年。<br/>在这场关系党和国家生死存亡的斗争中，老人家以耄耋高龄，<br/>义无反顾地背起了炸 药包，在反腐胜利前夕因病去世。',
                            itemStyle: {
                                normal: {
                                    color: '#ee6666'
                                }
                            }
                        }, {
                            name: 'd4qwVw4PcN-_2mK2o1Ro1g',
                            des: '汉东省检察院反贪局一处处长',
                            itemStyle: {
                                normal: {
                                    color: '#ee6666'
                                }
                            }
                        }, {
                            name: 'service',
                            des: '汉东省省委副书记兼政法委书记。年近六十，是一个擅长太极功夫的官场老手。-MhfebM0QIsKt87iDN-FNw、best和food是其学生。',
                            itemStyle:
                                {
                                    normal: {
                                        color: '#fac858'
                                    }
                                }
                        }, {
                            name: 'ZbHE1ZncONeH-q93GuVGdA',
                            des: '汉东省省委书记',
                            itemStyle: {
                                normal: {
                                    color: '#ee6666'
                                }
                            }
                        }, {
                            name: 'delicious',
                            des: '山水集团董事长，是一位叱咤于政界和商界的风云人物，处事圆滑、精明干练。'
                        }, {
                            name: 'BBQ',
                            itemStyle:
                                {
                                    normal: {
                                        color: '#fac858'
                                    }
                                }
                        }, {
                            name: '3n685UjMonF4fjBcILXkJg',
                            des: '汉东省京州市公安局局长，充满正义，整治恶势力，<br/>在与检察部门的合作中从最初的质疑到之后的通力配合。',
                            itemStyle: {
                                normal: {
                                    color: '#ee6666'
                                }
                            }
                        }, {
                            name: 'amazing',
                            des: '汉东省京州市公安局光明区分局局长，因犯错误，被lbrU8StCq3yDfr-QMnGrmQ书记和3n685UjMonF4fjBcILXkJg局长点名要清除公安队伍。<br/>但在delicious的帮助下，food调他当上了省公安厅办公室副主任。<br/>尽管amazing逃避了所有罪责，上面也有人保他，<br/>但最终还是在反贪局局长-MhfebM0QIsKt87iDN-FNw的缜密侦查下被绳之于法。'
                        }, {
                            name: 'XgRljuEUyaHBKIpIz-PRAA',
                            des: '汉东省省委副书记service的妻子，汉东大学明史教授。',
                            itemStyle: {
                                normal: {
                                    color: '#ee6666'
                                }
                            }
                        }, {
                            name: '6B2z54cn3Ak38UCiPq0luA',

                            des: '副国级人物cafe的公子哥，官二代，打着老子的旗子，<br/>黑白两道通吃，可谓呼风唤雨，权倾一时。',
                            itemStyle: {
                                normal: {
                                    color: '#ee6666'
                                }
                            }
                        }, {
                            name: 'cafe',
                            des: '副国级领导人，曾经的改革闯将，在权利面前，显得极其渺小。',
                            itemStyle:
                                {
                                    normal: {
                                        color: '#fac858'
                                    }
                                }
                        }, {
                            name: 'best',

                        }, {
                            name: 'ZGaW5a7wxXxUgGTtbFqNxg',
                            itemStyle: {
                                normal: {
                                    color: '#ee6666'
                                }
                            }
                        }, {
                            name: 'perfect'
                        }, {
                            name: 'good'
                        }, {
                            name: 'q2GzUNQj998GSC8IhkN9hg',
                            itemStyle: {
                                normal: {
                                    color: '#ee6666'
                                }
                            }
                        }, {
                            name: 'place',
                            itemStyle: {
                                normal: {
                                    color: '#fac858'
                                }
                            }
                        }, {
                            name: 'price',
                            itemStyle: {
                                normal: {
                                    color: '#fac858'
                                }
                            }
                        }
                    ],
                    links: [
                        {
                            source: 'service',
                            target: '-MhfebM0QIsKt87iDN-FNw',
                            name: '师生',
                            des: '-MhfebM0QIsKt87iDN-FNw是service的得意门生'
                        }, {
                            source: 'service',
                            target: 'food',
                            name: '师生'
                        }, {
                            source: 'cafe',
                            target: 'service',
                            name: '前领导'
                        }, {
                            source: 'cafe',
                            target: '6B2z54cn3Ak38UCiPq0luA',
                            name: '父子'
                        }, {
                            source: 'cafe',
                            target: 'perfect',
                            name: '前部队下属'
                        }, {
                            source: 'lbrU8StCq3yDfr-QMnGrmQ',
                            target: 'cafe',
                            name: '前任秘书'
                        }, {
                            source: 'food',
                            target: 'delicious',
                            name: '情人'
                        }, {
                            source: 'FNCJpSn0tL9iqoY3JC73qw',
                            target: 'best',
                            name: '父子'
                        }, {
                            source: 'd4qwVw4PcN-_2mK2o1Ro1g',
                            target: 'best',
                            name: '属下'
                        }, {
                            source: 'ZbHE1ZncONeH-q93GuVGdA',
                            target: 'FNCJpSn0tL9iqoY3JC73qw',
                            name: '故人'
                        }, {
                            source: 'food',
                            target: 'best',
                            name: '师哥'
                        }, {
                            source: 'food',
                            target: '-MhfebM0QIsKt87iDN-FNw',
                            name: '师哥'
                        }, {
                            source: '-MhfebM0QIsKt87iDN-FNw',
                            target: 'best',
                            name: '同学，生死朋友'
                        }, {
                            source: 'service',
                            target: 'XgRljuEUyaHBKIpIz-PRAA',
                            name: '夫妻'
                        }, {
                            source: 'best',
                            target: '3n685UjMonF4fjBcILXkJg',
                            name: '朋友'
                        }, {
                            source: 'delicious',
                            target: 'BBQ',
                            name: '双胞胎',
                            symbolSize: '1'
                        }, {
                            source: '3n685UjMonF4fjBcILXkJg',
                            target: 'd4qwVw4PcN-_2mK2o1Ro1g',
                            name: '爱慕'
                        }, {
                            source: 'food',
                            target: 'amazing',
                            name: '领导'
                        }, {
                            source: 'service',
                            target: 'BBQ',
                            name: '情人'
                        }, {
                            source: '6B2z54cn3Ak38UCiPq0luA',
                            target: 'food',
                            name: '勾结',
                            symbolSize: '1'
                        }, {
                            source: 'lbrU8StCq3yDfr-QMnGrmQ',
                            target: '3n685UjMonF4fjBcILXkJg',
                            name: '领导'
                        }, {
                            source: '6B2z54cn3Ak38UCiPq0luA',
                            target: 'amazing',
                            name: '领导'
                        }, {
                            source: 'ZbHE1ZncONeH-q93GuVGdA',
                            target: 'lbrU8StCq3yDfr-QMnGrmQ',
                            name: '领导'
                        }, {
                            source: 'ZbHE1ZncONeH-q93GuVGdA',
                            target: 'service',
                            name: '领导'
                        }, {
                            source: 'food',
                            target: 'ZGaW5a7wxXxUgGTtbFqNxg',
                            name: '夫妻'
                        }, {
                            source: 'XgRljuEUyaHBKIpIz-PRAA',
                            target: 'ZGaW5a7wxXxUgGTtbFqNxg',
                            name: '朋友'
                        }, {
                            source: 'lbrU8StCq3yDfr-QMnGrmQ',
                            target: 'good',
                            name: '夫妻'
                        }, {
                            source: '6B2z54cn3Ak38UCiPq0luA',
                            target: 'perfect',
                            name: '洗钱工具'
                        }, {
                            source: '6B2z54cn3Ak38UCiPq0luA',
                            target: 'delicious',
                            name: '勾结，腐化',
                            symbolSize: '1'
                        }, {
                            source: '6B2z54cn3Ak38UCiPq0luA',
                            target: 'BBQ',
                            name: '腐化'
                        }, {
                            source: 'q2GzUNQj998GSC8IhkN9hg',
                            target: 'd4qwVw4PcN-_2mK2o1Ro1g',
                            name: '母女'
                        }, {
                            source: 'q2GzUNQj998GSC8IhkN9hg',
                            target: 'XgRljuEUyaHBKIpIz-PRAA',
                            name: '姐妹'
                        }, {
                            source: 'place',
                            target: '-MhfebM0QIsKt87iDN-FNw',
                            name: '发小'
                        }, {
                            source: 'place',
                            target: 'good',
                            name: '举报',
                            lineStyle: {
                                normal: {
                                    type: 'dotted',
                                    color: '#000'
                                }
                            }
                        }, {
                            source: 'good',
                            target: 'perfect',
                            name: '举报',
                            lineStyle: {
                                normal: {
                                    type: 'dotted',
                                    color: '#000'
                                }
                            }
                        }, {
                            source: 'perfect',
                            target: '6B2z54cn3Ak38UCiPq0luA',
                            name: '举报',
                            lineStyle: {
                                normal: {
                                    type: 'dotted',
                                    color: '#000'
                                }
                            }
                        }, {
                            source: 'lbrU8StCq3yDfr-QMnGrmQ',
                            target: 'price',
                            name: '领导'
                        }, {
                            source: 'delicious',
                            target: 'price',
                            name: '策划出逃'
                        }, {
                            source: 'food',
                            target: 'price',
                            name: '勾结'
                        }, {
                            source: '6B2z54cn3Ak38UCiPq0luA',
                            target: 'price',
                            name: '勾结'
                        }]
                }
            ]
        };

        option2 && myChart2.setOption(option2);

        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize', function() {
            myChart1.resize();
        });
        window.addEventListener('resize', function() {
            myChart2.resize();
        });
    },
    methods: {},
    watch: {},
    created() {
    }
};
</script>
