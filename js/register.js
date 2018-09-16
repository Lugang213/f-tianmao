$(function(){
	//遮罩层 拖拽
	//点击同意并继续 遮罩层消失
	$('.btn').click(function(){
		$('.reg-mask').hide();
	});

	// 拖动遮罩层
	var maxWidth = $(document).width()-$('.reg-mask').width()-45;
		var maxHeight = $(document).height()-$('.reg-mask').height()-45;
	$('.reg-mask').mousedown(function(e){
		$(this).css('cursor','move');

		var offset = $(this).offset();
		var x = e.pageX - offset.left;
		var y = e.pageY - offset.top;
		
		console.log(maxWidth,maxHeight);
		$(document).mousemove(function(evt){
			var ll = evt.pageX - x;
			var tt = evt.pageY - y;
			
			if(ll<=0){
				ll = 0;
			}else if(ll>=maxWidth){
				ll=maxWidth;
			}
			if(tt<=0){
				tt = 0;
			}else if(tt>maxHeight){
				tt = maxHeight;
			}

			$('.reg-mask').css({left:ll+'px',top:tt+'px'})
		})	
	})
	$(document).mouseup(function(){
		$('.reg-mask').css('cursor','default');
		$(this).off('mousemove');
	})
	
})