'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchWound = exports.getWound = exports.getPatientWounds = exports.getPatient = exports.getPatients = undefined;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _handlers = require('./handlers');

var handlers = _interopRequireWildcard(_handlers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getPatients = exports.getPatients = {
  method: "GET",
  path: "/patients",
  options: {
    description: "Get a list of patients",
    tags: ["api"],
    validate: {
      query: {
        page: _joi2.default.object().keys({
          number: _joi2.default.number(),
          limit: _joi2.default.number()
        }).description("page object that requires a 'number' and 'limit' field for page number and limit (ex. {'number':1,'limit':10})")
      }
    }
  },
  handler: handlers.getPatientsHandler
};

const getPatient = exports.getPatient = {
  method: "GET",
  path: "/patients/{patientId}",
  options: {
    description: "Get a patient",
    tags: ["api"],
    validate: {
      params: {
        patientId: _joi2.default.string().required().description('the patient id')
      }
    }
  },
  handler: handlers.getPatientHandler
};

const getPatientWounds = exports.getPatientWounds = {
  method: "GET",
  path: "/patients/{patientId}/wounds",
  options: {
    description: "Get wounds for a patient",
    tags: ["api"],
    validate: {
      params: {
        patientId: _joi2.default.string().required().description('the patient id')
      },
      query: {
        page: _joi2.default.object().keys({
          number: _joi2.default.number(),
          limit: _joi2.default.number()
        }).description("page object that requires a 'number' and 'limit' field for page number and limit (ex. {'number':1,'limit':10})")
      }
    }
  },
  handler: handlers.getPatientWoundsHandler
};

const getWound = exports.getWound = {
  method: "GET",
  path: "/wounds/{woundId}",
  options: {
    description: "Get a wound",
    tags: ["api"],
    validate: {
      params: {
        woundId: _joi2.default.string().required().description('the wound id')
      }
    }
  },
  handler: handlers.getWoundHandler
};

const patchWound = exports.patchWound = {
  method: "PATCH",
  path: "/wounds/{woundId}",
  options: {
    description: "Update a wound",
    tags: ["api"],
    validate: {
      params: {
        woundId: _joi2.default.string().required().description('the wound id')
      },
      payload: {
        data: _joi2.default.object().required().keys({
          type: _joi2.default.string().valid("wounds").required(),
          id: _joi2.default.string().required(),
          attributes: _joi2.default.object().min(1).required().keys({
            type: _joi2.default.string().optional().description("the wound type"),
            bodyLocation: _joi2.default.string().optional().description("the body location"),
            inHouseAcquired: _joi2.default.bool().optional().description("true if wound was acquired in house"),
            resolved: _joi2.default.bool().optional().description("true if wound is resolved"),
            imageUrl: _joi2.default.string().optional().description("image url")
          })
        })
      }
    }
  },
  handler: handlers.patchWoundHandler
};