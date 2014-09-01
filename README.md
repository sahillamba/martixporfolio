martixporfolio
==============


“Matrix - Animated Portfolio V-Card Template” Documentation by “Sahil Lamba” v1.0

“Matrix - Animated Portfolio V-Card Template”
Created: 5/14/2013
By: Sahil Lamba
Email: sahil.lamba@iconablare.in


Table of Contents

HTML Structure
CSS Files and Structure
JavaScript
Sources and Credits

A) HTML Structure 

This theme is a responsive layout with a fixed background.The matrix style background can be changed very easily by just removing matrix script from body tag in index.html (see image). And include a background image or color property in head section under a style tag (css).



The menu at top is in a div with name "menubox".All of the information within the main content area is nested within a div with an id of "homebox". The general template structure is the same throughout the template. Here is the general structure.The white border specifies the various div that are used the name of div can be found by using Firebug extension in Firefox or Chrome Developer Tools (in built).




B) CSS Files and Structure

As this is a reponsive templete I'm using six CSS files in this theme. The first one is a generic style file which is by defult file. For diffrent devices different css files are rendered so if u make a change in one , make the same change in all to avoid problems.

The css files are labled properly and it will be easy to find and change properties.If you would like to edit a specific section of the site, simply find the appropriate label in the CSS file, and then scroll down until you find the appropriate style that needs to be edited.

 

C) JavaScript

This theme imports three Javascript files.

jQuery
My custom script (slider.js)( Encrypted )
Light Box 2 Plugin
jQuery is a Javascript library that greatly reduces the amount of code that you must write.
Most of the animation in this site is carried out from the customs scripts. The js in use is encrypted but i have included a original js folder in which a slider.js is available for refrence and if u want to make changes but this is recommended only if you know javascript and jquery.It is advised to encrypt it using http://www.jsobfuscate.com/ before using it to avoid piracy.There are a few functions worth looking over.
  [

$("#menuhome").click(function(){ This function is activated when the menuhome div is clicked 
var current_width = $(window).width(); Checks the current width of browser
 
if(current_width < 479){

$(".homecontent").fadeOut(); Fades  out the content of boxes
			  
if (x==1){} Checks if the current box on screen is Home if it is then nothing

if (x==2){ If not then the animation 

x=1; makes the variable to check current box to home box.

The animation to send the box  

$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"350px",width:"600px"});

$("#aboutbox").animate({height:"300px",top:"250px",marginLeft:"-650px",width:"600px"},"slow","linear");

The animation to send the box  

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

	 else if(current_width >= 479 && current_width < 766){  and so on for different sizes
		  
In addition to the custom scripts, I implement a lightbox plugins to showcase projects. This plugin is packed, so you won't need to manually edit anything in the file.
D) Sources and Credits - top

I've used the following images, icons or other files as listed.

Portraits by Carter Kustera
Lightbox 2 by Lokesh Dhakar
Dortmund Icon Set by PC

Sahil Lamba
