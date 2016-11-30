$('iframe').on('load', function() {
	console.log("got here");
	console.log($('iframe').contents());
    $('iframe').contents().find(".phone-element").append($("<style type='text/css'>  .my-class{display:none;}  </style>"));
});


// var c = document.createElement('link');
// setTimeout(frames[0].document.body.appendChild(c),1000);