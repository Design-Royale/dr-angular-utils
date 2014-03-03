/**
 * dr-angular-utils
 * @version v0.0.2 - 2014-03-03
 * @link https://github.com/Design-Royale/dr-angular-utils
 * @author Design Royale <>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';
angular.module('drUtils', []).constant('drUtils', {
  safeApply: function (scope, exp) {
    var phase = scope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (exp && typeof exp === 'function') {
        exp();
      }
    } else {
      scope.$apply(exp);
    }
  },
  goBack: function () {
    window.history.back();
  },
  sizeOfObject: function (obj) {
    var size = 0;
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  },
  setupRequestAnimationFrame: function () {
    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      setTimeout(callback, 16);
    };
  },
  ie: function () {
    var undef, v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');
    while (div.innerHTML = '<!--[if gt IE ' + ++v + ']><i></i><![endif]-->', all[0]) {
    }
    return v > 4 ? v : undef;
  },
  extendSVGElement: function () {
    // IE8 has no idea what the heck a SVGElement is.
    if (typeof SVGElement === 'undefined') {
      return;
    }
    SVGElement.prototype.hasClass = function (className) {
      return new RegExp('(\\s|^)' + className + '(\\s|$)').test(this.getAttribute('class'));
    };
    SVGElement.prototype.addClass = function (className) {
      if (!this.hasClass(className)) {
        this.setAttribute('class', this.getAttribute('class') + ' ' + className);
      }
    };
    SVGElement.prototype.removeClass = function (className) {
      if (this.hasClass(className)) {
        var removedClass = this.getAttribute('class').replace(new RegExp('(\\s|^)' + className + '(\\s|$)', 'g'), '$2');
        removedClass = removedClass || '';
        this.setAttribute('class', removedClass);
      }
    };
    SVGElement.prototype.toggleClass = function (className) {
      if (this.hasClass(className)) {
        this.removeClass(className);
      } else {
        this.addClass(className);
      }
    };
  },
  TO_RADIANS: 0.017453292519943295,
  TO_DEGREES: 57.29577951308232,
  rangedNum: function (n, min, max) {
    return Math.min(Math.max(n, min), max);
  },
  log: function (base, x) {
    return Math.log(x) / Math.log(base);
  },
  positiveModulo: function (x, n) {
    return (x % n + n) % n;
  }
});