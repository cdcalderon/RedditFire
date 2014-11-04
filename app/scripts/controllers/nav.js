'use strict';

app.controller('NavCtrl', function ($scope, $location, Post, Auth) {
    $scope.signedIn = Auth.signedIn;
    $scope.logout = Auth.logout;

    $scope.post = {url: 'http://', title: ''};

    $scope.submitPost = function () {
        Post.create($scope.post).then(function (ref) {
            $location.path('/posts/' + ref.name());
            $scope.post = {url: 'http://', title: ''};
        });
    };

});