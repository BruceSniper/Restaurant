import Vue from 'vue'
import * as echarts from 'echarts';
import {
    BarChart
} from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent
} from 'echarts/components';
import {
    CanvasRenderer
} from 'echarts/renderers';
echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]
);

Vue.use(echarts);

