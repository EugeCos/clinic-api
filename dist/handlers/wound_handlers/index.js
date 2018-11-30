"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPatientWoundsHandler = getPatientWoundsHandler;
exports.getWoundHandler = getWoundHandler;
exports.patchWoundHandler = patchWoundHandler;

var _wounds = require("../../model/wounds");

var _wounds2 = _interopRequireDefault(_wounds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPatientWoundsHandler(request) {
  const { page } = request.query;
  const { patientId } = request.params;

  const woundList = _wounds2.default.getWounds({
    number: page ? page.number : null,
    limit: page ? page.limit : null,
    patientId
  });

  let meta;
  let links;
  if (page && page.limit && page.number) {

    const totalPages = _wounds2.default.totalPages({
      limit: page.limit,
      number: page.number,
      patientId
    });

    meta = {
      count: _wounds2.default.count({ patientId }),
      totalPages
    }, links = {
      first: `${request.path}?page%5Bnumber%5D=1&page%5Blimit%5D=${page.limit}`,
      last: `${request.path}?page%5Bnumber%5D=${totalPages}&page%5Blimit%5D=${page.limit}`,
      prev: page.number != 1 ? `${request.path}?page%5Bnumber%5D=${page.number - 1}&page%5Blimit%5D=${page.limit}` : undefined,
      next: page.number < totalPages ? `${request.path}?page%5Bnumber%5D=${page.number + 1}&page%5Blimit%5D=${page.limit}` : undefined
    };
  }

  return {
    data: woundList,
    meta,
    links
  };
}

function getWoundHandler(request) {
  return _wounds2.default.getWound(request.params.woundId);
}

function patchWoundHandler(request) {
  const wound = request.payload.data;
  return _wounds2.default.patchWound(wound);
}