
	// $('#click').on('click', function(){
	// 	console.log("clicked");
	// 	$('.day').remove();
	// });

$('#click').on('load',function(){
	console.log(this);
  $(this).contents().on('click', function(event) { alert('test'); });
});



// var c = document.createElement('link');
// setTimeout(frames[0].document.body.appendChild(c),1000);