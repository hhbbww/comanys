window.onload = function () {
    //页面跳转
    var myifrm = $("#myifrm");

    $(document).ready(function() {
        myifrm.load("system.html",function () {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src ="../static/js/system.js";
            document.body.appendChild(script);
        });
    });

    var li = $('.nav ul li');
    li.each(function (index) {
       $(this).on('click',function () {
           var srcvalue =  $(this.querySelector('a')).attr("href");
           if(srcvalue == ''){
               return;
           }else {
               var myifrm = $("#myifrm");
               $(document).ready(function() {
                   myifrm.load(srcvalue,function () {
                       var script = document.createElement("script");
                       var srcvalue1 = srcvalue.substr(0,srcvalue.length-5);
                       script.type = "text/javascript";
                       script.src ="../static/js/"+srcvalue1+".js";
                       document.body.appendChild(script);
                   });
               })

           }

       })

    });

    











//导航栏
    var navli = $('.navigation ul li');
    var nav = $('.content .nav');

    navli.each(function (index,item) {
        $(this).on('click',function () {
            for(var i=0;i<navli.length;i++){
                $(navli[i]).css({"background":"transparent","color":"#fff"})
            }
            $(this).css({"background":"#828690","color":"#eaeaea"});
            for(let i=0;i<navli.length;i++){
                $(nav[i]).css({"display":"none"})
            }
            $(nav[index]).css({"display":'block'});

        });
    });
    var lis = $('.nav li a');
    var divs = $('.nav li div');
    lis.each(function (index,item) {
        $(this).on('click',function () {
            for(var i =0;i<lis.length;i++){
                $(lis[i]).css({"color":"#666666"});
                $(divs[i]).css({"background":"#000"});
            }
            $(this).css({"color":"#48c9b0"});
            $(divs[index]).css({"background":"#48c9b0"});
        })
    });
// 账户信息
    var user = $(".user")
    var userhover = $(".userhover");
    $(user).hover(
        function () {
            $(userhover).show("slow",'linear')
        },
        function () {
            $(userhover).css({"display":'none'})
        }
    );
    var infor = $(".info ul li")[1];
    var message = $(".message");
    $(infor).hover(
        function () {
            $(message).show("slow",'linear')
        },
        function () {
            $(message).css({"display":'none'})
        }
    )





};