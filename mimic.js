/**
 * mimic.js 09/23/2013 | v0.0 draft - github.com/villamx/staticjs
 * 
 * Static: mimic ( dependency: jQuery )
 */
(function($) {

	var cache = {
		laps : {}
	};
	var todos = {
		'enable' : function(options) {
			console.log(options);

			var els = options.elements, ca$h = '.mimic-enable:not(:hidden)';
			if ($.isEmptyObject(els) || !(ca$h = this.find(ca$h))[0]) return;
			console.log('cash ', ca$h.length);

			var laps = cache.laps, cn$x = this;

			this.find('input:not(:hidden)').each(
			function(index, inpt) {
				var $in = $(inpt);
				laps[inpt.name] = {};

				$in.keypress(function(ev) {
					laps[inpt.name].keyed = true;

				}).keyup(
				function(ev) {
					var lap = laps[inpt.name];
					console.log(inpt.name, lap.keyed);

					if (!lap.keyed) switch (ev.keyCode) {
					case 8:
					case 46:
						break;
					default:
						return;
					}

					// if (lap.keyed) {
					var fallen = lap.gotten = inpt.value.length >= els[inpt.name];
					// if (fallen) {
					// var pass = true;

					if (fallen) for ( var ite in els) {
						if (ite == inpt.name || laps[ite].gotten) continue;
						fallen = false;
					}

					console.log('fallen ', fallen);

					// if (pass) {
					// console
					// .log(cn$x.find('.mimic-enable').prop('disabled', ''));
					// }

					var disable = ca$h.is(':disabled');

					if (fallen && disable || !fallen && !disable)
						ca$h.prop('disabled', disable ? '' : 'disable');

					// }
					// }
					lap.keyed = false;
					console.log(lap);
				});
			});
		}
	};

	// var prev_mimic = $.fn.mimic;

	/* with|out selector */
	$.fn.mimic = function(method) {
		/* Validate... 1. selector 2. exist action 3. options */

		var toDo;
		if (toDo = todos[method])
			toDo.apply(this, Array.prototype.slice.call(arguments, 1));

		return this;
	};

}(jQuery));
