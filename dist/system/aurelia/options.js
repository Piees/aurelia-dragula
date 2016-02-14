System.register([], function (_export) {
  'use strict';

  var GLOBAL_OPTIONS, DIRECTION, Options;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      GLOBAL_OPTIONS = 'GlobalOptions';

      _export('GLOBAL_OPTIONS', GLOBAL_OPTIONS);

      DIRECTION = {
        VERTICAL: 'vertical',
        HORIZONTAL: 'horizontal'
      };

      _export('DIRECTION', DIRECTION);

      Options = (function () {
        function Options() {
          _classCallCheck(this, Options);

          this.moves = this.always;
          this.accepts = this.always;
          this.invalid = this.invalidTarget;
          this.containers = [];
          this.isContainer = this.never;
          this.copy = false;
          this.copySortSource = false;
          this.revertOnSpill = false;
          this.removeOnSpill = false;
          this.direction = DIRECTION.VERTICAL, this.ignoreInputTextSelection = true;
          this.mirrorContainer = document.body;
        }

        _createClass(Options, [{
          key: 'always',
          value: function always() {
            return true;
          }
        }, {
          key: 'never',
          value: function never() {
            return false;
          }
        }, {
          key: 'invalidTarget',
          value: function invalidTarget() {
            return false;
          }
        }]);

        return Options;
      })();

      _export('Options', Options);
    }
  };
});