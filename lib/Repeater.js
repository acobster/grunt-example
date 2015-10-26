function Repeater( $element, options ) {
  this.$element = $element;
  this.options = options || {};
}

Repeater.prototype.init = function() {
  var elem = this.$element;

  elem.find( '.add-repeater' ).on( 'click', function(e) {
    e.preventDefault();
    elem.trigger( 'repeater:add', e.target );
  });

  elem.find( '.remove-repeater' ).on( 'click', function(e) {
    e.preventDefault();
    elem.trigger( 'repeater:remove', e.target );
  });

  var self = this;

  elem.on( 'repeater:add', function(e, addButton) {
    self.addRepitition( jQuery(addButton) );
  });

  elem.on( 'repeater:remove', function(e, removeButton ) {
    self.removeRepitition( jQuery(removeButton) );
  });

  this.captureTemplate();
};

Repeater.prototype.captureTemplate = function() {
  this.template = this.$element.find( '.repeater' ).first().clone( true, true );

  this.template.find('input').each( function() {
    jQuery(this).val('');
  });
};

Repeater.prototype.addRepitition = function() {
  this.template.clone( true, true ).appendTo( this.$element );
};

Repeater.prototype.removeRepitition = function(button) {
  jQuery( button ).parents('.repeater').remove();
};