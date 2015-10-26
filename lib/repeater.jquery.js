jQuery.fn.repeater = function( options ) {
  var repeater = new Repeater( this, options );
  repeater.init();
  return this;
};