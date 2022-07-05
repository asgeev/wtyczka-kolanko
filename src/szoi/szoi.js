// console.log(window.frameElement)
// var theFrame = document.getElementsByTagName("frame")[0];

// var theFrameDocument = theFrame.contentDocument || theFrame.contentWindow.document;



    if(window.frames['info'].window.frames['tekst']){

        const frame = window.frames['info'].window.frames['tekst'].document

        const modal = frame.querySelector('.popupContent .v-window-wrap')

        if(modal){

            console.log(modal)

            const span = modal.querySelector('.c-fglayout-slot')

            if(!span.querySelector('.buttonsDiv')){

                const buttonsDiv = document.createElement('div')

                buttonsDiv.classList.add('buttonsDiv')

                span.append(buttonsDiv)
            }

            console.log(span)

        }
        
        


        
        // const onClick = () => {
        
        //     const bac = frame.querySelector('.popupContent .v-captiontext')
              
        //     if(bac){
                    
        //         bac.classList.add('red')
    
        //     }else{

        //         console.log('nie istnieje')
        //     }
    
        // }
    
        // const getButton = (buttons) => {

        //     let button 
            
        //     buttons.forEach(element => {

        //         if(element.innerHTML == 'Dodawanie komunikatu'){

        //             button = element.parentNode.parentNode
            
        //         }
        //     })   
            
        //     return button 
        // }   





        // const addButton = getButton(buttons)

        // console.log(addButton)

        // if (addButton){ 

        //     addButton.onClick = onClick()
        // }

    }
    

  


// console.log(document.querySelector('frame'))


 


// if (document.readyState === 'complete') {

//     const frame = document.querySelector("frame")

//     console.log(frame)

//     console.log(document.querySelectorAll('.v-button'))

// }

// console.log(frame)



// if(frame){

//     const vButton = document.querySelector(".v-button")

//     console.log(vButton)

// }