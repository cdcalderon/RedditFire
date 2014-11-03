/**
 * Created by carlos on 11/2/2014.
 */
 'use strict';

(function(){
    app.controller('PostsCtrl', ["Post", PostsCtrl]);
    function PostsCtrl(Post){
      var vm = this;
      vm.posts = Post.all;
      vm.post = {url: 'http://', title:''};
      vm.submitPost = function(){
          Post.create(vm.post).then(function(ref){
              vm.post = {url: 'http://', title:''}; //reset post to initial state
          });

      };
      vm.deletePost = function(post){
        Post.remove(post)
      }
    };
})();
