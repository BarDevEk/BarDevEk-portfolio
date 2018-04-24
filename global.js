	jQuery( function($)
	{
		$.scrollTo(0);

		$('#linkHome').click(function(){ $.scrollTo($('#home'),700); });
		$('#linkAboutMe').click(function(){ $.scrollTo($('#aboutMe'),500); });
		$('#linkContact').click(function(){ $.scrollTo($('#contact'),500); });
		$('#linkProjects').click(function(){ $.scrollTo($('#projects'),500); });

	}
	);
