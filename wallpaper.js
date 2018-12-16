$(function (  ) {

/*需求1: 当鼠标点击上一页下一页轮播图滚动,上面页码根据轮播图滚动显示相对应的那一页
需求2:当鼠标点击每一页的壁纸显示出一个相对应的大图以及一个遮罩层
需求3.点击关闭按钮时大遮罩层以及对应的大图关闭
需求4: 当鼠标点击大图里面的更多尺寸时弹出一个里面的含有更多尺寸的栏,更多尺寸会变成点击收起
需求5:当鼠标点击收起的时候更多尺寸栏隐藏
需求:6:当轮播图还可以点击时没到最前也没到最后鼠标移入没有显示白色且没有高亮效果,当轮播图

* */
// $('.prev-btn').mouseenter(function (  ) {
// //
// //         $('.prev-btn').css('backgroundImage','url("images/prev_btn_1_eaf26a3.png")')
// //
// //
// //
// // })
    //需求6
      //上一页
    $('.prev-btn').mouseleave(function (  ) {//上一页移出背景
        $('.prev-btn').css('backgroundImage','url("images/prev_btn_a684ff4.png")')
    })
    //下一页
    $('.next-btn').mouseenter(function (  ) {

        $('.next-btn').css('backgroundImage','url("images/next_btn_1_e181c39.png")')

    })
    $('.next-btn').mouseleave(function (  ) {//下一页移出背景
        $('.next-btn').css('backgroundImage','url("images/next_btn_124516b.png")')
    })

//需求1 轮播图滚动
//声明一个变量index用来存每次点击次数用来控制滚动的距离
    var index=0
    //声明一个i变量用来控制上面页码
    var i=1
    // console.log ( i )
    //需求: 1.1下一页轮播
    $('.next-btn').click(function (  ) {
        index++
        i++
        //需求6.2 上一页鼠标移入的效果
        if(i>=2){
            $('.prev-btn').mouseenter(function (  ) {

                $('.prev-btn').css('backgroundImage','url("images/prev_btn_1_eaf26a3.png")')

            })
        }

        //页码以及上一页的高亮效果
        if(i>=4){
            // console.log ( i )
            i=3
        }else{
            $ ( "#page-num" ).text ( i+"/3" )
             $('.prev-btn').css('opacity','1')//需求:6.5

        }

        //下一页高亮效果以及到最后一页的移入效果
        if(i>2){
            $('.next-btn').mouseenter(function (  ) {
                $('.next-btn').css('backgroundImage','url("images/next_btn_124516b.png")')
            })
            $('.next-btn').css('opacity','0.5')
        }
//页面滚动
        if(index>=3){
            index=2
           return
       }else {
           $('.bigBz-box').animate({
               left:-index*1200
           })
       }


})
    // 需求:1.2上一页轮播
    $('.prev-btn').click(function (  ) {
        index--
        i--
        //需求:6.3 上一页鼠标移入效果
        if(i<=1){

            $('.prev-btn').mouseenter(function (  ) {
                $('.prev-btn').css('backgroundImage','url("images/prev_btn_a684ff4.png")')

            })
        }
//需求:6.4 上一页鼠标移入高亮效果
        if(i==1){//上一页按钮背景
            $('.prev-btn').css('opacity','0.5')
        }

//页码 以及下一页鼠标移入高亮效果
        if(i<1){
            i=1
        }else {
            $('.next-btn').mouseenter(function (  ) {
                $('.next-btn').css('backgroundImage','url("images/next_btn_1_e181c39.png")')
            })
            $('.next-btn').css('opacity','1') //下一页高亮效果
            $ ( "#page-num" ).text (  i+"/3" )
        }
        // console.log ( index )
        //页面滚动
        if(index<=-1){

            index=0

            return
        }else {

            $('.bigBz-box').animate({
                left:-index*1200
            })
        }
    })
//需求2:当鼠标点击每一页的壁纸显示出一个相对应的大图以及一个遮罩层

    $('.bz-img>a>img').click((function (  ) {
          var $lujin=$ ( this ).attr ( "src" )

        $('.show-img').attr('src',$lujin)
        $('.shade').fadeIn(500)
        $('.bzDown-Box').fadeIn(500)
    }))
//需求3: 点击关闭按钮时大遮罩层以及对应的大图关闭
    $('.close-btn').click(function (  ) {
        $('.shade').fadeOut(500)
        $('.bzDown-Box').fadeOut(500)
    })
    $('.shade').click(function(){
         $('.shade').fadeOut(500)
         $('.bzDown-Box').fadeOut(500)
    })
   // 需求4: 当鼠标点击大图里面的更多尺寸时弹出一个里面的含有更多尺寸的栏,更多尺寸会变成点击收起
$('.size-hide').click(function (  ) {
    $('.moreDown-Box').fadeIn(500)
    $('.size-hide').fadeOut(500)
})
    //需求5:当鼠标点击收起的时候更多尺寸栏隐藏
    $('.click-hide').click(function (  ) {
        $('.moreDown-Box').fadeOut(500)
        $('.size-hide').fadeIn(500)
    })
    //分享链接点击事件
    $("#left-bar .share-box .m-share>a").click(function (  ) {

        var newWinHeight = 500;
        var newWinWidth = 500;

        //窗口位于屏幕的位置
        var x = window.screen.width/2-newWinWidth/2;
        var  y = window.screen.height/2-newWinHeight/2;

        //获取a标签的data-link中真实链接值
        var dataLink = $(this).attr("data-link");
        console.log ( dataLink );
        //使用window打开
        var newWIn  = window.open(dataLink,
            "_blank",
            "directories=no," +
            "menubar=no+" +
            "status=no," +
            "width="+newWinWidth+"," +
            "height="+newWinHeight+","+
            "top="+y+","+
            "left="+x
        );
        return false;
    });
    //分享链接点击事件
    $(".share-box>ul>li>a").click(function (  ) {

        var newWinHeight = 500;
        var newWinWidth = 500;

        //窗口位于屏幕的位置
        var x = window.screen.width/2-newWinWidth/2;
        var  y = window.screen.height/2-newWinHeight/2;

        //获取a标签的data-link中真实链接值
        var dataLink = $(this).attr("href");
        console.log ( dataLink );
        //使用window打开
        var newWIn  = window.open(dataLink,
            "_blank",
            "directories=no," +
            "menubar=no+" +
            "status=no," +
            "width="+newWinWidth+"," +
            "height="+newWinHeight+","+
            "top="+y+","+
            "left="+x
        );
        return false;
    });
    // $(".bigBz-box").on({
    //     mousedown: function(e){
    //         var el=$(this);
    //         var os = el.offset(); dx = e.screenX
    //         // console.log ( dx)
    //         $(document).on('mousemove', function(e){ el.offset({ left: e.pageX-dx}); });
    //
    //     },
    //     mouseup: function(e){
    //         var  a1 =e.screenX
    //          var juli=dx - a1
    //         // console.log ( juli )
    //         // if(juli<=0){
    //         //     $('.bigBz-box').animate({
    //         //         left:0
    //         //     })
    //         // }
    //
    //
    //         $(document).off('mousemove');
    //     }
    //
    //
    //
    // })
    //
    // for(var j=0;j<$ ( ".minBz-box1" ).length;j++){
    //     console.log ( $ ( ".minBz-box1" )[j].offsetLeft )
    // }



    // var x=0
    // $('.minBz-Box').mousedown(function ( e ) {
    //     x=e.pageX//获取鼠标按下距离
    //     var o=$(this)
    //     // console.log ( x )
    //     $(document).mousemove(function(e){
    //         o.offset(
    //             { left: e.pageX}
    //         );
    //     })


        // $('.minBz-Box').mouseup(function ( e ) {
        //     var newX=e.pageX//获取鼠标送开距离
        //     // console.log ( newX )
        //
        //     var changX=newX-x//获取鼠标按下松开之间的距离
        //     // console.log ( changX )
        //     var left=$('.bigBz-box').position().left;//获取内容距离父盒子的位置
        //     console.log ( left )
        //     var width=$('.minBz-Box').width()
        //     // console.log ( width )
        //     if(changX>20){
        //         var newLeft=left-width
        //         if(newLeft>0){
        //             newLeft=0;
        //         }
        //         $('.bigBz-box').css('left','newLeft')
        //     }
        //
        //     if(changX<-60){
        //         var newleft=left-width
        //         if(newleft<-width*2){
        //             newleft=-width*2
        //         }
        //         $('.bigBz-box').css('left','newleft')
        //     }
        // })

        // $(document).off('mousemove');
    // })



})