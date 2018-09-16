$(function(){
	$("img.lazy").lazyload({		
		load:function(){
			
		}
	});	
	
	$(window).scroll(function(){
			// 当滚动到最底部以上500像素时， 加载新内容
			console.log($(document).height() - $(this).scrollTop() - $(this).height());
		if ($(document).height() - $(this).scrollTop() - $(this).height()<600){
			$('#container').append($("#test").html());		
			$("img.lazy").lazyload();
		}
	});
	// 随机图片
});


