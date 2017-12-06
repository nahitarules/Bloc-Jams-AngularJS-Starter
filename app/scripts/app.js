(function() {
     function config($stateProvider, $locationProvider) {
       $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });

         $stateProvider
                 .state('landing', {
                     url: '/',
                     controller: 'LandingCtrl as landing',
                     templateUrl: '/Users/nahomegudeta/bloc-jams/bloc/bloc/bloc-jams-angularjs/app/templates/landing.html'
                 })
                 .state('album', {
                     url: '/album',
                     controller: 'AlbumCtrl as album',
                     templateUrl: '/Users/nahomegudeta/bloc-jams/bloc/bloc/bloc-jams-angularjs/app/templates/album.html'
         })

                 .state('collection', {
                     url: '/collection',
                     controller: 'CollectionCtrl as collection',
                     templateUrl: '/Users/nahomegudeta/bloc-jams/bloc/bloc/bloc-jams-angularjs/app/templates/collection.html'
 });

     }

     angular
         .module('blocJams', ['ui.router'])
         .config(config);
 })();
