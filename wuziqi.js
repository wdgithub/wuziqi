$(function(){
    var flag=true;
    var heibiao={};
    var baibiao={};
    var kongbai = {};
    for(var i=0;i<15;i++){
        $("<b>")
            .addClass('hengxian')
            .appendTo('.qipan')
        $("<i>")
            .addClass('shuxian')
            .appendTo('.qipan')

        for(var j=0;j<15;j++){
            kongbai[i+'-'+j] = {x:i,y:j};
            $("<div>")
                .attr('id',i+'-'+j)
                .data('pos',{x:i,y:j})
                .addClass('qizi')
                .appendTo('.qipan')
        }
    } 
    console.log(kongbai)
    for(var i=0; i<5; i++){
        $('<span>').addClass('xing').appendTo('.qipan');
    }
    //开关
    
    
    
    // $('.qizi').on('click',function(){
        
    //     if($(this).hasClass('heizi') || $(this).hasClass('baizi')){
    //         return;
    //     };
    //     if(flag){
    //         var pos=$(this).data('pos');
    //         $(this).addClass('baizi')
    //         baibiao[pos.x+'-'+pos.y]=true;
    //         if(panduan(pos,baibiao)>=5){
    //             $('.qizi').off('click');
    //             console.log('白赢');
    //         }
    //         flag=false;
    //     }else{
    //         var pos=$(this).data('pos');
    //         $(this).addClass('heizi');
    //         heibiao[pos.x+'-'+pos.y]=true;
    //         if(panduan(pos,heibiao)>=5){
    //             $('.qizi').off('click');
    //             console.log('黑赢')
    //         }
    //         flag=true;
    //     }
        
    //     console.log(heibiao,baibiao)
    // })
 $('.caidan').on('click',function(){
        $('.xiangxia').animate({
            top:0,
        },1500) 
        kaishi();
   })
    $('.chongwan').on('click',function(){
        kaishi();
        $('.sheng,.shibai')
        .animate({
            top:-400+'%',
        })
    })
    $('.fan').on('click',function(){
        kaishi();
        $('.sheng,.shibai')
        .animate({
            top:-400+'%',
        })
        $('.xiangxia').animate({
            top:0,
        },1500)
    })
 // kaishi
$('.kaishi').on('click',function(){
    // console.log(1)
        $('.kaishi1').animate({
            top:-50+"%",
        })
        $('.kaishi2').animate({
            top:100+"%",
        })
        $('.kaishi3').animate({
            left:0,
        },1500)
        $('.kaishi4').animate({
            left:50+"%",
        },1500)
        $('.xiangxia').animate({
            top:0,
        },1500)    


    })
  
   $('.xiangxia ul li').on('click',function(){
        $('.xiangxia').animate({
            top:-300+"%",
        },1500)
        $('.qipan').animate({
            opacity:1
        },1000);
        $(".hengxian,.shuxian").addClass("yidong")
        $('.xing,span').animate({
            opacity:1
        },7000);
       
   })

   var isAi=true;
   $(".li1").on('click',function(){
        isAi=true;  
   })
   $(".li2").on('click',function(){
        isAi=false;
   })
   
    
    function kaishi(){
        $('.qizi').removeClass('heizi baizi')
        baibiao={};
        heibiao={};
        kongbai = {};
    for(var i=0;i<15;i++){
        for(var j=0;j<15;j++){
            kongbai[i+'-'+j] = {x:i,y:j};
            $("<div>")
                .attr('id',i+'-'+j)
                .data('pos',{x:i,y:j})
                .addClass('qizi')
                .appendTo('.qipan')
        }
    }
    console.log(kongbai)
    isAi=true;
    flag=true;
    $('.qizi').on('click',function(){
        
        if($(this).hasClass('heizi') || $(this).hasClass('baizi')){
            return;
        };
        if(flag){
            var pos=$(this).data('pos');
            $(this).addClass('baizi')
            baibiao[pos.x+'-'+pos.y]=true;
            delete kongbai[pos.x+'-'+pos.y];
            if(panduan(pos,baibiao)>=5){
                $('.qizi').off('click');
                // console.log('白赢');
                $('.sheng').animate({
                    top:0,
                },1500)
                return;
            }
            if(isAi){
                var pos=ai();
                $('#'+pos.x+'-'+pos.y).addClass('heizi');
                heibiao[pos.x+'-'+pos.y] = true;
                delete kongbai[pos.x+'-'+pos.y];
                if(panduan(pos,heibiao)>=5){
                    $('.qizi').off('click');
                    console.log('黑棋赢');
                    $('.shibai').animate({
                        top:0,
                    },1500)
                }
                return;
            }
            flag=false;
        }else{
            var pos=$(this).data('pos');
            $(this).addClass('heizi');
            heibiao[pos.x+'-'+pos.y]=true;
            if(panduan(pos,heibiao)>=5){
                $('.qizi').off('click');
                $('.shibai').animate({
                    top:0,
                },1500)
                console.log('黑赢');
            }
            flag=true;
        }
        
        // console.log(heibiao,baibiao)
    })
    }
    $('.qizi').on('click',function(){
        
        if($(this).hasClass('heizi') || $(this).hasClass('baizi')){
            return;
        };
        if(flag){
            var pos=$(this).data('pos');
            $(this).addClass('baizi')
            baibiao[pos.x+'-'+pos.y]=true;
            delete kongbai[pos.x+'-'+pos.y];
            if(panduan(pos,baibiao)>=5){
                $('.qizi').off('click');
                // console.log('白赢');
                $('.sheng').animate({
                    top:0,
                },1500)
                return;
            }
            if(isAi){
                var pos=ai();
                $('#'+pos.x+'-'+pos.y).addClass('heizi');
                heibiao[pos.x+'-'+pos.y] = true;
                delete kongbai[pos.x+'-'+pos.y];
                if(panduan(pos,heibiao)>=5){
                    $('.qizi').off('click');
                    console.log('黑棋赢');
                    $('.shibai').animate({
                        top:0,
                    },1500)
                }
                return;
            }
            flag=false;
        }else{
            var pos=$(this).data('pos');
            $(this).addClass('heizi');
            heibiao[pos.x+'-'+pos.y]=true;
            if(panduan(pos,heibiao)>=5){
                $('.qizi').off('click');
                $('.shibai').animate({
                    top:0,
                },1500)
                console.log('黑赢');
            }
            flag=true;
        }
        
        // console.log(heibiao,baibiao)
    })


     //ai
    function ai(){
        var zuobiao;
        var max = -Infinity;
        for(var i in kongbai){
            var weixie = panduan(kongbai[i],baibiao);
            if(weixie>max){
                max = weixie;
                zuobiao = kongbai[i];
            }
        }
        var zuobiao2;
        var max2 = -Infinity;
        for(var i in kongbai){
            var weixie = panduan(kongbai[i],heibiao);
            if(weixie>max2){
                max2 = weixie;
                zuobiao2 = kongbai[i];
            }
        }
        return (max>max2)?zuobiao:zuobiao2;
    }
    //判断
    function panduan(po,yanse){
        // console.log(yanse);
        var s=1,h=1,zx=1,yx=1;
        //横向
        var tx=po.x , ty=po.y ;
        while(yanse[tx+'-'+(ty-1)]){
            h++;ty--;
            // console.log(h)
        }
        var tx=po.x , ty=po.y ;
        while(yanse[tx+'-'+(ty+1)]){
            h++;ty++;
            // console.log(h)
        }
      
        //竖向
        var tx=po.x , ty=po.y ;
        while(yanse[(tx-1) +'-'+ty]){
            s++;tx--;
            // console.log(h)
        }
        var tx=po.x , ty=po.y ;
        while(yanse[(tx+1)+'-'+ty]){
            s++;tx++;
            // console.log(h)
        }
       
        //左斜
        var tx=po.x , ty=po.y ;
        while(yanse[(tx-1) +'-'+(ty+1)]){
            zx++;tx--;ty++;
            // console.log(h)
        }
        var tx=po.x , ty=po.y ;
        while(yanse[(tx+1)+'-'+(ty-1)]){
            zx++;tx++;ty--;
            // console.log(h)
        }
        
        //右斜
        var tx=po.x , ty=po.y ;
        while(yanse[(tx+1) +'-'+(ty+1)]){
            yx++;tx++;ty++;
            // console.log(h)
        }
        var tx=po.x , ty=po.y ;
        while(yanse[(tx-1)+'-'+(ty-1)]){
            yx++;tx--;ty--;
            // console.log(h)
        }
        return Math.max(h,s,zx,yx);
    }
   



})

