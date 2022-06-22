if (document.readyState === 'complete') {

    const container = document.querySelector(".pnlDodajNotatke")

    console.log(container)

    if(!container){

        console.log('Brak obiektu pnlDodajNotatke')
    
    }else{
        
        if (!document.querySelector('.noteButtonsDiv')){

            console.log('Znaleziono obiekt pnlDodajNotatke')

            const noteButtonsDiv = document.createElement('div')

            container.append(noteButtonsDiv)

            noteButtonsDiv.classList.add('noteButtonsDiv')

            const noteButtons = [
            
                {name: 'trn1', content: 'Tresc notatki 1'},
            
                {name: 'trn2', content: 'Tresc notatki 2'},

                {name: 'trn3', content: 'Tresc notatki 2'}
            
            ]

            noteButtons.map(({name}) => {

                const noteButtonsAdd = document.createElement('button')
            
                noteButtonsAdd.textContent = `${name}`

                noteButtonsDiv.append(noteButtonsAdd)

            })

        }else{

                console.log('Obiekt noteButtonsDiv istnieje')
        }

    }

    }

