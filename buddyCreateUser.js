
function fixedEncodeURIComponent (str) {  
    return encodeURIComponent(str).replace(/[!'()*]/g, escape);  
}
function createUserWithName(aName, anEmail) 
{
   // alert("in the function");
    //alert('test');
    var finalURLStr = "http://webservice.buddyplatform.com/Service/v1/BuddyService.ashx";
    
    finalURLStr += "?UserAccount_Profile_Create";    // API Call
    finalURLStr += "&BuddyApplicationName=" + fixedEncodeURIComponent("Aryan");
    finalURLStr += "&BuddyApplicationPassword=" + fixedEncodeURIComponent("09FEC522-C674-4952-9A28-B585711F15C7");
    finalURLStr += "&NewUserName=" + fixedEncodeURIComponent(aName);                    // The user name
    finalURLStr += "&UserSuppliedPassword=" + fixedEncodeURIComponent("Akiqw 123");  // User password
    finalURLStr += "&NewUserGender=" + "male";                                          // "male" or "female"
    finalURLStr += "&UserAge=" + 29;                                                    // user age (int)
    finalURLStr += "&NewUserEmail=" + fixedEncodeURIComponent(anEmail);                 // user email
    finalURLStr += "&StatusID=" + 3;                                                   // see status table (1-7 or -1)
    finalURLStr += "&FuzzLocationEnabled=0";                                         // true / false: location isn't/is reported accurately
    finalURLStr += "&CelebModeEnabled=1";                                            // true if user is hidden from non-friends
    finalURLStr += "&ApplicationTag=";                                                  // app-related info
    finalURLStr += "&RESERVED=";                                                       // leave empty
   // alert(finalURLStr);
    $.ajax({ url: finalURLStr })
        .done( function(data) {
            // Result is a simple string
            alert("Result: " + data);
        })
        .fail(function() {
            //alert("Error while contacting Buddy!");
       });
       
}

// < script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">< /script>
var latitude;
var longitude;
 
// In order to detect gelocation, you may want to initialize it earlier, for example
        $(document).ready(function() {  
        navigator.geolocation.getCurrentPosition(handle_geolocation_query);
        //alert("After Geolocation");
        //checkInLocation();    
        }); 
     
        
function handle_geolocation_query(position){  
    latitude    = position.coords.latitude;  
    longitude   = position.coords.longitude; 
    //alert(navigator.geolocation.getCurrentPosition.coords.latitude);
    //alert(position.coords.latitude);
    checkInLocation();
}
function fixedEncodeURIComponent (str) {  
    return encodeURIComponent(str).replace(/[!'()*]/g, escape);  
}
function checkInLocation() 
{
   
    //longitude = position.coords.longitude
    alert(longitude);
    var finalURLStr = "http://webservice.buddyplatform.com/Service/v1/BuddyService.ashx";
    
    finalURLStr += "?UserAccount_Location_Checkin";    // API Call
    finalURLStr += "&BuddyApplicationName=" + fixedEncodeURIComponent("Aryan");
    finalURLStr += "&BuddyApplicationPassword=" + fixedEncodeURIComponent("09FEC522-C674-4952-9A28-B585711F15C7");
    finalURLStr += "&UserToken=" + fixedEncodeURIComponent("UT-79a7ab48-b8b2-4e58-a818-121c168d47cf"); // The user logged in token
    finalURLStr += "&Latitude=" + latitude;                                     // The user's position
    finalURLStr += "&Longitude=" + longitude;
    finalURLStr += "&CheckInComment=" + "Hey! Just got here!";                  // A user defined message
    finalURLStr += "&ApplicationTag=";                                          // app-related info
    finalURLStr += "&RESERVED=";                                                // leave empty
    
    $.ajax({ url: finalURLStr })
        .done( function(data) {
            // Result is a simple string
            alert("Result: " + data);
        })
        .fail(function() {alert("Error while contacting Buddy!");});
}

//console.log("My Test");
//createUserWithName("aki","aki@mail.com");