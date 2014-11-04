/**
 * Created by carlos on 11/2/2014.
 */
 'use strict';

(function(){
    app.controller('PostsCtrl', ["Post", "$location", "Auth",  PostsCtrl]);
    function PostsCtrl(Post, $location, Auth){
      var vm = this;
      vm.posts = Post.all;
      vm.user = Auth.user;
      vm.post = {url: 'http://', title:''};
///refactored code moved to nav controller
//      vm.submitPost = function(){
//          Post.create(vm.post).then(function(ref){
//              $location.path('/posts/' + ref.name());
//             // vm.post = {url: 'http://', title:''}; //reset post to initial state
//          });
//
//      };
      vm.deletePost = function(post){
        Post.remove(post)
      }
    };
})();
