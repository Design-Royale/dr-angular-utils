'use strict';

describe('Service: drUtils', function () {

  // load the service's module
  beforeEach(module('drUtils'));

  // instantiate service
  var drUtils;
  beforeEach(inject(function (_drUtils_) {
    drUtils = _drUtils_;
  }));

  it('should return size of object', function () {
    expect(drUtils.sizeOfObject({a:0, b:1, c:2})).toBe(3);
  });
  
  it('should return ranged num', function () {
    expect(drUtils.rangedNum(10, 0, 1)).toBe(1);
  });

  it('should return positive remainder', function() {
    expect(drUtils.positiveModulo(-5, 3)).toBe(1);
    expect(drUtils.positiveModulo(-4, 3)).toBe(2);
    expect(drUtils.positiveModulo(-3, 3)).toBe(0);
    expect(drUtils.positiveModulo(-2, 3)).toBe(1);
    expect(drUtils.positiveModulo(-1, 3)).toBe(2);
    expect(drUtils.positiveModulo(0, 3)).toBe(0);
    expect(drUtils.positiveModulo(1, 3)).toBe(1);
    expect(drUtils.positiveModulo(2, 3)).toBe(2);
    expect(drUtils.positiveModulo(3, 3)).toBe(0);
    expect(drUtils.positiveModulo(4, 3)).toBe(1);
  });

  it('should return ranged array', function() {
    var a = drUtils.rangedArray(3, 6);
    expect(a.length).toBe(3);
    expect(a[0]).toBe(3);
    expect(a[1]).toBe(4);
    expect(a[2]).toBe(5);
  });

  it('should return random array', function() {
    var a = drUtils.randomArray(3, 6);
    expect(a.length).toBe(3);
    expect(a[0] === 3 || a[0] === 4 || a[0] === 5).toBe(true);
    expect(a[1] === 3 || a[1] === 4 || a[1] === 5).toBe(true);
    expect(a[2] === 3 || a[2] === 4 || a[2] === 5).toBe(true);
    expect(a[0] !== a[1]).toBe(true);
    expect(a[1] !== a[2]).toBe(true);
    expect(a[2] !== a[0]).toBe(true);
  });
});
