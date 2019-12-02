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
        lat: 15.428169,
        lng: 100.973286
      }
    },
    accent: "Thai",
    langtype: "th-TH"
  };
   var place2 = {
    geometry: {
      location: {
        lat: -33.80010128657071,
        lng: 151.28747820854187
      }
    },
    accent: "Australian",
    langtype: "en-AU"
  };

  var place3 = {
    geometry: {
      location: {
        lat: 51.501210, 
        lng: -0.137996
      }
    },
    accent: "British",
    langtype: "en-GB"
  };

  var place4 = {
    geometry: {
      location: {
        lat: 40.852354, 
        lng: 14.276127
      }
    },
    accent: "Italian",
    langtype: "it-IT"
  };

  var place5 = {
    geometry: {
      location: {
        lat: -7.486305, 
        lng: -51.882314
      }
    },
    accent: "Brazilian",
    langtype: "pt-BR"
  };


//Call initMap from html, map uses Google API key
function initMap() {
  map = new google.maps.Map(
    //map view and terrain
    document.getElementById("map"), {
      zoom: 1.75,
      center: new google.maps.LatLng(20, 0),
      mapTypeId: google.maps.MapTypeId.TERRAIN});



  //create window for markers

  infowindow = new google.maps.InfoWindow();
  
  //creating all the markers here
  createMarker(place);
  createMarker(place1);
  createMarker(place2);
  createMarker(place3);
  createMarker(place4);
  createMarker(place5);

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
    infowindow.setContent("<div>" + place.accent + "<br>"+ "<br><textarea id='txtInput' placeHolder='Enter text to be spoken' cols='40' rows='5'></textarea>"+ "<br><input type='submit' id='butSubmit' value='Say It' onclick='Speakit()'><div id='sayitBtn'></div></div>");
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
