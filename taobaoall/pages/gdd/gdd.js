// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gray:false, 
    click0:true,
    click1:false,
    flag0:true,
    flag1:false,
    arr:[
    //  { title:'食品',
    //  flag:1},
     { title:'百货',
     flag:2},
     { title:'洗护',
     flag:3,
    
    },
     { title:'数码',
     flag:4,
     },
     { title:'女装',
     flag:5,
     },
     { title:'男装',
     flag:6,
     },
     { title:'电器',
     flag:7,
     },
     { title:'鞋包',
     flag:8,
     },
     { title:'母婴',
     flag:9,
     },
     { title:'运动',
     flag:10,
     },
     { title:'生鲜',
     flag:11,
     },
     { title:'图书',
     flag:12,
     },
    ],
    goods:'',
    allArr:[],
  //   message: [
  //     {
  //         "name": "分类",
  //         "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_4@2x.png",
  //         "open_type": "switchTab",
  //         "navigator_url": "/pages/category/index"
  //     },
  //     {
  //         "name": "秒杀拍",
  //         "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_3@2x.png"
  //     },
  //     {
  //         "name": "超市购",
  //         "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_2@2x.png"
  //     },
  //     {
  //         "name": "母婴品",
  //         "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_1@2x.png"
  //     }
  // ],
  dataEat: [{
		"pcpPrice": "187.2",
		"jdPrice": "187.2",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "蒙牛 特仑苏有机纯牛奶3.8g蛋白质含量升级  250ml*24 梦幻盖礼盒装 （新老包装随机发货）",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "18764029",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/166976/8/27164/152064/621c955eEae5c4f9f/46560f61b787eef7.jpg",
		"skuId": "100003573777",
		"title": "",
		"pPrice": "187.2",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "99.9",
		"jdPrice": "99.9",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "金龙鱼 东北大米 乳玉皇妃稻香贡米 5kg 大米 十斤",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "3591325",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/85271/4/29085/205212/62afe55eE6b849e15/3155bd2a8fbfd941.jpg",
		"skuId": "2004338",
		"title": "",
		"pPrice": "99.9",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "99",
		"jdPrice": "99",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "乐品乐茶 毛尖2022新茶茶叶绿茶雨前绿茶浓茶特级春尖茶礼盒装250g(125g*2罐)",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "2266187",
		"goodRate": "97%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/41877/6/18433/294770/62a0737bEbead7d90/b7a70af4eda1f31d.jpg",
		"skuId": "4310032",
		"title": "",
		"pPrice": "89",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "199.9",
		"jdPrice": "199.9",
		"copyWritingDown": "",
		"backUpWords": [],
		"tag": "",
		"name": "鲁花 食用油 5S物理压榨 压榨一级 花生油 6.18L",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "8196821",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/889/32/19126/439069/62b943f6Ea6e9b224/4978a5926260d04d.jpg",
		"skuId": "1599047",
		"title": "",
		"pPrice": "193.9",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "16.9",
		"jdPrice": "16.9",
		"copyWritingDown": "",
		"backUpWords": [],
		"tag": "",
		"name": "海天 酱油 生抽酱油 1.9L 中华老字号",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "4432227",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/55652/23/18313/453400/629f2cb1Ec2dfefea/c83cf47389e3f067.jpg",
		"skuId": "4176180",
		"title": "",
		"pPrice": "16.9",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "39.9",
		"jdPrice": "39.9",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "佰薇集红豆薏米茶 薏仁茶花草茶养生茶花茶组合袋泡茶冬瓜荷叶茶蒲公英茶芡实茶包150g/盒",
		"plusPrice": "36",
		"productImage": "",
		"commentCount": "388076",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/155915/26/17743/184611/605a8c86E2689ee88/76ced093cb2477e2.jpg",
		"skuId": "5479567",
		"title": "",
		"pPrice": "39.9",
		"copyWriting": "",
		"canSell": "Y"
  }],
  dataEat2: [{
		"pcpPrice": "32.9",
		"jdPrice": "32.9",
		"copyWritingDown": "",
		"backUpWords": [],
		"tag": "",
		"name": "徐福记 小叭叭米格玛糙米卷 能量棒 粗粮夹心米果卷膨化食品饼干休闲零食品散装混合口味大礼包425g 囤货",
		"plusPrice": "27.1",
		"productImage": "",
		"commentCount": "947022",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/78943/37/32/627860/5cd29fe3Ef0505cbc/edb9811295b8b1cc.jpg",
		"skuId": "5759121",
		"title": "",
		"pPrice": "32.9",
		"copyWriting": "",
		"canSell": "Y"
	}, {

		"pcpPrice": "29.9",
		"jdPrice": "29.9",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "雀巢(Nestle) 脆脆鲨 休闲零食 威化饼干 巧克力口味480g(18×20g+6x20g)",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "4329021",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/212298/29/13207/312877/62175d31E860e2fac/ef657022f74aa3e8.jpg",
		"skuId": "508411",
		"title": "",
		"pPrice": "25.5",
		"copyWriting": "",
		"canSell": "Y"
	}, {

		"pcpPrice": "9.8",
		"jdPrice": "9.8",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "爱尚咪咪 虾条 虾味 怀旧好吃零食大礼包 网红休闲小零食（18g*20包）360g/袋",
		"plusPrice": "9.5",
		"productImage": "",
		"commentCount": "1748579",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t6277/218/1823355660/323342/cdbcaddc/59583a1dN16748a8e.jpg",
		"skuId": "5242972",
		"title": "",
		"pPrice": "9.8",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "12.9",
		"jdPrice": "12.9",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "三只松鼠休闲零食天津风味美食小吃小麻花黑糖味悟空麻花108g/袋",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "2043089",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/199136/40/24742/467082/62bac660E14729e72/d6397376c72f79ab.jpg",
		"skuId": "4438331",
		"title": "",
		"pPrice": "10.8",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "8.9",
		"jdPrice": "8.9",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "源氏 老式大辣片 怀旧休闲零食小吃 京东超市豆腐干网红辣条儿时豆皮 200g",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "868422",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/196406/15/26331/641359/62b12918Ed43f3d56/f736c45420433df0.jpg",
		"skuId": "3924103",
		"title": "",
		"pPrice": "8.9",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "15.9",
		"jdPrice": "15.9",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "良品铺子 香酥大麻花天津风味零食小吃传统糕点休闲食品小袋装160g",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "1690994",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/116773/27/25748/178595/62b925efE83fcbf49/f71998fdcb03ee93.jpg",
		"skuId": "3924059",
		"title": "",
		"pPrice": "15.9",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "6.9",
		"jdPrice": "6.9",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "可比克薯片 番茄味105g 休闲零食 膨化食品",
		"plusPrice": "6.7",
		"productImage": "",
		"commentCount": "719288",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/74975/32/19463/494942/62ad919cE0ff5c372/a750180163d50b76.jpg",
		"skuId": "1606013",
		"title": "",
		"pPrice": "6.9",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "9.9",
		"jdPrice": "9.9",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "三只松鼠小贱麻辣味小米锅巴 休闲零食地方特产膨化食品儿童食品小吃锅巴60g/袋",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "3469110",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/38687/32/18714/527498/62ba6909Eafc3d689/d3170a87ac607ef6.jpg",
		"skuId": "3343742",
		"title": "",
		"pPrice": "8.8",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "28.8",
		"jdPrice": "28.8",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "良品铺子 鹌鹑蛋卤蛋铁蛋五香味熟食休闲零食小吃小袋独立包装128g",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "3208798",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/188291/37/26349/181296/62b925dbEdb57b436/6d85fa866013e9f9.jpg",
		"skuId": "1690447",
		"title": "",
		"pPrice": "28.8",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "13",
		"jdPrice": "13",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "三只松鼠休闲零食膨化小吃薯条原味小贱美式薯条75g/袋",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "1624338",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/5597/2/19043/511190/62b04081E50449c02/0a9f46ddbe0b4637.jpg",
		"skuId": "3343744",
		"title": "",
		"pPrice": "11.9",
		"copyWriting": "",
		"canSell": "Y"
  },{
		"pcpPrice": "99.9",
		"jdPrice": "99.9",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "金龙鱼 东北大米 乳玉皇妃稻香贡米 5kg 大米 十斤",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "3591325",
		"goodRate": "99%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/85271/4/29085/205212/62afe55eE6b849e15/3155bd2a8fbfd941.jpg",
		"skuId": "2004338",
		"title": "",
		"pPrice": "99.9",
		"copyWriting": "",
		"canSell": "Y"
	}, {
		"pcpPrice": "99",
		"jdPrice": "99",
		"copyWritingDown": "",
		"backUpWords": [""],
		"tag": "",
		"name": "乐品乐茶 毛尖2022新茶茶叶绿茶雨前绿茶浓茶特级春尖茶礼盒装250g(125g*2罐)",
		"plusPrice": "",
		"productImage": "",
		"commentCount": "2266187",
		"goodRate": "97%",
		"currentPrice": "",
		"image": "https://m.360buyimg.com/babel/jfs/t1/41877/6/18433/294770/62a0737bEbead7d90/b7a70af4eda1f31d.jpg",
		"skuId": "4310032",
		"title": "",
		"pPrice": "89",
		"copyWriting": "",
		"canSell": "Y"
	}
],
dataAll:[{
  "name": "擀面杖",
  "image":"https://img10.360buyimg.com/babel/s300x300_jfs/t1/163305/5/9015/144875/60402b12Ed0222686/5bc13d3fa3b7c379.jpg.webp"
},
{
  "name": "拖把",
  "image":"https://img20.360buyimg.com/babel/s300x300_jfs/t1/94935/25/23831/109160/62298bd8E85a58734/746f89c3390dd5c3.jpg.webp"
},
{
  "name": "杀虫剂",
  "image":"https://img20.360buyimg.com/babel/s300x300_jfs/t1/160567/26/3296/168837/600521adEd63bf995/4edd89429e19a9e2.jpg.webp"
},
{
  "name": "精美护肤品",
  "image":"https://img13.360buyimg.com/babel/s300x300_jfs/t1/183377/18/21274/152260/61298af9Ebc3ec3a0/112a7a1be9661935.jpg.webp"
},
{
  "name": "吹风机",
  "image":"https://img30.360buyimg.com/babel/s300x300_jfs/t1/19229/23/17098/342866/62b3f67aEad2b0337/72bda10f79b21cdc.jpg.webp"
},
{
  "name": "电子秤",
  "image":"https://img11.360buyimg.com/babel/s300x300_jfs/t1/158214/15/20390/177847/607d51b4Edf023ce9/8c157e214acd32c4.jpg.webp"
}


]

  },
  a(event){
      this.data.arr.some(item=>{
      if(item.flag==event.target.dataset.flag){
        this.setData({
          gray:true
        })
        return 
      }
    }) 
    //判断点击的类别,显示相应的类别物品
    if(event.target.dataset.flag==0){
     this.setData({"flag0":true});
     this.setData({"flag1":false});
     this.setData({"click0":true});
     this.setData({"click1":false});
    } 
    if(event.target.dataset.flag==1){
      this.setData({"flag0":false});
      this.setData({"flag1":true});
      this.setData({"click1":true});
      this.setData({"click0":false});
    }
    if(event.target.dataset.flag!=0&&event.target.dataset.flag!=1){
      this.setData({"flag0":false});
      this.setData({"flag1":false});
      this.setData({"click0":false});
      this.setData({"click1":false});
    }
    this.setData({"flag":event.target.dataset.flag});
    // this.setData({"arr.click":true});

    //  加背景
    // console.log(event.currentTarget.flag)
    
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that=this;
wx.request({
  url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
  success:function(r){
    let a=r.data.message;
    that.setData({
      goods:a
    })
    // console.log(a)
    let newallArr=that.data.allArr
    that.data.goods[0].product_list.forEach(item=>newallArr.push(item))
    that.data.goods[1].product_list.forEach(item=>newallArr.push(item))
    that.data.goods[2].product_list.forEach(item=>newallArr.push(item))
    // console.log(newallArr)
    that.setData({
      allArr:newallArr
    })
    
  }
})
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

  },
  // a(event){
  //   console.log(event.target.dataset.flag)
  //   this.data.arr.some(item=>{
  //     if(item.flag==event.target.dataset.flag){
  //       this.setData({
  //         gray:'active'
  //       }) 
  //       return
  //     }
      //  class="{{click0? 'active':''}}"
      // class="{{click1? 'active':'' }} 
    // })
  // }
})