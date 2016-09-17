$(function(){
	
	//顶部划过显示与隐藏
	
	$(".menu").mouseover(function(){
		$(this).css({"background":"#fff","borderLeft":"1px solid #ccc","borderRight":"1px solid #ccc"})
		.find("ul").css("display","block").end().find("b").css("-webkitTransform","rotate(180deg)");
	})
	$(".menu").mouseout(function(){
		$(this).css({"background":"none","border":"0"}).find("ul").css("display","none").end()
		.find("b").css("-webkitTransform","rotate(0deg)");
	})
	$(".menu ul").mouseout(function(){
		$(this).css("display","none");
	})
	
	//搜索框

	$(".text").keyup(function(e){
			$.ajax({
				type:"get",
				url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$(".text").val()+"&&cb=?",
				dataType : "jsonp",
				success:function(data){
				 	var str="";
				 	for(var i=0;i<data.s.length;i++){
				 		str+="<li>"+data.s[i]+"</li>";
				 	}
				 	$('.sarch_ul').html(str);
				 	$('.sarch_ul li').click(function(){
				 		$(".text").val($(this).text());
				 		$(".sarch_ul").html("");
				 	})
				 	$("body").click(function(){
				 		$(".sarch_ul").html("");
				 	});
				}
			})
			})
	//菜单效果
	
	$(".clect").hover(function(){
		$(this).find("i").css("background-position","0 0")
		$(".second").css("display","block");
			$(".second").find("li").show();
			$(".second").find("li").find("b").show();
			$(".second").find("li").hover(function(){
				var index = $(this).index();
				
				$(this).addClass("active_a").siblings().removeClass("active_a");
				$(this).find("b").hide().end().siblings().find("b").show();
				
//				console.log($(".clect_a").position().top)
				if(index>=3){
					var top = $(".clect_a").position().top
					var oTop = 38+(index-3)*51;
//					console.log(oTop)
					$(".clect_a").eq(index).css({"display":"block","top":oTop}).siblings().css("display","none");
					}
				else{
					$(".clect_a").eq(index).css({"display":"block","top":"38px"}).siblings().css("display","none");
					};
				
			})
		
	},function(){
		$(".clect").find("i").css("background-position","-20px 0");
		$(".second").find("li").removeClass("active_a").end().css("display","none");
		
		$(".clect_a").css("display","none");
	});
	$(".clect_r").find("b").click(function(){
		$(".clect").find("i").css("background-position","-20px 0");
		$(".second").find("li").css("display","none");
		$(".clect_a").css("display","none");
	})
	//购物车效果
	
	$(".car").hover(function(){
		$(this).find("i").css("-webkitTransform","rotate(180deg)");
		$(".hid").css("display","block");
	},
	function(){
		$(".car").find("i").css("-webkitTransform","rotate(0deg)");
		$(".hid").css("display","none");
	})
	//banner图滚动效果
	
		var timer = null;
		var index = 0;
	 	function play(){
	 		
	 		timer = setInterval(function(){
	 			$(".next").click();
	 		},3000);
	 	} play();
	 	
		$(".next").click(function(){
			index++;
			if(index >=10){
				index=0;
			}
			move(index);
		})
		
		$(".prev").click(function(){
			index--;
			if(index < 0){
				index=9;
			}
			move(index);
		})
		
		$(".shang li").click(function(){
			var index = $(this).index();
			move(index);
		})
		$(".banner").mouseover(function(){
			clearInterval(timer);
			$(".prev,.next").show();
		})
		$(".banner").mouseout(function(){
			play();
			$(".prev,.next").hide();
		})
	function move(index){
	
		$(".xia li").eq(index).animate({"opacity":"1"},100).addClass("active").siblings().animate({"opacity":"0"},100).removeClass("active")
		$(".shang li").eq(index).addClass("hover").siblings().removeClass("hover")
		
	}
	


     //品牌效果
     
	$(".pinpai").find("li").hover(function(){
		$(this).find("span").css("display","block").end().siblings().find("span").css("display","none");	
	},function(){
		$(this).find("span").css("display","none");
	
	})
	
	
	//商品详情页放大镜效果

	$(".ul_dong li").hover(function(){
		var i = $(this).index();
		$(this).find("img").css("border","1px solid #b40005").end().siblings().find("img").css("border","1px solid #ddd");
		$(".fangda_b img").eq(i).show().siblings().hide();
		$(".fangda_b").mousemove(function(e){
	     	
			//鼠标位置相对于大框的位置
			var x=e.pageX-$(".fangda_b").offset().left-$(".kuang").width()/2;
			var y=e.pageY-$(".fangda_b").offset().top-$(".kuang").height()/2;
			//鼠标可以动的范围
			
			if(x<0){
				x=0;
			}else if(x>$(this).width()-$(".kuang").width()){
				x=$(this).width()-$(".kuang").width();
			}
			if(y<0){
				y=0;
			}else if(y>$(this).height()-$(".kuang").height()){
				y=$(this).height()-$(".kuang").height();
			}
			//放大镜出现
			$(".kuang").show();
			$(".kuang").css({"left":x,"top":y});
			var xP=x/($(".fangda_b").width()-$(".kuang").width());
			var yP=y/($(".fangda_b").height()-$(".kuang").height());
			//大图显现
			$(".big").show()
			$(".big img").eq(i).show().siblings().hide();
			var bx=($(".big").width()-$(".big img").eq(i).width())*xP;
			var by=($(".big").height()-$(".big img").eq(i).height())*yP;
			$(".big img").eq(i).css({"left":bx,"top":by});
	
		})
		 	$(".fangda_b").mouseout(function(){
		 	$(".big").hide();
		 	$(".kuang").hide();
		 });
			
		});
	
	
			var name = $("#name .txt");
			var mi = $("#mima .txt");
			function getcookie(name){
				var str=document.cookie;
				var arr=str.split("; ");
				for(var i=0; i<arr.length;i++){
					var arr2=arr[i].split("=");
					if(arr2[0] == name){
						return arr2[1];
					}			
				}
				return "";
			}
//			var zhang = ;
			console.log(getcookie("zhang"));
			function show(){
				if(getcookie('zhang')!=-1){
					$("#loginReg_logined").css("display","block");
					$("#loginReg_logined_name").html(getcookie("zhang"));
					$("#loginReg").css("display","none");
				}else{
					$("#loginReg_logined").css("display","none");
//					$("#loginReg_logined_name").html(zhang);
					$("#loginReg").css("display","block");
				}
			}show();
			$("#loginReg_logined_black").click(function(){
				
//				$("#loginReg_logined").css("display","none");
//				$("#loginReg").css("display","block");
//				var getcookie('zhang') = -1;
				show();
			})
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
//			var zhang = getcookie("zhang");
//			var hui = getcookie("hui");
//		
//			
//			$(".denglu").click(function(){
//				if(name.val()==zhang && mi.val()==hui){
//					
//					 window.location.href="../index.html";
//					$("#loginReg_logined").css("display","block");
//					$("#loginReg_logined_name").html(zhang);
//					$("#loginReg").css("display","none");
//					
//				}else{
//					
//					$(".tips").html("信息有误");
//					$(".tips").css("color","#f00");
//				}
				//if(name.val())
//				console.log($("#name .txt").val())
//				if($("#name .txt").val() == ""){
//					$(".tips").html("用户名不存在");
//					$(".tips").css("color","#f00");
//					}
//				else if($("#mima .txt").val() == ""){
//					$(".tips").html("密码错误");
//					$(".tips").css("color","#f00");
//				}
//				else {
//					$(this).attr("href","../index.html")
//				}
				
//	});
	    
		 
		 //回到顶部
		 
		 $(window).scroll(function(){
		 	var top = $(this).scrollTop();
		 	if(top > 300){
		 		$(".back").show();
		 	}
		 	else{
		 		$(".back").hide();
		 	}
		 	$(".back a").click(function(){
		 		$(window).scrollTop(0)
		 });
	 });
		 
})
