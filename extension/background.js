let blockedSites = [];

async function fetchBlocklist() {
  const res = await fetch("https://yourdomain.com/api/blocklist");
  const data = await res.json();
  blockedSites = data.sites;
}

setInterval(fetchBlocklist, 5000);

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!tab.url) return;

  const blocked = blockedSites.some(site =>
    tab.url.includes(site)
  );

  if (blocked) {
    chrome.tabs.update(tabId, {
      url: "https://yourdomain.com/blocked"
    });
  }
});