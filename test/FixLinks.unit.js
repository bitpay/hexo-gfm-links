var assert = require('assert');
var FixLinks = require('../lib/FixLinks');

describe('FixLinks', function() {
  it('should correctly convert relative markdown links into html links', function() {

    var input  = require('./fixtures/input');
    var output = require('./fixtures/output');

    FixLinks({ content: input }, function( err , results ) {
      assert.equal( results.content , output );
    });

  });
});
