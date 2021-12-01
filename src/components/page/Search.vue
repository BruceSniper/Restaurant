<template>

  <div>
    <link rel='stylesheet' href='src/assets/icon/iconfont.css'>
    <div class='crumbs'>
      <el-breadcrumb separator='/'>
        <el-breadcrumb-item><i class='el-icon-search'></i> Search && Recommendation</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class='container'>


<!--      <div class='search-container'>-->
<!--        <el-input placeholder='Please enter the content you want to search' v-model='input3' class='input-with-select'-->
<!--                  clearable>-->
<!--          <el-select v-model='select' slot='prepend' placeholder='Select'>-->
<!--            <el-option label='Restaurant' value='1'></el-option>-->
<!--            <el-option label='Location' value='2'></el-option>-->
<!--            <el-option label='Type' value='3'></el-option>-->
<!--          </el-select>-->
<!--          <el-button type='primary' slot='append' icon='el-icon-search' class='searchButton'>Search</el-button>-->
<!--        </el-input>-->
<!--      </div>-->

            <div class='search-result'>
              <div class='research-container'>
                <el-input placeholder='Please enter the content to search again' v-model='input3' class='re-input-with-select'>
                  <el-select v-model='select' slot='prepend' placeholder='Select'>
                    <el-option label='Restaurant' value='1'></el-option>
                    <el-option label='Location' value='2'></el-option>
                    <el-option label='Type' value='3'></el-option>
                  </el-select>
                  <el-button type='primary' slot='append' icon='el-icon-search' class='searchButton' style='font-weight: 700'>Search
                  </el-button>
                </el-input>


              </div>
              <div class='search-result-container'>
                <el-row>
                  <el-col :span='13'>
                    <el-card class='search-result-list-card'>
                      <div slot='header' class='clearfix'>
                        <span style='font-weight: 700'>Search Result</span>
                      </div>
                      <el-row gutter='10'>
                        <el-col :span='12' class='result-col1'>
                          <el-card class='result-card'>
                            <el-row>
                              <el-col :span='7'>
                                <img style='width: 100px; height: 100px' src='../../assets/pictures/1.jpg' :fit='fit'>
                              </el-col>
                              <el-col :span='17'>
                                <div style=''>Hui Restaurant & Bar</div>
                                <el-divider class='fengexian'></el-divider>

                                <el-rate
                                    style='margin-top: 5px'
                                    v-model='4.7'
                                    disabled
                                    show-score
                                    text-color='#ff9900'
                                    score-template='4.7'>
                                </el-rate>
                                <el-row style='margin-top: 5px'>
                                  <el-col span='6'>
                                    <el-button size='small' class='iconfont icon-dianzan' @click='handleAdd'
                                               style='padding: 6px 4px; width: 55px'>Like
                                    </el-button>
                                  </el-col>
                                  <el-col span='18'>
                                    <el-button size='small' class='iconfont icon-shoucang' @click='handleAdd'
                                               style='padding: 6px 4px; width: 110px'>Favourite
                                    </el-button>
                                  </el-col>
                                </el-row>
                              </el-col>
                            </el-row>

                          </el-card>

                          <el-card class='result-card'>
                            <el-row>
                              <el-col :span='7'>
                                <img style='width: 100px; height: 100px' src='../../assets/pictures/3.jpg' :fit='fit'>
                              </el-col>
                              <el-col :span='17'>
                                <div style=''>Giardino D’oro</div>
                                <el-divider class='fengexian'></el-divider>

                                <el-rate
                                    style='margin-top: 5px'
                                    v-model='4.3'
                                    disabled
                                    show-score
                                    text-color='#ff9900'
                                    score-template='4.3'>
                                </el-rate>
                                <el-row style='margin-top: 5px'>
                                  <el-col span='6'>
                                    <el-button size='small' class='iconfont icon-dianzan' @click='handleAdd'
                                               style='padding: 6px 4px; width: 55px'>Like
                                    </el-button>
                                  </el-col>
                                  <el-col span='18'>
                                    <el-button size='small' class='iconfont icon-shoucang' @click='handleAdd'
                                               style='padding: 6px 4px; width: 110px'>Favourite
                                    </el-button>
                                  </el-col>
                                </el-row>
                              </el-col>
                            </el-row>

                          </el-card>

                          <el-card class='result-card'>
                            <el-row>
                              <el-col :span='7'>
                                <img style='width: 100px; height: 100px' src='../../assets/pictures/5.jpg' :fit='fit'>
                              </el-col>
                              <el-col :span='17'>
                                <div style=''>Thursday Kitchen</div>
                                <el-divider class='fengexian'></el-divider>

                                <el-rate
                                    style='margin-top: 5px'
                                    v-model='4.9'
                                    disabled
                                    show-score
                                    text-color='#ff9900'
                                    score-template='4.9'>
                                </el-rate>
                                <el-row style='margin-top: 5px'>
                                  <el-col span='6'>
                                    <el-button size='small' class='iconfont icon-dianzan' @click='handleAdd'
                                               style='padding: 6px 4px; width: 55px'>Like
                                    </el-button>
                                  </el-col>
                                  <el-col span='18'>
                                    <el-button size='small' class='iconfont icon-shoucang' @click='handleAdd'
                                               style='padding: 6px 4px; width: 110px'>Favourite
                                    </el-button>
                                  </el-col>
                                </el-row>
                              </el-col>
                            </el-row>

                          </el-card>

                          <el-card class='result-card'>
                            <el-row>
                              <el-col :span='7'>
                                <img style='width: 100px; height: 100px' src='../../assets/pictures/7.jpg' :fit='fit'>
                              </el-col>
                              <el-col :span='17'>
                                <div style=''>The Osprey</div>
                                <el-divider class='fengexian'></el-divider>

                                <el-rate
                                    style='margin-top: 5px'
                                    v-model='4.4'
                                    disabled
                                    show-score
                                    text-color='#ff9900'
                                    score-template='4.4'>
                                </el-rate>
                                <el-row style='margin-top: 5px'>
                                  <el-col span='6'>
                                    <el-button size='small' class='iconfont icon-dianzan' @click='handleAdd'
                                               style='padding: 6px 4px; width: 55px'>Like
                                    </el-button>
                                  </el-col>
                                  <el-col span='18'>
                                    <el-button size='small' class='iconfont icon-shoucang' @click='handleAdd'
                                               style='padding: 6px 4px; width: 110px'>Favourite
                                    </el-button>
                                  </el-col>
                                </el-row>
                              </el-col>
                            </el-row>

                          </el-card>


                        </el-col>
                        <el-col :span='12' class='result-col2'>
                          <el-card class='result-card'>
                            <el-row>
                              <el-col :span='7'>
                                <img style='width: 100px; height: 100px' src='../../assets/pictures/2.jpg' :fit='fit'>
                              </el-col>
                              <el-col :span='17'>
                                <div style=''>KFC</div>
                                <el-divider class='fengexian'></el-divider>

                                <el-rate
                                    style='margin-top: 5px'
                                    v-model='4.6'
                                    disabled
                                    show-score
                                    text-color='#ff9900'
                                    score-template='4.6'>
                                </el-rate>
                                <el-row style='margin-top: 5px'>
                                  <el-col span='6'>
                                    <el-button size='small' class='iconfont icon-dianzan' @click='handleAdd'
                                               style='padding: 6px 4px; width: 55px'>Like
                                    </el-button>
                                  </el-col>
                                  <el-col span='18'>
                                    <el-button size='small' class='iconfont icon-shoucang' @click='handleAdd'
                                               style='padding: 6px 4px; width: 110px'>Favourite
                                    </el-button>
                                  </el-col>
                                </el-row>

                              </el-col>
                            </el-row>
                          </el-card>

                          <el-card class='result-card'>
                            <el-row>
                              <el-col :span='7'>
                                <img style='width: 100px; height: 100px' src='../../assets/pictures/4.jpg' :fit='fit'>
                              </el-col>
                              <el-col :span='17'>
                                <div style=''>Inti</div>
                                <el-divider class='fengexian'></el-divider>

                                <el-rate
                                    style='margin-top: 5px'
                                    v-model='4.6'
                                    disabled
                                    show-score
                                    text-color='#ff9900'
                                    score-template='4.6'>
                                </el-rate>
                                <el-row style='margin-top: 5px'>
                                  <el-col span='6'>
                                    <el-button size='small' class='iconfont icon-dianzan' @click='handleAdd'
                                               style='padding: 6px 4px; width: 55px'>Like
                                    </el-button>
                                  </el-col>
                                  <el-col span='18'>
                                    <el-button size='small' class='iconfont icon-shoucang' @click='handleAdd'
                                               style='padding: 6px 4px; width: 110px'>Favourite
                                    </el-button>
                                  </el-col>
                                </el-row>
                              </el-col>
                            </el-row>

                          </el-card>

                          <el-card class='result-card'>
                            <el-row>
                              <el-col :span='7'>
                                <img style='width: 100px; height: 100px' src='../../assets/pictures/6.jpg' :fit='fit'>
                              </el-col>
                              <el-col :span='17'>
                                <div style=''>Amélie</div>
                                <el-divider class='fengexian'></el-divider>

                                <el-rate
                                    style='margin-top: 5px'
                                    v-model='4.5'
                                    disabled
                                    show-score
                                    text-color='#ff9900'
                                    score-template='4.5'>
                                </el-rate>
                                <el-row style='margin-top: 5px'>
                                  <el-col span='6'>
                                    <el-button size='small' class='iconfont icon-dianzan' @click='handleAdd'
                                               style='padding: 6px 4px; width: 55px'>Like
                                    </el-button>
                                  </el-col>
                                  <el-col span='18'>
                                    <el-button size='small' class='iconfont icon-shoucang' @click='handleAdd'
                                               style='padding: 6px 4px; width: 110px'>Favourite
                                    </el-button>
                                  </el-col>
                                </el-row>
                              </el-col>
                            </el-row>

                          </el-card>

                          <el-card class='result-card'>
                            <el-row>
                              <el-col :span='7'>
                                <img style='width: 100px; height: 100px' src='../../assets/pictures/8.jpg' :fit='fit'>
                              </el-col>
                              <el-col :span='17'>
                                <div style=''>The Cabin NYC</div>
                                <el-divider class='fengexian'></el-divider>

                                <el-rate
                                    style='margin-top: 5px'
                                    v-model='4.5'
                                    disabled
                                    show-score
                                    text-color='#ff9900'
                                    score-template='4.5'>
                                </el-rate>
                                <el-row style='margin-top: 5px'>
                                  <el-col span='6'>
                                    <el-button size='small' class='iconfont icon-dianzan' @click='handleAdd'
                                               style='padding: 6px 4px; width: 55px'>Like
                                    </el-button>
                                  </el-col>
                                  <el-col span='18'>
                                    <el-button size='small' class='iconfont icon-shoucang' @click='handleAdd'
                                               style='padding: 6px 4px; width: 110px'>Favourite
                                    </el-button>
                                  </el-col>
                                </el-row>
                              </el-col>
                            </el-row>

                          </el-card>


                        </el-col>
                      </el-row>
                      <el-pagination class='pagination-01'
                                     :page-size='8'
                                     :pager-count='10'
                                     background
                                     layout='prev, pager, next'
                                     :total='80'>
                      </el-pagination>

                    </el-card>
                  </el-col>
                  <el-col :span='11'>
                    <el-card class='search-recommend-list-card'>
                      <div slot='header' class='clearfix'>
                        <span style='font-weight: 700'>Recommend for you</span>
                      </div>
                      <el-card class='result-card'>
                        <el-row>
                          <el-col :span='10'>
                            <img style='width: 250px; height: 150px' src='../../assets/pictures/9.jpg' :fit='fit'>
                          </el-col>
                          <el-col :span='14'>
                            <div style=''>Kyuramen Union Square</div>
                            <el-divider class='fengexian'></el-divider>

                            <el-rate
                                style='margin-top: 5px'
                                v-model='4.9'
                                disabled
                                show-score
                                text-color='#ff9900'
                                score-template='4.9'>
                            </el-rate>
                            <div style='margin-top: 10px'>Has similar
                              <el-tag>location</el-tag>
                              <el-tag style='margin-left: 5px'>hall</el-tag>with
                              <el-tag color='#D32323' style='color: #f0f0f0'>Hui Restaurant & Bar</el-tag>

                            </div>
                            <div style='margin-top: 5px'>Has similar
                              <el-tag>waiter</el-tag>
                              <el-tag style='margin-left: 5px'>drink</el-tag>with
                              <el-tag color='#D32323' style='color: #f0f0f0'>
                                Amélie</el-tag>

                            </div>


                          </el-col>
                        </el-row>

                      </el-card>

                      <el-card class='result-card'>
                        <el-row>
                          <el-col :span='10'>
                            <img style='width: 250px; height: 150px' src='../../assets/pictures/10.jpg' :fit='fit'>
                          </el-col>
                          <el-col :span='14'>
                            <div style=''>Queen of Sheba</div>
                            <el-divider class='fengexian'></el-divider>

                            <el-rate
                                style='margin-top: 5px'
                                v-model='4.7'
                                disabled
                                show-score
                                text-color='#ff9900'
                                score-template='4.7'>
                            </el-rate>
                            <div style='margin-top: 10px'>Has similar
                              <el-tag>steak</el-tag>
                              <el-tag style='margin-left: 5px'>decoration</el-tag>with
                              <el-tag color='#D32323' style='color: #f0f0f0'>Giardino D’oro</el-tag>

                            </div>
                            <div style='margin-top: 5px'>Has similar
                              <el-tag>popular</el-tag>
                              <el-tag style='margin-left: 5px'>chicken</el-tag>with
                              <el-tag color='#D32323' style='color: #f0f0f0'>
                                KFC</el-tag>

                            </div>

                          </el-col>
                        </el-row>

                      </el-card>

                      <el-card class='result-card'>
                        <el-row>
                          <el-col :span='10'>
                            <img style='width: 250px; height: 150px' src='../../assets/pictures/11.jpg' :fit='fit'>
                          </el-col>
                          <el-col :span='14'>
                            <div style=''>Benemon</div>
                            <el-divider class='fengexian'></el-divider>

                            <el-rate
                                style='margin-top: 5px'
                                v-model='4.6'
                                disabled
                                show-score
                                text-color='#ff9900'
                                score-template='4.6'>
                            </el-rate>
                            <div style='margin-top: 10px'>Has similar
                              <el-tag>music</el-tag>
                              <el-tag style='margin-left: 5px'>milkshake</el-tag>with
                              <el-tag color='#D32323' style='color: #f0f0f0'>
                                Thursday Kitchen</el-tag>

                            </div>
                            <div style='margin-top: 5px'>Has similar
                              <el-tag>soup</el-tag>
                              <el-tag style='margin-left: 5px'>curry</el-tag>with
                              <el-tag color='#D32323' style='color: #f0f0f0'>
                                Inti</el-tag>

                            </div>

                          </el-col>
                        </el-row>

                      </el-card>
                      <el-pagination
                          style='margin-top: 60px;margin-left: 250px'

                          layout="prev, pager, next"
                          :total="50">
                      </el-pagination>
                    </el-card>
                  </el-col>
                </el-row>


      <!--&lt;!&ndash;          <el-button size='small' class='iconfont icon-dianzan' @click='handleAdd'&ndash;&gt;-->
      <!--&lt;!&ndash;                     style='padding: 6px 4px; width: 55px'>Like&ndash;&gt;-->
      <!--&lt;!&ndash;          </el-button>&ndash;&gt;-->
      <!--&lt;!&ndash;          <el-button size='small' class='iconfont icon-dianzan1' @click='handleAdd'&ndash;&gt;-->
      <!--&lt;!&ndash;                     style='padding: 6px 4px; width: 55px'>Like&ndash;&gt;-->
      <!--&lt;!&ndash;          </el-button>&ndash;&gt;-->
      <!--&lt;!&ndash;          <el-button size='small' class='iconfont icon-dianzan2' @click='handleAdd'&ndash;&gt;-->
      <!--&lt;!&ndash;                     style='padding: 6px 4px; width: 55px'>Like&ndash;&gt;-->
      <!--&lt;!&ndash;          </el-button>&ndash;&gt;-->
      <!--&lt;!&ndash;          <el-button size='small' class='iconfont icon-shoucang' @click='handleAdd'&ndash;&gt;-->
      <!--&lt;!&ndash;                     style='padding: 6px 4px; width: 110px'>Favourite&ndash;&gt;-->
      <!--&lt;!&ndash;          </el-button>&ndash;&gt;-->
      <!--&lt;!&ndash;          <el-button size='small' class='iconfont icon-shoucang1' @click='handleAdd'&ndash;&gt;-->
      <!--&lt;!&ndash;                     style='padding: 6px 4px; width: 110px'>Favourite&ndash;&gt;-->
      <!--&lt;!&ndash;          </el-button>&ndash;&gt;-->
      <!--&lt;!&ndash;          <el-button size='small' class='iconfont icon-shoucang2' @click='handleAdd'&ndash;&gt;-->
      <!--&lt;!&ndash;                     style='padding: 6px 4px; width: 110px'>Favourite&ndash;&gt;-->
      <!--&lt;!&ndash;          </el-button>&ndash;&gt;-->
      <!--&lt;!&ndash;          <el-button size='small' class='iconfont icon-shoucang11' @click='handleAdd'&ndash;&gt;-->
      <!--&lt;!&ndash;                     style='padding: 6px 4px; width: 110px'>Favourite&ndash;&gt;-->
      <!--&lt;!&ndash;          </el-button>&ndash;&gt;-->
      <!--        </div>-->
      <!--        &lt;!&ndash;                <img id="search-pic" src='../../assets/img/原始搜索图.jpg'/>&ndash;&gt;-->

            </div>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      input3: '',
      select: ''
    };
  }
};
</script>

