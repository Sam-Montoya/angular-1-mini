angular.module('friendsList').controller('MainController', function ($scope) {
    $scope.friends = ['Brettly', 'Wheatly', 'Sam'];

    $scope.addFriend = function (name) {
        if (name[0] !== name[0].toUpperCase()) {
            $scope.friends.push(name[0].toUpperCase() + name.substr(1));
        } else {
            $scope.friends.push(name);
            $scope.newFriend = '';
        }
    }
});