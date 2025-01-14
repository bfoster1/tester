<script>
L.mapbox.accessToken = 'pk.eyJ1IjoiYnJpdHRyZW5pIiwiYSI6IndGSEJsUkEifQ.sxZ169-xvrHkrP-1-Xzivw';
// In the propeties object for each marker define key's
// like `rentals`, `fuel`, `tackleshop` that are set to true for false
// depending on whether or they exist at a location.
var geojson = [

//Near NorthSide Neighborhood Fast Food
  
//North Pond
    {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.63532,
          41.9268
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "North Pond (new american farm to table) 2610 N Cannon Dr Chicago, IL 60614 Phone number (773) 477-5845",
        "Lincoln Park": true,
        "Chinatown": false,
        "Pilsen": false,
        "marker-color": "#551a8b",
        "marker-size": "large",
        "marker-symbol": "restaurant",

      }
    },
    
     //Balena 
    { 
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.64932,
          41.93184
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "Balena (italian) 1633 N Halsted St Chicago, IL 60614 Phone number (312) 867-3888",
        "Lincoln Park": true,
        "Chinatown": false,
        "Pilsen": false,
        "marker-color": "#551a8b",
        "marker-size": "large",
        "marker-symbol": "restaurant",



      }
    },
 //The Local Option

{
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.656027,
          41.921696
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "The Local Option 1102 W Webster Ave Chicago, IL 60614 Phone number (773) 348-2008",
        "Lincoln Park": true,
        "Chinatown": false,
        "Pilsen": false,
        "marker-color": "#551a8b",
        "marker-size": "large",
        "marker-symbol": "restaurant",



      }
    },

    
//Floriole Cafe & Bakery

    {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.656027,
          41.9210687
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "Floriole Cafe & Bakery 1220 W Webster Ave Chicago, IL 60614 Phone number (773) 883-1313",
        "Lincoln Park": true,
        "Chinatown": false,
        "Pilsen": false,
        "marker-color": "#551a8b",
        "marker-size": "large",
        "marker-symbol": "restaurant",



      }
    },


   //Juno Sushi

   {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.64524,
          41.92294
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "Juno 2638 N Lincoln Chicago, IL 60614 Phone number (773) 935-2000",
        "Lincoln Park": true,
        "Chinatown": false,
        "Pilsen":false,
        "marker-color": "#551a8b",
        "marker-size": "large",
        "marker-symbol": "restaurant",



      }
    },



 
//Chinatown Restaurants 
  // Lao Sze Chuan

   {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.64463,
          41.84797
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "Lao Sze Chuan 2172 S Archer Ave Chicago, IL 60616 Phone number (331) 248-3524",
        "Lincoln Park": false,
        "Chinatown": true,
        "Pilsen": false,
        "marker-color": "#00ffff",
        "marker-size": "large",
        "marker-symbol": "restaurant",



      }
    },


   //MingHin Cuisine 

   {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.66455,
          41.84797
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "MingHin Cuisine 2168 S Archer Ave Chicago, IL 60616 Phone number (312) 808-1999",
        "Lincoln Park": false,
        "Chinatown": true,
        "Pilsen": false,
        "marker-color": "#00ffff",
        "marker-size": "large",
        "marker-symbol": "restaurant",



      }
    },
 

 //Three Happiness

   {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.63388,
          41.85258
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "Three Happiness 209 W Cermak Rd, Chicago, IL 60616 (312) 842-1964",
        "Lincoln Park": false,
        "Chinatown": true,
        "Pilsen": false,
        "marker-color": "#00ffff",
        "marker-size": "large",
        "marker-symbol": "restaurant",



      }
    },


  //Lao Hunan

   {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.63208,
          41.85512
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "Lao Hunan 2230 S Wentworth Ave Chicago, IL 60616 Phone number (312) 842-7888",
        "Lincoln Park": false,
        "Chinatown": true,
        "Pilsen": false,
        "marker-color": "#00ffff",
        "marker-size": "large",
        "marker-symbol": "restaurant",



      }
    },


 //Moon Palace  

   {
      "type": "Feature",
      "geometry": {
        "coordinates": [
         -87.63380,
          41.85258
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "Moon Palace 216 W Cermak Rd Chicago, IL 60616 Phone number (312) 225-4081",
        "Lincoln Park": false,
        "Chinatown": true,
        "Pilsen": false,
        "marker-color": "#00ffff",
        "marker-size": "large",
        "marker-symbol": "restaurant",



      }
    },

    //Pilsen Restaurants 
    //Nuevo Leon 

   {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.669197,
          41.857630
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "Nuevo Leon 1515 W 18th St Chicago, IL 60608 Phone number (312) 421-1517",
        "Lincoln Park": false,
        "Chinatown": false,
        "Pilsen": true,
        "marker-color": "#ff0000",
        "marker-size": "large",
        "marker-symbol": "restaurant",



      }
    },

//Taqueria Sabor y Sazon 

   {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.665775,
          41.841826
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "Taqueria Sabor y Sazon 2018 S Blue Island Ave Chicago, IL 60608 Phone number (312) 226-8829",
        "Lincoln Park": false,
        "Chinatown": false,
        "Pilsen": true,
        "marker-color": "#ff0000",
        "marker-size": "large",
        "marker-symbol": "restaurant",



      }
    },


//Birreria Reyes   

   {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.669197,
          41.857625
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "Birreria Reyes 1322 W 18th St Chicago, IL 60608 Phone number (312) 733-2613",
        "Lincoln Park": false,
        "Chinatown": false,
        "Pilsen": true, 
        "marker-color": "#ff0000",
        "marker-size": "large",
        "marker-symbol": "restaurant",

      }
    },

 //  Carnitas Urupan

   {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          -87.669197,
          41.857637
        ], 
        "type": "Point"
      },
      "properties": {
        "title": "Carnitas Uruapan 1725 W 18th St Chicago, IL 60608 Phone number (312) 226-2654",
        "Lincoln Park": false,
        "Chinatown": false,
        "Pilsen": true,
        "marker-color": "#ff0000",
        "marker-size": "large",
        "marker-symbol": "restaurant",



      }
    }

    
];


var map = L.mapbox.map('map', 'examples.map-i875kd35')
  .setView([41.68, -87.63], 10);



var markers = L.mapbox.featureLayer()
    .setGeoJSON(geojson)
    .addTo(map);


$('.menu-ui a').on('click', function() {
    // For each filter link, get the 'data-filter' attribute value.
    var filter = $(this).data('filter');
    $(this).addClass('active').siblings().removeClass('active');
    markers.setFilter(function(f) {
        // If the data-filter attribute is set to "all", return
        // all (true). Otherwise, filter on markers that have
        // a value set to true based on the filter name.
        return (filter === 'all') ? true : f.properties[filter] === true;
    });
    return false;
});

</script>