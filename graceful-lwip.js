// UNCLASSIFIED

/**
 * @modue GRACEFUL-LWIP
 * @requires LWIP
 * 
 * Gracefully wraps the LWIP to provide a work-around to nodejs open file limits.
 * */
 
var LWIP = module.exports = require("lwip");

LWIP.maxFilesInFlight = 100; // Set this value to some number safeish for your system
LWIP.origOpen = LWIP.open;
LWIP.activeCount = 0;
LWIP.pending = [];

LWIP.wrapCallback = function(cb){
    return function(){
        LWIP.activeCount--;
        cb.apply(this,Array.prototype.slice.call(arguments));
        if (LWIP.activeCount < LWIP.maxFilesInFlight && LWIP.pending.length){
            console.log("Processing queued open");
            LWIP.pending.shift()();
        }
    };
};

LWIP.open = function(){
    var args = Array.prototype.slice.call(arguments);
    if (LWIP.activeCount < LWIP.maxFilesInFlight){
        if (args[1] instanceof Function){
            args[1] = LWIP.wrapCallback(args[1]);
        } 
	else
	if (args[2] instanceof Function) {
            args[2] = LWIP.wrapCallback(args[2]);
        }
        LWIP.activeCount++;
        LWIP.origOpen.apply(LWIP,args);
    }
    else {
        console.log("Queueing open:",args[0]);
        LWIP.pending.push(function(){
            LWIP.open.apply(LWIP,args);
        });
    }
};

// UNCLASSIFIED
