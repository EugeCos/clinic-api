"use strict";

var _package = require("../package.json");

var _package2 = _interopRequireDefault(_package);

var _hapi = require("hapi");

var _hapi2 = _interopRequireDefault(_hapi);

var _routes = require("./routes");

var routes = _interopRequireWildcard(_routes);

var _hapiQs = require("hapi-qs");

var _hapiQs2 = _interopRequireDefault(_hapiQs);

var _inert = require("inert");

var _inert2 = _interopRequireDefault(_inert);

var _vision = require("vision");

var _vision2 = _interopRequireDefault(_vision);

var _hapiSwagger = require("hapi-swagger");

var _hapiSwagger2 = _interopRequireDefault(_hapiSwagger);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// -------------------------- Server Config -------------------------- //

// Plugins

// Hapi
const server = _hapi2.default.server({
  host: "0.0.0.0",
  port: 3000,
  routes: {
    cors: true
  }
});

// -------------------------- Routing -------------------------- //

// Routes
Object.values(routes).forEach(route => {
  server.route(route);
});

// -------------------------- Configure and Start -------------------------- //

async function init() {
  const swaggerPlugin = {
    plugin: _hapiSwagger2.default,
    options: {
      info: {
        title: "Wounds Demo API",
        version: _package2.default.version
      },
      jsonEditor: true
    }
  };

  try {
    await server.register([
      _hapiQs2.default,
      _inert2.default,
      _vision2.default,
      swaggerPlugin
    ]);
    await server.start();
    console.log("Server running at:", server.info.uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

init();
