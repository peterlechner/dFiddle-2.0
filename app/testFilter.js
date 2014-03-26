define(['plugins/router','durandal/app', 'durandal/system', 'knockout'], function(router, app, system, ko ) {

    var selectedNavRoutes1 = ko.computed(function () {
        return router.routes.filter(function (r) {
            return r.nav;
            });
        });


    return {
        
        selectedNavRoutes1: selectedNavRoutes1
    };
});

