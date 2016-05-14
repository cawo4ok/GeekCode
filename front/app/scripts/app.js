var app = angular.module('koya', ['ui.router','ui.ace','ngAnimate']);

    app.config(function($stateProvider, $urlRouterProvider){
      var title = function (page) {
        return page + ' | KPIcoop';
    };
    $stateProvider
        /*project and children project elements*/
        .state('project', {
            url: "/project",
            templateUrl: 'views/project.html',
            controller: 'projectController',
            title: title('Project')
        })
        .state('profile', {
            url: "/profile",
            templateUrl: 'views/profile.html',
            controller: 'profileController',
            title: title('Profile')
        })
        .state('project.id', {
          url: '/:id',
          templateUrl: 'views/project.html',
          controller: 'idProjectController'
        })
        .state('polyana', {
            url: "/polyana",
            templateUrl: 'views/polyana.html',
            controller: 'polyanaController',
            title: title('Polyana')
        })
        .state('create', {
            url: "/create",
            templateUrl: 'views/create.html',
            controller: 'createController',
            title: title('CreateProject')
        })

    })

    app.run(['$rootScope','$state', '$stateParams', function ($rootScope) {
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        $rootScope.pageTitle = toState.title;
      });
    }]);
