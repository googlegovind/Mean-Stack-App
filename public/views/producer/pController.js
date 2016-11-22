
cma.controller('pController', ['$scope', '$http', function($scope, $http ) {
  
  
   var socket = io.connect('http://localhost:3000', {reconnect: true});
   socket.on('connect', function (socket) {
	    console.log('Connected!');
	});
	var self = this;
	// self.data = "sddddddddddd";

	self.start = function () {
		console.log("start");
		socket.emit('start', {});
		
	}

	self.stop = function () {
		console.log("stop")
		socket.emit('stop', {});


	}
 

}]);
