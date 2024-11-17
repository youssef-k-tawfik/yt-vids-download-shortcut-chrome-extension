chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "downloadYouTubeVideo",
    title: "Download YouTube Video",
    contexts: ["link"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "downloadYouTubeVideo") {
    const url = new URL(info.linkUrl);
    if (url.hostname === "www.youtube.com" || url.hostname === "youtube.com") {
      const newUrl = url.href.replace("youtube.com", "youtubepp.com");
      chrome.tabs.create({ url: newUrl });
    }
  }
});
