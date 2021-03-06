﻿define(['plugins/router','durandal/app', 'durandal/system', 'knockout'], function(router, app, system, ko ) {
    var name = ko.observable();
    var canSayHello = ko.computed(function() {
        return name() ? true : false;
    });
    
    var selectedNavRoutes1 = ko.computed(function () {
        return router.routes.filter(function (r) {
            return r.nav;
            });
        });

    return {
        displayName: 'What is your name?',
        name: name,
        sayHello: function() {
            app.showMessage('Hello ' + name() + '!', 'Greetings');
        },
        canSayHello: canSayHello,
        activate: function() {
            system.log('Lifecycle : activate : hello');
        },
        binding: function() {
            system.log('Lifecycle : binding : hello');
            return { cacheViews: false }; //cancels view caching for this module, allowing the triggering of the detached callback
        },
        bindingComplete: function() {
            system.log('Lifecycle : bindingComplete : hello');
        },
        attached: function( view, parent ) {
            system.log('Lifecycle : attached : hello');
        },
        compositionComplete: function( view ) {
            system.log('Lifecycle : compositionComplete : hello');
        },
        detached: function( view ) {
            system.log('Lifecycle : detached : hello');
        },
        selectedNavRoutes1: selectedNavRoutes1
    };
});
