


$(document).ready(function () {

	$('body').append('<div id="wrapper"></div>');
	$('#wrapper').css({'width': '512px',
						'height': '512px',
						'border': '2px solid #000',
						'margin': '50px auto'});

	var div = '<div class="square"></div>'
	for (i = 0; i < 256; i++) {
	$('#wrapper').append(div);
	}


	$('.square').css({'width': $('#wrapper').width() / 16,
						'height': $('#wrapper').height() / 16,
						'border': '1px solid #000',
						'display': 'inline-block',
						'box-sizing': 'border-box',
						'float': 'left',
						});
	

	$('.square').on('mousedown', function() {

		
		
		$(this).css('background-color', '#696969');

		$('.square').on('mouseover', function() {
			$(this).css('cursor', 'default')
			$(this).css('background-color', '#696969')
		});

		$('.square').on('mouseup', function() {
			$('.square').off('mouseover');
		});
	
	});

	$('#wrapper').before('<button class="clear">Clear and Rescale Grid</button>');

	$('.clear').css({'background-color': '#e7e7e7',
						'color': 'black',
						'display': 'block',
						'margin': 'auto',
						'margin-top': '30px',
						'margin-bottom': '-20px',
						'padding': '6px 24px',
						'border-radius': '4px',
						'border': '1px solid black',
						'box-shadow': '1px 1px',
						'font-family': 'serif',
						'font-size': '16px',
						});

	$('button').on('click', function() {
		var squareNumber = prompt("How many squares do you want to have on each side?");
		$('#wrapper').empty();


		
		for (i = 0; i < squareNumber * squareNumber; i++) {
			$('#wrapper').append(div);
		}

		$('.square').css({'width': $('#wrapper').width() / squareNumber,
						'height': $('#wrapper').width() / squareNumber,
						'border': '1px solid #000',
						'display': 'inline-block',
						'box-sizing': 'border-box',
						'float': 'left',
						'background-color': '#fff',
						});


		// I still haven't found a way
		//	to not use the following code twice.
		// detach() seems to cause other problems.
		
		$('.square').on('mousedown', function() {

		
			$(this).css('background-color', '#696969');

			$('.square').on('mouseover', function() {
				$(this).css('cursor', 'default')
				$(this).css('background-color', '#696969')
			});

			$('.square').on('mouseup', function() {
				$('.square').off('mouseover');
			});
	
		}); 

		
	});
	
});

