import React, { useEffect } from 'react';

const RedirectToApp = () => {
  useEffect(() => {
    // Function to detect iOS devices
    const isIOS = () => {
      return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    // Define the app link and App Store URL
    const appLink = 'examcram://?id=Andreas'; // Replace with your app's deep link or URL scheme
    const appStoreLink = 'https://apps.apple.com/us/app/examcram-ai-quizzes/id1595934993?platform=iphone'; // Replace with your app's App Store URL

    if (isIOS()) {
      // Timeout to check if the app is not opened
      const timer = setTimeout(() => {
        window.location.href = appStoreLink; // Redirect to the App Store if the app is not opened
      }, 1500); // Set delay (1.5 seconds)

      // Try to open the app
      window.location.href = appLink;

      // Cleanup the timer on unmount
      return () => clearTimeout(timer);
    }
  }, []);

  return <div></div>;
};

export default RedirectToApp;