$(function(){
	// 头部特效
		$('.header ul .hLb').hover(function(){
			$(this).find('div').show().animate({'top':'100%','opacity':'1'},600)
		},function(){
			$(this).find('div').animate({'top':'120%','opacity':'0'},600).hide()
		})
		// 轮播图导航特效
		var num=0
		var timer
		timer=setInterval(fun,3000)
		function fun(){
			if(num<2){
				num++
			}else{
				num=0
			}
			run()
		}
		function run(){
			if(!$(".nav ul li").is(":animated")){ 
				$('.nav ul li').eq(num).stop().animate({'opacity':'1'},600).siblings().animate({'opacity':'0'},600)
			}
		}
		$('.nav').mouseover(function(){
			clearInterval(timer)
		}).mouseout(function(){
			timer=setInterval(fun,3000)
		})
		$('.nav .nBut .nLeft').click(function(){
				if(num>0){
					num--
				}else{
					num=2
				}
				run()
			})
		$('.nav .nBut .nRight').click(function(){
				if(num<2){
					num++
				}else{
					num=0
				}
				run()
		})

		// 小屏版列表点击事件
			var childBnum
		$('.childBut').click(function(){
			childBnum=$(this).attr('value')
			if($(this).attr('Tnum')=='0'){
				$(this).css({'background':'#e7e7e7'})
				$('.childbox').eq(childBnum).show()
				$(this).attr('Tnum','1')

			}else{
				$(this).css({'background':'rgba(254,254,254,0.9)'})
				$('.childbox').eq(childBnum).hide()
				$(this).attr('Tnum','0')
			}
			
		})
		// 小屏版列表收缩
		$('.minbut').click(function(){
			if($(this).attr('value')=='0'){
				$('.minbox').slideDown()
				$(this).attr('value','1')
			}else{
				$('.minbox').slideUp()
				$(this).attr('value','0')
			}
		})
})

