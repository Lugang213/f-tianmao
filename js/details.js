$(function(){
		//放大镜效果
		//small中的鼠标移动事件
		$('#small').mousemove(function(e){
			//move big 显示
			$('#move,#big').show();
			
			//获取鼠标的坐标
			var x=e.pageX-$(this).offset().left;
			var y=e.pageY-$(this).offset().top;
			console.log(x+":"+y);
			//鼠标要居中-宽高一半
			var x=x-$('#move').width()/2;
			var y=y-$('#move').height()/2;
			
			//判断x y 的边界
			if(x<=0){
				x=0
			}else if(x>=$('#small').width()-$('#move').width()){
				x=$('#small').width()-$('#move').width()
			}
			
			if(y<=0){
				y=0;
			}else if(y>=$('#small').height()-$('#move').height()){
				y=$('#small').height()-$('#move').height()
			}
			
			
			//绑定给move
			$('#move').css({left:x,top:y});
			
			//大图和小图 比例关系
			var scale= $('#big>img').width()/$('#small>img').width();
			//console.log(scale);
			//设置大图移动
			$('#big>img').css({left:-x*scale,top:-y*scale});
			//改变大图
			$('#big>img').attr('src',$('#small_pic').attr('src'));
		
		}).mouseout(function(){
			//move big 隐藏
			$('#move,#big').hide();
		});
		
		//点击更换图片
		$('#dian>li>img').mouseover(function(){
			//给small中img图片=当前的img src
			$('#small>img').attr('src',$(this).attr('src'))
		})
		//放大镜 e-----

		//套餐选项卡
		$('.tab-nav li').eq(1).click(function(){
			//console.log($('.tab-content .tab-box .tab-pannel'))
			$('.tab-content .tab-box').css({
				transitionDuration:'0.3s' ,
				transform: 'translate3d(-990px, 0px, 0px)'
			});
			$(this).addClass('selected').siblings().removeClass('selected');
		})
		$('.tab-nav li').eq(0).click(function(){
			//console.log($('.tab-content .tab-box .tab-pannel'))
			$('.tab-content .tab-box').css({
				transitionDuration:'0.3s' ,
				transform: 'translate3d(0px, 0px, 0px)'
			})
			$(this).addClass('selected').siblings().removeClass('selected');;		
		})

		// 点击勾选
		$('#select').click(function(){
			$('#select').toggle();
		})

		// 店铺 商品详情 累计评价 事件监听 固定到顶部
		$(window).scroll(function(){
			var top = $(window).scrollTop();
			var maxTop = $('.det-comment').offset().top;
			if(top>maxTop){
				$('.tabbar-bg').css('display','block');
				$('#shop').addClass('detTop1');
				$('.det-com-tit').addClass('detTop2');
			}else{
				$('.tabbar-bg').css('display','none');
				$('#shop').removeClass('detTop1');
				$('.det-com-tit').removeClass('detTop2');
			}
		})

		// 选项卡切换
		$('.det-com-tit li').eq(1).click(function(){
			$('.tab-no').css('display','none');
			$(this).addClass('tab-selected').siblings().removeClass('tab-selected');
		});
		$('.det-com-tit li').eq(0).click(function(){
			$('.tab-no').css('display','block');
			$(this).addClass('tab-selected').siblings().removeClass('tab-selected');
		})
		$('.tm-qrcode-icon').mouseover(function(){
			$(this).css('background','#f5f5f5');
			$('.tm-qrcode-icon img').css('display','block');
		}).mouseout(function(){
			$(this).css('background','#fff');
			$('.tm-qrcode-icon img').css('display','none');
		})
})