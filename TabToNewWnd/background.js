//Copyright (c) 2013-2014, Tvdv

var currentTab=null;
function moveTabClick(tab) {
  chrome.tabs.query({ currentWindow: true, active: true }, getCurrentTabCB);
}

function getCurrentTabCB(tabs) {
	if (typeof tabs === "undefined") {
   		console.error("not a valid tab");
   	} else {
		currentTab=tabs[0];	
		//create a new wnd and put the tab in it
		chrome.windows.create({"tabId":currentTab.id},windowCreateCB);
	}
}
function windowCreateCB(win) {
}

chrome.browserAction.onClicked.addListener(moveTabClick);
