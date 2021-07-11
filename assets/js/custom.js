document.addEventListener("contextmenu", function(e){
    e.preventDefault();},
    false);

function footer_colors(){
    var element = document.body;
    var check = element.classList.contains('dark-mode');
    if(check == true){
      jQuery('#footer').css('background-color','#000');
      jQuery('#footer').css('color','white');
	  jQuery("#darkmodebutton").html('Light Mode <i class="fas fa-sun"></i>');
    }else{
      jQuery('#footer').css('background-color','#f7f8f9');
      jQuery('#footer').css('color','#45505b');
	  jQuery("#darkmodebutton").html('Dark Mode <i class="fas fa-moon"></i>');
    }
}

function darkmode() {
	var element = document.body;
	element.classList.toggle("dark-mode");
	footer_colors();
 }

jQuery(".circle_percent").each(function() {
    var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 3.6,
		$round = $this.find(".round_per");
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({Counter: $dataV},
	{
		duration: 2000, 
		easing: 'swing', 
		step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now)/10+"/10");
        }
    });
	if($dataV >= 51){
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function(){
			$this.addClass("percent_more");
		},1000);
		setTimeout(function(){
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		},1000);
	}
});