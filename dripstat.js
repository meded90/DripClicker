var needToBuy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

setInterval(function() {
	$('#btn-addMem').click(); // auto click on "new Object()"
}, 1);

setInterval(function() {
	// auto drip
	if(parseFloat($('#localProgressBar').css('width'))/parseFloat($('#localProgressBar').parent().css('width')) == 1)
		$('#btn-addGlobalMem').click();
	
	// auto buy
	for(i = 1; i < 11; i++) {
			if(!$('#pu' + i).hasClass('disabled') & $('#pu' + i + ' .storeItemAmount').html() < needToBuy[i-1])
				$('#pu' + i).click();
	}
	
	// auto buy 1st powerup
	if(!$('#upg1').hasClass('disabled'))
		$('#upg1').click();
}, 1000);
