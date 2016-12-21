	$(function(){
	$(".class span").click(function(){
	   var $strong=$(".class strong");
       // var $strong_text=$strong.text()
		$(this).addClass("cur").siblings().removeClass("cur")
       	$strong.text("").append($(this).text())		
	})	
})

  $(function(){

	var $product=$(".bc_right");
	$("div.car>span").click(function(){ 	alert("aa")
		var pro_name=$product.find("h4:first").text()
		var pro_size=$product.find(".class strong").text()
		var pro_num=$product.find("#buycount").val() 
		var pro_price=$product.find(".price span:nth-child(2)").text();
		var dialog="感谢您购买："+"\n您购买的"+"\n产品是"+pro_name+";\n"+
		"\n颜色是"+"\n尺寸是"+pro_size+";\n"+"\n数量是"+pro_num+";\n"+"\n价格是"+pro_price+";\n"
		alert(dialog)
	})
})

$(function(){
	$(".bc_left ul li a").bind("click",function(){
		var imgSrc=$(this).find("img").attr("src");
		var i=imgSrc.lastIndexOf(".");
		var unit=imgSrc.substring(i);
		imgSrc=imgSrc.substring(0,i);
		var imgSrc_big=imgSrc+"_big"+unit;
		$("#bigimg").attr("href",imgSrc_big)
	})
})
