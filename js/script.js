/*window.onload=init;
function init(){
	var ul=document.getElementsByClassName("main-menu");
	for(var i=0;i<3;i++){
		ul[0].children[i].onmouserover=function(){
			var subNav=this.getElementsByTagName("ul")[0];
			console.log(subNav);
			if(subNav){
				subNav.style.display="block";
			}
		}
		ul[0].children[i].onmouseout=function(){
			var subNav=this.getElementsByTagName("ul")[0];
			console.log(subNav);
			if(subNav){
				subNav.style.display="none";
			}
		}
	}
	console.log(ul);
}*/

//定时轮转
var arrImg=null;
var arrIndex=null;
var currentIndex=0;
var timeHandle=null;
var timeout=null;
window.onload=function(){
	
   	$("#birthday").prop('type','text').data('type','date').datepicker({
        dateFormat:'yy-mm-dd'
    });

	$(".register-header").click(function(){
		$(".register-form").slideToggle(500);
		console.log($(".register-header h2").text());
		if($(".register-header h2").text().indexOf("+")>=0){
			$(".register-header h2").text("-Register");	
		}else{
			$(".register-header h2").text("+Register");	
		}
	});

	$(document).scroll(function(){
		$(".register-form").fadeOut(500);
		if($(document).scrollTop()>400){
			console.log(1);
			$(".register").fadeOut(300);
		}else{
			$(".register").fadeIn(300);
			$(".register-header h2").text("+Register");	
		}
	});

	$("#mask").mouseover(function(){
		$("#mask").animate({opacity:0.8},400);
	});
	$("#mask").mouseout(function(){
		$("#mask").animate({opacity:0},400);
	});
	arrImg=document.getElementsByClassName("img_show");
	arrIndex=document.querySelectorAll(".index-btn");
	console.log(arrImg);
	console.log(arrIndex);
	arrIndex[currentIndex].className="index-btn active";
	for(var i=0;i<arrIndex.length;i++){
		arrIndex[i].addEventListener("click",function(){
			var n=parseInt(this.id);
			console.log(n);
			if(n!=currentIndex){
				
			}
			window.clearTimeout(timeout);
			window.clearInterval(timeHandle);
			turn(n);
			timeout=window.setTimeout(function(){
				timeHandle=window.setInterval(function(){
						if(currentIndex<arrImg.length-1){
							turn(currentIndex+1);
						}else{
							turn(0);
						}

					},2000);
			},2000);
		});

	}
	timeHandle=window.setInterval(function(){
		if(currentIndex<arrImg.length-1){
			turn(currentIndex+1);
		}else{
			turn(0);
		}
	},2000);
}
function turn(newIndex){
	arrImg[currentIndex].className="img_show moveout";
	arrImg[currentIndex].style.left="100%";
	arrImg[newIndex].className="img_show movein";
	arrImg[newIndex].style.left="0%";
	arrIndex[currentIndex].className="index-btn";
	arrIndex[newIndex].className="index-btn active";
	currentIndex=newIndex;
}
