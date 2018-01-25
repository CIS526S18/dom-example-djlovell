"use strict;"

const MS_IN_SEC     = 1000;
const MS_IN_MIN     = 60 * MS_IN_SEC;
const MS_IN_HOUR    = 60 * MS_IN_MIN;
const MS_IN_DAY     = 24 * MS_IN_HOUR;

function createCountdown( elementID, startTime )
{
    var clock = window.document.createElement( 'div' );
    //Creating helper function
    function setTime()
    {
        //Date is a library, defined in JS, #ms since some date in 1970
        var time    = startTime - Date.now(); 

        // Initialize countdown variables
        var days    = Math.floor(time / MS_IN_DAY); //Have to use floor for integer division
            time -= days * MS_IN_DAY;
        var hours   = Math.floor(time / MS_IN_HOUR); 
            time -= hours * MS_IN_HOUR;
        var minutes = Math.floor(time / MS_IN_MIN); 
            time -= minutes * MS_IN_MIN;
        var seconds = Math.floor(time / MS_IN_SEC); 
            time -= seconds * MS_IN_SEC;
        var ms      = time;

        
        // Format-> In: # Days, # Hours, # Minutes, # Seconds
        clock.innerHTML =      "IN: " + days     + " DAYS "       
                            + hours    + " HOURS "     
                            + minutes  + " MINUTES "    
                            + seconds  + " SECONDS "
                            + ms       + " MS ";
                           
    }
    setInterval( setTime, 1000 );

    //retruns a DOM node, and appends the newly created tag
    document.getElementById( elementID ).appendChild( clock );
}

createCountdown( 'all-university',  Date.parse( '2018-4-7' ) );
createCountdown( 'engineering',     Date.parse( '2018-4-6' ) );
