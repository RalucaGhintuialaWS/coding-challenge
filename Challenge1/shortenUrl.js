let url =
  "http://chart.apis.google.com/chart?chs=500x500&chma=0,0,100,100&cht=p&chco=FF0000%2CFFFF00%7CFF8000%2C00FF00%7C00FF00%2C0000FF&chd=t%3A122%2C42%2C17%2C10%2C8%2C7%2C7%2C7%2C7%2C6%2C6%2C6%2C6%2C5%2C5&chl=122%7C42%7C17%7C10%7C8%7C7%7C7%7C7%7C7%7C6%7C6%7C6%7C6%7C5%7C5&chdl=android%7Cjava%7Cstack-trace%7Cbroadcastreceiver%7Candroid-ndk%7Cuser-agent%7Candroid-webview%7Cwebview%7Cbackground%7Cmultithreading%7Candroid-source%7Csms%7Cadb%7Csollections%7Cactivity|Chart";

const shortenUrl = (url) => {
//   let toShorten = url.split("/")[url.split("/").length - 1];
  let allAlphanumeric =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let shorten = "";
  for (let i = 0; i < 6; i++)
    shorten += allAlphanumeric.charAt(
      Math.floor(Math.random() * allAlphanumeric.length)
    );

    // let newUrl= (url.split("/")[0]).slice(0,-1).join("").concat(shorten)
    let newUrl= (url.split("//")[0]).concat("//").concat(shorten);
     return newUrl;
};

const result = document.querySelector("#shorten-url");
result.textContent = shortenUrl(url);



