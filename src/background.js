const ezdLink = "ezd.nfz-lublin.pl"
const szoiLink = "www-2.nfz-lublin.pl"

 

chrome.tabs.onActivated.addListener((activeTabInfo) => {

    chrome.tabs.get(activeTabInfo.tabId, (tab) => {

        // console.log(activeTabInfo.tabId)

        const currentUrl = tab.url

        // console.log(activeTabInfo)

        checkCurrentUrl(currentUrl, activeTabInfo.tabId)
                 
    })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

        // console.log("Change info", changeInfo)

        // console.log("Tab", tab)

        if (tab.status === 'complete' && tab.active){

            // console.log("you are here: "+ tab.url); 
            
            checkCurrentUrl(tab.url, tabId)
        }
    })



const checkCurrentUrl = (url, currentTabId) => {

        // console.log('Url', url)
        // console.log('TabId', currentTabId )

        if(!url){

            console.log("Brak adresu strony")

            return
     
        }else if(url.includes(ezdLink)){
            
            console.log("Link do EZD")
            
            chrome.scripting.executeScript({
                target: {tabId: currentTabId, allFrames: false},
                files: ['./src/ezd/ezd.js'],
            })

            chrome.scripting.insertCSS({
                target: {tabId: currentTabId, allFrames: true},
                files: ['./src/ezd/styleEZD.css'],
            })

            return

        }else if(url.includes(szoiLink)){

            console.log("Link do SZOI")

            chrome.scripting.executeScript({
                target: {tabId: currentTabId, allFrames: false},
                files: ['./src/szoi/szoi.js'],
            })

            chrome.scripting.insertCSS({
                target: {tabId: currentTabId, allFrames: true},
                files: ['./src/szoi/styleSZOI.css'],
            })

            return

        }else {

            // console.log("Błędny adres strony")

            return

        }
}