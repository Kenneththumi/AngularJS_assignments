/*
*Cytonn Tech.
*@author Kenneth Mwangi <kthumi@cytonn.com>
*
*
*/
/* customer managment controller */
    myapp.controller('Ctrl', ['$scope',
    function($scope) {
      $scope.Profiles = [
          {
            name: "Harry",
            country : "Kane",
            order:0,
            editable : false
          },
         
        ];
     
     $scope.entity = {}
        
     $scope.edit = function(index){
       $scope.entity = $scope.Profiles[index];
       $scope.entity.index = index;
       $scope.entity.editable = true;
     }
        
     $scope.delete = function(index){
       $scope.Profiles.splice(index,1);
       //$scope.Profiles[index].delete;
     }        
     $scope.save = function(index){
       $scope.Profiles[index].editable = false;
       
     }
        
     $scope.add = function(){
       $scope.Profiles.push({
          name : "",
        country : "",
        order:0,
        editable : true
       })
     }
     $scope.order = function(index){
         $scope.Profiles[index].order+=1;
     }
    }
]);
