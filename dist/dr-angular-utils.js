/**
 * dr-angular-utils
 * @version v0.0.6 - 2014-03-24
 * @link https://github.com/Design-Royale/dr-angular-utils
 * @author Design Royale <>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';
angular.module('drUtils', []).constant('drUtils', {
  preloadImage: function (url, q) {
    var deferred = q.defer();
    var img = new Image();
    img.onload = function () {
      deferred.resolve(img);
    };
    img.onerror = function () {
      deferred.reject(new Error('Couldn\'t load ' + url));
    };
    img.src = url;
    return deferred.promise;
  },
  preloadImages: function (urls, q) {
    var promises = [];
    for (var i = 0; i < urls.length; i++) {
      var url = urls[i];
      var promise = this.preloadImage(url, q);
      promises.push(promise);
    }
    return q.all(promises);
  },
  safeApply: function (scope, exp) {
    var phase = scope.$root.$$phase;
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
  rangedArray: function (from, to) {
    var a = [];
    for (var i = from; i < to; i++) {
      a.push(i);
    }
    return a;
  },
  randomArray: function (from, to) {
    var a = this.rangedArray(from, to);
    var i = a.length, j, temp;
    if (i === 0)
      return a;
    while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
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