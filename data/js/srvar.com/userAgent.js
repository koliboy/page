 function getDeviceType() {
  const userAgent = navigator.userAgent;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    return 'Mobile';
  } else {
    return 'Desktop';
  }
}

// Usage
//const deviceType = getDeviceType()