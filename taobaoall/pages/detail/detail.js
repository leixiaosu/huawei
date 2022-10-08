// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList:[]
  },
  addCar(){
    wx.showToast({
      title: '加入成功',
      icon:'success'
    })
    // let newCar=wx.getStorageSync('allCar')
    let newObj={pic:this.data.detailList.goods_big_logo,name:this.data.detailList.goods_name,price:this.data.detailList.goods_price,count:1,done:false,id:this.data.detailList.goods_id}
    wx.setStorageSync('newObj', newObj)
    wx.switchTab({
      url: '/pages/car/car'
    })
    // this.data.detailList.push(newCar)
    // console.log(newObj)
    
  },
  buy(event){
    if(this.data.detailList){
      // console.log(event.currentTarget.item)
      // console.log(this.data.detailList)
      let obj={name:this.data.detailList.goods_name,price:this.data.detailList.goods_price,pic:this.data.detailList.goods_big_logo,id:this.data.detailList.goods_id}
      wx.setStorageSync('myBuy',obj)
      wx.showToast({
        title: '购买成功',
        icon:'success'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(wx.getStorageSync(options.thing))
    this.setData({
      detailList:wx.getStorageSync(options.thing).message
    })
    console.log(this.data.detailList)
    // console.log(wx.getStorageSync(options.thing).message)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})