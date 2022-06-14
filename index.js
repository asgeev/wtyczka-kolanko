const ezdLink = "ezd.nfz-lublin.pl"
const szoiLink = "www-2.nfz-lublin.pl"
let currentLink = window.location





const currentPage = () => {

    if(currentLink){

        console.log(currentLink.host.toString())
    
        currentLink = currentLink.host.toString()
    
        if(currentLink.includes(ezdLink)){
    
            console.log("Link do ezd")

            return
    
    
        }else if(currentLink.includes(szoiLink)){
    
            console.log("Link do szoi")

            return
    
        }else{
    
            console.log("Błędny adres strony")

            return
    
        }
    
    }else{
    
        console.log("Brak adresu strony")

        return
    
    }     

}

window.onload = currentPage()

