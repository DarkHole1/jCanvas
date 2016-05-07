function jCanvas(c){
  var o = {
    'canvas': c,
    'context': c.getContext('2d'),
    'lineTo': function(){
      this.context.lineTo.apply(this.context, arguments);
      return this;
    },
    'stroke': function(){
      this.context.stroke.apply(this.context, arguments);
      return this;
    },
    'moveTo': function(){
      this.context.moveTo.apply(this.context, arguments);
      return this;
    },
    'lineStyle': function(style){
      this.context.lineStyle = style;
      return this;
    },
    'fill': function(){
      this.context.fill.apply(this.context, [arguments]);
      return this;
    },
    'fillStyle': function(style){
      this.context.fillStyle = style;
      return this;
    },
    'fillRect': function(){
      this.context.fillRect.apply(this.context, arguments);
      return this;
    },
    'clearRect': function(){
      this.context.clearRect.apply(this.context, arguments);
      return this;
    },
    'clear': function(){
      this.canvas.width = this.canvas.width;
      return this;
    }
  }
  return o;
}
jCanvas.random = function(min, max){return (typeof min == 'number')?((typeof max == 'number')?(Math.round(min + Math.random() * max)):(Math.round(Math.random() * min))):(Math.random())};
$ = jCanvas;
