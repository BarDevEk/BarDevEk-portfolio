	jQuery( function($)
	{
		$.scrollTo(0);

		$('#linkHome').click(function(){ $.scrollTo($('#home'),800); });
		$('#linkAboutMe').click(function(){ $.scrollTo($('#aboutMe'),800); });
		$('#linkContact').click(function(){ $.scrollTo($('#contact'),800); });
		$('#linkProjects').click(function(){ $.scrollTo($('#projects'),800); });
		$('#scrollUp').click(function(){ $.scrollTo($('#home'),800); });

	}
	);

	$(window).scroll(

			function(){
				if($(this).scrollTop()>300) $('.scrollUp').fadeIn();
				else $('.scrollUp').fadeOut();
			}

		);
// 1 image
	$('.but1').click(function(){
			$(this).parent().removeClass('portfolio.description').addClass('portfolio-description-clicked');
			$(this).hide();
			$('.h5-1').hide();
			$('#hidden1').css("display", "inline");
		}
	);

	$('#close1').click(function(){
			$('.but1').parent().addClass('portfolio.description').removeClass('portfolio-description-clicked');
			$('.but1').show();
			$('.h5-1').show();
			$('#hidden1').css("display", "none");
		}
	);


// 2 image
	$('.but2').click(function(){
			$(this).parent().removeClass('portfolio.description').addClass('portfolio-description-clicked');
			$(this).hide();
			$('.h5-2').hide();
			$('#hidden2').css("display", "inline");
		}
	);

	$('#close2').click(function(){
			$('.but2').parent().addClass('portfolio.description').removeClass('portfolio-description-clicked');
			$('.but2').show();
			$('.h5-2').show();
			$('#hidden2').css("display", "none");
		}
	);


// 3 image
	$('.but3').click(function(){
			$(this).parent().removeClass('portfolio.description').addClass('portfolio-description-clicked');
			$(this).hide();
			$('.h5-3').hide();
			$('#hidden3').css("display", "inline");
		}
	);

	$('#close3').click(function(){
			$('.but3').parent().addClass('portfolio.description').removeClass('portfolio-description-clicked');
			$('.but3').show();
			$('.h5-3').show();
			$('#hidden3').css("display", "none");
		}
	);


// 4 image
	$('.but4').click(function(){
			$(this).parent().removeClass('portfolio.description').addClass('portfolio-description-clicked');
			$(this).hide();
			$('.h5-4').hide();
			$('#hidden4').css("display", "inline");
		}
	);

	$('#close4').click(function(){
			$('.but4').parent().addClass('portfolio.description').removeClass('portfolio-description-clicked');
			$('.but4').show();
			$('.h5-4').show();
			$('#hidden4').css("display", "none");
		}
	);


// 5 image
	$('.but5').click(function(){
			$(this).parent().removeClass('portfolio.description').addClass('portfolio-description-clicked');
			$(this).hide();
			$('.h5-5').hide();
			$('#hidden5').css("display", "inline");
		}
	);

	$('#close5').click(function(){
			$('.but5').parent().addClass('portfolio.description').removeClass('portfolio-description-clicked');
			$('.but5').show();
			$('.h5-5').show();
			$('#hidden5').css("display", "none");
		}
	);


// 6 image
	$('.but6').click(function(){
			$(this).parent().removeClass('portfolio.description').addClass('portfolio-description-clicked');
			$(this).hide();
			$('.h5-6').hide();
			$('#hidden6').css("display", "inline");
		}
	);

	$('#close6').click(function(){
			$('.but6').parent().addClass('portfolio.description').removeClass('portfolio-description-clicked');
			$('.but6').show();
			$('.h5-6').show();
			$('#hidden6').css("display", "none");
		}
	);

