var info =["List of names","Parlo","Jessica","Helmson","Hana","Jason","Watson"];

var counter=0;
var programHasStarted = false;
var next = function()
{
	if (programHasStarted == false) {
		
		counter=0;  
		
	}else{ 
			if (counter === info.length-1){
					counter=0;  
				}else
				{
				   counter=counter+1;
	            }
	    }
	displayInfo.text = info[counter];
	programHasStarted = true;
	
};

var Previous = function(){

	if (programHasStarted == false) {
		
		counter=0;  
		
	}else{  
    if (counter === 0){
    counter=info.length-1;
	}else{
	counter=counter-1;
}}
    displayInfo.text = info[counter];    
    programHasStarted = true;
};


nextButton.addEventListener("click",next);

previousButton.addEventListener("click",Previous);

