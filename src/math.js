'use strict';

angular.module('drUtils')
  .service('drMath', function drMath() {
    this.rangedNum = function(n, min, max) {
      return Math.min(Math.max(n, min), max);
    };
    this.log = function(base, x) {
      return Math.log(x) / Math.log(base);
    };
    this.positiveModulo = function(x, n) {
      return ((x%n)+n)%n;
    };
  });
