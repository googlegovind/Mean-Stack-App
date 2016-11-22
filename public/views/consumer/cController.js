cma.controller('cController', ['$scope', '$http','$timeout'  , function($scope, $http ,$timeout ) {
  
   var self = this;
   var data,i=0;
   var cordinates = [];
   var loc = {
        lat:12.91233,
        lng:77.5882
       }
    // var socket = io.connect();

    var socket = io.connect('http://localhost:3000', {reconnect: true});
  // get the examples from our server
  // $http.get('/api/examples').success(function(data) {
  //   $scope.examples = data;
  // });
	socket.on('connect', function (socket) {
	    console.log('Connected!');
	});

  socket.on('data', function (data) {
	   
      cordinates = data.split(',');
      console.log(cordinates);
      var LatLong = new google.maps.LatLng(cordinates[0], cordinates[1]);
      marker.setPosition(LatLong);
      
       //save in db
      var loc = {lat:cordinates[0],lng:cordinates[1]}
      socket.emit("save",loc);
      //
	});
  

    // without scocket
  //   function apicall (){
		//   $http.get('/api/load').success(function(data) {
  //        data = data;
  //        // console.log(data)
    

	 //       var i = 0;
  //   	   var refreshid = setInterval(function () { 
  //   		    ++i;
  //           cordinates = data[i].split(',');
  //           if(i==data.length){clearInterval(refreshid);}

  //           var LatLong = new google.maps.LatLng(cordinates[0], cordinates[1]);
  //           marker.setPosition(LatLong);
            
  //        }, 1000); 

  //     });
	 //  }
  // apicall();
  

      var directionsDisplay = new google.maps.DirectionsRenderer;
      var directionsService = new google.maps.DirectionsService;
      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          // center: 'bangalore'
      });
      directionsDisplay.setMap(map);

      var marker = new google.maps.Marker({
          position: loc,
          map: map
      });

      calculateAndDisplayRoute(directionsService, directionsDisplay);
      document.getElementById('mode').addEventListener('change', function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
      });

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var selectedMode = document.getElementById('mode').value;
        directionsService.route({
          origin: {lat: 12.91233, lng: 77.5882},  // Haight.
          destination: {lat: 12.92433, lng: 77.65076},  // Ocean Beach.
          // Note that Javascript allows us to access the constant
          // using square brackets and a string value as its
          // "property."
          travelMode: google.maps.TravelMode[selectedMode]
        }, function(response, status) {
          if (status == 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }




}]);
