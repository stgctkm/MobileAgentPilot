function clickRunnable() {
	$.runnable.image = '/images/smartAccident_runnableChecked.png';
	$.notRunnable.image = '/images/smartAccident_notRunnable.png';
}
function clickNotRunnable() {
	$.notRunnable.image = '/images/smartAccident_notRunnableChecked.png';
	$.runnable.image = '/images/smartAccident_runnable.png';
}
function onCall() {
	//send via http
	var client = require("commonHTTPClient");
	client.postLocationAndCell();
	Titanium.Platform.openURL("tel:0120119110");
}
function back() {
	$.win.close();
}