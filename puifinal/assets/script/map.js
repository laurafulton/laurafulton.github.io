//Laura Fulton, PUI Final Project
//JavaScript File

//Initializing Varables for the map and for text to speech (TTS)
var map;
var markers = [];
var infowindow;
var txtInput;
var uttutt;
var eeks;

  //marker locations and details 
  var place = {
    geometry: {
      location: {
        lat: 24.598547,
        lng: 28.294648
      }
    },
    accent: "Arabic (Egypt)",
    langtype: "ar-EG"
  };

  var place1 = {
    geometry: {
      location: {
        lat: -15.092849, 
        lng: 24.855451
      }
    },
    accent: "Afrikaan (Zambia)",
    langtype: "af-ZA"
  };

  var place2 = {
    geometry: {
      location: {
        lat: -15.092849, 
        lng: 24.855451
      }
    },
    accent: "Afrikaan (Zambia)",
    langtype: "af-ZA"
  };


  var place3 = {
    geometry: {
      location: {
        lat: 15.428169,
        lng: 100.973286
      }
    },
    accent: "Thai",
    langtype: "th-TH"
  };
   var place4 = {
    geometry: {
      location: {
        lat: -33.80010128657071,
        lng: 151.28747820854187
      }
    },
    accent: "Australian",
    langtype: "en-AU"
  };

  var place5 = {
    geometry: {
      location: {
        lat: 51.501210, 
        lng: -0.137996
      }
    },
    accent: "British",
    langtype: "en-GB"
  };

  var place6 = {
    geometry: {
      location: {
        lat: 40.852354, 
        lng: 14.276127
      }
    },
    accent: "Italian",
    langtype: "it-IT"
  };

  var place7 = {
    geometry: {
      location: {
        lat: -7.486305, 
        lng: -51.882314
      }
    },
    accent: "Brazilian",
    langtype: "pt-BR"
  };

  var place8 = {
    geometry: {
      location: {
        lat: 41.004626, 
        lng: 19.797955 
      }
    },
    accent: "Albanian",
    langtype: "sq-AL"
  };

  var place9 = {
    geometry: {
      location: {
        lat: 54.762593, 
        lng: 27.922273 
      }
    },
    accent: "Belarusian",
    langtype: "be-BY"
  };

  var place10 = {
    geometry: {
      location: {
        lat: 42.477296, 
        lng: 23.592838 
      }
    },
    accent: "Bulgarian",
    langtype: "bg-BG"
  };

    var place11 = {
    geometry: {
      location: {
        lat: 22.324729, 
        lng: 114.177818
      }
    },
    accent: "Chinese (Hong Kong)",
    langtype: "zh-HK"
  };


    var place12 = {
    geometry: {
      location: {
        lat: 46.072135, 
        lng: 16.756789 
      }
    },
    accent: "Croatian",
    langtype: "zh-HK"
  };

    var place13 = {
    geometry: {
      location: {
        lat: 55.958475, 
        lng: 8.927124
      }
    },
    accent: "Danish",
    langtype: "da-DK"
  };

     var place14 = {
    geometry: {
      location: {
        lat: 51.978190, 
        lng: 4.515547 
      }
    },
    accent: "Dutch",
    langtype: "nl-NL"
  };

    var place15 = {
    geometry: {
      location: {
        lat: 40.906999, 
        lng: -102.059525 
      }
    },
    accent: "English (United States)",
    langtype: "en-US"
  };

   var place16 = {
    geometry: {
      location: {
        lat: 14.168412, 
        lng: 121.115866 
      }
    },
    accent: "Philippines",
    langtype: "en-PH"
  };

    var place17 = {
    geometry: {
      location: {
        lat: 47.987303, 
        lng: 2.136237
      }
    },
    accent: "French (France)",
    langtype: "fr-FR"
  };

    var place18 = {
    geometry: {
      location: {
        lat: 50.813149,  
        lng: 9.968995
      }
    },
    accent: "German",
    langtype: "el-GR"
  };

    var place19 = {
    geometry: {
      location: {
        lat: 37.248213, 
        lng: 140.067168 
      }
    },
    accent: "Japanese",
    langtype: "ja-JA"
  };

    var place20 = {
    geometry: {
      location: {
        lat: 38.846880, 
        lng: 21.952887 
      }
    },
    accent: "Greek",
    langtype: "el-GR"
  };

    var place21 = {
    geometry: {
      location: {
        lat: 23.920886, 
        lng: 76.678864   
      }
    },
    accent: "Hindi (India)",
    langtype: "hi-IN"
  };

    var place22 = {
    geometry: {
      location: {
        lat: 31.776455,  
        lng: 35.195613
      }
    },
    accent: "Hebrew",
    langtype: "he-IL"
  };

      var place23 = {
    geometry: {
      location: {
        lat: -1.552918,  
        lng: -76.987182 
      }
    },
    accent: "Spanish (Ecuador)",
    langtype: "es-EC"
  };

      var place24 = {
    geometry: {
      location: {
        lat: 16.935072, 
        lng: -90.125468  
      }
    },
    accent: "Spanish (Guatemala)",
    langtype: "es-GT"
  };

      var place25 = {
    geometry: {
      location: {
        lat: -13.811022, 
        lng: -71.339814  
      }
    },
    accent: "Spanish (Peru)",
    langtype: "es-PE"
  };

      var place26 = {
    geometry: {
      location: {
        lat: 38.781521,  
        lng: -4.399431 
      }
    },
    accent: "Spanish (Spain)",
    langtype: "es-ES"
  };


      var place27 = {
    geometry: {
      location: {
        lat: 57.620571, 
        lng: -72.829083  
      }
    },
    accent: "French Canadian",
    langtype: "es-ES"
  };






