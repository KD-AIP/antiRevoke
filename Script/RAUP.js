var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var kaotd = ["ads",
		"ppq",
		"mesu",
		"ocsp",
		"crl",
		"world-gen",
		"click",
		"cnnd",
		"admicro",
		"deqik",
		"amcdn",
		"vungle",
		"unity3d",
		"applovin",
		"applvn",
		"mopub",
		"gop1",
		"inmobi",
		"rayjump",
		"fls-na",
		"app-measurement",
		"umeng",
		"loggly",
		"ppsflyer",
		"flurry",
		"aj1559"];

function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  for(var i = 0; i < kaotd.length; i++){
    var copyright = kaotd[i];
    if(shExpMatch(host, "*" + copyright + "*")){
      return PROXY;
    }
  }

  return DIRECT;
}
