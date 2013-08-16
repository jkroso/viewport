# viewport

represents the browsers viewport in a more useful way

## API

```javascript
var viewport = require('viewport')

viewport.on('resize', function(){
	console.log('width: %dpx, height: %dpx', viewport.width, viewport.height)
})

viewport.on('scroll', function(){
	console.log('x: %dpx, y: %dpx', viewport.left, viewport.top)
})
```
## demo

To run the demo just download the repo run `$ make`