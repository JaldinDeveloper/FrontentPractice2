
const form = document.getElementById("reservationForm");
const formElements = form.elements;
const clearButton = document.getElementById("clear");

const keyStorage = "aguanteBoca";
const lengthId = 10;
let dataArray = [];


clearButton.onclick = (event) => { 
    
    localStorage.setItem(keyStorage, [JSON.stringify([])]);
};

function metodo(){
    let storaged = JSON.parse(localStorage.getItem(keyStorage));
    storaged = storaged.findIndex((obj) => obj.id === "ssss");
    storaged.splice(objWithIdIndex, 1);
    localStorage.setItem(keyStorage, JSON.stringify(storaged));
}


form.onsubmit = (event) =>{
    let storaged = JSON.parse(localStorage.getItem(keyStorage));
    dataArray =  storaged == null ? []:storaged;
    data = getFormData();
    const id = generateid();

    dataArray.push({id: id, ...data});   
    localStorage.setItem(keyStorage, JSON.stringify(dataArray)
    );
}
function generateid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < lengthId; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const getFormData = () => {
    // let data = { [keyStorage]: {} };
    let data = {};
    for (const element of formElements) {
      if (element.name.length > 0) {
        data[element.name] = element.value;
      }
    }
    return data;
};

