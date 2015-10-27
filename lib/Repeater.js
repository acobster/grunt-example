/**
 * Constructor
 * @constructor
 * @param {object} $element the jQuery object on which jQuery.fn.repeater() was called
 * @param {object} options  a configuration object
 */
function Repeater( $element, options ) {
  this.$element = $element;
  this.options = options || {};
}

/**
 * Set up event listeners/handlers on $element
 */
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

  /**
   * This event indicates that the user clicked an Add button
   * @event Repeater#repeater:add
   */
  elem.on( 'repeater:add', function(e, addButton) {
    self.addRepitition( jQuery(addButton) );
  });

  /**
   * This event indicates that the user clicked a Remove button
   * @event Repeater#repeater:remove
   */
  elem.on( 'repeater:remove', function(e, removeButton ) {
    self.removeRepitition( jQuery(removeButton) );
  });

  this.captureTemplate();
};

/**
 * Capture a template for a single repitition and store for later use
 */
Repeater.prototype.captureTemplate = function() {
  this.template = this.$element.find( '.repeater' ).first().clone( true, true );

  this.template.find('input').each( function() {
    jQuery(this).val('');
  });
};

/**
 * Add a new repitition to the DOM
 */
Repeater.prototype.addRepitition = function() {
  this.template.clone( true, true ).appendTo( this.$element );
};

/**
 * Remove the repitition corresponding to the given remove button
 * @param  {object} button jQuery object representing the remove button that was clicked
 */
Repeater.prototype.removeRepitition = function(button) {
  jQuery( button ).parents('.repeater').remove();
};