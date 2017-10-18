chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  console.info(msg);
  if (msg.id) {
    switch (msg.id) {
    case 'script':
      chrome.tabs.query({active: true}, function(tabs) {
        let tab = tabs[0];
        chrome.tabs.executeScript(tab.id, {
          code: msg.text
        }, function(results) {
          console.info(results);
        });
      })
    break;
    }
  }
});