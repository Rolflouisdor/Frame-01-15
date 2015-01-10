var info =["List of names","Parlo","Jessica","Helmson","Hana","Jason","Watson"];

var counter=0;

var next = function()
{
	
	displayInfo.text = info[counter];
	if (counter === info.length-1){
    counter=0;  
}else{
		counter=counter+1;
}};

var Previous = function(){
    displayInfo.text = info[counter];
    if (counter === 0){
    counter=info.length-1;
}else{
counter=counter-1;
}};


nextButton.addEventListener("click",next);

previousButton.addEventListener("click",Previous);
