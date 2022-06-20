const ezdLink = "ezd.nfz-lublin.pl"
const szoiLink = "www-2.nfz-lublin.pl"


chrome.tabs.onActivated.addListener((activeTabInfo) => {

    chrome.tabs.get(activeTabInfo.tabId, (tab) => {

        const currentUrl = tab.url

        currentUrlFunction(currentUrl)
                 
    })
})




const currentUrlFunction = (url) => {

    if(!url){

        console.log('link n')

        return

    }else{

        console.log(url)

    }

}
//     if(!currentUrl()){

//         console.log("Błędny adres strony")
        
//         return

//     }else if(currentUrl.contains(ezdLink)){

//         console.log("Aktualna strona to EZD")

//     }else if(currentUrl.contains(szoiLink)){

//         console.log("Aktualna strona to SZOI")

//     }


// })


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

//     // console.log(tabs.url)

//     const activeTab = tabs[0];

//     console.log(activeTab.url)

//     // return currentLink = activeTab.url 


//     // const activeTabId = activeTab.id;

//     // console.log(activeTabId)

//  });





// chrome.tabs.onActivated.addListener((activeInfo) => {
//     chrome.tabs.get(activeInfo.tabId, (tab) => {
        
//         currentLink = tab.url;
//         console.log("you are here: "+ currentLink);

//     });
// });

//  chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    
//     if (tab.active && change.url) {
//         console.log("you are here: "+change.url);           
//     }
// });

// console.log(currentLink)


// if(currentLink){

//     console.log("Empty url")

// }else{

//     console.log(currentLink)

//  }

// const currentPage = () => {

//     console.log(aa)

//     if(currentLink){

//         console.log(currentLink.host.toString())
    
//         currentLink = currentLink.host.toString()
    
//         if(currentLink.includes(ezdLink)){
    
//             console.log("Link do ezd")

//             return
    
    
//         }else if(currentLink.includes(szoiLink)){
    
//             console.log("Link do szoi")

//             return
    
//         }else{
    
//             console.log("Błędny adres strony")

//             return
    
//         }
    
//     }else{
    
//         console.log("Brak adresu strony")

//         return
    
//     }     

// }

// window.onload = currentPage()

