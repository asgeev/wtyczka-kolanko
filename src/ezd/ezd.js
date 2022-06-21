if (document.readyState === 'complete') {

    const container = document.querySelector(".pnlDodajNotatke")
    // const notebtndiv = Object.assign(document.createElement('div'), { className: 'notebtndiv' })

    console.log(container)

    if(!container){

        console.log('Brak obiektu pnlDodajNotatke')
    
    }else{

        console.log('Znaleziono obiekt pnlDodajNotatke')

    }
    
        if(container) {
    
            console.log(container)
            
            // noteButtonsDiv.innerHTML = "<button class = 'notebtn'>Opcja</button><button class = 'notebtn'>Opcja</button><button class = 'notebtn'>Opcja</button><button class = 'notebtn'>Opcja</button>";

            const noteButtonsDiv = document.createElement('div')

            container.append(noteButtonsDiv)

            noteButtonsDiv.classList.add('noteButtonsDiv')

            const noteButtons = [
                {name: 'trn1', content: 'Tresc notatki 1'},
            
                {name: 'trn2', content: 'Tresc notatki 2'}
            ]

            noteButtons.map(({name}) => {
                console.log(name)

            })

            // Petla dodajaca przyciski pod wzgledem ilosci elementow w tablicy noteButtons

            function addButtons () {
                
                for (const btn in noteButtons) {
                    
                    document.getElementsByClassName(noteButtonsDiv).innerHTML += "<button class = 'noteButton'>" +  + "</button>"
                }
            }
            addButtons()
    }

}
  

