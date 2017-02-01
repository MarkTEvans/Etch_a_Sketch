$(document).onready(function() {
var col = prompt('How many rows/columns would you like?');
var row = col;
var size = 350/col;
var container = $('.container');

for (var r = 0; r < row; r++) {
	for(var c = 0; c < col; c++) {
		$(container).append('<div class=\'pixel\'></div>');
  };
	$(container).append('<div class\'pixel_clear\'></div>');
};

var pixel = $('.pixel');

$(pixel).width(size).height(size);

$(pixel).mouseenter(function() {
  $(this).addClass('filled');
  $(this).removeClass('pixel');
});

$('#clear').on('click', function() {
	$('.filled').fadeOut('slow', function() {
  	$('.filled').addClass('pixel');
    $(pixel).css('display','block');
    $('.filled').removeClass('filled');
  });
});

$('#newsize').on('click', function() {
	location.reload();
})
})