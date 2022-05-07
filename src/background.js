// install | uninstall events...
chrome.runtime.onInstalled.addListener(details => {
    chrome.tabs.create({
        url: "views/onboarding.html"
    })

    // this executes when the extension has been uninstalled...
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.runtime.setUninstallURL('https://github.com/celyes');
    }
})