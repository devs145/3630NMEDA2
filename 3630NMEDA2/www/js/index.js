var app = new Framework7({
    // App root element
    el: '#app',
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: 'pages/page2.html',
        },
    ],
    // ... other parameters
});
var mainView = app.views.create('.view-main')

var $$ = Dom7;
$$(document).on('page:init', '.page[data-name="page2"]', function () {
    // Page 2 fun here

})

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleMotion)
    }
    else {
        alert ("sorry your browser does not support this")
    }

    function handleMotion(event) {
        //console.log(event)
        var z = event.alpha;
        var x = event.beta;
        var y = event.gamma;
        var mystring = '';
        


       // $("#z").text("z: " + z)
        $("#x").text("x: " + x)
        //$("#y").text("y: " + y)


       
        if (z >= 0 && z <= 360) {

            if (z >= 0 && z < 40) {
                mystring = "Stop looking and eat Italian Food";
            } 

            if (z >= 40 && z < 80) {
                mystring = "How can we forget abour Greek Food";
            }

            if (z >= 80 && z < 120) {
                mystring = "Can't go wrong with Mexican Food";  
            }

            if (z >= 120 && z < 160) {
                mystring = "Spice up your life with Indian Food";
            }

            if (z >= 160 && z < 200) {
                mystring = "Can't go wrong with Chinese Food";
            } 

            if (z >= 200 && z < 240) {
                mystring = "It's getting cold get some Pho";
            } 

            if (z >= 240 && z < 280) {
                mystring = "How can we forget about Poutine!"
            }

            if (z >= 280 && z < 320) {
                mystring = "Can't go wrong with Japanese Food";
            }

            if (z >= 320 && z < 360) {
                mystring = "Don't eat you are very indecisive";
            }

        } 
    
        $("#x").html(mystring)
      
    }

    


}


