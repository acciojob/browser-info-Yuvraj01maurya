//your JS code here. If required.
 window.onload = function() {
      // Retrieve browser information
      var browserName = navigator.appName;
      var browserVersion = navigator.appVersion;

      // Display information in the browser-info div
      var browserInfoDiv = document.getElementById('browser-info');
      browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;
    }