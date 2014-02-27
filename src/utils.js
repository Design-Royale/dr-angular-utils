'use strict';

angular.module('drUtils', []).
  service('drUtils', function drUtils() {
    /**********
    * Angular
    ***********/
    this.safeApply = function(scope, exp) {
      var phase = scope.$$phase;
      if(phase === '$apply' || phase === '$digest') {
        if(exp && (typeof(exp) === 'function')) {
          exp();
        }
      } else {
        scope.$apply(exp);
      }
    };

    /**********
    * Javascript
    ***********/
    this.goBack = function () {
      window.history.back();
    };

    this.sizeOfObject = function(obj) {
      var size = 0;
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          size++;
        }
      }
      return size;
    };

    this.setupRequestAnimationFrame = function() {
      window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          setTimeout(callback, 16);
        };
    };

    /**********
    * SVG
    ***********/
    this.extendSVGElement = function() {
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
    };

    /**********
    * Math
    ***********/
    this.TO_RADIANS = 0.017453292519943295;
    this.TO_DEGREES = 57.29577951308232;

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



