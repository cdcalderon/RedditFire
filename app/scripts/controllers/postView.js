/**
 * Created by carlos on 11/3/2014.
 */
'use strict';

(function(){
    app.controller("PostViewCtrl", ["$routeParams", "Post", PostView]);
    function PostView($routeParams, Post){
        var vm = this;
        vm.post = Post.get($routeParams.postId);
    }
})();