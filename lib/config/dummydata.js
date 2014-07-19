'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */
//
// User.find({}).remove(function() {
//   User.create({
//     provider: 'local',
//     username: 'avillalobos',
//     name: 'Alberto Villalobos',
//     email: 'alberto@albertovillalobos.me',
//     password: 'test'
//   },{
//     provider: 'local',
//     username: 'lcardenas',
//     name: 'Liam Cardenas',
//     email: 'liamcardenas@gmail.com',
//     password: 'test'
//   }, {
//     provider: 'local',
//     username: 'nbrown',
//     name: 'Nick Brown',
//     email: 'nickbrown@gmail.com',
//     password: 'test'
//   }, {
//     provider: 'local',
//     username: 'bkirkland',
//     name: 'Brent Kirkland',
//     email: 'brentkirkland@gmail.com',
//     password: 'test'
//   },
//   function() {
//       console.log('finished populating users');
//     }
//   );
// });
