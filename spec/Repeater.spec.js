describe('Repeater', function() {
  beforeEach(function() {
    this.createRepeater = function() {
      this.repeater = new Repeater( this.$container );
      return this.repeater;
    };

    this.init = function() {
      this.createRepeater().init();
    };

    jasmine.getFixtures().fixturesPath = 'spec/fixtures';
    loadFixtures('index.html');
    this.$container = jQuery('#repeat');
  });

  describe('init', function() {
    it('sets up event listeners', function() {
      var add = spyOnEvent( this.$container, 'repeater:add' );
      var rm = spyOnEvent( this.$container, 'repeater:remove' );

      this.init();

      expect( add ).not.toHaveBeenTriggered();

      jQuery( '.add-repeater' ).first().click();
      expect( add ).toHaveBeenTriggered();
      expect( rm ).not.toHaveBeenTriggered();

      jQuery( '.remove-repeater' ).first().click();
      expect( rm ).toHaveBeenTriggered();
    });
  });

  describe('addRepition', function() {
    beforeEach(function() {
      this.init();
    });

    it('adds a repitition', function() {
      expect( jQuery('.repeater').length ).toEqual( 1 );

      this.repeater.addRepitition();

      expect( jQuery('.repeater').length ).toEqual( 2 );
    });

    it('renders new repeater fields with inputs cleared', function() {
      expect( jQuery('.repeater input').first().val() ).toEqual( '123' );

      this.repeater.addRepitition();

      expect( jQuery('.repeater input').last().val() ).toEqual( '' );
    });
  });

  describe('removeRepitition', function() {
    beforeEach(function() {
      this.init();
    });

    it('removes the repitition you clicked inside of', function() {
      // Add a couple repetitions
      jQuery( '.repeater' ).last().find('input').val('one');

      this.repeater.addRepitition();
      jQuery( '.repeater' ).last().find('input').val('two');

      this.repeater.addRepitition();
      jQuery( '.repeater' ).last().find('input').val('three');

      expect( jQuery('.repeater').length ).toEqual( 3 );

      // "Click" the second button
      var $button = jQuery('.repeater:nth-child(1) .remove-repeater');
      this.repeater.removeRepitition( $button );

      expect( jQuery('.repeater').length ).toEqual( 2 );
    });
  });
});