function clickChannelPointsButton() {
    // Replace this selector with the actual selector for the channel points button on Twitch
    const channelPointsButton = document.querySelector('.community-points-summary > *:nth-child(2) button');
  
    if (channelPointsButton) {
      channelPointsButton.click();
      console.log('Channel points claimed!');
    } else {
      console.log('Channel points button not found.');
    }
  }
  
  chrome.storage.sync.get('enabled', function (data) {
    if (data.enabled) {
      // Delay the execution to ensure the Twitch page is fully loaded
      setTimeout(clickChannelPointsButton, 300000);
    }
  });
  