if (document.readyState === 'complete') {

    const container = document.querySelector(".pnlDodajNotatke")
    // const notebtndiv = Object.assign(document.createElement('div'), { className: 'notebtndiv' })

    console.log(container)

    if(!container){

        console.log('Brak obiektu pnlDodajNotatke')
    
    }else{

        console.log('Znaleziono obiekt pnlDodajNotatke')

    }
    
    //     if(container) {
    
    //         console.log(container)
    
    //         const notebtndiv = document.createElement('div')
            
    //         container[0].append(notebtndiv)
            
    //         notebtndiv.innerHTML = "<button class = 'notebtn'>Opcja</button><button class = 'notebtn'>Opcja</button><button class = 'notebtn'>Opcja</button><button class = 'notebtn'>Opcja</button>";
    
    // }

}
  

