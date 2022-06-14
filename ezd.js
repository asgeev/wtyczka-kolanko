

const container = document.getElementsByClassName("pnlDodajNotatke")
const notebtndiv = Object.assign(document.createElement('div'), { className: 'notebtndiv' })



container[0].append(notebtndiv)
notebtndiv.innerHTML = "<button class = 'notebtn'>Opcja</button><button class = 'notebtn'>Opcja</button><button class = 'notebtn'>Opcja</button><button class = 'notebtn'>Opcja</button>";