	$(function(){
			// jquery 兼容的滚轮事件
			var num=0
			var str
			var sY=635
			var boxY
			var fun
			var res
			$(document).on("mousewheel DOMMouseScroll", function (e) {
    			var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
				    // 翻页特效开始
				    boxY=$('#box').offset().top
				    boxT={
				    	top:(boxY+sY)+'px'
				    }
				    boxB={
				    	top:(boxY-sY)+'px'
				    }
				    if (delta > 0){
				        // 向上滚
				        if(boxY>=0){
				        	$('#box').position().top=0+'px'
				        }else{
				        	if(!$("#box").is(":animated")){ 
				        		//元素不处于动画中执行。 
								$('#box').stop().animate(boxT,500)
								if(num>0){
									num--
								}else{
									num=0
								}
								hdxyd()
				        	}
				        }
				    } else if (delta < 0) {
				        // 向下滚
				         if(boxY<=-8255){
				        	$('#box').position().top=-8255+'px'
				        }else{
				        	if(!$("#box").is(":animated")){ 
							//元素不处于动画中执行。 
								$('#box').stop().animate(boxB,500)
								if(num<14){
									num++
								}else{
									num=14
								}
								hdxyd()
							}
				        }
				    }
				    // 翻页特效结束
				    // 调用特效函数
				    hstx()
				});
					// 右侧锚点
				    $('#rtmdbox .rtmd').click(function(){
				    	num=$(this).index() 
				    	$('#box').stop().animate({top:-num*635},500)
				    	hdxyd()
				    	// 调用特效函数
				    	hstx()
				    })
				    // 导航栏锚点
				    $('#nMdbox .navmd').click(function(){
				    	str=$(this).attr('value')
				    	num=Number(str)
				    	hdxyd()
				    	$('#box').stop().animate({top:-(num*635)},500)
				    	// 特效函数
				    	hstx()
				    })
				   // 小圆点位置函数
				    function hdxyd(){
				    	$('#rtmdbox .rtmd').eq(num).css('background','#4daf9f').siblings().css('background','transparent')
				    }
				     // 特效函数封装
				    function hstx(){
				    	fun='pg'+(num+1)+'()'
				    	res=eval(fun)
				    	res
				    }
				    // 第一页特效开始
				    function pg1(){ 
				    		$('#pg1 .pg1nrhz .borbox').css({'display':'none'})
				    		$('#pg1 .pg1nrhz .pg1texthz').css({'display':'none'})
			    			$('#pg1 .pg1nrhz .pg1bgcol').css({left:300,'display':'none'})
					    	$('#pg1 .pg1nrhz .pg1xn').css({opacity:0,'display':'none'})
					    	
					    		if(num==0){
					    			setTimeout(function(){
					    				$('#pg1 .pg1nrhz .borbox').css({'display':'block'})
				    					$('#pg1 .pg1nrhz .pg1texthz').css({'display':'block'})
 										$('#pg1 .pg1nrhz .pg1bgcol').css({'display':'block'}).animate({left:-25},1000)
					    				$('#pg1 .pg1nrhz .pg1xn').css({'display':'block'}).delay(1000).fadeTo(1000,1).fadeTo(200,0.1).fadeTo(200,1)
					    			},1000)	
					    }
				  	 }
				  	pg1()
				  // 第一页特效结束

				  // 第二页特效开始
				  function pg2(){
				  		$('#pg2 h1').css({'display':'none'})
				  		$('#pg2 img').css({'display':'none'})
				  		$('#pg2 .pg2imgbox').css({'display':'none'})
				  		if(num==1){
				  			setTimeout(function(){
				  				$('#pg2 h1').css({'display':'block'})
					  			$('#pg2 img').css({'display':'block'})
					  			$('#pg2 .pg2imgbox').css({'display':'block'})
					  			$('#pg2 .pg2imgbox #pg2I1').css({top:-197}).animate({top:0},600).animate({top:-30},100).animate({top:0},100)
					  			$('#pg2 .pg2imgbox #pg2I2').css({right:-300}).animate({right:0},600).animate({right:-30},100).animate({right:0},100)
					  			$('#pg2 .pg2imgbox #pg2I3').css({left:-500}).animate({left:0},600).animate({left:-30},100).animate({left:0},100)
					  			$('#pg2 .pg2imgbox #pg2I4').css({bottom:-197}).animate({bottom:0},600).animate({bottom:-30},100).animate({bottom:0},100)
				  			},1000)
				  		}
				  }
				  // 第二页特效结束

				  //第三页特效开始
				  	function pg3(){
				  		$('#pg3 h1').css({'display':'none'})
				  		$('#pg3 #pg3textbox li').css({'marginLeft':'60px','display':'none'})
				  		$('#pg3 #pg3citybox li').css({'marginLeft':'60px','display':'none'})
				  		$('#pg3 .pg3botbt').css({'bottom':'-68px','display':'none'})
				  		if(num==2){
				  			setTimeout(function(){
								$('#pg3 h1').css({'display':'block'})
					  			$('#pg3 #pg3textbox li').css({'display':'block'}).animate({'marginLeft':10},1500)
					  			$('#pg3 #pg3citybox li').css({'display':'block'}).animate({'marginLeft':10},1500)
					  			$('#pg3 .pg3botbt').css({'display':'block'}).delay(1000).animate({bottom:0},1500)
				  			},1000)	
				  		}
				  	}
				  //第三页特效结束 

				  //第四页特效开始
				  	function pg4(){
				  		$('#pg4 .pg4bthz img').css({'marginTop':'300px','display':'none'})
				  		$('#pg4 #pg4lbhz').css({'display':'none'})
				  		if(num==3){
				  			setTimeout(function(){
								$('#pg4 .pg4bthz img').css({'marginTop':'300px','display':'block'}).animate({'marginTop':'0px'},2000)
				  			},1000)
				  			
				  			setTimeout(function(){
				  				$('#pg4 #pg4lbhz').css({'display':'block'})
								$('#pg4 #pg4lbhz #pg4lbt1').css({'marginTop':'60px'}).animate({'marginTop':'0px'},1000)
					  			$('#pg4 #pg4lbhz #pg4lbt2').css({'marginTop':'100px'}).animate({'marginTop':'0px'},1200)
					  			$('#pg4 #pg4lbhz #pg4lbt3').css({'marginTop':'140px'}).animate({'marginTop':'0px'},1300)
					  			$('#pg4 #pg4lbhz #pg4lbt4').css({'marginTop':'180px'}).animate({'marginTop':'0px'},1400)
					  			$('#pg4 #pg4lbhz .pg4fgx1').css({'marginLeft':'-150px'}).animate({'marginLeft':'2px'},2000)
					  			$('#pg4 #pg4lbhz .pg4fgx2').css({'marginLeft':'150px'}).animate({'marginLeft':'-2px'},2000)
				  			},1500)
				  		}
				  	}
				  //第四页特效结束

				   //第五页特效开始
				   		function pg5(){
				   			$('#pg5 .pg5bttp').css({'marginTop':'300px','display':'none'})
				   			$('#pg5 .pg5sp').css({'display':'none','marginTop':'200px'})
				   			if(num==4){
				   				setTimeout(function(){
				   					$('#pg5 .pg5bttp').css({'display':'block','marginTop':'300px'}).animate({'marginTop':'80px'},1500)
				   					$('#pg5 .pg5sp').css({'display':'block','marginTop':'200px'}).animate({'marginTop':'50px'},1500)
				   				},1000)
				   			}
				   		}
				    //第五页特效结束

				    // 第六页特效开始
				   function pg6(){
				   		$('#pg6 .pg6bt').css({'marginTop':'300px','display':'none'})
				   		$('#pg6 ul').css({'display':'none'})
				   		if(num==5){
				   			$('#pg6 .pg6bt').css({'marginTop':'300px','display':'block'}).animate({'marginTop':'100px'},2000)
				   			setTimeout(function(){
				   				$('#pg6 ul').css({'display':'block'})
								$('#pg6 ul #pg6lbt1').css({'bottom':'50px'}).animate({'bottom':'110px'},600)
					   			$('#pg6 ul #pg6lbt4').css({'bottom':'-100px'}).animate({'bottom':'0px'},1000)
					   			$('#pg6 ul #pg6lbt2').css({'bottom':'50px'}).animate({'bottom':'110px'},800)
					   			$('#pg6 ul #pg6lbt5').css({'bottom':'-100px'}).animate({'bottom':'0px'},1200)
					   			$('#pg6 ul #pg6lbt3').css({'bottom':'50px'}).animate({'bottom':'110px'},1000)
					   			$('#pg6 ul #pg6lbt6').css({'bottom':'-100px'}).animate({'bottom':'0px'},1400)
				   			},1500)
				   		}
				   }
				   // 第六页特效结束

				   // 第七页特效开始
			   		function pg7(){
			   			$('#pg7 .pg7bthz h1').css({'marginLeft':'400px','display':'none'})
			   			$('#pg7 ul li').css({'marginLeft':'50px','display':'none'})
			   			if(num==6){
			   				setTimeout(function(){
			   					$('#pg7 .pg7bthz h1').css({'marginLeft':'400px','display':'block'}).animate({'marginLeft':'200px'},1000)
			   					$('#pg7 ul li').css({'marginLeft':'50px','display':'block'}).animate({'marginLeft':'0px'},2000)
			   				},1000)
			   			}
			   		}
				    // 第七页特效结束

				    // 第八页特效开始
				    		function pg8(){
				    			$('#pg8 .pg8bt').css({'marginTop':'-137px','display':'none'})
				    			$('#pg8 .pg8lb').css({'marginTop':'285px','display':'none'})
				    			$('#pg8 .pg8Bg').css({'left':'100%','display':'none'})
				    			if(num==7){
				    				setTimeout(function(){
				    					$('#pg8 .pg8bt').css({'marginTop':'-137px','display':'block'}).animate({'marginTop':'0px'},800)
				    				},1000)
				    				setTimeout(function(){
				    					$('#pg8 .pg8lb').css({'marginTop':'285px','display':'block'}).animate({'marginTop':'0px'},800)
				    					$('#pg8 .pg8Bg').css({'left':'100%','display':'block'}).animate({'left':'0%'},1200)
				    				},1500)
				    			}
				    		}
				    // 第八页特效结束

				    // 九页特效开始
				    	function pg9(){
				    		$('#pg9 .pg9bthz img').css({'marginLeft':'0px','display':'none'})
				    		$('#pg9 ul li').css({'marginLeft':'-30px','display':'none','opacity':'0.2'})
				    		$('#pg9 .pg9Bothz .pg9bot').css({'marginLeft':'0px','display':'none'})
				    		if(num==8){
				    			setTimeout(function(){
									$('#pg9 .pg9bthz img').css({'marginLeft':'0px','display':'block'}).animate({'marginLeft':'50px'},1000)
				    				$('#pg9 ul li').css({'marginLeft':'-30px','display':'block','opacity':'0.2'}).animate({'marginLeft':'20px','opacity':'1'},1000)
				    			},1000)
				    			setTimeout(function(){
									$('#pg9 .pg9Bothz .pg9bot').css({'marginLeft':'0px','display':'block'}).animate({'marginLeft':'150px'},1500)
				    			},2000)
				    		}
				    	}
				    // 九页特效结束

				     // 十页特效开始
				     	function pg10(){
				     		$('#pg10 .pg10lbBox').css({'display':'none'})
				     		if(num==9){
				     			setTimeout(function(){
				     				$('#pg10 .pg10lbBox').css({'display':'block'})
				     				$('#pg10 .pg10lbBox .pg10bt').css({'marginTop':'50px'}).animate({'marginTop':'0px'},1500)
				     				$('#pg10 .pg10lbBox ul li').css({'marginTop':'100px'}).animate({'marginTop':'0px'},1500)
				     			},1000)	
				     		}
				     	}

				     // 十页特效结束

				     // 十一页特效开始
				     	function pg11(){
				     		$('#pg11 .pg11Bgbox').css({'display':'block'})
				     		if(num==10){
				     			setTimeout(function(){
									$('#pg11 .pg11Bgbox #pg11Lb1').css({'right':'-400px','opacity':'0'}).animate({'right':'60px','opacity':'1'},1500)
				     				$('#pg11 .pg11Bgbox #pg11Lb2').css({'left':'-400px','opacity':'0'}).animate({'left':'-50px','opacity':'1'},1500)
				     				$('#pg11 .pg11Bgbox #pg11Lb3').css({'right':'-400px','opacity':'0'}).animate({'right':'-50px','opacity':'1'},1500)
				     			},1000)
				     		}
				     	}
				     // 十一页特效结束

				     // 十二页特效开始
				     	function pg12(){
				     		$('#pg12 .mapBox').css({'marginTop':'200px','display':'none'})
				     		$('#pg12 .pg12_text').css({'marginTop':'200px','display':'none'})
				     		$('#pg12 .pg12bot').css({'marginTop':'100px','display':'none'})
				     		$('#pg12 .mapBox #pg12fbd').css({'opacity':'0','display':'none'})
				     		if(num==11){
				     			setTimeout(function(){
				     				$('#pg12 .mapBox').css({'marginTop':'200px','display':'block'}).animate({'marginTop':'56px'},1000)
				     			},1000)
				     			
				     			setTimeout(function(){
				     				$('#pg12 .pg12_text').css({'marginTop':'200px','display':'block'}).animate({'marginTop':'0px'},1000)
				     				$('#pg12 .pg12bot').css({'marginTop':'100px','display':'block'}).animate({'marginTop':'10px'},1000)
				     			},1500)
				     			setTimeout(function(){
				     				$('#pg12 .mapBox #pg12fbd').css({'opacity':'0','display':'block'}).animate({'opacity':'1'},1500)
				     			},2000)
				     		}
				     	}
				     // 十二页特效结束

				     // 十三页特效开始
				    function pg13(){
				     	$('#pg13 #pg13bta').css({'marginTop':'60px','display':'none'})
				     	$('#pg13 ul li').css({'marginTop':'30px','display':'none','opacity':'0'})
				     	$('#pg13 #pg13btb').css({'marginTop':'60px','display':'none'})
				     		if(num==12){
				     		setTimeout(function(){
								$('#pg13 #pg13bta').css({'marginTop':'60px','display':'block'}).animate({'marginTop':'5px'},600)
				     			$('#pg13 #pg13lba li').css({'marginTop':'30px','opacity':'0','display':'block'}).animate({'marginTop':'10px','opacity':'1'},1000)
				     		},1000)
				     		setTimeout(function(){
				     			$('#pg13 #pg13btb').css({'marginTop':'60px','display':'block'}).animate({'marginTop':'5px'},600)
								$('#pg13 #pg13lbb li').css({'marginTop':'30px','opacity':'0','display':'block'}).animate({'marginTop':'10px','opacity':'1'},1000)
				     		},1500)
				     	}
				    }
				     // 十三页特效结束

				     // 十四页特效开始
				     	function pg14(){
				     		$('#pg14 .pg14nrhz').css({'marginTop':'200px','display':'none'})
				     		$('#pg14 .pg14bot').css({'opacity':'0','display':'none'})
				     		if(num==13){
				     			setTimeout(function(){
									$('#pg14 .pg14nrhz').css({'marginTop':'200px','display':'block'}).animate({'marginTop':'100px'},1000)
				     			},1000)
				     			setTimeout(function(){
									$('#pg14 .pg14bot').css({'opacity':'0','display':'block'}).animate({'opacity':'1'},1000)
				     			},2000)
				     		}
				     	}
				     // 十四页特效结束
				     // 载入界面特效
				     var indextimer
				      indextimer=setInterval(indexzr,500)
				    function indexzr(){
						$('.indexzr .zrys .borbox .borX').css({'opacity':'0'}).animate({'opacity':'1'},500)
				    	 $('.indexzr .zrys .borbox .borS').css({'opacity':'1'}).animate({'opacity':'0'},500)
				     }
				    setTimeout(function(){
				    	$('.indexzr').css('display','none')
				    	clearInterval(indextimer)
				    },1000)
		})