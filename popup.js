document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
  
    chrome.storage.sync.get('enabled', function (data) {
      toggleButton.innerText = data.enabled ? 'Disable' : 'Enable';
    });
  
    toggleButton.addEventListener('click', function () {
      chrome.storage.sync.get('enabled', function (data) {
        chrome.storage.sync.set({ enabled: !data.enabled });
        toggleButton.innerText = data.enabled ? 'Enable' : 'Disable';
      });
    });
  });
  