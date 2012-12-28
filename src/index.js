var events = require('event')

require('emitter').mixin(exports)

var html = document.getElementsByTagName('html')[0]

events.bind(window, 'resize', function (e) {
	size()
	position()
	exports.emit('resize', exports)
})

events.bind(window, 'scroll', function () {
	position()
	exports.emit('scroll', exports)
})

/**
 * Initialise
 */
size()
position()

/**
 * Update the size attributes
 */
function size () {
	exports.height = html.clientHeight
	exports.width = html.clientWidth
}

/**
 * Update the position attributes
 */
function position () {
	exports.top = window.scrollY
	exports.left = window.scrollX
	exports.right = exports.left + exports.width
	exports.bottom = exports.top + exports.height
}