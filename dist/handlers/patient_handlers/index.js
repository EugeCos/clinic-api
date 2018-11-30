"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPatientsHandler = getPatientsHandler;
exports.getPatientHandler = getPatientHandler;

var _patients = require("../../model/patients");

var _patients2 = _interopRequireDefault(_patients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPatientsHandler(request) {
  const { page } = request.query;

  const patientList = _patients2.default.getPatients({
    number: page ? page.number : null,
    limit: page ? page.limit : null
  });

  let meta;
  let links;
  if (page && page.limit && page.number) {

    const totalPages = _patients2.default.totalPages({ limit: page.limit });

    meta = {
      count: _patients2.default.count(),
      totalPages
    }, links = {
      first: `${request.path}?page%5Bnumber%5D=1&page%5Blimit%5D=${page.limit}`,
      last: `${request.path}?page%5Bnumber%5D=${totalPages}&page%5Blimit%5D=${page.limit}`,
      prev: page.number != 1 ? `${request.path}?page%5Bnumber%5D=${page.number - 1}&page%5Blimit%5D=${page.limit}` : undefined,
      next: page.number < totalPages ? `${request.path}?page%5Bnumber%5D=${page.number + 1}&page%5Blimit%5D=${page.limit}` : undefined
    };
  }

  return {
    data: patientList,
    meta,
    links
  };
}

function getPatientHandler(request) {
  const patient = _patients2.default.getPatient(request.params.patientId);
  return {
    data: patient
  };
}