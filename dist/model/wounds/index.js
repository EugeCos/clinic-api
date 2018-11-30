"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.totalPages = totalPages;
exports.count = count;
exports.getWounds = getWounds;
exports.getWound = getWound;
exports.patchWound = patchWound;

var _faker = require("faker");

var _faker2 = _interopRequireDefault(_faker);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Values
const woundTypes = ["Abrasion", "Arterial", "Blister", "Bruise", "Burn", "Cancer Lesion", "Diabetic", "Laceration", "Moisture Associated Skin Damage", "Open Lesion", "Pressure", "Rash", "Skin Tear", "Surgical", "Venous"];

const bodyLocations = ["Head", "Face", "Neck", "Shoulder", "Back", "Buttocks", "Chest", "Hips", "Groin", "Arm", "Elbow", "Forearm", "Hand", "Leg", "Knee", "Lower Leg", "Ankle", "Foot"];

const imageUrls = ["https://images.freeimages.com/images/large-previews/b40/wound-blood-1245806.jpg", "https://images.freeimages.com/images/large-previews/575/ouch-1434056.jpg", "https://images.freeimages.com/images/large-previews/fcf/cut-off-fish-tail-1-1528006.jpg", "https://images.freeimages.com/images/large-previews/b17/cut-lime-1329725.jpg", "https://images.freeimages.com/images/large-previews/1e5/injured-2-1245415.jpg", "https://images.freeimages.com/images/large-previews/568/wounded-1325741.jpg", "https://images.freeimages.com/images/large-previews/3e6/blood-1312378.jpg"];

// Create wounds
let wounds = [];
let counter = 1;

for (let i = 0; i < _config.config.numPatients; i++) {

  const numWounds = _faker2.default.random.number({
    min: _config.config.minWoundsPerPatient,
    max: _config.config.maxWoundsPerPatient
  });

  // start here - make sure wounds have everything they need
  // add an endpoint for PUTing to wounds
  for (let j = 0; j < numWounds; j++) {

    const date = _faker2.default.date.past(10);

    wounds.push({
      type: "wounds",
      id: counter,
      attributes: {
        patientId: i + 1,
        type: _faker2.default.random.arrayElement(woundTypes),
        bodyLocation: _faker2.default.random.arrayElement(bodyLocations),
        inHouseAcquired: _faker2.default.random.boolean(),
        resolved: _faker2.default.random.boolean(),
        imageUrl: _faker2.default.random.arrayElement(imageUrls),
        createdAt: date,
        updatedAt: date
      }
    });

    counter++;
  }
}

/**
 * Get the total number of pages
 * @param {Number} limit 
 * @return {Number} the total number of pages
 */
function totalPages({ limit, patientId }) {

  let filteredWounds = wounds;

  if (patientId) {
    filteredWounds = filteredWounds.filter(w => w.attributes.patientId == patientId);
  }

  return Math.ceil(filteredWounds.length / limit);
}

/**
 * Get the count of number of wounds
 * @param {String} patientId 
 * @return {Number} The count
 */
function count({ patientId }) {
  let filteredWounds = wounds;

  if (patientId) {
    filteredWounds = filteredWounds.filter(w => w.attributes.patientId == patientId);
  }

  return filteredWounds.length;
}

/**
 * Get wounds
 * @param {Number} number the number of pages
 * @param {Number} limit the page limit
 * @param {String} patientId the patient id for filtering
 * @return {Array} list of wounds
 */
function getWounds({ number, limit, patientId }) {

  let filteredWounds = wounds;

  if (patientId) {
    filteredWounds = filteredWounds.filter(w => w.attributes.patientId == patientId);
  }

  if (number && limit) {
    const start = (number - 1) * limit;
    const end = number * limit;
    return filteredWounds.slice(start, end);
  } else {
    return filteredWounds;
  }
}

/**
 * Get a patient for id
 * @param {String} id 
 */
function getWound(id) {
  return wounds.find(p => p.id == id);
}

/**
 * Patch a wound
 * @param {Object} wound 
 */
function patchWound(wound) {
  const index = wounds.findIndex(w => {
    return w.id == wound.id;
  });

  const attributes = _extends({}, wounds[index].attributes, wound.attributes, {
    updatedAt: (0, _moment2.default)().toISOString()
  });

  wounds[index] = _extends({}, wounds[index], {
    attributes
  });

  return wounds[index];
}

exports.default = {
  totalPages,
  count,
  getWounds,
  getWound,
  patchWound
};