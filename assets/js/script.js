$(document).ready(function(){

	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();


		//card
		if (wScroll > $('.content-2').offset().top -290) {


			$('.card').each(function(i){
				setTimeout(function(){
					$('.card').eq(i).addClass('muncul');
				}, 300 * (i+1) );
			});
		}

		if (wScroll > $('.content-3').offset().top -290) {

			$('.portfolio-item-inner').each(function(i){
					setTimeout(function(){
						$('.portfolio-item-inner').eq(i).addClass('muncul');
					}, 300 * (i+1));
				});
				}


		if(wScroll > $('.content-4').offset().top -190){
			$('.resepsi').each(function(){
				setTimeout(function(){
					$('.resepsi').addClass('muncul');
				});
			});
		}

			});



	$('.navbar-brand').mouseenter(function(){
		$(this).css(
			"color", "aqua"
		);
	});
	$('.navbar-brand').mouseleave(function(){
		$(this).css(
			"color", "white"
		);
	});

	// lokasi
	$('.ngunduh').hide();
	$('button.sukoharjo').click(function(){
		$('.resepsi').fadeOut("fast",function(){
			$('.ngunduh').fadeIn();
		});
	});
	$('button.juwiring').click(function(){
		$('.ngunduh').fadeOut("fast",function(){
			$('.resepsi').fadeIn();
		});
	});



});