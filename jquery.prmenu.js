/*
 * jQuery prmenmu plugin v 0.1.0
 * Copyright 2014 by Steve George
 * http://www.pagerange.com/projects/prmenu
 * Released under the MIT license.
 * https://github.com/pagerange/prmenu/blob/master/LICENSE
 */

/*
 *   Usage:
 * 
 *   $(document).ready(function(){
 * 	    $('ul#mymenu').prmenu();
 *   });
 *
 *   Note:
 *
 *   Options passed into the plugin are not yet used.  
 *   Menu styling, link color, etc., can be adjusted in the CSS for now.
 *
 */

; // close previous unclosed statements if any

(function($) {

	var plugin = {};

	$.prmenu = function(element, options) {

		// Set default options for plugin
		// Not yet implemented... can't be changed
		var defaults = {
			maintain_ratio: true,
			link: '#000000',
			visited: '#000000',
			hover: '#666666',
			active: '#666666',
			current: '#444444'
		};


		// create empty object to hold options
		plugin.o = {}

		// Function called when we initialize the plugin
		plugin.init = function() {

			// Merge user options with our defaults
			plugin.o = $.extend({}, defaults, options);

			// Add the target element to the options object
			plugin.o.el = $(element);

			// resize elements to user specs
			plugin.activateMenu();

		} // end init

		plugin.activateMenu = function() {

			var links;
			links = plugin.o.el.children('li');

			// wrap element in prmenu_container div
			plugin.o.el.wrap('<div class="prmenu_container"></div>');

			// prepend the mobile menu toggle
			plugin.o.el.parent().prepend('<ul class="menu-toggle"><li class="menu-toggle"><a href="#"></a></li></ul>');

			$('li.menu-toggle a').click(function() {
				plugin.o.el.toggle();
			});

			$(window).resize(function() {
				plugin.resizeLinks()
			});

			plugin.resizeLinks();

		} // end activateMenu


		plugin.resizeLinks = function() {
			if ($(window).width() > 720) {
				plugin.setupMenuForDesktopDevices();
			} else {
				plugin.setupMenuForHandheldDevices();
			}
		}

		plugin.setupMenuForDesktopDevices = function() {

			var links, count, width, first, last, aheight;

			links = plugin.o.el.children('li');
			aheight = links.children('a').css('height');

			// Calculate space taken by all li, except for the last
			// Assign the remaining space to the last li
			if (links.length > 1) {
				count = links.length;
				width = 100 / count;
				first = width * (count - 1);
				last = 100 - first;
				width = width + '%';
				last = last + '%';
			} else {
				// If there's only a single element, make it 100% width'
				width = '100%';
				last = '100%';
			}

			// Set desktop navigation styling
			$('div.prmenu_container').css('height', aheight);
			links.css('width', width);
			links.last().css('width', last);
			plugin.o.el.css('display', 'block');

		}

		plugin.setupMenuForHandheldDevices = function() {

			var links, aheight;

			links = plugin.o.el.children('li');
			aheight = links.find('a').css('height');

			// Set mobile navigation styling
			plugin.o.el.css('width', '100%');
			plugin.o.el.css('display', 'none');
			plugin.o.el.parent().css('height', aheight);
			links.css('width', '100%');
			links.last().css('width', '100%');
			links.css('position', 'relative');
			links.css('left', '0');
			links.show();
			links.children('ul').show();

		}

		plugin.init();

	}

	$.fn.prmenu = function(options) {

		return this.each(function() {
			if (undefined == $(this).data('prmenu')) {
				var plugin = new $.prmenu(this, options);
				$(this).data('prmenu', plugin);
			}
		});

	}

})(jQuery);
