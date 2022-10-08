// pages/car/car.js
let index=0
Page({
  data: {
    allChecked:false,
    allPrice:'',
    allNum:'', 
    carList:[],
    searchList:[]
  },
  delete(e){
  // console.log(e.currentTarget.id)
  let newList=this.data.carList 
  let carList=newList.filter(item=>item.id!=e.currentTarget.id)
  this.setData({
    carList
  })
},
  // 搜索
  search(event){
    let newSearchList=this.data.carList
    let newList=newSearchList.filter(item=>{
      if(item.name.indexOf(event.detail.value)!== -1)
      return item 
    }) 
    console.log(newList)
    this.setData({
      carList:newList 
    })
  },
  add(event){
    let newList=this.data.carList
    newList.some(item=>{
      if(item.id==event.currentTarget.id){
        item.count++
        return
      }
    })
    this.setData({
      carList:newList
    })
    this.getAllthing()
  },
  sub(event){
    let newList=this.data.carList
    newList.some(item=>{
      if(item.id==event.currentTarget.id){
        if(item.count==0){
          return
        }
        item.count--
        return
      }
    })
    this.setData({
      carList:newList 
    })
    this.getAllthing()
  },
  handleItem(event){
    console.log(event.currentTarget.id)
    let newList=this.data.carList 
    newList.some(item=>{
      if(item.id==event.currentTarget.id){
        item.done=!item.done
        return
      } 
    })
    this.getAllthing()
  },
  handleAll(e){
    let newallChecked=!this.data.allChecked
    this.setData({
      allChecked:newallChecked
    })
    let newList=this.data.carList
    newList.forEach(item=>item.done=newallChecked)
    this.setData({
      carList:newList
    })
    this.getAllthing()
  },
  jie(){
    let isBuy=this.data.carList.filter(item=>item.done)
    let isNoBuy=this.data.carList.filter(item=>!item.done)
    wx.setStorageSync('isBuy', isBuy)
    wx.setStorageSync('isNoBuy', isNoBuy)
    if(isBuy.length){
      wx.showToast({ 
        title: '购买成功',
        icon:'success'
      })
    }
  },
  getAllthing(){
    let allPrice= this.data.carList
    .filter(item=>item.done)
    .reduce((all,item)=>(all+=item.count*item.price),0)
    let allNum= this.data.carList
    .filter(item=>item.done)
    .reduce((all,item)=>(all+=item.count),0) 
    this.setData({ 
      allPrice,
      allNum
    })
  },
  onLoad(){
    // this.getAllthing()
  },
  onShow() {
    this.getAllthing()
    this.getNewCar()
    this.watchInput()
  },
  watchInput(){
    if(!this.data.searchList){
      this.setData({
        searchList : []
    })
      
    }
  },
  getNewCar(){
      let newcarObj=wx.getStorageSync('newObj') 
      let carList=this.data.carList
      if(!newcarObj){
        return
      }
      carList.push(newcarObj) 
      this.setData({
        carList
      })
  },
  
  onReady() {

  }
})