//Call initMap from html, map uses Google API key
function initMap() {
  map = new google.maps.Map(
    //map view and terrain
    document.getElementById("map"), {
      zoom: 1.75,
      center: new google.maps.LatLng(20, 0),
      mapTypeId: google.maps.MapTypeId.TERRAIN,


       /*styles for map as adoped from MapStyles 
      https://mapstyle.withgoogle.com/*/
        styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#0de73e"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#8ce9df"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c9edea"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
        ]
    });

  //create window for markers

  infowindow = new google.maps.InfoWindow();
  
  //creating all the markers here
  createMarker(place);
  createMarker(place1);
  createMarker(place2);
  createMarker(place3);
  createMarker(place4);
  createMarker(place5);
  createMarker(place6);
  createMarker(place7);
  createMarker(place8);
  createMarker(place9);
  createMarker(place10);
  createMarker(place11);
  createMarker(place12);
  createMarker(place13);
  createMarker(place14);
  createMarker(place15);
  createMarker(place16);
  createMarker(place17);
  createMarker(place18);
  createMarker(place19);
  createMarker(place20);
  createMarker(place21);
  createMarker(place22);
  createMarker(place23);
  createMarker(place24);
  createMarker(place25);
  createMarker(place26);
  createMarker(place27);

}

//placing markers on map at specified locations
function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    //adding a fun drop for the markers! *might style further time permitting
    animation: google.maps.Animation.DROP
  });
  markers.push(marker);


  //when click marker, pop-up infowindow with populated content
  google.maps.event.addListener(marker, 'click', function() {
    // infowindow.setContent("<div>" + place.name + "<br><input type='submit' id='butSubmit' value='Procurar' onclick='BarFind()'><div id='bar'></div></div>");
    //this is box with input box for text and button to hear text with different accent
    infowindow.setContent("<div>" + place.accent + "<br>"+ "<br><textarea id='txtInput' placeHolder='Enter text to be spoken' cols='40' rows='5'></textarea>"+ "<br><input type='submit' id='butSubmit' value='Say it!' onclick='Speakit()'><div id='sayitBtn'></div></div>");
    eeks = place.langtype;
    infowindow.open(map, this);
  });
  return eeks;
}

//TTS taking info from text box and turning it into speech, accent based on location
function Speakit(txtInput) {
  var txtInput = document.getElementById("txtInput");

//get voice and apply it to the text that was entered in box
// var voice = document.getElementById("voice");
var voices = window.speechSynthesis.getVoices();
var txtInput = document.getElementById("txtInput");
var sayitBtn = document.getElementById("sayitBtn");



sayitBtn.onclick = myfunction(); 

function myfunction(){
  let speech = new SpeechSynthesisUtterance(txtInput.value);
  // speech.lang = place.langtype;
  speech.lang = eeks;
  window.speechSynthesis.speak(speech);
  }

}



/**
 *Sine wave based off of pen by Issuttel as found on Code Pen, edited for coloring and sizing https://github.com/isuttell/sine-waves
/*sizing canvas for wave*/

function SineWaveGenerator(options) {
  $.extend(this, options || {});
  
  if(!this.el) { throw "No Canvas Selected"; }
  this.ctx = this.el.getContext('2d');
  
  if(!this.waves.length) { throw "No waves specified"; }
  
  // Internal
  this._resizeWidth();
  window.addEventListener('resize', this._resizeWidth.bind(this));
  // User
  this.resizeEvent();
  window.addEventListener('resize', this.resizeEvent.bind(this));
  
  if(typeof this.initialize === 'function') {
    this.initialize.call(this);
  }
  // Start the magic
  this.loop();
}

// Defaults
SineWaveGenerator.prototype.speed = 10;
SineWaveGenerator.prototype.amplitude = 50;
SineWaveGenerator.prototype.wavelength = 50;
SineWaveGenerator.prototype.segmentLength = 10;

