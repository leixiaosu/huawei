// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:'',
    lable:1,
    arr_id:[],
    shop_arr:[]
  },

  //获取搜索商品信息
  getSearch(event){
    let key=event.detail.value
    var the=this;
    var arr=[];

    if(!event.detail.value){
      return
    }
    this.setData({
      lable:2
    });

    //请求搜索商品id
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/qsearch',
      data:{
      query:event.detail.value
      },
      success(response){
        // console.log(response)
        for(var i=0;i<response.data.message.length;i++)
        {
          wx.request({
            url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',
            data:{
            goods_id:response.data.message[i].goods_id
            },
            success(response){
              // console.log(response.data.message);
              arr.push(response.data.message);
            
            },
            complete:function(){
              // console.log(the.data.shop_arr);
              the.setData({
          shop_arr:arr
        })
            }
          })
        }
        
      }
    })

  },
  onShow(){
    // if(!key){
    //   this.setData({
    //     arr:[]
    //   })
    // }
  },
  returnSearch(){
    this.setData({
      lable:1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */

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