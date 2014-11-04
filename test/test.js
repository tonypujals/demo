var assert = require('assert'),
    demo = require('..');

describe('test suite', function() {
    
    it ('should add 2 + 5', function() {
        
        var expected = 5;
        var actual = demo.add(2, 3);
        assert(actual, expected, 'wth??');
        
    });
});