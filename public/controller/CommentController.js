/**
 * File name: CommentController.js
 * Authors: Elliot Yoon
 * Description: Controller for comments.
 */

angular.module('controllers')
  .controller('CommentController', ['CommentServices', '$scope', '$rootScope', '$firebaseArray',
    function(CommentServices, $scope, $rootScope, $firebaseArray) {
      var eventUid = $scope.eventData.$id;

      var commentRef = firebase.database().ref().child('eventComments/' + eventUid);
      $scope.commentList = $firebaseArray(commentRef);

      $scope.postComment = function() {
        var date = new Date();
        var dateStr = date.toLocaleString();
        CommentServices.addComment(eventUid, $rootScope.user.uid, $scope.commentText, dateStr);
      };
    }
  ]);