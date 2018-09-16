$(function(){
	// 顶部导航
	
	$('.menu-no a').mouseenter(function(){
		$(this).css('color','#ff0036').addClass('active').siblings().removeClass('active')
	})
	$('.menu-no a').mouseleave(function(){
		$(this).css('color','#666').removeClass('active')
	})

	//手机淘宝 箭头翻转
	$('.sn-menu').hover(
		function(){
			$('.sn-menu .menu-hd i')
			.css({
				'transform':'rotate(180deg)',
				'transform-origin': '50% 30%',
				'transition': 'transform .2s ease-in'
			})
		},
		function(){
			$('.sn-menu .menu-hd i')
			.css({
				'transform':'rotate(0)',
				'transform-origin': '50% 30%'
			})
		})

	// 天猫banner--s
	var m=0;
	var timers = null;
	function run(){
		timers = setInterval(function(){
			//下标自增
			m++;
			//判断下标
			if(m>5){
				m=0;
			}
			//显示图片
			$('.lb-bg').eq(m).css({display:'block',opacity:'1',zIndex:'1'}).siblings('.lb-bg').css({display:'none',opacity:'0',zIndex:'0'});
			//显示数字
			$('.xuhao li').eq(m).addClass('xh-dq').siblings('li').removeClass('xh-dq');
		},2000)
	}
	run();

	//容器鼠标移入移出
	$('#lb').mouseenter(function(){

		clearInterval(timers);
		//鼠标移入数字 显示对应的图片
		$('.xuhao li').mouseenter(function(){
			//获取当前li的下标
			m=$(this).index();
			//显示图片
			$('.lb-bg').eq(m).css({display:'block',opacity:'1',zIndex:'1'}).siblings('.lb-bg').css({display:'none',opacity:'0',zIndex:'0'});
			//显示数字
			$('.xuhao li').eq(m).addClass('xh-dq').siblings('li').removeClass('xh-dq');
		})	
	}).mouseleave(function(){
		run();	
	})
	// 天猫banner--e
	
	//侧边导航栏	
	function cllb(dhid){
		var oDh = document.getElementById(dhid);	
		var aDdd = oDh.children;
		for (var i=1;i<aDdd.length;i++) {
			aDdd[i].ind = i;						
			aDdd[i].onmouseenter = function(){		
				var index = this.ind;
				oDiv = aDdd[index].children[1];
				oDiv.style.visibility = "visible";
			} 
			aDdd[i].onmouseleave = function(){
				var index = this.ind;
				oDiv = aDdd[index].children[1];
				oDiv.style.visibility = "hidden";
			}
		}
	}

	cllb("cedh");
	//侧边导航栏 e

	// 顶部弹出下拉为搜索框
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		//console.log(top);
		if(top>700){
			$('.hong-sou').animate({top:'0'},10)
		}else{
			$('.hong-sou').css({'top':'-50px'})
		}
		
	});


	//商标 换一批s
	var clickTimes = 1;

    //总列数
    var lineCount = 10;
    
    var btnRefresh = document.querySelector("#btnRefresh");
    var iconRefresh = document.querySelector(".iconRefresh")

    var img3DList = document.querySelectorAll(".img-3d");
    var len = img3DList.length;

    btnRefresh.onclick = function () {
        iconRefresh.style.transition = ".3s linear";
        // iconRefresh.style.transform = "rotate("+360*clickTimes+"deg)";

        for (var i = 0; i< len; i++){

          var colNum = parseInt(i/lineCount);
          var rowNum = i%lineCount;
          var delayTime = (colNum+rowNum)*100;


            img3DList[i].style.transition = ".3s "+delayTime+"ms linear";
            img3DList[i].style.transform = "rotateY("+180*clickTimes+"deg)";
         }

        clickTimes++;
    }

    //商标 换一批e


	//天猫超市选项卡切换s
	$('.floor-tab-head li').mouseover(function(){
		clearInterval(timer);
		$(this).addClass('floor-current-tab').siblings().removeClass('floor-current-tab');
		var i = $(this).index();
		$('.floor-tab-content .floor-tab-detail').eq(i).show().siblings().hide();
	})
	var num = $('.floor-tab-head li').length;
	function tabAuto(){
		$('.floor-tab-head li').eq(num).addClass('floor-current-tab').siblings().removeClass('floor-current-tab');
		$('.floor-tab-content .floor-tab-detail').eq(num).show().siblings().hide();
	}
	
	//console.log(num)
	var timer = setInterval(function(){
		num++;
		if(num>=2){
			num = 0;
		} 
		tabAuto();
	},2000)
	$('.floor-tab-head li').mouseover(function(){
		clearInterval(timer);
	})
	//天猫超市选项卡切换e


	// 天猫楼层 s
	// 点击菜单滚动到对应楼层
	$('.floor-list a').click(function(){
		var index = $(this).index()-1;
		//console.log(index)
		var flTop = $('.floor-line-con').eq(index).offset().top-50;
		$('html').animate({
			scrollTop:flTop
		},500);
		//console.log( $('.floor-line-con').eq(6).offset().top-700)
	})
	//定义空数组，存储所有楼层的距离顶部的高度
	var heights = [];
	$('.floor-line-con').each(function(){
		var thisTop = $(this).offset().top-300;
		heights.push(thisTop);
		//console.log(thisTop)
	})
	//console.log(heights);
	//事件监听 比较滚动距离与楼层距顶高度，菜单添加对应颜色
	$(window).scroll(function(){
		var winTop = $(window).scrollTop();
		var index;
		for(var i=0;i<heights.length;i++){
			if(winTop>=heights[i] && winTop<heights[i+1]){
				index = i;
				// $('.floor-list a').eq(index).css('background','#ff0036').siblings().css('background','#666');
				$('.floor-list a').eq(index).addClass('current').siblings().removeClass('current');
			}else if(winTop>=heights[heights.length-1]){
				index = heights.length;
				$('.floor-list a').eq(7).addClass('current').siblings().removeClass('current');
				//$('.floor-list a').eq(index).css('background','#ff0036').siblings().css('background','#666')
			}
			//console.log(heights[7])
		}
	})
	// 天猫楼层 e


	// 左侧导航 固定栏 返回顶部s
	$(".nav-back").click(function(){
		$('html').animate({scrollTop:0},500);
	})
	// 左侧导航 固定栏 返回顶部e


	// 楼层弹出s
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		//console.log(top);
		if(top>600){
			$('.floor-list-nav').css({display:'block'}).animate({width:'35px',height:'365px',opacity:'1'},500)
		}else if(top<600){
			$('.floor-list-nav').css({display:'none'})
		}
	});
	// 楼层弹出e


	//滚动加载
	






		
		
	
		
	
	
	



})
