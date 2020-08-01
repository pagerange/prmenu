# jQuery PrMenu

Very lightweight, responsive menu plugin for jQuery.  Provides a menu with links evenly distributed across width of menu container.

# Features

* Links are evenly distributed within menu container
* Maximum four menus levels (three nested)
* Auto text wrap of long link text (maximum two lines)
* Auto link background colors for all levels based on initial background color
* All settings can be changed by passing in your own options

## Installation


### Install with `npm`


```bash

npm install prmenu

```

In your `app.js`:

```javascript

require('jquery')

require('prmenu')

import $ from "jquery"

window.$ = $

window.jQuery = $
 
```

### Install by download or from CDN

```html

<script src="jquery.js"></script>
<script src="prmenu/prmenu.min.js"></script>
<link rel="stylesheet" href="prmenu/css/prmenu.css" />

```


## How to use

Set up your menu as standard ul with li.  Nest sub-menus as you need them.  As in the menu below, you can have a maximum of four menu levels including the top level:

```html

		<ul id="top-menu">
        <li><a href="#">Home</a></li>
         <li><a href="#">Services</a>
            <ul>
                <li><a href="#">Personal</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Professional Services</a>
                    <ul>
                        <li><a href="#">Doctor</a></li>
                        <li><a href="#">Lawyer</a>
                        	<ul>
		                        <li><a href="#">Tax</a></li>
		                        <li><a href="#">Real Estate</a></li>
		                        <li><a href="#">Criminal</a></li>
                    		</ul>
                        </li>
                        <li><a href="#">Accountant</a>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Support for Customers</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a>
            <ul>
                <li><a href="#">Personal</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Professional</a>
                    <ul>
                        <li><a href="#">Family Doctor Clinic</a></li>
                        <li><a href="#">Lawyer</a>
                        	<ul>
		                        <li><a href="#">Tax</a></li>
		                        <li><a href="#">Real Estate Lawyer</a></li>
		                        <li><a href="#">Criminal</a></li>
                    		</ul>
                        </li>
                        <li><a href="#">Enterprise Accountant</a>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>

```

Activate the menu when the document is ready:

```js

$(document).ready(function(){
	$('#top-menu').prmenu();
});

```

You can optionally override the default plugin settings by passing in your own options:

```js

$('#top-menu').prmenu({
  "fontsize": "14",
	"height": "50",
	"case": "capitalize",
	"linkbgcolor": "#286090",
	"linktextcolor": "#ffffff",
	"linktextweight": "400",
	"linktextfont": "sans-serif",
	"hoverdark": false
});

```

## Options

* **fontsize** : int : default 14 : Size of the menu link text in px
* **height** : int : default 50 : height of link elements
* **case** : string : default uppercase : valid css text transform declaration
* **lingbgcolor** : string : default #000000 : valid css background color in hex format
* **linktextweight** : int : default 400 : valid css font weight
* **linktextfont** : string : default sans-serif : valid css font to be applied to link text
* **hoverdark** : bool : default false : should hover state be darker than link background color?

## Demo

PrMenu [live demo](https://prmenu.pagerange.com)

## npm

[npm package](https://www.npmjs.com/package/prmenu)

## History

Please see [the releases](https://github.com/pagerange/prmenu/releases) changelog.

## License

Released under [MIT Licence](http://www.opensource.org/licenses/mit-license.php)


