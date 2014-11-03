/**
 * Created by carlos on 11/3/2014.
 */
'use strict';

(function(){
    app.factory('Post', ["$resource", Post]);

    function Post($resource){
       return $resource('https://newsfire.firebaseio.com/posts/:id.json');
    };
})();