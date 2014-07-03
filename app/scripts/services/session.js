'use strict';

angular.module('wannahangApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
