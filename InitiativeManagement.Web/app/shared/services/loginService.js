﻿(function (app) {
    'use strict';
    app.service('loginService', ['$http', '$q', 'authenticationService', 'authData', 'apiService','permissions',
        function ($http, $q, authenticationService, authData, apiService,permissions) {
            var userInfo;
            var deferred;

            this.login = function (userName, password) {
                deferred = $q.defer();
                var data = "grant_type=password&username=" + userName + "&password=" + password;
                $http.post('/oauth/token', data, {
                    headers:
                    { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function (response) {
                    userInfo = {
                        accessToken: response.data.access_token,
                        userName: userName
                    };
                    authenticationService.setTokenInfo(userInfo);
                    authData.authenticationData.IsAuthenticated = true;
                    authData.authenticationData.userName = userName;
                    //
                    // get permission
                    $http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token; 
                    $http.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'; 
                    $http.get('/api/account/permission', null).then(function (res) {
                        if (res.data) {
                            permissions.setPermissions(res.data);
                            authenticationService.setPermissions(res.data);
                            authData.authenticationData.IsPermissionLoad = true;
                            deferred.resolve(null);
                        }
                    });
                }, function (err, status) {
                    authData.authenticationData.IsAuthenticated = false;
                    authData.authenticationData.userName = "";
                    deferred.resolve(err);
                });
                return deferred.promise;
            }

            this.logOut = function () {
                apiService.post('/api/account/logout', null,function (response) {
                    authenticationService.removeToken();
                    authData.authenticationData.IsAuthenticated = false;
                    authData.authenticationData.userName = "";
                    authData.authenticationData.accessToken = "";
                    authData.authenticationData.IsPermissionLoad = false;
                    permissions.setPermissions([]);
                },null);
            }
        }]);
})(angular.module('InitiativeManagement.common'));