<template>
  <div class='review-container'>
    <div class='crumbs'>
      <el-breadcrumb separator='/'>
        <el-breadcrumb-item><i class='el-icon-edit-outline'></i> Review</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter='20'>
      <el-col :span='12'>
        <el-card class='review-card'>
          <div slot='header' class='clearfix'>
            <span style='font-weight: 800'>Write the review</span>
          </div>
          <el-form :model='ruleForm' :rules='rules' ref='ruleForm' label-width='100px' label-position='left'
                   class='demo-ruleForm'>
            <el-form-item label='Restaurant' class='restaurant-name' prop='name'>
              <el-input v-model='ruleForm.name'></el-input>
            </el-form-item>
            <el-form-item label='Aspect' class='aspect' prop='region'>
              <el-select v-model='ruleForm.region' placeholder='Choose Aspect'>
                <el-option label='Food' value='food'></el-option>
                <el-option label='Service' value='service'></el-option>
                <el-option label='Others' value='others'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label='Time' class='time' required>
              <el-col :span='11'>
                <el-form-item prop='date1'>
                  <el-date-picker type='date' placeholder='Date' v-model='ruleForm.date1'
                                  style='width: 100%;'></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class='line' :span='2'>-</el-col>
              <el-col :span='11'>
                <el-form-item prop='date2'>
                  <el-time-picker placeholder='Time' v-model='ruleForm.date2'
                                  style='width: 100%;'></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label='Rate' class='rate' prop='rate'>
              <el-rate
                  v-model='ruleForm.rate'
                  show-text show-score>
              </el-rate>
            </el-form-item>

            <el-form-item label='Type' class='type' prop='type'>
              <el-checkbox-group v-model='ruleForm.type'>
                <el-checkbox label='Western food' name='type'></el-checkbox>
                <el-checkbox label='Chinese food' name='type'></el-checkbox>
                <el-checkbox label='Others' name='type'></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label='Advantage' class='advantage' prop='resource'>
              <el-radio-group v-model='ruleForm.resource'>
                <el-radio label='Free Wifi'></el-radio>
                <el-radio label='Free Parking'></el-radio>
                <el-radio label='Free Refill'></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item class='input-comment' label='Review' prop='desc'>
              <el-input type='textarea' :rows='4' class='text-comment'
                        placeholder='Please write reviews from multiple aspects'
                        v-model='ruleForm.desc'></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class='create-bottom' type='primary' icon='el-icon-edit'
                         @click="submitForm('ruleForm')">Review
              </el-button>
              <el-button icon='el-icon-refresh-right' @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
            <el-col :span='12'>
              <el-card class='analysis-card'>
                <div slot='header' class='clearfix'>
                  <span style='font-weight: 800'>Aspect entity recognition and sentiment analysis</span>
                </div>
                <el-form label-position='left'>
                  <el-form-item style='font-weight: 600' prop='name'>Aspect entity recognition
                  </el-form-item>
                  <el-form-item prop='name'>
                    <el-row>
                      <el-col :span='6'>
                        <el-tag>pizza</el-tag>
                      </el-col>
                      <el-col :span='18'>
                        <el-progress :percentage='93.56' color='#5cb87a'></el-progress>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop='name'>
                    <el-row>
                      <el-col :span='6'>
                        <el-tag>Food</el-tag>
                      </el-col>
                      <el-col :span='18'>
                        <el-progress :percentage='83.69' color='#6f7ad3'></el-progress>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop='name'>
                    <el-row>
                      <el-col :span='6'>
                        <el-tag>brick oven</el-tag>
                      </el-col>
                      <el-col :span='18'>
                        <el-progress :percentage='80.64' color='#6f7ad3'></el-progress>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop='name'>
                    <el-row>
                      <el-col :span='6'>
                        <el-tag>oven</el-tag>
                      </el-col>
                      <el-col :span='18'>
                        <el-progress :percentage='65.03' color='#e6a23c'></el-progress>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-divider></el-divider>

                  <el-form-item prop='name' style='font-weight: 600'>Aspect sentiment analysis</el-form-item>
                  <el-form-item prop='name'>
                    <el-row>
                      <el-col :span='6'>
                        <el-tag type='warning'>pizza</el-tag>
                      </el-col>
                      <el-col :span='18'>
                        <el-progress :percentage='96.21' color='#f56c6c'></el-progress>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop='name'>
                    <el-row>
                      <el-col :span='6'>
                        <el-tag type='warning'>Food</el-tag>
                      </el-col>
                      <el-col :span='18'>
                        <el-progress :percentage='93.66' color='#f56c6c'></el-progress>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop='name'>
                    <el-row>
                      <el-col :span='6'>
                        <el-tag type='warning'>brick oven</el-tag>
                      </el-col>
                      <el-col :span='18'>
                        <el-progress :percentage='67.98'></el-progress>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop='name'>
                    <el-row>
                      <el-col :span='6'>
                        <el-tag type='warning'>oven</el-tag>
                      </el-col>
                      <el-col :span='18'>
                        <el-progress :percentage='55.89'></el-progress>
                      </el-col>
                    </el-row>
                  </el-form-item>
                </el-form>
              </el-card>
            </el-col>

      <!-- Probably one of my favorite pizza places. Food is always good and the brick oven is a nice touch you don't see everywhere -->


<!--      <el-col :span='12'>-->
<!--        <el-card class='empty'>-->
<!--          <div slot='header' class='clearfix'>-->
<!--            <span style='font-weight: 800'>Please enter the review, waiting for analysis</span>-->
<!--          </div>-->

<!--        </el-card>-->
<!--      </el-col>-->


    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        type: [],
        resource: '',
        desc: ''

      },
      rules: {
        name: [
          { required: true, message: 'Please enter the restaurant name', trigger: 'blur' },
          { min: 3, max: 10, message: 'Character length is 3 to 10', trigger: 'blur' }
        ],
        region: [
          { required: true, message: 'Please select the aspect', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: 'Please select a date', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: 'Please choose a time', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: 'Please select at least one restaurant type', trigger: 'change' }
        ],
        resource: [
          { required: true, message: 'Please select at least one advantage', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Please write review', trigger: 'blur' }
        ],
        rate: [
          { required: true, message: 'Please rate', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.demo-ruleForm {
  font-size: 15px !important;
  font-weight: 700 !important;
}


.review-container {
  width: 1000px;
}

.review-card {
  height: 630px;
}


.analysis-card {
  height: 630px;
}

.create-bottom {
  background-color: #D1262B;
  border-color: #f0f0f0;
}

.input-comment {
  height: 100px;
}

/*.text-comment {*/
/*    height: 80px;*/
/*}*/

.empty {
  height: 630px;
}

</style>
