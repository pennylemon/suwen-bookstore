//回车提交效果
$(function(){

	$("#inputSearch").focus(function(){
		$(this).addClass("focus");
		if($(this).val()==this.defaultValue){
			$(this).val("");
		}
	}).blur(function(){
		$(this).removeClass("focus");
		if($(this).val()==""){
			$(this).val(this.defaultValue)
		}
	}).keyup(function(e){
		if(e.which==13){
			alert('回车提交表单')
		}
	})

//二级菜单
         $('.nav>ul>li').hover(function(){
         $(this).find('.childnav').stop(true,true).slideDown(500);
           },function(){
          $(this).find('.childnav').stop(true,true).slideUp("fast");
         })
       


	$("#nav li").hover(function(){
		$(this).find(".nav-a").show();
	},function(){
		$(this).find(".nav-a").hide();
	});

        
 //首页的tab选项卡            
          
	$(function(){
    var $div_li=$("div.tab_menu ul li")
         $div_li.mouseover(function(){
            $(this).addClass("book_asili_bg")
            .siblings().removeClass("book_asili_bg");
            var index=$div_li.index(this);
            $("div.tab_box>ul")
            .eq(index).show() 
            .siblings().hide()
         }).hover(function(){
            $(this).addClass("hover")
         }),function(){
            $(this).removeClass("hover")
         }
})
         $(".wbc_right_top").hover(function(){
        $(this).next().slideToggle(6000);
    }).hover(function(){
    })
 

  //inform.html的选项卡
    var $div_li=$("div.tabmune ul li")
         $div_li.mouseover(function(){
            $(this).addClass("tabmunebg")
            .siblings().removeClass("tabmunebg");
            var index=$div_li.index(this);
            $("div.tabbox>.tabcon")
            .eq(index).show()
            .siblings().hide()
         }).hover(function(){
            $(this).addClass("hover")
         }),function(){
            $(this).removeClass("hover")
         }


})

        
                $(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>=1){
        $("#go_top").show(3000);
    }else{
        $("#go_top").hide();
    }
  }); 
})

  $(function(){
     $(".contactb ul li").hover(function(){  
        $(this).find("h4").show().animate({width:"180px",height:"20px"},1000)
  },function(){
    $(this).find("h4").animate({width:"0"},1000).hide()
  }) 
 })
       
       // 遮罩
$(document).ready(function(){
    $('.showblock').hover(function(){
        $(".block",this).stop().animate({top:'76%'},180);
        },function(){
            $(".block",this).stop().animate({top:'100%'},250);
            });
        });


