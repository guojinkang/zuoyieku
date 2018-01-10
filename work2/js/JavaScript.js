$(function(){
	//手动换页
	$('#next').click(function(){
		
		$('img').eq(27).attr('src','images/xin5.jpg');
		$('span').eq(15).html("壹号（熟）");
		$('img').eq(28).attr('src','images/xin6.jpg');
		$('span').eq(16).html('一千零一夜花果茶');
		$('img').eq(29).attr('src','images/xin7.jpg');
		$('span').eq(17).html('优惠装花茶一级');
		$('span').eq(18).html("");
		$('img').eq(30).attr('src','');
	});
	$('#befor').click(function(){
		$('img').eq(27).attr('src','images/xin1.jpg');
		$('span').eq(15).html("黄山毛峰茶");
		$('img').eq(28).attr('src','images/xin2.jpg');
		$('span').eq(16).html('安溪铁观音秋茶');
		$('img').eq(29).attr('src','images/xin3.jpg');
		$('span').eq(17).html('沁醒茶');
		$('img').eq(30).attr('src','images/xin4.jpg');
		$('span').eq(18).html("豪门伯爵茶");
	});
});
window.onload=function(){
	var speed=20; 
	var tab=document.getElementById("tuijian"); 
	var tab1=document.getElementById("tuijian_img"); 
	var tab2=document.getElementById("demo2"); 
	tab2.innerHTML=tab1.innerHTML; 
	var x=tab1.children;
	var y=tab2.children;
	for(var i=0;i<7;i++)
	{
		y[i].style.float="left";
	}
	//子菜单
	for(var i=0;i<7;i++)
	{
		x[i].onmouseover=function(){
			var l=this.children;
			l[1].style.display="block";
		}
		x[i].onmouseout=function(){
			var l=this.children;
			l[1].style.display="none";
		}
		y[i].onmouseover=function(){
			var l=this.children;
			l[1].style.display="block";
		}
		y[i].onmouseout=function(){
			var l=this.children;
			l[1].style.display="none";
		}
	}
	//轮播图
	function Marquee(){ 
		if(tab2.offsetWidth-tab.scrollLeft<-400){
			tab.scrollLeft-=tab1.offsetWidth;
		}
		else{ 
			tab.scrollLeft++;
			for(var i=0;i<7;i++)
			{
				var j=x[i].children;
				var z=y[i].children;
				if(i==0)
					j[1].style.left=400-tab.scrollLeft+'px'; 
				else
					j[1].style.left=400+i*160-tab.scrollLeft+'px';
				if(i==0)
					z[1].style.left=1530-tab.scrollLeft+'px'; 
				else
					z[1].style.left=1530+i*160-tab.scrollLeft+'px';
			}
		} 
	}
	var MyMar=setInterval(Marquee,speed); 
	tab.onmouseover=function() {clearInterval(MyMar)}; 
	tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)}; 
}