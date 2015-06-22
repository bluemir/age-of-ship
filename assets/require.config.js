(function(global){
        require.config({
                baseUrl : "/assets",
                paths : {
                        three : "/lib/three.js/three",
						/*
                        EventEmitter : "/lib/eventEmitter/EventEmitter",
                        text : "/lib/text/text",
                        keymaster : "/lib/keymaster/keymaster"
						*/
                },
                shim: {
                        three: {
                                exports: 'THREE'
                        },
						/*
                        keymaster: {
                                exports: "key",
                                init : function(){
                                        return this.key.noConflict();
                                }
                        }*/
                }
        });
})(this);