SineWaveGenerator.prototype.lineWidth = 2;
SineWaveGenerator.prototype.strokeStyle  = 'rgba(255, 255, 255, 0.2)';

SineWaveGenerator.prototype.resizeEvent = function() {};

// fill the screen
SineWaveGenerator.prototype._resizeWidth = function() {
  this.dpr = window.devicePixelRatio || 1;
  
  this.width = this.el.width = window.innerWidth * this.dpr;
  this.height = this.el.height = window.innerHeight * this.dpr;
  // this.height = 150;
  // this.width=300;
  this.el.style.width = window.innerWidth + 'px';
  this.el.style.height = window.innerHeight + 'px';
  
  this.waveWidth = this.width * 0.95;
  this.waveLeft = this.width * 0.025;
}

SineWaveGenerator.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.width, this.height);
}

SineWaveGenerator.prototype.time = 0;

SineWaveGenerator.prototype.update = function(time) {  
  this.time = this.time - 0.007;
  if(typeof time === 'undefined') {
    time = this.time;
  }

  var index = -1;
  var length = this.waves.length;

  while(++index < length) {
    var timeModifier = this.waves[index].timeModifier || 1;
    this.drawSine(time * timeModifier, this.waves[index]);
  }
  index = void 0;
  length = void 0;
}

// Constants
var PI2 = Math.PI * 2;
var HALFPI = Math.PI / 2;

SineWaveGenerator.prototype.ease = function(percent, amplitude) {
  return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * 0.5;
}

SineWaveGenerator.prototype.drawSine = function(time, options) {
  options = options || {};
  amplitude = options.amplitude || this.amplitude;
  wavelength = options.wavelength || this.wavelength;
  lineWidth = options.lineWidth || this.lineWidth;
  strokeStyle = options.strokeStyle || this.strokeStyle;
  segmentLength = options.segmentLength || this.segmentLength;
  
  var x = time;
  var y = 0;  
  var amp = this.amplitude;
 
  // Center the waves
  var yAxis = this.height / 2; 
  
  // Styles
  this.ctx.lineWidth = lineWidth * this.dpr;
  this.ctx.strokeStyle = strokeStyle;
  this.ctx.lineCap = 'round';
  this.ctx.lineJoin = 'round';
  this.ctx.beginPath();
  
  // Starting Line
  this.ctx.moveTo(0, yAxis);
  this.ctx.lineTo(this.waveLeft, yAxis);
  
  for(var i = 0; i < this.waveWidth; i += segmentLength) {
    x = (time * this.speed) + (-yAxis + i) / wavelength; 
    y = Math.sin(x); 
    
    // Easing
    amp = this.ease(i / this.waveWidth, amplitude); 
    
    this.ctx.lineTo(i + this.waveLeft, amp * y + yAxis);
    
    amp = void 0;
  }
  
  // Ending Line
  this.ctx.lineTo(this.width, yAxis);
  
  // Stroke it
  this.ctx.stroke();
  
  // Clean up
  options = void 0;
  amplitude = void 0;
  wavelength = void 0;
  lineWidth = void 0;
  strokeStyle = void 0;
  segmentLength = void 0;
  x = void 0;
  y = void 0;
} 

SineWaveGenerator.prototype.loop = function() {
  this.clear();
  this.update();
  
  window.requestAnimationFrame(this.loop.bind(this));
}

new SineWaveGenerator({
  el: document.getElementById('waves'),
  
  speed: 8,
  
  waves: [
    {
      timeModifier: 1,
      lineWidth: 3,
      amplitude: 150,
      wavelength: 200,
      segmentLength: 20,
//       strokeStyle: 'rgba(255, 255, 255, 0.5)'
    },
    {
      timeModifier: 1,
      lineWidth: 2,
      amplitude: 150,
      wavelength: 100,
//       strokeStyle: 'rgba(255, 255, 255, 0.3)'
    },
    {
      timeModifier: 1,
      lineWidth: 1,
      amplitude: -150,
      wavelength: 50,
      segmentLength: 10,
//       strokeStyle: 'rgba(255, 255, 255, 0.2)'
    },
    {
      timeModifier: 1,
      lineWidth: 0.5,
      amplitude: -100,
      wavelength: 100,
      segmentLength: 10,
//       strokeStyle: 'rgba(255, 255, 255, 0.1)'
    }
  ],
  
  initialize: function (){

  },
  
  resizeEvent: function() {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0,"rgba(0, 0, 0, 0)");
    gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
    gradient.addColorStop(1,"rgba(0, 0, 0, 0)");
    
    var index = -1;
    var length = this.waves.length;
    while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
    
    // Clean Up
    index = void 0;
    length = void 0;
    gradient = void 0;
  }
});