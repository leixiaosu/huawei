Page({

  /**
   * 页面的初始数据
   */
  data: {
    noramalData: [
    //   {
    //   "Cover": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_1@2x.png",
    //   "CoverHeight": 467,
    //   "CoverWidth": 350,
    //   "name":"优质服饰",
    //   "price":123,
    //   "count":"43"
    // },
    // {
    //   "Cover": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_2@2x.png",
    //   "CoverHeight": 900,
    //   "CoverWidth": 700,
    //   "name":"春季热门",
    //   "price":233,
    //   "count":"54"
    // },
    // {
    //   "Cover": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_3@2x.png",
    //   "CoverHeight": 850,
    //   "CoverWidth": 590,
    //   "name":"爆款清仓",
    //   "price":31,
    //   "count":"21"
    // },
    // {
    //   "Cover": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_4@2x.png",
    //   "CoverHeight": 880,
    //   "CoverWidth": 692,
    //   "name":"倒春寒",
    //   "price":432,
    //   "count":"32"
    // },
    // {
    //   "Cover": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_5@2x.png",
    //   "CoverHeight": 910,
    //   "CoverWidth": 710,
    //   "name":"怦然心动",
    //   "price":98,
    //   "count":"5"
    // },
    // {
    //   "Cover": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_1@2x.png",
    //   "CoverHeight": 860,
    //   "CoverWidth": 700,
    //   "name":"清新气质",
    //   "price":32,
    //   "count":"34"
    // },
    // {
    //   "Cover": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_2@2x.png",
    //   "CoverHeight": 850,
    //   "CoverWidth": 480,
    //   "name":"复古胸针",
    //   "price":213,
    //   "count":"34"
    // },
    // {
    //   "Cover": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_3@2x.png",
    //   "CoverHeight": 820,
    //   "CoverWidth": 790,
    //   "name":"韩版手链",
    //   "price":565,
    //   "count":"34"
    // },
    // {
    //   "Cover": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_4@2x.png",
    //   "CoverHeight": 871,
    //   "CoverWidth": 672,
    //   "name":"水晶项链",
    //   "price":654,
    //   "count":"54"
    // },
    // {
    //   "Cover": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_5@2x.png",
    //   "CoverHeight": 820,
    //   "CoverWidth": 680,
    //   "name":"情侣表",
    //   "price":21,
    //   "count":"2"
    // },
    // {
    //   "Cover": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_1@2x.png",
    //   "CoverHeight": 820,
    //   "CoverWidth": 680,
    //   "name":"清新气质",
    //   "price":321,
    //   "count":"24"
    // },
    // {
    //   "Cover": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_2@2x.png",
    //   "CoverHeight": 831,
    //   "CoverWidth": 562,
    //   "name":"复古胸针",
    //   "price":54,
    //   "count":"32"
    // },
  ],
    lable:1,
    leftList: [],
    rightList: [],
    leftHight: 0,
    rightHight: 0,
    flag:"false",
    arr_shops:[]
  },
  show_hidden1(){
    this.setData({
       lable:2
    })
  },
  show_hidden2(){
    this.setData({
      lable:1
   })
  },
  getSearch(){
    wx.redirectTo({
      url:'/pages/search/search'
    })
  },
    //以本地数据为例，实际开发中数据整理以及加载更多等实现逻辑可根据实际需求进行实现   
    onShow: function(options) {
      var arr=[];
      var aid=[];
      var obj='';
 //请求数据
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
      data:{
      },
      success(response){
        console.log(response.data.message);
        for(var i=0;i<response.data.message[29].children.length;i++)
        aid.push(response.data.message[29].children[i].cat_id);

          for(var i=0;i<response.data.message[13].children.length;i++)
          aid.push(response.data.message[13].children[i].cat_id);

          for(var i=0;i<response.data.message[2].children.length;i++)
          aid.push(response.data.message[2].children[i].cat_id);

          for(var i=0;i<response.data.message[14].children.length;i++)
          aid.push(response.data.message[14].children[i].cat_id);

          for(var i=0;i<response.data.message[20].children.length;i++)
          aid.push(response.data.message[20].children[i].cat_id);

          for(var i=0;i<response.data.message[21].children.length;i++)
          aid.push(response.data.message[21].children[i].cat_id);

          for(var i=0;i<response.data.message[22].children.length;i++)
          aid.push(response.data.message[22].children[i].cat_id);
      
        for(var i=0;i<aid.length;i++)
        {
          wx.request({
            url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',
            data:{
            goods_id:aid[i]
            },
            success(response){
              // arr.push(response.data.message);
              // arr[i].CoverHeight=820;
              // arr[i].CoverWidth=680;
        //       for(var i=0;i<arr.length;i++)
        // {
        //  that.data.noramalData.push({
          //  'pic_url':that.data.arr_shops[i].goods_big_logo,
          //  'CoverHeight':467,
          //  'CoverWidth':350,
          //  'shop_name':that.data.arr_shops[i].goods_name,
          //  'buy_count':that.data.arr_shops[i].goods_number,
          //  'shop_price':that.data.arr_shops[i].goods_price
           obj.Cover=response.data.message.goods_big_logo;
           obj.CoverHeight=820;
           obj.CoverWidth=680;
           obj.name=response.data.message.goods_name;
           obj.price=response.data.message.goods_price;
           obj.count=response.data.message.cat_id;
           arr.push(obj);
        //  })
         
        // }
            },
            complete(){
              that.setData({
                arr_shops:arr
              });
              // that.setData({
              //    'arr_shops.CoverHeight':820,
              //   'arr_shops.CoverWidth':680
              // })
              console.log(that.data.arr_shops);
            }
          })
      }
      }
    })

    var that = this;
    var allData = that.data.noramalData;
    //定义两个临时的变量来记录左右两栏的高度，避免频繁调用setData方法
    var leftH = that.data.leftHight;
    var rightH = that.data.rightHight;
    var leftData = [];
    var rightData = [];
    for (let i = 0; i < allData.length; i++) {
      var currentItemHeight = parseInt(Math.round(allData[i].CoverHeight * 345 / allData[i].CoverWidth));
      allData[i].CoverHeight = currentItemHeight + "rpx";//因为xml文件中直接引用的该值作为高度，所以添加对应单位
      if (leftH == rightH || leftH < rightH) {//判断左右两侧当前的累计高度，来确定item应该放置在左边还是右边
        leftData.push(allData[i]);
        leftH += currentItemHeight;
      } else {
        rightData.push(allData[i]);
        rightH += currentItemHeight;
      }
    }
  
    //更新左右两栏的数据以及累计高度
    that.setData({
      leftHight: leftH,
      rightHight: rightH,
      leftList: leftData,
      rightList: rightData
    })
    
  },})