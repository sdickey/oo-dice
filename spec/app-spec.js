beforeEach(function() {
  die = new Die()
})

describe( "#generateNumber", function() {

    it( "should generate a random number", function() {
        expect( die.generateNumber(1,6) ).toBeGreaterThan( 0 );
    });

});

