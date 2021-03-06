"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameLoop = function () {
  function GameLoop() {
    _classCallCheck(this, GameLoop);

    this.subscribers = [];
    this.loopID = null;
    this.loop = this.loop.bind(this);
  }

  _createClass(GameLoop, [{
    key: "start",
    value: function start() {
      if (!this.loopID) {
        this.loop();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.loopID) {
        window.cancelAnimationFrame(this.loopID);
        this.loopID = null;
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      return this.subscribers.push(callback);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(id) {
      delete this.subscribers[id - 1];
    }
  }, {
    key: "loop",
    value: function loop() {
      this.subscribers.forEach(function (callback) {
        callback.call();
      });

      this.loopID = window.requestAnimationFrame(this.loop);
    }
  }]);

  return GameLoop;
}();

exports.default = GameLoop;