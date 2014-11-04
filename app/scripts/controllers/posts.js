/**
 * Created by carlos on 11/2/2014.
 */
 'use strict';

(function(){
    app.controller('PostsCtrl', ["Post", "$location", PostsCtrl]);
    function PostsCtrl(Post, $location){
      var vm = this;
      vm.posts = Post.all;
      vm.post = {url: 'http://', title:''};

      vm.submitPost = function(){
          Post.create(vm.post).then(function(ref){
              $location.path('/posts/' + ref.name());
             // vm.post = {url: 'http://', title:''}; //reset post to initial state
          });

      };
      vm.deletePost = function(post){
        Post.remove(post)
      }
    };
})();
