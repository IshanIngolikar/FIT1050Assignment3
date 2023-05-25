var checkStatus = function () {
    var curr_date = new Date();
    var hour = curr_date.getHours();
    var day = curr_date.getDay();
    //console.log(hour,day)


   if ((day > 0) && (day < 6)) //weekday mon - fri
    {
        if ((hour > 7)&&(hour<17)) //between 8 am and 5 pm
        {
            y = "<span style=\"color:#07ed11\">We're Open!</span>";
        }
        else{y = "<span style=\"color:#fc4b1c\">Sorry, we're currently closed.</span>"}
        
    } 
    
    else if (day ==6){
        if ((hour >8)&&(hour<12))
            {            
                y = "<span style=\"color:#07ed11\">We're Open!</span>";
            }
        else{y = "<span style=\"color:#fc4b1c\">Sorry, we're currently closed.</span>"}
        }

    else{
        y = "<span style=\"color:#fc4b1c\">Sorry, we're currently closed.</span>";
    }
    document.getElementById("shopstatus").innerHTML = y;
    setTimeout(checkStatus,20000);
};

checkStatus();  

/*Monday to Friday: 8am-5pm

Saturday: 8am-12 noon */


//https://stackoverflow.com/questions/15399628/use-javascript-to-print-out-open-or-closed-depending-on-time-of-day-in-real-ti