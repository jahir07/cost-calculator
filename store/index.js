export const state = () => ({
  package_type: 'basic',
  plan_type: 'template',
  webdesign: 0,
  web_mid_design: 10,
  web_com_design: 15,
  //custom
  web_cus_design: 5,
  web_cus_mid_design: 10,
  web_cus_com_design: 15,
  //web template
  stock_image: '',
  article: '',
  logo: 0,
  logo_no: '',
  webcontent: 1000,
  //ecommerce
  ecom: 0,
  extra_discount: 0,
  //addons
  form: '',
  video: '',
  online_schedule: '',
  search_cap: '',
  member_login: '',
  analytic: '',
  form_no: 1,
  video_no: 1,
  search_cap_no: 1,
  member_login_no: 1,
  analytic_no: 1,
  social_media: '',
  social_media_no: 1,
  chat_setup: '',
  chat_setup_no: 1,
  blog_setup: '',
  blog_setup_no: 1,

  //calculation
  total_price: '',

  //client info
  full_name: '',
  email: '',
  phone: '',
  company: '',
  address: '',
  skyp: '',
  linkedin: '',
  others: '',
  quotation_by: '',
})

// getters
export const getters = {

  getPackageType(state) {
    return state.package_type
  },

  getPlanType(state) {
    return state.plan_type
  },

  getWebdesign(state) {
    return state.webdesign
  },

  getWebMidDesign(state) {
    return state.web_mid_design
  },

  getWebComDesign(state) {
    return state.web_com_design
  },

  //custom
  // web_cus_design
  // web_cus_mid_design
  // web_cus_com_design
  getWebCusdesign(state) {
    return state.web_cus_design
  },

  getWebCusMidDesign(state) {
    return state.web_cus_mid_design
  },

  getWebCusComDesign(state){
    return state.web_cus_com_design
  },

  // web content
  getStockImg(state) {
    return state.stock_image
  },

  getArticle(state) {
    return state.article
  },

  getLogo(state) {
    return state.logo
  },

  getLogoNo(state) {
    return state.logo_no
  },

  getWebcontent(state) {
    return state.webcontent
  },

  // ecommerce
  getEcommerceVal(state) {
    return state.ecom
  },

  // addons
  getFormVal(state) {
    return state.form
  },

  getFormNoVal(state) {
    return state.form_no
  },

  getVideoVal(state) {
    return state.video
  },

  getVideoNoVal(state) {
    return state.video_no
  },

  getOnlineScheduleVal(state) {
    return state.online_schedule
  },

  getSearchCapVal(state) {
    return state.search_cap
  },

  getSearchCapNoVal(state) {
    return state.search_cap_no
  },

  getMemberLoginVal(state) {
    return state.member_login
  },

  getMemberLoginNoVal(state) {
    return state.member_login_no
  },

  getAnalyticVal(state) {
    return state.analytic
  },

  getAnalyticNoVal(state) {
    return state.analytic_no
  },

  getSocialMediaVal(state) {
    return state.social_media
  },

  getSocialMediaNoVal(state) {
    return state.social_media_no
  },

  getChatSetupVal(state) {
    return state.chat_setup
  },

  getChatSetupNoVal(state) {
    return state.chat_setup_no
  },

  getBlogSetupVal(state) {
    return state.blog_setup
  },

  getBlogSetupNoVal(state) {
    return state.blog_setup_no
  },

  //calculation
  getTotalPrice(state) {
    return state.total_price
  },

  //discount
  getExtraDiscountVal(state) {
    return state.extra_discount
  },

  //client info
  getFullNameVal(state) {
    return state.full_name
  },
  getEmailVal(state) {
    return state.email
  },
  getPhoneVal(state) {
    return state.phone
  },
  getCompanyVal(state) {
    return state.company
  },
  getAddressVal(state) {
    return state.address
  },
  getSkypVal(state) {
    return state.skyp
  },
  getLinkedinVal(state) {
    return state.linkedin
  },
  getOthersVal(state) {
    return state.others
  },
  getQuotationVal(state) {
    return state.quotation_by
  },

}