<style>
@import "../../assets/icon/iconfont.css";

.search-container {
  position: relative;
  width: auto;
  height: 700px;
  background-image: url(../../assets/img/cake.jpg);
  background-size: 100%;
}

.re-input-with-select {
  margin-top: 5px;
  margin-left: 400px;
  width: 1000px;
}

.search-result {
  position: relative;
  width: auto;
  height: 900px;

  background-size: 100%;
}

.search-result-list-card {
  width: 900px;
  height: 800px;
}

.search-recommend-list-card {
  width: 800px;
  height: 800px;
}

.search-result-container {
  padding-left: 20px;
  padding-top: 30px;
}

#search-pic {
  /*position: absolute;*/
  margin-top: 10px;
  margin-left: 300px;
  /*left: 300px;*/
  height: 90%;
}

.el-select .el-input {
  width: 150px;
}


.input-with-select {
  background-color: #fff;
  position: absolute;
  width: 1000px;
  top: 50%;
  left: 20%;
}

.el-input-group__append {
  background-color: #D32323;
  color: #fff;
}

.result-card {
  margin-top: 10px;
  font-weight: 700 !important;
}

.container {
  height: 900px;
}

.pagination-01 {
  margin-top: 60px;
  margin-left: 200px;
}

.fengexian {
  margin-top: 1px;
  margin-bottom: 1px;
}

</style>
