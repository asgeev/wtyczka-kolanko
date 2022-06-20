
document.addEventListener("load", () => {

    const container = document.querySelector(".pnlDodajNotatke")
// const notebtndiv = Object.assign(document.createElement('div'), { className: 'notebtndiv' })

    if(container) {

        console.log(container)

        const notebtndiv = document.createElement('div')
        
        container[0].append(notebtndiv)
        
        notebtndiv.innerHTML = "<button class = 'notebtn'>Opcja</button><button class = 'notebtn'>Opcja</button><button class = 'notebtn'>Opcja</button><button class = 'notebtn'>Opcja</button>";

}

})
