//Titanium.UI.setBackgroundColor("#000000");
var mainWindow = Ti.UI.createWindow({
	backgroundColor:"#FFF",
	exitOnClose:true
});

var mainView = Ti.UI.createView({
	height:445,
	width:"100%",
	top:20,
	backgroundColor:"orange",
	opacity:0.4,
	title:"List"
	
});
var displayInfo = Ti.UI.createLabel({
	text:"click below to begin",
	textAlign:"center",
	textColor:"#000",
	textWeight:"bold",
	textOpacity:0.9
});

var previousButton = Ti.UI.createButton({
	height:"10%",
	width:"35%",
	backgroundColor:"green",
	title:"previous",
	textColor:"#000",
	top:475,
	borderRadius:5,
	borderColor:"#000",
	left:15
});

var nextButton = Ti.UI.createButton({
	height:"10%",
	width:"35%",
	backgroundColor:"green",
	title:"next",
	textColor:"#000",
	top:475,
	borderRadius:5,
	borderColor:"#000",
	right:15
});

var loadFunction = require("function");

mainView.add(displayInfo);
mainWindow.add(mainView,previousButton,nextButton);
mainWindow.open();