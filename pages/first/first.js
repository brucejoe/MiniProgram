Page({
  data: {
    array: [{
      name: 'Piper',
      pic : 'https://img3.doubanio.com/view/photo/raw/public/p2373241302.jpg'
    }, {
        name: 'Piper',
        pic:'https://img3.doubanio.com/view/photo/raw/public/p2453399733.jpg'
    }, {
        name: 'Piper',
        pic: 'https://img3.doubanio.com/view/photo/raw/public/p2395062620.jpg'
    }, {
        name: 'WALL·E',
        pic: 'https://img3.doubanio.com/view/photo/raw/public/p1461851991.jpg'
    }, {
        name: 'WALL·E',
        pic: 'https://img3.doubanio.com/view/photo/raw/public/p2191398861.jpg'
    }]
  },
  show:function(){
    wx.navigateTo({
      url: '../second/second'
    })
  }

})