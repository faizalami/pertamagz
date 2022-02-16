// JavaScript Document


$(function(){	

$("#container").hide();
$("#warn").hide();

intro();
animation();

if ($(window).width() > $(window).height())
{
	$("#warn").hide();
	$("#container").show();
}
else
{
	$("#container").hide();
	$("#warn").show();
}

$(window).resize(function(){

	if ($(window).width() > $(window).height())
	{
		$("#warn").hide();
		$("#container").show();
	}
	else
	{
		$("#container").hide();
		$("#warn").show();
	}
});

});

function intro() {
	$(function(){
		$("#countdown").hide();
		$("#logo").hide();
		var counter = 6;
		var interval = setInterval(function() {
			counter--;
			if (counter > -1)
			{
				$("body").fadeIn(500);
				$("#logo").fadeIn(1000);
				$("#countdown").fadeIn(500).html(String(counter));
			}
			else
			{
				$("#logo").fadeOut(1000);
				$("#countdown").fadeOut(500);
				$("#bgm").trigger("play");
				$("#bgm").prop("volume",0.1);
			}
			if (counter == -1) 
			{	
			$("#loading-screen").delay(1000).animate({
				opacity:0,
				width: 0,
				height:0
			}, 1000);
			
				clearInterval(interval);
			}
		}, 1000);
	});
}

function animation() {
	$(function(){
	$("#bgm").prop("volume", 0.1);
	/*audiojs.events.ready(function() {
        audiojs.createAll();
      });*/
	  
	 //scroll
	$(".konten").not("#konten-8").mCustomScrollbar({
		theme : "dark-thick",
		setLeft: "5px"
	});
	
	$("#menu-list").mCustomScrollbar({
		theme : "inset-2-dark",
		scrollButtons:{enable:true,scrollType:"stepped"},
		keyboard:{scrollType:"stepped"}
	});
	
	$("#konten-8").mCustomScrollbar({
		theme : "light-thick",
		setLeft: "5px"
	});
	
	$(".perta-detail-container").mCustomScrollbar({
		axis : "yx",
		theme : "light-thick",
		setLeft: "5px"
	});
	
	//alih bahasa
	$(".inggris").hide();
	$("#en").click(function(){
		$(".indonesia").fadeOut(250, function(){
			$(".inggris").fadeIn(250);
		});
	});
	$("#id").click(function(){
		$(".inggris").fadeOut(250, function(){
			$(".indonesia").fadeIn(250);
		});
	});
	
	//profile	
	$(".designer").hide();
	$(".programmer").hide();
	$("#detail-design").show();
	$("#detail-programmer").show();
	$("#phot-design").show();	
	$("#phot-programmer").show();
	
	$("#perta-design").hover(function(){
		$(".designer").hide();
		$("#detail-design").show();
		$("#phot-design").show();
	});
	
	$("#perta-gading").hover(function(){
		$(".designer").hide();
		$("#detail-gading").show();
		$("#phot-gading").show();
	});
	
	$("#perta-afif").hover(function(){
		$(".designer").hide();
		$("#detail-afif").show();
		$("#phot-afif").show();
	});
	
	$("#perta-ojan").hover(function(){
		$(".designer").hide();
		$("#detail-ojan").show();
		$("#phot-ojan").show();
	});
	
	$("#perta-programmer").hover(function(){
		$(".programmer").hide();
		$("#detail-programmer").show();
		$("#phot-programmer").show();
	});
	
	$("#perta-aku").hover(function(){
		$(".programmer").hide();
		$("#detail-aku").show();
		$("#phot-aku").show();
	});
	
	$("#perta-jon").hover(function(){
		$(".programmer").hide();
		$("#detail-jon").show();
		$("#phot-jon").show();
	});
	
	//menu
	$("#menu-list-container").hide();
	$(".page").hide();
	$("#hal-now").hide();
	
	$("#menu-1").click(function(){
		$("#menu-list-container").toggle("slide", { direction:"left"});
	});
	
	//mute pas ganti halaman
	$(".menu, .hal, .lang").click(function(){
		$("audio, video").not("#bgm").trigger("pause").prop("currentTime",0);
	});
	
	//slider
	var pages = [
		"#cover",
		"#salam",
		"#page1",
		"#page2",
		"#page3",
		"#page4",
		"#page5",
		"#page6",
		"#page7",
		"#page8",
		"#page9",
		"#page10",
		"#page11",
		"#page12",
		"#page13",
		"#page14",
		"#page15",
		"#page16",
		"#page17",
		"#page18",
		"#page19",
		"#page20",
		"#page21",
		"#back-cover",
	];
	
	var a = 0;
	
	if (a==0)
	{
		$("#cover").fadeIn(1000);
		a=0;
	}
	
	$("#menu-2").click(function(){
		$(".page").fadeOut(1000);
			$("#page1").fadeIn(1000);
			a=2;
	});
	
	$("#menu-3").click(function(){
			if (a>=1)
			{
				$(".page").fadeOut(1000);
			}
			$(pages[a-1]).fadeIn(1000);
			if (a>=1)
			{
				a--;
			}
	});
	
	$("#menu-4").click(function(){
			if (a<23)
			{
				$(".page").fadeOut(1000);
			}
			$(pages[a+1]).fadeIn(1000);
			if (a<23)
			{
				a++;
			}
	});
	$("#menu-5").click(function(){
		$(".page").fadeOut(1000);
			$("#back-cover").fadeIn(1000);
			a=23;
	});
	
	$(".hal, .headline").click(function(){
		var page = $(this).attr('href');
		$(".page").fadeOut(500);
		$(page).fadeIn(500);
		a=$.inArray(page, pages);
		if (a<2||a>22)
		{
			$("#hal-now").hide();
		}
		else
		{
			$("#hal-now").fadeIn(500).html(String(a-1));
		}
	});
	
	$(".menu").click(function(){
		if (a<2||a>22)
		{
			$("#hal-now").hide();
		}
		else
		{
			$("#hal-now").fadeIn(500).html(String(a-1));
		}
	});
	
	$('#scene').parallax();
	
	$(".hal").click(function(){
		var scrolldiv = $(this).attr('href');
		a=$.inArray(scrolldiv,pages);
		$("#menu-list-container").delay(500).toggle("slide", { direction:"left"});
	});
});

}