"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _patient_handlers = require("./patient_handlers");

Object.keys(_patient_handlers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _patient_handlers[key];
    }
  });
});

var _wound_handlers = require("./wound_handlers");

Object.keys(_wound_handlers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wound_handlers[key];
    }
  });
});