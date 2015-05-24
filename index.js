var Cell = require('cell')

function Viewport() {
  this.top = window.scrollY
  this.left = window.scrollX
  this.width = window.innerWidth
  this.height = window.innerHeight
  this.right = this.left + this.width
  this.bottom = this.top + this.height
}

var viewport = new Cell(new Viewport)

function onChange() { viewport.set(new Viewport) }
window.addEventListener('resize', onChange, true)
window.addEventListener('scroll', onChange, true)

module.exports = viewport
