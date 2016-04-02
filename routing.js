/*
*Cytonn Tech.
*@author Kenneth Mwangi <kthumi@cytonn.com>
*
*
*/
/* routing */
myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/page1");
      //load the pages according to page selected
      $stateProvider
        .state('page1', {
            url: "/page1",
            templateUrl: "page1.html"
        })
          .state('list', {
              url: "/page1/list",
              templateUrl: "list.html"
          })
    });