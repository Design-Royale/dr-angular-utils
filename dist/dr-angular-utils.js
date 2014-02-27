/**
 * dr-angular-utils
 * @version v0.0.1 - 2014-02-27
 * @link https://github.com/Design-Royale/dr-angular-utils
 * @author Design Royale <>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('drUtils', []);
'use strict';
angular.module('drUtils').service('drMath', function drMath() {
  this.rangedNum = function (n, min, max) {
    return Math.min(Math.max(n, min), max);
  };
  this.log = function (base, x) {
    return Math.log(x) / Math.log(base);
  };
  this.positiveModulo = function (x, n) {
    return (x % n + n) % n;
  };
});