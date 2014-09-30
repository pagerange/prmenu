# jQuery PrMenu

Very lightweight, responsive menu plugin for jQuery.

## How to use

Set up you menu as standard ul with li.  Nest sub-menus as you need them:

```html

<ul id="top-menu">
		<li><a href="#">Home</a></li>
		<li><a href="#">Services</a>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Business</a></li>
				<li><a href="#">Professional</a>
					<ul>
						<li><a href="#">Doctor</a></li>
						<li><a href="#">Lawyer</a></li>
						<li><a href="#">Accountant</a>
					</ul>
				</li>
			</ul>
		</li>
		<li><a href="#">Shop</a></li>
		<li><a href="#">Support</a></li>
		<li><a href="#">FAQ</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Contact</a>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Business</a></li>
				<li><a href="#">Professional</a>
					<ul>
						<li><a href="#">Doctor</a></li>
						<li><a href="#">Lawyer</a></li>
						<li><a href="#">Accountant</a>
					</ul>
				</li>
			</ul>
		</li>
	</ul>

```

Active the menu when the document is ready:

```js

$(document).ready(function(){
			$('#top-menu').prmenu();
		});

```

## Demo

xRequest [live demo](http://pagerange.com/jquery/prmenu)

## History

Please see the [the releases](https://github.com/pagerange/prmenu/releases) changelog.

## License

Released under [MIT Licence](http://www.opensource.org/licenses/mit-license.php)
