angular.module('friendsList').controller('MainController', function($scope) {
    $scope.friends = ['Brettly', 'Wheatly', 'Sam'];

    $scope.addFriend = function(name) {
        $scope.friends.push(name);
        $scope.newFriend = '';
    }
});