// actions
export const actions = {

  setPackageType(context, number) {
    context.commit("package_type_data", number);
  },

  setPlanType(context, number) {
    context.commit("plan_type_data", number);
  },

  setWebdesign(context, number) {
    context.commit("webdesign_data", number);
  },

  setWebMidDesign(context, number) {
    context.commit("web_mid_design_data", number);
  },

  setWebComDesign(context, number) {
    context.commit("web_com_design_data", number);
  },

  //custom
  setWebCusdesign(context, number) {
    context.commit("web_cus_basic_design_data", number);
  },
  
  setWebCusMidDesign(context, number) {
    context.commit("web_cus_medium_design_data", number);
  },
  
  setWebCusComDesign(context, number){
    context.commit("web_cus_complex_design_data", number);
  },

  // web content
  setStockImg(context, number) {
    context.commit("stock_image_data", number);
  },

  setArticle(context, number) {
    context.commit("article_data", number);
  },

  setLogo(context, number) {
    context.commit("logo_data", number);
  },

  setLogoNo(context, number) {
    context.commit("logo_no_data", number);
  },

  setWebcontent(context, number) {
    context.commit("webcontent_data", number);
  },

  setEcom(context, number) {
    context.commit("ecom_data", number);
  },

  // addons
  setForm(context, number) {
    context.commit("form_data", number);
  },

  setFormNo(context, number) {
    context.commit("form_no_data", number);
  },

  setVideo(context, number) {
    context.commit("video_data", number);
  },

  setVideoNo(context, number) {
    context.commit("video_no_data", number);
  },

  setOnlineSchedule(context, number) {
    context.commit("online_schedule_data", number);
  },

  setSearchCap(context, number) {
    context.commit("search_cap_data", number);
  },

  setSearchCapNo(context, number) {
    context.commit("search_cap_no_data", number);
  },

  setMemberLogin(context, number) {
    context.commit("member_login_data", number);
  },

  setMemberLoginNo(context, number) {
    context.commit("member_login_no_data", number);
  },

  setAnalytic(context, number) {
    context.commit("analytic_data", number);
  },

  setAnalyticNo(context, number) {
    context.commit("analytic_no_data", number);
  },

  setSocialMedia(context, number) {
    context.commit("social_media_data", number);
  },

  setSocialMediaNo(context, number) {
    context.commit("social_media_no_data", number);
  },

  setChatSetup(context, number) {
    context.commit("chat_setup_data", number);
  },

  setChatSetupNo(context, number) {
    context.commit("chat_setup_no_data", number);
  },

  setBlogSetup(context, number) {
    context.commit("blog_setup_data", number);
  },

  setBlogSetupNo(context, number) {
    context.commit("blog_setup_no_data", number);
  },

  //calculation
  setTotalPrice(context, payload){
    context.commit('total_price_data', payload);
  },

  //discount
  setExtraDiscountVal(context, payload) {
    context.commit('extra_discount_data', payload);
  },

  //client info
  setFullNameVal(context, payload) {
    context.commit('fullname_data', payload);
  },
  setEmailVal(context, payload) {
    context.commit('email_data', payload);
  },
  setPhoneVal(context, payload) {
    context.commit('phone_data', payload);
  },
  setCompanyVal(context, payload) {
    context.commit('company_data', payload);
  },
  setAddressVal(context, payload) {
    context.commit('address_data', payload);
  },
  setSkypVal(context, payload) {
    context.commit('skyp_data', payload);
  },
  setLinkedinVal(context, payload) {
    context.commit('linkedin_data', payload);
  },
  setOthersVal(context, payload) {
    context.commit('others_data', payload);
  },
  setQuotationVal(context, payload) {
    context.commit('quotation_data', payload);
  },


}

// mutations
export const mutations = {
  package_type_data(state, value) {
    state.package_type = value
  },

  plan_type_data(state, value) {
    state.plan_type = value
  },

  // template
  webdesign_data(state, value) {
    state.webdesign = value
  },

  web_mid_design_data(state, value) {
    state.web_mid_design = value
  },

  web_com_design_data(state, value) {
    state.web_com_design = value
  },

  //custom
  web_cus_basic_design_data(state, value) {
    state.web_cus_design = value
  },

  web_cus_medium_design_data(state, value) {
    state.web_cus_mid_design = value
  },
  
  web_cus_complex_design_data(state, value) {
    state.web_cus_com_design = value
  },

  //web content
  stock_image_data(state, value) {
    state.stock_image = value
  },

  article_data(state, value) {
    state.article = value
  },

  logo_data(state, value) {
    state.logo = value
  },

  logo_no_data(state, value) {
    state.logo_no = value
  },

  webcontent_data(state, value) {
    state.webcontent = value
  },

  ecom_data(state, value) {
    state.ecom = value
  },

  form_data(state, value) {
    state.form = value
  },

  form_no_data(state, value) {
    state.form_no = value
  },

  video_data(state, value) {
    state.video = value
  },

  video_no_data(state, value) {
    state.video_no = value
  },

  online_schedule_data(state, value) {
    state.online_schedule = value
  },

  search_cap_data(state, value) {
    state.search_cap = value
  },

  search_cap_no_data(state, value) {
    state.search_cap_no = value
  },

  member_login_data(state, value) {
    state.member_login = value
  },

  member_login_no_data(state, value) {
    state.member_login_no = value
  },

  analytic_data(state, value) {
    state.analytic = value
  },

  analytic_no_data(state, value) {
    state.analytic_no = value
  },

  social_media_data(state, value) {
    state.social_media = value
  },

  social_media_no_data(state, value) {
    state.social_media_no = value
  },

  chat_setup_data(state, value) {
    state.chat_setup = value
  },

  chat_setup_no_data(state, value) {
    state.chat_setup_no = value
  },

  blog_setup_data(state, value) {
    state.blog_setup = value
  },

  blog_setup_no_data(state, value) {
    state.blog_setup_no = value
  },

  //calculation
  total_price_data(state, value) {
    state.total_price = value
  },

  //discount
  extra_discount_data(state, value){
    state.extra_discount = value
  },

  // client info
  fullname_data(state, value) {
    state.full_name = value
  },
  email_data(state, value) {
    state.email = value
  },

  phone_data(state, value) {
    state.phone = value
  },

  company_data(state, value) {
    state.company = value
  },

  address_data(state, value) {
    state.address = value
  },

  skyp_data(state, value) {
    state.skyp = value
  },

  linkedin_data(state, value) {
    state.linkedin = value
  },

  others_data(state, value) {
    state.others = value
  },

  quotation_data(state, value) {
    state.quotation_by = value
  },

}
