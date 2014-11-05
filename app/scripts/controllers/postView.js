/**
 * Created by carlos on 11/3/2014.
 */
'use strict';

(function(){
    app.controller("PostViewCtrl", ["$routeParams", "Post", "Auth", PostView]);
    function PostView($routeParams, Post, Auth){
        var vm = this;
        vm.post = Post.get($routeParams.postId);
        vm.comments = Post.comments($routeParams.postId);

        vm.user = Auth.user;
        vm.signedIn = Auth.signedIn;

        vm.addComment = function(){
            if(!vm.commentText || vm.commentText === ''){
                return;
            }
            var comment = {
                text: vm.commentText,
                creator: vm.user.profile.username,
                creatorUID: vm.user.uid
            };

            vm.comments.$add(comment);
            vm.commentText = '';
        }

        vm.deleteComment = function(comment){
            vm.comments.$remove(comment);
        }
    }
})();