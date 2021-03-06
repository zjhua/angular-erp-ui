// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myStoreModule', []);

myAppModule.factory('storeService', function() {
    var service = {};
    var Operator = {
        operators: [{
            "id": 001,
            "name": "jinhaoxu",
            "age": 20
        }, {
            "id": 002,
            "name": "hengdanwang",
            "age": 22
        }, {
            "id": 003,
            "name": "yongdanzhang",
            "age": 21
        }],
        dateJoined: new Date(2010, 2, 23),
        dateEnd: new Date(2015, 10, 22),
        remark: "i'm a handsome boy!"
    };
    service.getData = function() {
        return Operator;
    }
    service.create = function() {
        // alert("新建了一条盘点信息！");
        document.getElementById("profileForm").action = "https://www.baidu.com";
        document.getElementById("profileForm").method = "post";
        document.getElementById("profileForm").submit();
    }
    service.save = function() {
        // alert("保存了一条盘点信息！");
        document.getElementById("profileForm").action = "https://www.hao123.com";
        document.getElementById("profileForm").method = "post";
        document.getElementById("profileForm").submit();
    }
    service.finish = function() {
        // alert("已完成！");
        document.getElementById("profileForm").action = "https://www.github.com";
        document.getElementById("profileForm").method = "get";
        document.getElementById("profileForm").submit();
    }

    return service;
})

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function($scope, storeService) {
    // controller code would go here
    $scope.data = storeService.getData();

    $scope.create = function() {
        storeService.create();
    }

    $scope.save = function() {
        storeService.save();
    }

    $scope.finish = function() {
        storeService.finish();
    }

});

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    };
});
