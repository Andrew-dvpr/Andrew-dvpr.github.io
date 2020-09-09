// window.onload = function () {
//     document.body.classList.add('loaded');
// }

window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
}


// (function () {

// 	const cropElement = document.querySelectorAll('.cutter'), // выбор элементов 
// 		size = 515 // кол-во символов 
// 	endCharacter = '      . . .'; // окончание 

// 	cropElement.forEach(el => {
// 		let text = el.innerHTML;

// 		if (el.innerHTML.length > size) {
// 			text = text.substr(0, size);
// 			el.innerHTML = text + endCharacter;
// 		}
// 	});

// }());




$('body').prepend('<a href="#" class="back-to-top" alt="back"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>');


var amountScrolled = 20;
$(window).scroll(function () {
	if ($(window).scrollTop() > amountScrolled) {
		$('a.back-to-top').fadeIn('slow');
		$('.hidden').fadeIn('slow');
		// $('.lang').fadeOut('slow');


	} else {
		$('a.back-to-top').fadeOut('slow');
		$('.hidden').fadeOut('slow');
		// $('.lang').fadeIn('slow');

	}
});

$('a.back-to-top').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});

