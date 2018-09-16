$(function(){
	$('.quick').click(function(){
		$('.quick').css('display','none');
		$('.static').css('display','block');
		$('.login-box').css('display','block');
		$('.static-form').css('display','none')
	});
	$('.static').click(function(){
		$('.static').css('display','none');
		$('.quick').css('display','block');
		$('.static-form').css('display','block');
		$('.login-box').css('display','none');
	})
	
	// ajax 登录 验证-s
	// var $tips=$('.tips');
	$('body').on('click','#submit',function(e){
		var $name=$('#username').val();
        var $pass=$('#pass').val();
        var $submit=$('#submit');
        $.ajax({
            type:'post',
            url:'register.php',
            data:{
                name:$name,
                pass:$pass,     
            },
            dataType:'json',
            beforeSend:function(){
				// 判断用户名是否为空
                if(!$name){
                	alert('请输入用户名');
                    //$tips.html('请输入用户名').fadeIn(500).delay(1500).fadeOut(500);
                    return false;
                }
				// 判断密码是否为空
                if(!$pass){
                	alert('请输入密码');
                    //$tips.html('请输入密码').fadeIn(500).delay(1500).fadeOut(500);
                    return false;
                }
				//判断密码输入的长度是否为6~15之间
                if($pass.length<6||$pass.length>15){
                	alert('请输入6~15位密码');
                    //$tips.html('请输入6~15位密码').fadeIn(500).delay(1500).fadeOut(500);
                    return false;
                }              
                alert("登录成功")
            },
            success:function(){
            	alert('登录成功');
				/*//code 当前业务逻辑的处理成功失败的标识  10000 成功  10001 用户存在 10002 没有输入用户名
                if(data.code==10000){
                	alert('登录成功');
                   // $tips.html('登录成功').fadeIn(500).delay(1500).fadeOut(500);
                    return false;
                }else if(data.code==10001){
                	alert('用户名重复');
                    //$tips.html('用户名重复').fadeIn(500).delay(1500).fadeOut(500);
                    return false;
                }else if(data.code==10001){
                	alert('请输入用户名');
                   // $tips.html('请输入用户名').fadeIn(500).delay(1500).fadeOut(500);
                    return false;
                }*/
            },    
        })
    })
	// ajax 登录 验证-e
})