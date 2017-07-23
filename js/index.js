$(function() {
	//		var chex = document.querySelectorAll(".listNav input");
	//		var list = document.querySelectorAll(".list_1");
	$('.leftNav li').each(function(index, element) {
		$(element).hover(function() {
			$(this).find("div").stop().slideDown(500);
		}, function() {
			$(this).find("div").stop().slideUp(500);
		})
	})
	$("#btn1").click(function() {
		$(".listNav input").each(function(index) {
			$(".listNav input").eq(index).prop("checked", true);

		})
	})
	$("#btn2").click(function() {
		$(".listNav input").each(function(index) {
			$(".listNav input").eq(index).prop("checked", false);
		})
	})
	$("#btn3").click(function() {
		$(".listNav input").each(function(index) {
			if($(".listNav input").eq(index).prop("checked") == true) {
				$(".listNav input").eq(index).prop("checked", false);
			} else {
				$(".listNav input").eq(index).prop("checked", true);
			}
		})
	})

	//		var zy = document.querySelectorAll(".zy");
	//		$(zy).each(function(index,element){
	//			$(zy).eq(index).click(function(){
	//			$(zy).each(function(i,key){
	//		    $(key).removeClass("active");
	//			})
	//			$(this).addClass("active");
	//		   })
	//			
	//		})

	function fnTab() {
		var oLi = $(".titBg li div")
		var oUl = $("#aaa ul")
		oLi.each(function(index, element) {
			this.onmousemove = function() {
				oLi.eq(index).addClass('active').parent().siblings().find('div').removeClass('active');
				oUl.eq(index).addClass('show').siblings().removeClass('show');
			}
		})
	}
	fnTab();
//
//	function fnTab1() {
//		var oLi = $(".comTitle_tabs li")
//		var oUl = $(".tabs div")
//		oLi.each(function(index, element) {
//			this.onmousemove = function() {
//				oLi.eq(index).addClass('active').siblings().removeClass('active');
//				oUl.eq(index).addClass('show').siblings().removeClass('show');
//			}
//		})
//	}
//	fnTab1();
	//fnTab(".comTitle_tabs li a",".tabs div",'onclick','a');
	//fnTab('.bor_b .abs a',".tabs div",'onclick','a')

	var index = 0;
	$(".photo_prev").click(function(){
		index--;
		if(index==-5){
			index=-4;
			$(".photo_list").css("left","-800px")
		}else{
			$(".photo_list").stop(true).animate({"left":index*200+"px"},1000)			
		}
	})
	$(".photo_next").click(function(){
		index++;
		if(index>=1){
			$(".photo_list").css("left","0px")
			index=0;
		}else{
			
			$(".photo_list").stop(true).animate({"left":index*200+"px"},1000)
		}
	})
	
	
	
	
	
	function Tab(tab1,comTiTaLi,Items){
    var obj = $(tab1);
    obj.find(comTiTaLi).on("mouseover",function(){
        $(this).addClass("active").siblings().removeClass("active");
        obj.find(Items).removeClass("show");
        obj.find(Items).eq($(this).index()).addClass("show");
    })
}




//调用导航封装函数
var oLeftBox=$('.leftBox');
oLeftBox.each(function(i,e){
	Tab(e,'.comTitle>.comTitle_tabs>li',$('.comTitle').next('.tabs').find('.tabs_item'));
	Tab(e,'.contNav>.contNav_item',$('.titBg').next('.tabs').find('.tabs_item'));
})




//Tab('.tab_4',".tab_title>li",".smList>.item")


Tab('.comWidth','.comTitle>.comTitle_tabs>li');
	
})