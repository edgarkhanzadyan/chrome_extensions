const listOfBlockedWebsites = 'www.youtube.com';
chrome.runtime.onInstalled.addListener(function() {
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            return {cancel: true};
        },
        {urls: ["*://www.youtube.com/*"]},
        ["blocking"]);
});
