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