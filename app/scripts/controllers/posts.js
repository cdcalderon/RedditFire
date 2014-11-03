/**
 * Created by carlos on 11/2/2014.
 */
 'use strict';

(function(){
    app.controller('PostsCtrl', ["Post", PostsCtrl]);
    function PostsCtrl(Post){
      var vm = this;
      vm.posts = Post.get();
      vm.post = {url: 'http://', title:''};
      vm.submitPost = function(){
          Post.save(vm.post, function(ref){
              vm.posts[ref.name] = vm.post;
              vm.post = {url: 'http://', title:''};
          });

      };
      vm.deletePost = function(postId){
        Post.delete({id: postId}, function(){
            delete vm.posts[postId];
        });
        //  vm.posts.splice(index, 1)
      }
    };
})();
