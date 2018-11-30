"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalPages = totalPages;
exports.count = count;
exports.getPatients = getPatients;
exports.getPatient = getPatient;

var _faker = require("faker");

var _faker2 = _interopRequireDefault(_faker);

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create patients
let patients = [];

for (let i = 0; i < _config.config.numPatients; i++) {
  patients.push({
    id: i + 1,
    type: "patients",
    attributes: {
      firstName: _faker2.default.name.firstName(),
      lastName: _faker2.default.name.lastName(),
      dateOfBirth: _faker2.default.date.past(90),
      address: _faker2.default.address.streetAddress(),
      roomNumber: _faker2.default.random.number(50),
      bedNumber: _faker2.default.random.number(8),
      avatarUrl: _faker2.default.image.avatar(),
      updatedAt: _faker2.default.date.past(10)
    },
    relationships: {
      wounds: {
        links: {
          related: `http://0.0.0.0:3000/patients/${i + 1}/wounds`
        }
      }
    }
  });
}

/**
 * Get the total number of pages
 * @param {number} limit page limit
 * @return {number} the total number of pages
 */
function totalPages({ limit }) {
  return Math.ceil(patients.length / limit);
}

function count() {
  return patients.length;
}

/**
 * Get patients between 
 * @param {Number} number number of pages
 * @param {Number} limit page limit
 * @return {Array} list of patients
 */
function getPatients({ number, limit }) {
  let filteredPatients = patients;
  if (number && limit) {
    const start = (number - 1) * limit;
    const end = number * limit;
    filteredPatients = patients.slice(start, end);
  }

  return filteredPatients;
}

/**
 * Get a patient for id
 * @param {String} id patient id
 * @return {Object} the patient
 */
function getPatient(id) {
  return patients.find(p => p.id == id);
}

exports.default = {
  totalPages,
  count,
  getPatients,
  getPatient
};