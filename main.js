

$(document).ready(function() {

	var inputHeight = $('.input').outerHeight();
	$('#output').css('height',inputHeight);
	
});

function stepDown(element) {
	var percentList = ['100','50','33.3333333333','25','20','10','5'];
	var elementWidth = element.width();
	var containerWidth = $('#color-container').width();
	var percentageValue = Math.floor((elementWidth/containerWidth)*100);
	var unchanged = 1;
	$.each(percentList, function() {
		if ( (this < percentageValue) && (unchanged == 1) ) {
			element.css('width',this+"%");
			newElementWidth = this;
			unchanged = 0;
		}
	});
}

function stepUp(element) {
	var elementWidthPercentage = Math.floor(((element.width()/$('#color-container').width())*100)+3);
	var percentList = ['100','50','33.3333333333','25','20','10','5'];
	alert(elementWidthPercentage);
	$.each(percentList, function() {
		if ( (this > elementWidthPercentage) ) {
			element.css('width',this+"%");
			newElementWidth = this;
			//unchanged = 0;
		}
	});
}

function checkHeights() {

	lastElementOffset = $('.color-block').last().offset().top;
	outputHeight = $('#output').height();
	
	if (lastElementOffset > outputHeight) {
		stepDown($('.color-block'));
	}
	
	if (document.getElementById('user-text').value == '') {
		newElementWidth = 100;
		$('.color-block').css({'width':'100%','background-color':'#fff','color':'#fff'});
	}
	
}

var newElementWidth = 100;