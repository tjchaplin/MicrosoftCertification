// TODO: Strict mode
"use strict";

// TODO: Wrap this file's code in an immediately invoked function expression
(function(){

    var copyOwnProperties = function (from, to) {
        for (var propertyName in from) {
            if (from.hasOwnProperty(propertyName)) {
                to[propertyName] = from[propertyName];
            }
        }
    };

    var inherit = function (additionalProperties) {
        // `inherit` creates an factory object that is similar to a Class in C# and Java.
        // The created factory object has a `create` method that creates instances.
        // The factory object also serves as the prototype for created instances.
        // So any properties added to the factory (via the additionalProperties parameter)
        // will available to created instances.
        // If the additionalProperties has a function named `initialize`, then this is
        // called to initialize created instances.
        
        // TODO: Create a variable named `factory`, assign it a new object who's prototype is `this`.
        var factory = Object.create(this);

        // TODO: Add a method called `create` to `factory`, that does the following
        factory.create = function(){
            // TODO: Define a variable named `instance` 
            //       and assign it a new object that has `factory` as its prototype.
            var instance = Object.create(factory);

            // TODO: If `instance` has a function named "initialize",
            //       then call `initialize`, passing any arguments passed to `create`.
            if(typeof instance.initialize === 'function')
                instance.initialize.apply(instance,arguments);

            // TODO: return `instance`.
            return instance;
        }

        // TODO: Copy properties of `additionalProperties` onto `factory' (using copyOwnProperties).
        copyOwnProperties(additionalProperties,factory);

        // TODO: Return the `factory` object.
        return factory;
    };
    Object.inherit = inherit;
}());