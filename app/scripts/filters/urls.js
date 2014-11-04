/**
 * Created by carlos on 11/3/2014.
 */
'use strict';
(function(){
    app.filter("hostnameFromUrl", [hostnameFromUrl]);

    function hostnameFromUrl(){
        return function(str){
            var url = document.createElement('a');
            url.href = str;

            return url.hostname;
        };
    };
})();

