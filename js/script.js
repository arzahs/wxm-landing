(function($) {
	
	'use strict';
	
	var EngineSite = {

		init: function(){
			EngineSite.CounterUp();
		},

		CounterUp: function(){
			$('.work-block .item h3').counterUp({
				delay: 30,
				time: 5000
			});
		}


	};

	$(function() {
		EngineSite.init();
		new WOW().init();
	});

})(window.jQuery);