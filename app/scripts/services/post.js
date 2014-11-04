(function(){
    app.factory('Post', ["$firebase", "FIREBASE_URL", Post]);

    function Post($firebase, FIREBASE_URL){
        var ref = new Firebase(FIREBASE_URL);
        var posts = $firebase(ref.child('posts')).$asArray();

        return{
            all: posts,
            create: create,
            get: get,
            remove: remove
        };

        //#region public functions
        function create(post){
            return posts.$add(post).then(function(postRef){
                $firebase(ref.child('user_post').child(post.creatorUID)).$push(postRef.name());
                return postRef;
            });
        }

        function get(postId){
            return $firebase(ref.child('posts').child(postId)).$asObject();
        }

        function remove(post){
            return posts.$remove(post);
        }
        //#endRegion
    };
})();