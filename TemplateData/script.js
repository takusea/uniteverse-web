const canvas = document.querySelector("#unity-canvas");

const buildUrl = "Build";
const loaderUrl = buildUrl + "/uniteverse-web.loader.js";
const config = {
  dataUrl: buildUrl + "/uniteverse-web.data",
  frameworkUrl: buildUrl + "/uniteverse-web.framework.js",
  codeUrl: buildUrl + "/uniteverse-web.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "takusea",
  productName: "CANVAS",
  productVersion: "1.0",
};

const script = document.createElement("script");
script.src = loaderUrl;
script.addEventListener("load", () => {
  createUnityInstance(canvas, config);
});

document.body.appendChild(script);
