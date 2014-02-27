'use strict';

describe('Service: drMath', function () {

  // load the service's module
  beforeEach(module('drUtils'));

  // instantiate service
  var drMath;
  beforeEach(inject(function (_drMath_) {
    drMath = _drMath_;
  }));

  it('should return ranged num', function () {
    expect(drMath.rangedNum(10, 0, 1)).toBe(1);
  });

  it('should return positive remainder', function() {
    expect(drMath.positiveModulo(-5, 3)).toBe(1);
    expect(drMath.positiveModulo(-4, 3)).toBe(2);
    expect(drMath.positiveModulo(-3, 3)).toBe(0);
    expect(drMath.positiveModulo(-2, 3)).toBe(1);
    expect(drMath.positiveModulo(-1, 3)).toBe(2);
    expect(drMath.positiveModulo(0, 3)).toBe(0);
    expect(drMath.positiveModulo(1, 3)).toBe(1);
    expect(drMath.positiveModulo(2, 3)).toBe(2);
    expect(drMath.positiveModulo(3, 3)).toBe(0);
    expect(drMath.positiveModulo(4, 3)).toBe(1);
  });

});
