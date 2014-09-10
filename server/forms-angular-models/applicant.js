'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var uploadSchema = new mongoose.Schema({
  filename: String,
  size: Number
});

var ApplicantSchema = new Schema({
  surname: {type:String, required:true, index:true},
  forename: {type:String, index:true},
  dateOfBirth: {type:Date},
  photo: {type: [uploadSchema], form: {directive: 'fng-jq-upload-form', add:{autoUpload:true, sizeLimit:50000000}}},
  whyApplied: {type: String, form: {type: 'textarea', editor: 'ckEditor'}},
  status: {type: String, default:'Pending', enum:['Pending','Rejected','Shortlist'], form: {select2: {}}}
});

var Applicant = mongoose.model('Applicant', ApplicantSchema);

module.exports = Applicant;
