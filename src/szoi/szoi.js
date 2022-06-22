const cokolwiek = document.getElementsByTagName("span")
const searchText = "Dodawanie komunikatu"
let found = ''


for (let i = 1; i< cokolwiek.length; i++){
    if (aTags[i].textContent == searchText) {
        found = cokolwiek[i];
        break;
      }

}