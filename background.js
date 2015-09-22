'use strict';

/*global chrome:false */

chrome.browserAction.onClicked.addListener(function(aTab) {
	chrome.tabs.query({'url': 'http://bradysmeats.com/'}, (tabs) => {
    if (tabs.length === 0) {
      chrome.tabs.create({'url': 'http://bradysmeats.com/', 'active': true});
    } else {
			chrome.tabs.query({'url': 'http://bradysmeats.com/', 'active': true}, (active) => {
	      if (active.length === 0) {
	        chrome.tabs.update(tabs[0].id, {'active': true});
	      }
	    });
    }
  });
});
