function FindProxyForURL(url, host) {
  if (host.toLowerCase() === "login.ke.com") {
    return "PROXY 127.0.0.1:21080";
  }
  return "DIRECT";
}
