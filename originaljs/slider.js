
var x=1; // Initial

$("#menuhome").mouseenter(function(){
  $("#menuhome").animate({height:"130px"});
  
});
$("#menuhome").mouseleave(function(){
  $("#menuhome").animate({height:"100px"});
});
$("#menuabout").mouseleave(function(){
  $("#menuabout").animate({height:"100px"});
});
$("#menuabout").mouseenter(function(){
  $("#menuabout").animate({height:"130px"});
});
$("#menuporfolio").mouseleave(function(){
  $("#menuporfolio").animate({height:"100px"});
});
$("#menuporfolio").mouseenter(function(){
  $("#menuporfolio").animate({height:"130px"});
});
$("#menucontact").mouseleave(function(){
  $("#menucontact").animate({height:"100px"});
});
$("#menucontact").mouseenter(function(){
  $("#menucontact").animate({height:"130px"});
});



//This is to animate the home box included for all screen sizes

$("#menuhome").click(function(){
 var current_width = $(window).width();
 if(current_width < 479){
$(".homecontent").fadeOut();
	if (x==1){}
	if (x==2){   
	x=1;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#homebox").animate({top:"300px",marginLeft:"10px",width:"400px",height:"800px"},"slow","linear");
		}
	if (x==3){
    x=1;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#homebox").animate({top:"300px",marginLeft:"10px",width:"400px",height:"800px"},"slow","linear");
	}
	if (x==4){
    x=1;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#homebox").animate({top:"300px",marginLeft:"10px",width:"400px",height:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();

}
else if(current_width >= 479 && current_width < 766){
$(".homecontent").fadeOut();
	if (x==1){}
	if (x==2){   
	x=1;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#homebox").animate({height:"800px",top:"300px",marginLeft:"10px",width:"400px"},"slow","linear");
		}
	if (x==3){
    x=1;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#homebox").animate({height:"800px",top:"300px",marginLeft:"10px",width:"400px"},"slow","linear");
	}
	if (x==4){
    x=1;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#homebox").animate({height:"800px",top:"300px",marginLeft:"10px",width:"400px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
else if(current_width >= 766 && current_width < 1024){
$(".homecontent").fadeOut();
	if (x==1){}
	if (x==2){   
	x=1;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"50px",width:"600px"},"slow","linear");
	$("#homebox").animate({height:"400px",top:"200px",marginLeft:"50px",width:"800px"},"slow","linear");
		}
	if (x==3){
    x=1;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"50px",width:"600px"},"slow","linear");
	$("#homebox").animate({height:"400px",top:"200px",marginLeft:"50px",width:"800px"},"slow","linear");
	}
	if (x==4){
    x=1;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"50px",width:"600px"},"slow","linear");
	$("#homebox").animate({height:"400px",top:"200px",marginLeft:"50px",width:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
else if(current_width >= 1024 && current_width < 1224){
$(".homecontent").fadeOut();
	if (x==1){}
	if (x==2){   
	x=1;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"150px",width:"600px"},"slow","linear");
	$("#homebox").animate({height:"400px",top:"200px",marginLeft:"150px",width:"800px"},"slow","linear");
		}
	if (x==3){
    x=1;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"150px",width:"600px"},"slow","linear");
	$("#homebox").animate({height:"400px",top:"200px",marginLeft:"150px",width:"800px"},"slow","linear");
	}
	if (x==4){
    x=1;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"150px",width:"600px"},"slow","linear");
	$("#homebox").animate({height:"400px",top:"200px",marginLeft:"150px",width:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
else if(current_width >= 1224){
$(".homecontent").fadeOut();
	if (x==1){}
	if (x==2){   
	x=1;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"},"slow","linear");
	$("#homebox").animate({height:"400px",top:"200px",marginLeft:"250px",width:"800px"},"slow","linear");
		}
	if (x==3){
    x=1;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"},"slow","linear");
	$("#homebox").animate({height:"400px",top:"200px",marginLeft:"250px",width:"800px"},"slow","linear");
	}
	if (x==4){
    x=1;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#homebox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"},"slow","linear");
	$("#homebox").animate({height:"400px",top:"200px",marginLeft:"250px",width:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
});// Ends




//This is to animate the about box included for all screen sizes

$("#menuabout").click(function(){
 var current_width = $(window).width();
 if(current_width < 479){
$(".homecontent").fadeOut();
	if (x==1){
    x=2;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#aboutbox").animate({top:"300px",marginLeft:"10px",width:"400px",height:"1600px"},"slow","linear");
		}
			if (x==2){	}
	if (x==3){
    x=2;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#aboutbox").animate({top:"300px",marginLeft:"10px",width:"400px",height:"1600px"},"slow","linear");
	}
	if (x==4){
    x=2;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#aboutbox").animate({top:"300px",marginLeft:"10px",width:"400px",height:"1600px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();

}
else if(current_width >= 479 && current_width < 766){
$(".homecontent").fadeOut();
	if (x==1){
    x=2;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#aboutbox").animate({height:"800px",top:"300px",marginLeft:"10px",width:"400px"},"slow","linear");
		}
			if (x==2){	}
	if (x==3){
    x=2;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#aboutbox").animate({height:"800px",top:"300px",marginLeft:"10px",width:"400px"},"slow","linear");
	}
	if (x==4){
    x=2;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#aboutbox").animate({height:"800px",top:"300px",marginLeft:"10px",width:"400px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
else if(current_width >= 766 && current_width < 1024){
$(".homecontent").fadeOut();
	if (x==1){
    x=2;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"50px",width:"600px"},"slow","linear");
	$("#aboutbox").animate({height:"400px",top:"200px",marginLeft:"50px",width:"800px"},"slow","linear");
		}
	if (x==2){	}
	if (x==3){
    x=2;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"50px",width:"600px"},"slow","linear");
	$("#aboutbox").animate({height:"400px",top:"200px",marginLeft:"50px",width:"800px"},"slow","linear");
	}
	if (x==4){
    x=2;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"50px",width:"600px"},"slow","linear");
	$("#aboutbox").animate({height:"400px",top:"200px",marginLeft:"50px",width:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
else if(current_width >= 1024 && current_width < 1224){
$(".homecontent").fadeOut();
	if (x==1){
    x=2;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"150px",width:"600px"},"slow","linear");
	$("#aboutbox").animate({height:"400px",top:"200px",marginLeft:"150px",width:"800px"},"slow","linear");
		}
	if (x==2){	}	
	if (x==3){
    x=2;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"150px",width:"600px"},"slow","linear");
	$("#aboutbox").animate({height:"400px",top:"200px",marginLeft:"150px",width:"800px"},"slow","linear");
	}
	if (x==4){
    x=2;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"150px",width:"600px"},"slow","linear");
	$("#aboutbox").animate({height:"400px",top:"200px",marginLeft:"150px",width:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
else if(current_width >= 1224){
$(".homecontent").fadeOut();
	if (x==1){
    x=2;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"},"slow","linear");
	$("#aboutbox").animate({height:"400px",top:"200px",marginLeft:"250px",width:"800px"},"slow","linear");
		}
	if (x==2){	}	
	if (x==3){
    x=2;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"},"slow","linear");
	$("#aboutbox").animate({height:"400px",top:"200px",marginLeft:"250px",width:"800px"},"slow","linear");
	}
	if (x==4){
    x=2;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#aboutbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"},"slow","linear");
	$("#aboutbox").animate({height:"400px",top:"200px",marginLeft:"250px",width:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
});// Ends



//This is to animate the portfolio box included for all screen sizes

$("#menuporfolio").click(function(){
 var current_width = $(window).width();
 if(current_width < 479){
$(".homecontent").fadeOut();
	if (x==1){
    x=3;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#porfoliobox").animate({top:"300px",marginLeft:"10px",width:"400px",height:"800px"},"slow","linear");
		}
	if (x==3){	}
	if (x==2){
    x=3;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#porfoliobox").animate({top:"300px",marginLeft:"10px",width:"400px",height:"800px"},"slow","linear");
	}
	if (x==4){
    x=3;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#porfoliobox").animate({top:"300px",marginLeft:"10px",width:"400px",height:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();

}
else if(current_width >= 479 && current_width < 766){
$(".homecontent").fadeOut();
	if (x==1){
    x=3;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#porfoliobox").animate({height:"800px",top:"300px",marginLeft:"10px",width:"400px"},"slow","linear");
		}
	if (x==3){	}
	if (x==2){
    x=3;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#porfoliobox").animate({height:"800px",top:"300px",marginLeft:"10px",width:"400px"},"slow","linear");
	}
	if (x==4){
    x=3;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#porfoliobox").animate({height:"800px",top:"300px",marginLeft:"10px",width:"400px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
else if(current_width >= 766 && current_width < 1024){
$(".homecontent").fadeOut();
	if (x==1){
    x=3;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"50px",width:"600px"},"slow","linear");
	$("#porfoliobox").animate({height:"400px",top:"200px",marginLeft:"50px",width:"800px"},"slow","linear");
		}
	if (x==3){	}
	if (x==2){
    x=3;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"50px",width:"600px"},"slow","linear");
	$("#porfoliobox").animate({height:"400px",top:"200px",marginLeft:"50px",width:"800px"},"slow","linear");
	}
	if (x==4){
    x=3;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"50px",width:"600px"},"slow","linear");
	$("#porfoliobox").animate({height:"400px",top:"200px",marginLeft:"50px",width:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
else if(current_width >= 1024 && current_width < 1224){
$(".homecontent").fadeOut();
	if (x==1){
    x=3;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"150px",width:"600px"},"slow","linear");
	$("#porfoliobox").animate({height:"400px",top:"200px",marginLeft:"150px",width:"800px"},"slow","linear");
		}
	if (x==3){	}
	if (x==2){
    x=3;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"150px",width:"600px"},"slow","linear");
	$("#porfoliobox").animate({height:"400px",top:"200px",marginLeft:"150px",width:"800px"},"slow","linear");
	}
	if (x==4){
    x=3;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"150px",width:"600px"},"slow","linear");
	$("#porfoliobox").animate({height:"400px",top:"200px",marginLeft:"150px",width:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
else if(current_width >= 1224){
$(".homecontent").fadeOut();
	if (x==1){
    x=3;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"},"slow","linear");
	$("#porfoliobox").animate({height:"400px",top:"200px",marginLeft:"250px",width:"800px"},"slow","linear");
		}
	if (x==3){	}
	if (x==2){
    x=3;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"},"slow","linear");
	$("#porfoliobox").animate({height:"400px",top:"200px",marginLeft:"250px",width:"800px"},"slow","linear");
	}
	if (x==4){
    x=3;
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#contactbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#porfoliobox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"},"slow","linear");
	$("#porfoliobox").animate({height:"400px",top:"200px",marginLeft:"250px",width:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
});// Ends



//This is to animate the contact box included for all screen sizes

$("#menucontact").click(function(){
 var current_width = $(window).width();
 if(current_width < 479){
	$(".homecontent").fadeOut();
	if (x==1){
    x=4;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#contactbox").animate({top:"300px",marginLeft:"10px",width:"400px",height:"800px"},"slow","linear");
		}
	if (x==4){	}
	if (x==3){
    x=4;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#contactbox").animate({top:"300px",marginLeft:"10px",width:"400px",height:"800px"},"slow","linear");
	}
	if (x==2){
    x=4;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#contactbox").animate({top:"300px",marginLeft:"10px",width:"400px",height:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();

}
else if(current_width >= 479 && current_width < 766){
$(".homecontent").fadeOut();
	if (x==1){
    x=4;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#contactbox").animate({height:"800px",top:"300px",marginLeft:"10px",width:"400px"},"slow","linear");
		}
	if (x==4){	}
	if (x==3){
    x=4;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#contactbox").animate({height:"800px",top:"300px",marginLeft:"10px",width:"400px"},"slow","linear");
	}
	if (x==2){
    x=4;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"600px",top:"250px",marginLeft:"10px",width:"300px"},"slow","linear");
	$("#contactbox").animate({height:"800px",top:"300px",marginLeft:"10px",width:"400px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
else if(current_width >= 766 && current_width < 1024){
$(".homecontent").fadeOut();
	if (x==1){
    x=4;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"50px",width:"600px"},"slow","linear");
	$("#contactbox").animate({height:"400px",top:"200px",marginLeft:"50px",width:"800px"},"slow","linear");
		}
	if (x==4){	}
	if (x==3){
    x=4;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"50px",width:"600px"},"slow","linear");
	$("#contactbox").animate({height:"400px",top:"200px",marginLeft:"50px",width:"800px"},"slow","linear");
	}
	if (x==2){
    x=4;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"50px",width:"600px"},"slow","linear");
	$("#contactbox").animate({height:"400px",top:"200px",marginLeft:"50px",width:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
else if(current_width >= 1024 && current_width < 1224){
$(".homecontent").fadeOut();
	if (x==1){
    x=4;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"150px",width:"600px"},"slow","linear");
	$("#contactbox").animate({height:"400px",top:"200px",marginLeft:"150px",width:"800px"},"slow","linear");
		}
	if (x==4){	}
	if (x==3){
    x=4;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"150px",width:"600px"},"slow","linear");
	$("#contactbox").animate({height:"400px",top:"200px",marginLeft:"150px",width:"800px"},"slow","linear");
	}
	if (x==2){
    x=4;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"150px",width:"600px"},"slow","linear");
	$("#contactbox").animate({height:"400px",top:"200px",marginLeft:"150px",width:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
else if(current_width >= 1224){
$(".homecontent").fadeOut();
	if (x==1){
    x=4;
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#homebox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"},"slow","linear");
	$("#contactbox").animate({height:"400px",top:"200px",marginLeft:"250px",width:"800px"},"slow","linear");
		}
	if (x==4){	}
	if (x==3){
    x=4;
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#porfoliobox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"},"slow","linear");
	$("#contactbox").animate({height:"400px",top:"200px",marginLeft:"250px",width:"800px"},"slow","linear");
	}
	if (x==2){
    x=4;
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});
	$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");
	$("#contactbox").delay(1000).animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"},"slow","linear");
	$("#contactbox").animate({height:"400px",top:"200px",marginLeft:"250px",width:"800px"},"slow","linear");
	}
		$(".homecontent").delay(1000).fadeIn();
}
});// Ends