var col,c=-1;
function dimensions1()
{
	col=null;
	var wid,heig;
	var d1=document.getElementById("width");
	var d2=document.getElementById("height");
	wid=d1.value;
	heig=d2.value;

	$(".can").remove();
	for(var i=1;i<=heig;i++)
	{
		$("body").append("<p class='height1' style='margin:0'></p>");
		for(var j=1;j<=wid;j++)
		{
			$(".height1").append("<canvas class='can' width='20' height='20' style='border:1px solid #000'></canvas>");
		}
		$(".height1").removeClass("height1");
		
	}
	$(".can").on("click",function(){
		if(col==null)
		alert("Select Color First");
	});
}
function docolor()
{
	c++;
	var d3=document.getElementById("color");
	col=d3.value;
	$(".can").on("click",function(){
		if($(this).hasClass("cancol")){
			$(this).css("background-color","white");
			if(c%2==0)
			$(this).removeClass("cancol");
			else
			$(this).addClass("cancol");
		}
		else{
			$(this).css("background-color",col);
			if(c%2!=0)
			$(this).removeClass("cancol");
			else
			$(this).addClass("cancol");}
			});
}
