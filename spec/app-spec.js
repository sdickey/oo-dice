beforeEach(function() {
  die = new Die()
})

describe( "#generateNumber", function() {
    it( "should generate a random number greater than 0", function() {
        expect( die.generateNumber(1,6) ).toBeGreaterThan( 0 );
    });

     it( "should generate a random number less than 7", function() {
        expect( die.generateNumber(1,6) ).toBeLessThan( 7 );
    });
});

describe("#initialize", function() {
  it( "should initialize a die with a random number greater than 0", function() {
        die.initialize()
        expect( die.number ).toBeGreaterThan( 0 );
  });

  it( "should initialize a die with a random number less than 7", function() {
        die.initialize()
        expect( die.number ).toBeLessThan( 7 );
  });
});

