$(function(){
// 简介js
	$('#dti .col-md-6 div').addClass('dtilist')
	$(window).scroll(function(){
		console.log(scrollY)
		if(scrollY>=0){
			$('#dti .col-md-6 div').addClass('dtilist')
		}
		if(scrollY>480){
			$('#cpzxlisthz').animate({'margin-top':'0px'},1000)
		}
		if(scrollY>=1000){
			$('#teamlist').animate({'margin-left':'0px'},800)
		}
		if(scrollY>=1300){
			$('.iLeft').css({'transform':'translateY(0px)'})
			$('.iRight').css({'transform':'translateY(0px)'})
		}
		if(scrollY>=2000){
			$('.newlist').css({'margin-top':'0px'})

		}
		if(scrollY>=2880){
			$('.newtdklist').css({'transform':'translateY(0px)'})
			$('.lxfs .container').css({'transform':'translateY(0px)'})
			$('.formGjs').css({'transform':'translateX(0px)'})
			$('#text-F').css({'transform':'translateY(0px) translateX(0px)'})
		}
	})
	// 滚轮事件start
		var cpzxnum=0
		$(document).on("mousewheel DOMMouseScroll", function (e) {
	    	var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
	                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
					    if (delta > 0){
					        // 向上滚
					        console.log(1111)
					       if(cpzxnum<0){
					       	 cpzxnum+=50
					       	}else{
					       		cpzxnum=0
					       	}
					        $('.cpzxbox').css({'background':'url(images/mainbg.jpg)no-repeat 0px '+cpzxnum+'px/100%'})
					        $('.teambgbox').css({'background':'url(images/teambg.jpg)no-repeat 0px '+cpzxnum+'px/100%'})
					        $('.newtdk').css({'background':'url(images/newbg.jpg)no-repeat 0px '+cpzxnum+'px/100%'})
					   } else if (delta < 0) {
					        // 向下滚
					        if(cpzxnum>-200){
					       	 cpzxnum-=50
					       	}else{
					       		cpzxnum=-200
					       	}
					        $('.cpzxbox').css({'background':'url(images/mainbg.jpg)no-repeat 0px '+cpzxnum+'px/100%'})
					        $('.teambgbox').css({'background':'url(images/teambg.jpg)no-repeat 0px '+cpzxnum+'px/100%'})
					        $('.newtdk').css({'background':'url(images/newbg.jpg)no-repeat 0px '+cpzxnum+'px/100%'})
				}
			});
	// 滚轮事件end
})
