$(document).ready(function(){

	// Pasamos el valor del input, al texto que tenemos al costado
   $('input[type="file"]').change(function(){
		var value = $("input[type='file']").val();
		$('.fileUpload--archivo').text(value);
      $('.fileUpload--label').css('background-color', '#002C42');
      $('.fileUpload--icon').css('background-image', 'url(img/icon-ok.svg)');
	});


});
