// pages/user/user.js
import request from '../../utils/request' 
Page({
  data: {
    // newArr:[],
    recommendList:[],
    userInfo:'',
    userImage:'/state/icon/user.png'
  },
  // 更新信息
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗 
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // console.log(res)
        this.setData({ 
          userImage:this.data.userInfo.avatarUrl,
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  // 退出登录
  tui(){
    this.setData({
      userInfo:'',
      userImage:'/state/icon/user.png',
    })
  },
  goBuy(){
    wx.redirectTo({
      url: '/pages/list/list?isbuy='+'isNoBuy'
    })
  }, 
  goNoBuy(){
    wx.redirectTo({
      url: '/pages/list/list?isbuy='+'isBuy'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    let resultList= await request('https://api-hmugo-web.itheima.net/api/public/v1/categories')
    // console.log(resultList.message.splice(0,10))
    this.setData({
      recommendList:resultList.message.splice(0,20)
    })
    // let resultList1= await request('https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id='+2)
    // console.log(resultList1)
    // const newObj={prc:resultList1.message.goods_big_logo,name:resultList1.message.goods_name}
    // this.data.newArr.push(newObj)
    // console.log(this.data.newArr)
  },
  async getDetail(e){
    // console.log(e.currentTarget.id)
    let detailShop=await request('https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id='+e.currentTarget.id)
    // console.log(detailShop)
    wx.setStorageSync('detail', detailShop)
    wx.redirectTo({
      url: '/pages/detail/detail?thing='+'detail'
    })
  }
})
