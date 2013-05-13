
$(document).ready(function() {

	var $signIn = $('.signin');
	var $signUp = $('.signup');
	var $upload = $('.upload');
	var $bigPic = $('.bigPic');
	var $bigPic2 = $('.bigPic2');

	function signUp() {
		$signUp.show();
		$signIn.hide();
	}

	function signIn() {
		$signUp.hide();
		$signIn.show();
	}

	function upload() {
		$upload.show();
		
	}
	function bigPic() {
		$bigPic.show();
		
	}
	function bigPic2() {
		$bigPic2.show();
		
	}


	$('#signupLink').on('click', function() {
		signUp();
	});

	$('#signinLink').on('click', function() {
		signIn();
	});

	$('.stage-left').on('click', function() {
		window.open( 'index.html', '_self' );
	});

	$('.stage-right').on('click', function() {
		window.open( 'resume.html', '_self' );
	});

	$('.pointer').on('click', function() {
		window.open( 'game.html', '_self' );
	});

	$('#uploadPic').on('click', function() {
		upload();
		$.off("click","#uploadPic");
	});

	$('#guessPic').on('click', function() {
		bigPic();
	});
	$('#guessPic2').on('click', function() {
		bigPic2();
	});
	

});

