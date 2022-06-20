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

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {

        if (change.status == 'complete'){

            // console.log("you are here: "+ tab.url); 
            
            checkCurrentUrl(tab.url, tabId)
        }
    });



let checkCurrentUrl = (url, currentTabId) => {

        // console.log('Url', url)
        // console.log('TabId', currentTabId )

        if(!url){

            console.log("Błędny adres strony")
     

        }else if(url.includes(ezdLink)){

            chrome.scripting.executeScript({
                target: {tabId: currentTabId, allFrames: true},
                files: ['./src/ezd/ezd.js']
            })

            chrome.scripting.insertCSS({
                target: {tabId: currentTabId, allFrames: true},
                files: ['./src/ezd/styleEZD.css']
            })

            // console.log("Link do EZD")

        }else if(url.includes(szoiLink)){

            chrome.scripting.executeScript({
                target: {tabId: currentTabId, allFrames: true},
                files: ['./src/szoi/szoi.js']
            })

            chrome.scripting.insertCSS({
                target: {tabId: currentTabId, allFrames: true},
                files: ['./src/szoi/styleSZOI.css']
            })

            // console.log("Link do SZOI")
   
        }else {

            console.log("Błędny adres strony")

        }
}