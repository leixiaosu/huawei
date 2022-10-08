// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyList:[],
    myBuy:[],
    allArr:[] 
  },
  onShow(){

  },
  onLoad(options) {
    let keyName=options.isbuy 
    let NewList=wx.getStorageSync(keyName)
    if(NewList){
    let MyBuy=wx.getStorageSync('myBuy')
    if(MyBuy){ 
    this.data.buyList.push(MyBuy)
    }
    // console.log(MyBuy) 
    let newArr=[...NewList,...this.data.buyList]
    this.setData({
      buyList:newArr
    }) 
    }else{
      let MyBuy=wx.getStorageSync('myBuy')
      // console.log(MyBuy) 
      if(MyBuy){  
        this.data.buyList.push(MyBuy) 
      } 
    }
    // console.log(666)
    console.log(this.data.buyList) 
    
    // // 购物车购买是一个数组
    // // 直接购买是一个对象
  }
})
